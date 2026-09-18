const express = require("express");
const cors = require("cors");
const GtfsRealtimeBindings =
    require("gtfs-realtime-bindings");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// Serve the frontend files
app.use(express.static(__dirname));


// =====================================================
// ONEMAP TOKEN
// =====================================================

let oneMapToken = null;
let tokenExpiry = 0;

async function getOneMapToken() {

    // Reuse existing token if it is still valid
    if (oneMapToken && Date.now() < tokenExpiry) {
        return oneMapToken;
    }

    const response = await fetch(
        "https://www.onemap.gov.sg/api/auth/post/getToken",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: process.env.ONEMAP_EMAIL,
                password: process.env.ONEMAP_PASSWORD
            })
        }
    );

    const data = await response.json();

    if (!data.access_token) {

        console.error(
            "OneMap authentication failed:",
            data
        );

        throw new Error(
            "Unable to get OneMap token"
        );
    }

    oneMapToken =
        data.access_token;

    // Token lasts around 3 days.
    // Refresh slightly before expiry.
    tokenExpiry =
        Date.now() +
        (70 * 60 * 60 * 1000);

    console.log(
        "OneMap token obtained successfully."
    );

    return oneMapToken;
}


// =====================================================
// BASIC TEST ROUTE
// =====================================================

app.get("/", (req, res) => {

    res.sendFile(
        __dirname + "/index.html"
    );

});


// =====================================================
// ONEMAP SEARCH
// =====================================================

app.get("/api/search", async (req, res) => {

    try {

        const searchValue =
            req.query.search;

        if (!searchValue) {

            return res.status(400).json({
                error:
                    "Search value is required"
            });

        }

        const token =
            await getOneMapToken();

        const url =
            `https://www.onemap.gov.sg/api/common/elastic/search` +
            `?searchVal=${encodeURIComponent(searchValue)}` +
            `&returnGeom=Y` +
            `&getAddrDetails=Y` +
            `&pageNum=1`;

        const response =
            await fetch(
                url,
                {
                    headers: {
                        "Authorization":
                            token
                    }
                }
            );

        const data =
            await response.json();

        res.json(data);

    } catch (error) {

        console.error(
            "OneMap search error:",
            error
        );

        res.status(500).json({
            error:
                "Unable to search OneMap"
        });

    }

});


// =====================================================
// ONEMAP PUBLIC TRANSPORT ROUTING
// =====================================================

app.get("/api/route", async (req, res) => {

    try {

        const {
            startLat,
            startLon,
            endLat,
            endLon,
            date: requestedDate,
            time: requestedTime
        } = req.query;


        if (
            !startLat ||
            !startLon ||
            !endLat ||
            !endLon
        ) {

            return res.status(400).json({
                error:
                    "Start and end coordinates are required"
            });

        }


        console.log(
            "ROUTE REQUEST:",
            {
                startLat,
                startLon,
                endLat,
                endLon
            }
        );


        const token =
            await getOneMapToken();


        const now =
            new Date();


        const date =
            requestedDate ||
            (
                String(
                    now.getMonth() + 1
                ).padStart(2, "0") +
                "-" +
                String(
                    now.getDate()
                ).padStart(2, "0") +
                "-" +
                now.getFullYear()
            );


        const time =
            requestedTime ||
            (
                String(
                    now.getHours()
                ).padStart(2, "0") +
                ":" +
                String(
                    now.getMinutes()
                ).padStart(2, "0") +
                ":" +
                String(
                    now.getSeconds()
                ).padStart(2, "0")
            );


        const url =
            `https://www.onemap.gov.sg/api/public/routingsvc/route` +
            `?start=${startLat},${startLon}` +
            `&end=${endLat},${endLon}` +
            `&routeType=pt` +
            `&mode=TRANSIT` +
            `&date=${date}` +
            `&time=${time}` +
            `&maxWalkDistance=1000` +
            `&numItineraries=3`;


        console.log(
            "Calling OneMap routing..."
        );


        const response =
            await fetch(
                url,
                {
                    headers: {
                        "Authorization":
                            token
                    }
                }
            );


        const data =
            await response.json();


        console.log(
            "OneMap routing response received."
        );


        res.json(data);

    } catch (error) {

        console.error(
            "OneMap routing error:",
            error
        );

        res.status(500).json({
            error:
                "Unable to get public transport route"
        });

    }

});


