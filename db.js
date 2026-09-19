const mysql = require("mysql2/promise");

const databaseEnabled = Boolean(
    process.env.DB_NAME &&
    process.env.DB_USER &&
    process.env.DB_PASSWORD
);

const pool = databaseEnabled
    ? mysql.createPool({
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        socketPath: process.env.INSTANCE_CONNECTION_NAME
            ? `/cloudsql/${process.env.INSTANCE_CONNECTION_NAME}`
            : process.env.DB_SOCKET_PATH || undefined,
        host: process.env.INSTANCE_CONNECTION_NAME || process.env.DB_HOST,
        port: Number(process.env.DB_PORT || 3306),
        waitForConnections: true,
        connectionLimit: 5,
        queueLimit: 0
    })
    : null;

let schemaReady = null;

async function ensureSchema() {
    if (!pool) {
        return false;
    }

    if (!schemaReady) {
        schemaReady = pool.execute(`
            CREATE TABLE IF NOT EXISTS commuter_data (
                phone VARCHAR(32) PRIMARY KEY,
                name VARCHAR(120) NOT NULL,
                elderly_mode BOOLEAN NOT NULL DEFAULT FALSE,
                routes JSON NOT NULL,
                decisions JSON NOT NULL,
                updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
                    ON UPDATE CURRENT_TIMESTAMP
            )
        `).then(() => pool.execute(`
            CREATE TABLE IF NOT EXISTS commuter_journeys (
                code CHAR(6) PRIMARY KEY,
                created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
                expires_at TIMESTAMP NULL
            )
        `)).then(() => true).catch(error => {
            schemaReady = null;
            throw error;
        });
    }

    return schemaReady;
}

async function checkDatabase() {
    if (!pool) {
        return {
            enabled: false,
            connected: false,
            error: "Database variables are not configured"
        };
    }

    try {
        await pool.execute("SELECT 1 AS ok");
        await ensureSchema();

        return {
            enabled: true,
            connected: true,
            error: ""
        };
    } catch (error) {
        return {
            enabled: true,
            connected: false,
            error: error.code || "DATABASE_CONNECTION_FAILED"
        };
    }
}

async function getCommuterData(phone) {
    if (!pool || !phone) {
        return null;
    }

    await ensureSchema();

    const [rows] = await pool.execute(
        `SELECT phone, name, elderly_mode, routes, decisions
         FROM commuter_data WHERE phone = ?`,
        [phone]
    );

    if (!rows[0]) {
        return null;
    }

    return {
        phone: rows[0].phone,
        name: rows[0].name,
        elderlyMode: Boolean(rows[0].elderly_mode),
        routes: parseJsonColumn(rows[0].routes, []),
        decisions: parseJsonColumn(rows[0].decisions, {})
    };
}

async function saveCommuterData(data) {
    if (!pool || !data || !data.phone) {
        return false;
    }

    await ensureSchema();

    await pool.execute(
        `INSERT INTO commuter_data
            (phone, name, elderly_mode, routes, decisions)
         VALUES (?, ?, ?, ?, ?)
         ON DUPLICATE KEY UPDATE
            name = VALUES(name),
            elderly_mode = VALUES(elderly_mode),
            routes = VALUES(routes),
            decisions = VALUES(decisions)`,
        [
            data.phone,
            data.name || "Commuter",
            Boolean(data.elderlyMode),
            JSON.stringify(Array.isArray(data.routes) ? data.routes : []),
            JSON.stringify(data.decisions && typeof data.decisions === "object" ? data.decisions : {})
        ]
    );

    return true;
}

async function createJourney(code) {
    if (!pool || !code) {
        return false;
    }

    await ensureSchema();
    await pool.execute(
        `INSERT INTO commuter_journeys (code, expires_at)
         VALUES (?, NULL)
         ON DUPLICATE KEY UPDATE expires_at = NULL`,
        [code]
    );

    return true;
}

async function journeyExists(code) {
    if (!pool || !code) {
        return false;
    }

    await ensureSchema();

    const [rows] = await pool.execute(
        `SELECT code FROM commuter_journeys
         WHERE code = ? AND (expires_at IS NULL OR expires_at > CURRENT_TIMESTAMP)`,
        [code]
    );

    return Boolean(rows[0]);
}

async function deleteJourney(code) {
    if (!pool || !code) {
        return false;
    }

    await ensureSchema();
    await pool.execute(
        "DELETE FROM commuter_journeys WHERE code = ?",
        [code]
    );

    return true;
}

function parseJsonColumn(value, fallback) {
    if (typeof value === "object" && value !== null) {
        return value;
    }

    try {
        return JSON.parse(value || "");
    } catch (error) {
        return fallback;
    }
}

function isDatabaseEnabled() {
    return Boolean(pool);
}

module.exports = {
    getCommuterData,
    saveCommuterData,
    createJourney,
    journeyExists,
    deleteJourney,
    checkDatabase,
    isDatabaseEnabled
};