// =====================================================
// API TEST
// =====================================================

app.get("/api/test", (req, res) => {

    res.json({
        message:
            "Route endpoint is working"
    });

});


// =====================================================
// FRONTEND CONFIG
// =====================================================

app.get("/api/config/maps", (req, res) => {

    res.json({
        googleMapsApiKey:
            process.env.GOOGLE_MAPS_API_KEY || ""
    });
});


// =====================================================
// LTA GTFS REALTIME TRAIN SERVICE ALERTS
// =====================================================

function getTranslatedText(
    translatedString
) {

    if (
        !translatedString ||
        !translatedString.translation ||
        translatedString.translation.length === 0
    ) {
        return "";
    }

    const english =
        translatedString.translation.find(
            item =>
                item.language === "en"
        );

    const translation =
        english ||
        translatedString.translation[0];

    return String(
        translation.text || ""
    ).trim();
}

function getGtfsEnumName(
    enumObject,
    value
) {

    const match =
        Object.entries(enumObject)
            .find(
                ([, enumValue]) =>
                    enumValue === value
            );

    return match ? match[0] : String(value);
}

function formatTrainAlert(
    entity
) {

    const alert =
        entity.alert;

    const causeEnum =
        GtfsRealtimeBindings
            .transit_realtime
            .Alert
            .Cause;

    const effectEnum =
        GtfsRealtimeBindings
            .transit_realtime
            .Alert
            .Effect;

    return {
        id:
            entity.id,

        cause:
            alert.cause !== undefined
                ? getGtfsEnumName(
                    causeEnum,
                    alert.cause
                )
                : "",

        effect:
            alert.effect !== undefined
                ? getGtfsEnumName(
                    effectEnum,
                    alert.effect
                )
                : "",

        header:
            getTranslatedText(
                alert.headerText
            ),

        description:
            getTranslatedText(
                alert.descriptionText
            ),

        url:
            getTranslatedText(
                alert.url
            ),

        informedEntities:
            (alert.informedEntity || [])
                .map(entitySelector => ({
                    agencyId:
                        entitySelector.agencyId || "",

                    routeId:
                        entitySelector.routeId || "",

                    routeType:
                        entitySelector.routeType,

                    stopId:
                        entitySelector.stopId || ""
                })),

        activePeriods:
            (alert.activePeriod || [])
                .map(period => ({
                    start:
                        period.start
                            ? Number(period.start)
                            : null,

                    end:
                        period.end
                            ? Number(period.end)
                            : null
                }))
    };
}

function getMockTrainFaultAlerts() {

    return {
        source:
            "Mock LTA train alert",

        timestamp:
            Math.floor(
                Date.now() / 1000
            ),

        count:
            1,

        alerts: [
            {
                id:
                    "mock-nel-sengkang-fault",

                cause:
                    "TECHNICAL_PROBLEM",

                effect:
                    "SIGNIFICANT_DELAYS",

                header:
                    "Example train fault near Sengkang",

                description:
                    "Mock alert: North East Line services between Sengkang and Serangoon are delayed due to a train fault. Use suggested alternative routes before leaving.",

                url:
                    "https://www.lta.gov.sg",

                informedEntities: [
                    {
                        agencyId:
                            "SBST",

                        routeId:
                            "NE",

                        routeType:
                            1,

                        stopId:
                            "NE16"
                    }
                ],

                activePeriods: [
                    {
                        start:
                            Math.floor(
                                Date.now() / 1000
                            ),

                        end:
                            Math.floor(
                                Date.now() / 1000
                            ) + 3600
                    }
                ]
            }
        ]
    };
}

app.get("/api/lta/train-alerts", async (req, res) => {

    try {

        if (
            req.query.mock === "fault"
        ) {
            return res.json(
                getMockTrainFaultAlerts()
            );
        }

        const accountKey =
            process.env.LTA_ACCOUNT_KEY;

        if (!accountKey) {

            return res.status(500).json({
                error:
                    "LTA account key is not configured"
            });
        }

        const metadataResponse =
            await fetch(
                "https://datamall2.mytransport.sg/ltaodataservice/GTFSRealTimeTrainServiceAlerts",
                {
                    headers: {
                        AccountKey:
                            accountKey,

                        Accept:
                            "application/json"
                    }
                }
            );

        if (!metadataResponse.ok) {

            const text =
                await metadataResponse.text();

            console.error(
                "LTA train alerts error:",
                metadataResponse.status,
                text
            );

            return res.status(metadataResponse.status).json({
                error:
                    "Unable to fetch LTA train alerts"
            });
        }

        const metadata =
            await metadataResponse.json();

        const feedLink =
            metadata &&
            metadata.value &&
            metadata.value[0] &&
            metadata.value[0].link;

        if (!feedLink) {

            return res.status(502).json({
                error:
                    "LTA train alerts feed link is missing"
            });
        }

        const response =
            await fetch(
                feedLink
            );

        if (!response.ok) {

            return res.status(response.status).json({
                error:
                    "Unable to download LTA train alerts feed"
            });
        }

        const arrayBuffer =
            await response.arrayBuffer();

        const feed =
            GtfsRealtimeBindings
                .transit_realtime
                .FeedMessage
                .decode(
                    new Uint8Array(
                        arrayBuffer
                    )
                );

        const alerts =
            (feed.entity || [])
                .filter(
                    entity =>
                        entity.alert
                )
                .map(
                    formatTrainAlert
                );

        res.json({
            source:
                "LTA DataMall GTFS Realtime Train Service Alerts",

            timestamp:
                metadata.value[0].timestamp
                    ? Math.floor(
                        new Date(
                            metadata.value[0].timestamp
                        ).getTime() / 1000
                    )
                    : feed.header &&
                      feed.header.timestamp
                        ? Number(
                            feed.header.timestamp
                        )
                        : Math.floor(
                            Date.now() / 1000
                        ),

            count:
                alerts.length,

            alerts:
                alerts
        });

    } catch (error) {

        console.error(
            "LTA train alerts parse error:",
            error
        );

        res.status(500).json({
            error:
                "Unable to process LTA train alerts"
        });
    }
});


// =====================================================
// REAL-TIME JOURNEY SYSTEM
// =====================================================

const http =
    require("http");

const {
    Server
} =
    require("socket.io");


const server =
    http.createServer(app);


const io =
    new Server(
        server,
        {
            cors: {
                origin: "*"
            }
        }
    );


// =====================================================
// JOURNEY STORAGE
// =====================================================

// Journey code -> Set of connected socket IDs
const journeys =
    new Map();


// =====================================================
// GENERATE JOURNEY CODE
// =====================================================

function generateJourneyCode() {

    const characters =
        "ABCDEFGHJKLMNPQRSTUVWXYZ23456789";

    let code = "";


    do {

        code = "";


        for (
            let i = 0;
            i < 6;
            i++
        ) {

            code +=
                characters[
                    Math.floor(
                        Math.random() *
                        characters.length
                    )
                ];

        }

    } while (
        journeys.has(code)
    );


    return code;
}


// =====================================================
// SOCKET CONNECTION
// =====================================================

io.on(
    "connection",
    socket => {

        console.log(
            "Device connected:",
            socket.id
        );


        // =================================================
        // CREATE JOURNEY
        // =================================================

        socket.on(
            "create-journey",
            callback => {

                const code =
                    generateJourneyCode();


                // Create journey
                journeys.set(
                    code,
                    new Set([
                        socket.id
                    ])
                );


                // Join Socket.IO room
                socket.join(code);


                // Store journey against this socket
                socket.data.journeyCode =
                    code;


                console.log(
                    `Journey created: ${code}`
                );


                // Send result back to browser
                if (
                    typeof callback ===
                    "function"
                ) {

                    callback({
                        success:
                            true,

                        code:
                            code
                    });

                }

            }
        );


        // =================================================
        // JOIN JOURNEY
        // =================================================

        socket.on(
            "join-journey",
            (
                rawCode,
                callback
            ) => {

                const journeyCode =
                    String(
                        rawCode || ""
                    )
                        .trim()
                        .toUpperCase();


                // -----------------------------------------
                // CHECK CODE
                // -----------------------------------------

                if (
                    !journeyCode ||
                    !journeys.has(
                        journeyCode
                    )
                ) {

                    if (
                        typeof callback ===
                        "function"
                    ) {

                        callback({
                            success:
                                false,

                            message:
                                "Journey code not found."
                        });

                    }

                    return;
                }


                const members =
                    journeys.get(
                        journeyCode
                    );


                // -----------------------------------------
                // ONLY ALLOW 2 PEOPLE
                // -----------------------------------------

                if (
                    members.size >= 2 &&
                    !members.has(
                        socket.id
                    )
                ) {

                    if (
                        typeof callback ===
                        "function"
                    ) {

                        callback({
                            success:
                                false,

                            message:
                                "This journey already has two people."
                        });

                    }

                    return;
                }


                // -----------------------------------------
                // JOIN JOURNEY
                // -----------------------------------------

                members.add(
                    socket.id
                );


                socket.join(
                    journeyCode
                );


                socket.data.journeyCode =
                    journeyCode;


                console.log(
                    `Device ${socket.id} joined journey ${journeyCode}`
                );


                // -----------------------------------------
                // TELL JOINING DEVICE
                // -----------------------------------------

                if (
                    typeof callback ===
                    "function"
                ) {

                    callback({
                        success:
                            true,

                        code:
                            journeyCode
                    });

                }


                // -----------------------------------------
                // TELL OTHER PERSON
                // -----------------------------------------

                socket.to(
                    journeyCode
                ).emit(
                    "friend-joined"
                );

            }
        );


        // =================================================
        // LOCATION UPDATE
        // =================================================

        socket.on(
            "location-update",
            data => {

                // Get the journey from the server.
                // We do NOT trust a journey code
                // sent by the browser.

                const journeyCode =
                    socket.data.journeyCode;


                // User is not connected to a journey
                if (!journeyCode) {

                    return;

                }


                // -----------------------------------------
                // VALIDATE LOCATION
                // -----------------------------------------

                if (
                    !data ||
                    !Number.isFinite(
                        Number(
                            data.latitude
                        )
                    ) ||
                    !Number.isFinite(
                        Number(
                            data.longitude
                        )
                    )
                ) {

                    return;

                }


                const latitude =
                    Number(
                        data.latitude
                    );


                const longitude =
                    Number(
                        data.longitude
                    );


                console.log(
                    "Location received:",
                    {
                        journeyCode:
                            journeyCode,

                        latitude:
                            latitude,

                        longitude:
                            longitude
                    }
                );


                // -----------------------------------------
                // SEND TO FRIEND
                // -----------------------------------------

                socket.to(
                    journeyCode
                ).emit(
                    "friend-location",
                    {
                        latitude:
                            latitude,

                        longitude:
                            longitude
                    }
                );

            }
        );


        // =================================================
        // DISCONNECT
        // =================================================

        socket.on(
            "disconnect",
            () => {

                console.log(
                    "Device disconnected:",
                    socket.id
                );


                const journeyCode =
                    socket.data.journeyCode;


                // User was not in a journey
                if (
                    !journeyCode ||
                    !journeys.has(
                        journeyCode
                    )
                ) {

                    return;

                }


                const members =
                    journeys.get(
                        journeyCode
                    );


                // Remove disconnected user
                members.delete(
                    socket.id
                );


                // -----------------------------------------
                // TELL FRIEND
                // -----------------------------------------

                socket.to(
                    journeyCode
                ).emit(
                    "friend-left"
                );


                // -----------------------------------------
                // DELETE EMPTY JOURNEY
                // -----------------------------------------

                if (
                    members.size === 0
                ) {

                    journeys.delete(
                        journeyCode
                    );


                    console.log(
                        `Journey ${journeyCode} deleted`
                    );

                }

            }
        );

    }
);


// =====================================================
// START SERVER
// =====================================================

const PORT =
    process.env.PORT || 3000;

server.listen(
    PORT,
    "0.0.0.0",
    () => {

        console.log(
            `Backend running on port ${PORT}`
        );

    }
);
