// ===============================
// SINGAPORE MRT NETWORK
// ===============================

const mrtNetwork = {

    // ===============================
    // NORTH EAST LINE
    // ===============================

    "HarbourFront": ["Outram Park", "Telok Blangah"],

    "Outram Park": [
        "HarbourFront",
        "Chinatown",
        "Tiong Bahru",
        "Tanjong Pagar"
    ],

    "Chinatown": [
        "Outram Park",
        "Clarke Quay",
        "Fort Canning",
        "Telok Ayer"
    ],

    "Clarke Quay": [
        "Chinatown",
        "Dhoby Ghaut"
    ],

    "Dhoby Ghaut": [
        "Clarke Quay",
        "Little India",
        "Bras Basah",
        "Somerset"
    ],

    "Little India": [
        "Dhoby Ghaut",
        "Farrer Park",
        "Rochor",
        "Newton"
    ],

    "Farrer Park": [
        "Little India",
        "Boon Keng"
    ],

    "Boon Keng": [
        "Farrer Park",
        "Potong Pasir"
    ],

    "Potong Pasir": [
        "Boon Keng",
        "Woodleigh"
    ],

    "Woodleigh": [
        "Potong Pasir",
        "Serangoon"
    ],

    "Serangoon": [
        "Woodleigh",
        "Kovan",
        "Lorong Chuan"
    ],

    "Kovan": [
        "Serangoon",
        "Hougang"
    ],

    "Hougang": [
        "Kovan",
        "Buangkok"
    ],

    "Buangkok": [
        "Hougang",
        "Sengkang"
    ],

    "Sengkang": [
        "Buangkok",
        "Punggol"
    ],

    "Punggol": [
        "Sengkang"
    ],


    // ===============================
    // NORTH SOUTH LINE
    // ===============================

    "Jurong East": [
        "Bukit Batok",
        "Clementi"
    ],

    "Bukit Batok": [
        "Jurong East",
        "Bukit Gombak"
    ],

    "Bukit Gombak": [
        "Bukit Batok",
        "Choa Chu Kang"
    ],

    "Choa Chu Kang": [
        "Bukit Gombak",
        "Yew Tee"
    ],

    "Yew Tee": [
        "Choa Chu Kang",
        "Kranji"
    ],

    "Kranji": [
        "Yew Tee",
        "Marsiling"
    ],

    "Marsiling": [
        "Kranji",
        "Woodlands"
    ],

    "Woodlands": [
        "Marsiling",
        "Admiralty"
    ],

    "Admiralty": [
        "Woodlands",
        "Sembawang"
    ],

    "Sembawang": [
        "Admiralty",
        "Canberra"
    ],

    "Canberra": [
        "Sembawang",
        "Yishun"
    ],

    "Yishun": [
        "Canberra",
        "Khatib"
    ],

    "Khatib": [
        "Yishun",
        "Yio Chu Kang"
    ],

    "Yio Chu Kang": [
        "Khatib",
        "Ang Mo Kio"
    ],

    "Ang Mo Kio": [
        "Yio Chu Kang",
        "Bishan"
    ],

    "Bishan": [
        "Ang Mo Kio",
        "Braddell",
        "Marymount",
        "Lorong Chuan"
    ],

    "Braddell": [
        "Bishan",
        "Toa Payoh"
    ],

    "Toa Payoh": [
        "Braddell",
        "Novena"
    ],

    "Novena": [
        "Toa Payoh",
        "Newton"
    ],

    "Newton": [
        "Novena",
        "Orchard",
        "Stevens"
    ],

    "Orchard": [
        "Newton",
        "Somerset"
    ],

    "Somerset": [
        "Orchard",
        "Dhoby Ghaut"
    ],

    "City Hall": [
        "Raffles Place",
        "Bugis"
    ],

    "Raffles Place": [
        "City Hall",
        "Marina Bay",
        "Tanjong Pagar"
    ],

    "Marina Bay": [
        "Raffles Place",
        "Marina South Pier",
        "Bayfront"
    ],

    "Marina South Pier": [
        "Marina Bay"
    ],


    // ===============================
    // EAST WEST LINE
    // ===============================

    "Pasir Ris": [
        "Tampines"
    ],

    "Tampines": [
        "Pasir Ris",
        "Simei",
        "Tampines West",
        "Tampines East"
    ],

    "Simei": [
        "Tampines",
        "Tanah Merah"
    ],

    "Tanah Merah": [
        "Simei",
        "Bedok",
        "Expo"
    ],

    "Bedok": [
        "Tanah Merah",
        "Kembangan"
    ],

    "Kembangan": [
        "Bedok",
        "Eunos"
    ],

    "Eunos": [
        "Kembangan",
        "Paya Lebar"
    ],

    "Paya Lebar": [
        "Eunos",
        "Aljunied",
        "Dakota",
        "MacPherson"
    ],

    "Aljunied": [
        "Paya Lebar",
        "Kallang"
    ],

    "Kallang": [
        "Aljunied",
        "Lavender"
    ],

    "Lavender": [
        "Kallang",
        "Bugis"
    ],

    "Bugis": [
        "Lavender",
        "City Hall",
        "Rochor",
        "Promenade"
    ],

    "Tanjong Pagar": [
        "Raffles Place",
        "Outram Park"
    ],

    "Tiong Bahru": [
        "Outram Park",
        "Redhill"
    ],

    "Redhill": [
        "Tiong Bahru",
        "Queenstown"
    ],

    "Queenstown": [
        "Redhill",
        "Commonwealth"
    ],

    "Commonwealth": [
        "Queenstown",
        "Buona Vista"
    ],

    "Buona Vista": [
        "Commonwealth",
        "Dover",
        "one-north",
        "Holland Village"
    ],

    "Dover": [
        "Buona Vista",
        "Clementi"
    ],

    "Clementi": [
        "Dover",
        "Jurong East"
    ],


    // ===============================
    // CIRCLE LINE
    // ===============================

    "Telok Blangah": [
        "HarbourFront",
        "Labrador Park"
    ],

    "Labrador Park": [
        "Telok Blangah",
        "Pasir Panjang"
    ],

    "Pasir Panjang": [
        "Labrador Park",
        "Haw Par Villa"
    ],

    "Haw Par Villa": [
        "Pasir Panjang",
        "Kent Ridge"
    ],

    "Kent Ridge": [
        "Haw Par Villa",
        "one-north"
    ],

    "one-north": [
        "Kent Ridge",
        "Buona Vista"
    ],

    "Holland Village": [
        "Buona Vista",
        "Farrer Road"
    ],

    "Farrer Road": [
        "Holland Village",
        "Botanic Gardens"
    ],

    "Botanic Gardens": [
        "Farrer Road",
        "Caldecott",
        "Stevens",
        "Tan Kah Kee"
    ],

    "Caldecott": [
        "Botanic Gardens",
        "Marymount"
    ],

    "Marymount": [
        "Caldecott",
        "Bishan"
    ],

    "Lorong Chuan": [
        "Bishan",
        "Serangoon"
    ],

    "Bartley": [
        "Serangoon",
        "Tai Seng"
    ],

    "Tai Seng": [
        "Bartley",
        "MacPherson"
    ],

    "MacPherson": [
        "Tai Seng",
        "Paya Lebar",
        "Mattar",
        "Ubi"
    ],

    "Dakota": [
        "Paya Lebar",
        "Mountbatten"
    ],

    "Mountbatten": [
        "Dakota",
        "Stadium"
    ],

    "Stadium": [
        "Mountbatten",
        "Nicoll Highway"
    ],

    "Nicoll Highway": [
        "Stadium",
        "Promenade"
    ],

    "Promenade": [
        "Nicoll Highway",
        "Bugis",
        "Bayfront"
    ],

    "Bayfront": [
        "Promenade",
        "Marina Bay",
        "Downtown"
    ],


    // ===============================
    // DOWNTOWN LINE
    // ===============================

    "Bukit Panjang": [
        "Cashew"
    ],

    "Cashew": [
        "Bukit Panjang",
        "Hillview"
    ],

    "Hillview": [
        "Cashew",
        "Beauty World"
    ],

    "Beauty World": [
        "Hillview",
        "King Albert Park"
    ],

    "King Albert Park": [
        "Beauty World",
        "Sixth Avenue"
    ],

    "Sixth Avenue": [
        "King Albert Park",
        "Tan Kah Kee"
    ],

    "Tan Kah Kee": [
        "Sixth Avenue",
        "Botanic Gardens"
    ],

    "Stevens": [
        "Botanic Gardens",
        "Newton"
    ],

    "Rochor": [
        "Little India",
        "Bugis",
        "Bencoolen"
    ],

    "Bencoolen": [
        "Rochor",
        "Fort Canning"
    ],

    "Fort Canning": [
        "Bencoolen",
        "Chinatown"
    ],

    "Telok Ayer": [
        "Chinatown",
        "Downtown"
    ],

    "Downtown": [
        "Telok Ayer",
        "Bayfront"
    ],

    "Bendemeer": [
        "Lavender",
        "Geylang Bahru"
    ],

    "Geylang Bahru": [
        "Bendemeer",
        "Mattar"
    ],

    "Mattar": [
        "Geylang Bahru",
        "MacPherson"
    ],

    "Ubi": [
        "MacPherson",
        "Kaki Bukit"
    ],

    "Kaki Bukit": [
        "Ubi",
        "Bedok North"
    ],

    "Bedok North": [
        "Kaki Bukit",
        "Bedok Reservoir"
    ],

    "Bedok Reservoir": [
        "Bedok North",
        "Tampines West"
    ],

    "Tampines West": [
        "Bedok Reservoir",
        "Tampines"
    ],

    "Tampines East": [
        "Tampines",
        "Upper Changi"
    ],

    "Upper Changi": [
        "Tampines East",
        "Expo"
    ],

    "Expo": [
        "Tanah Merah",
        "Upper Changi"
    ]
};


// ===============================
// MRT LINE INFORMATION
// ===============================

const mrtLines = {

    "North East Line": [
        "HarbourFront",
        "Outram Park",
        "Chinatown",
        "Clarke Quay",
        "Dhoby Ghaut",
        "Little India",
        "Farrer Park",
        "Boon Keng",
        "Potong Pasir",
        "Woodleigh",
        "Serangoon",
        "Kovan",
        "Hougang",
        "Buangkok",
        "Sengkang",
        "Punggol"
    ],

    "North South Line": [
        "Jurong East",
        "Bukit Batok",
        "Bukit Gombak",
        "Choa Chu Kang",
        "Yew Tee",
        "Kranji",
        "Marsiling",
        "Woodlands",
        "Admiralty",
        "Sembawang",
        "Canberra",
        "Yishun",
        "Khatib",
        "Yio Chu Kang",
        "Ang Mo Kio",
        "Bishan",
        "Braddell",
        "Toa Payoh",
        "Novena",
        "Newton",
        "Orchard",
        "Somerset",
        "Dhoby Ghaut",
        "City Hall",
        "Raffles Place",
        "Marina Bay",
        "Marina South Pier"
    ],

    "East West Line": [
        "Pasir Ris",
        "Tampines",
        "Simei",
        "Tanah Merah",
        "Bedok",
        "Kembangan",
        "Eunos",
        "Paya Lebar",
        "Aljunied",
        "Kallang",
        "Lavender",
        "Bugis",
        "City Hall",
        "Raffles Place",
        "Tanjong Pagar",
        "Outram Park",
        "Tiong Bahru",
        "Redhill",
        "Queenstown",
        "Commonwealth",
        "Buona Vista",
        "Dover",
        "Clementi",
        "Jurong East"
    ],

    "Circle Line": [
        "HarbourFront",
        "Telok Blangah",
        "Labrador Park",
        "Pasir Panjang",
        "Haw Par Villa",
        "Kent Ridge",
        "one-north",
        "Buona Vista",
        "Holland Village",
        "Farrer Road",
        "Botanic Gardens",
        "Caldecott",
        "Marymount",
        "Bishan",
        "Lorong Chuan",
        "Serangoon",
        "Bartley",
        "Tai Seng",
        "MacPherson",
        "Paya Lebar",
        "Dakota",
        "Mountbatten",
        "Stadium",
        "Nicoll Highway",
        "Promenade",
        "Bayfront",
        "Marina Bay"
    ],

    "Downtown Line": [
        "Bukit Panjang",
        "Cashew",
        "Hillview",
        "Beauty World",
        "King Albert Park",
        "Sixth Avenue",
        "Tan Kah Kee",
        "Botanic Gardens",
        "Stevens",
        "Newton",
        "Little India",
        "Rochor",
        "Bencoolen",
        "Fort Canning",
        "Chinatown",
        "Telok Ayer",
        "Downtown",
        "Bayfront",
        "Promenade",
        "Bendemeer",
        "Geylang Bahru",
        "Mattar",
        "MacPherson",
        "Ubi",
        "Kaki Bukit",
        "Bedok North",
        "Bedok Reservoir",
        "Tampines West",
        "Tampines",
        "Tampines East",
        "Upper Changi",
        "Expo"
    ]
};


// ===============================
// STATION NAME NORMALISATION
// ===============================

function normaliseStation(name) {

    if (!name) {
        return "";
    }

    return name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, " ")
        .split(" ")
        .map(word =>
            word.charAt(0).toUpperCase() + word.slice(1)
        )
        .join(" ");
}


// ===============================
// FIND ROUTE USING BFS
// ===============================

function findRoute(start, end) {

    start = normaliseStation(start);
    end = normaliseStation(end);

    if (!mrtNetwork[start] || !mrtNetwork[end]) {
        return null;
    }

    if (start === end) {
        return [start];
    }

    const queue = [[start]];
    const visited = new Set([start]);

    while (queue.length > 0) {

        const path = queue.shift();
        const current = path[path.length - 1];

        for (const neighbour of mrtNetwork[current] || []) {

            if (visited.has(neighbour)) {
                continue;
            }

            const newPath = [...path, neighbour];

            if (neighbour === end) {
                return newPath;
            }

            visited.add(neighbour);
            queue.push(newPath);
        }
    }

    return null;
}


// ===============================
// GET MRT LINE BETWEEN TWO STATIONS
// ===============================

function getLineBetween(start, end) {

    start = normaliseStation(start);
    end = normaliseStation(end);

    if (start === "Clarke Quay" && end === "Dhoby Ghaut") {
        return "North East Line";
    }

    if (start === "Dhoby Ghaut" && end === "Somerset") {
        return "North South Line";
    }

    if (start === "Dhoby Ghaut" && end === "Little India") {
        return "North East Line";
    }

    if (start === "Somerset" && end === "Dhoby Ghaut") {
        return "North South Line";
    }

    if (start === "Dhoby Ghaut" && end === "Clarke Quay") {
        return "North East Line";
    }

    for (const [lineName, stations] of Object.entries(mrtLines)) {

        const startIndex = stations.indexOf(start);
        const endIndex = stations.indexOf(end);

        if (
            startIndex !== -1 &&
            endIndex !== -1 &&
            Math.abs(startIndex - endIndex) === 1
        ) {
            return lineName;
        }
    }

    return "MRT";
}


// ===============================
// GET CSS CLASS FOR MRT LINE
// ===============================

function getLineClass(line) {

    if (!line) {
        return "";
    }

    const value =
        String(line)
            .toUpperCase()
            .trim();

    if (value === "NE" || value.includes("NORTH EAST")) {
        return "line-ne";
    }

    if (value === "EW" || value.includes("EAST WEST")) {
        return "line-ew";
    }

    if (value === "NS" || value.includes("NORTH SOUTH")) {
        return "line-ns";
    }

    if (value === "DT" || value.includes("DOWNTOWN")) {
        return "line-dt";
    }

    if (value === "CC" || value.includes("CIRCLE")) {
        return "line-cc";
    }

    if (value === "TE" || value.includes("THOMSON")) {
        return "line-te";
    }

    if (value === "CR" || value.includes("CROSS ISLAND")) {
        return "line-cr";
    }

    if (
        value === "SW" ||
        value === "SE" ||
        value === "BP" ||
        value === "PE" ||
        value === "SK" ||
        value.includes("LRT")
    ) {
        return "line-lrt";
    }

    if (/^\d+$/.test(value)) {
        return "line-bus";
    }

    return "";
}


// ===============================
// NORMALISE TRANSPORT LINE
// ===============================

function normaliseTransportLine(line) {

    const value =
        String(line || "")
            .trim()
            .toUpperCase();

    if (value === "NE" || value.includes("NORTH EAST")) {
        return "NE";
    }

    if (value === "NS" || value.includes("NORTH SOUTH")) {
        return "NS";
    }

    if (value === "EW" || value.includes("EAST WEST")) {
        return "EW";
    }

    if (value === "CC" || value.includes("CIRCLE")) {
        return "CC";
    }

    if (value === "DT" || value.includes("DOWNTOWN")) {
        return "DT";
    }

    if (value === "TE" || value.includes("THOMSON")) {
        return "TE";
    }

    return value;
}


// ===============================
// GET LINE DISPLAY NAME
// ===============================

function getLineDisplayName(line) {

    const value =
        normaliseTransportLine(line);

    if (value === "NE") {
        return "North East Line";
    }

    if (value === "NS") {
        return "North South Line";
    }

    if (value === "EW") {
        return "East West Line";
    }

    if (value === "CC") {
        return "Circle Line";
    }

    if (value === "DT") {
        return "Downtown Line";
    }

    if (value === "TE") {
        return "Thomson-East Coast Line";
    }

    return line || "MRT";
}


// ===============================
// GROUP ROUTE INTO SEGMENTS
// ===============================

function getRouteSegments(
    route,
    originName = "Origin",
    destinationName = "Destination"
) {

    if (!route || !route.legs) {
        return [];
    }

    const segments = [];
    const legs = route.legs;

    function normaliseLine(line) {

        const value =
            String(line || "")
                .trim()
                .toUpperCase();

        if (value === "NE" || value.includes("NORTH EAST")) return "NE";
        if (value === "NS" || value.includes("NORTH SOUTH")) return "NS";
        if (value === "EW" || value.includes("EAST WEST")) return "EW";
        if (value === "CC" || value.includes("CIRCLE")) return "CC";
        if (value === "DT" || value.includes("DOWNTOWN")) return "DT";
        if (value === "TE" || value.includes("THOMSON")) return "TE";

        return value;
    }

    function isDhobyGhaut(name) {

        return String(name || "")
            .toUpperCase()
            .replace(/[^A-Z0-9 ]/g, " ")
            .replace(/\s+/g, " ")
            .trim()
            .includes("DHOBY GHAUT");
    }

    legs.forEach((leg, index) => {

        console.log("ROUTE LEG:", index, leg);

        if (leg.mode === "WALK") {

            const isFirstLeg = index === 0;
            const isLastLeg = index === legs.length - 1;

            const legFromDhoby =
                isDhobyGhaut(leg.from);

            const legToDhoby =
                isDhobyGhaut(leg.to);

            const originIsDhoby =
                isDhobyGhaut(originName);

            const isDhobyTransfer =
                isFirstLeg &&
                originIsDhoby &&
                legToDhoby;

            if (isDhobyTransfer) {

                segments.push({

                    mode: "TRANSFER",

                    from: "DHOBY GHAUT MRT STATION",

                    to: "DHOBY GHAUT MRT STATION",

                    arrivalLine: "NE",

                    departureLine: "NS",

                    duration: leg.duration || 3

                });

                return;
            }

            if (
                !isFirstLeg &&
                !isLastLeg &&
                (legFromDhoby || legToDhoby)
            ) {

                let arrivalLine = "NE";
                let departureLine = "NS";

                for (
                    let i = index - 1;
                    i >= 0;
                    i--
                ) {

                    if (
                        legs[i] &&
                        legs[i].mode !== "WALK"
                    ) {

                        arrivalLine =
                            normaliseLine(
                                legs[i].service
                            ) || "NE";

                        break;
                    }
                }

                for (
                    let i = index + 1;
                    i < legs.length;
                    i++
                ) {

                    if (
                        legs[i] &&
                        legs[i].mode !== "WALK"
                    ) {

                        departureLine =
                            normaliseLine(
                                legs[i].service
                            ) || "NS";

                        break;
                    }
                }

                segments.push({

                    mode: "TRANSFER",

                    from:
                        "DHOBY GHAUT MRT STATION",

                    to:
                        "DHOBY GHAUT MRT STATION",

                    arrivalLine:
                        arrivalLine,

                    departureLine:
                        departureLine,

                    duration:
                        leg.duration || 3

                });

                return;
            }

            if (
                !isFirstLeg &&
                !isLastLeg
            ) {
                return;
            }

            segments.push({

                mode: "WALK",

                from:
                    isFirstLeg
                        ? originName
                        : leg.from,

                to:
                    isLastLeg
                        ? destinationName
                        : leg.to,

                duration:
                    leg.duration
                        ? leg.duration
                        : Math.max(
                            1,
                            Math.round(
                                (leg.distance || 80) / 80
                            )
                        )

            });

            return;
        }

        let line = leg.service;

        if (!line) {

            if (leg.mode === "BUS") {
                line = "Bus";
            }

            else if (leg.mode === "SUBWAY") {
                line = "MRT";
            }

            else if (leg.mode === "TRAM") {
                line = "LRT";
            }

            else {
                line = "MRT";
            }
        }

        const stopCount =
            (
                leg.intermediateStops
                    ? leg.intermediateStops.length
                    : 0
            ) + 1;

        segments.push({

            mode: leg.mode,

            from: leg.from,

            to: leg.to,

            line: line,

            stopCount: stopCount,

            duration: leg.duration || null

        });

    });

    return segments;
}


// ===============================
// FORMAT ROUTE SUMMARY
// ===============================

function formatRouteSummary(
    route,
    originName = "Origin",
    destinationName = "Destination"
) {

    const segments =
        getRouteSegments(
            route,
            originName,
            destinationName
        );

    return segments.map(segment => {

        if (segment.mode === "WALK") {

            return `

                <div class="route-summary">

                    <div class="route-main">

                        <span class="station-name">
                            ${segment.from}
                        </span>

                        <span class="route-arrow">
                            →
                        </span>

                        <span class="station-name">
                            ${segment.to}
                        </span>

                    </div>

                    <div class="route-meta">

                        <span class="route-line-name">
                            Walking
                        </span>

                        <span class="route-separator">
                            ·
                        </span>

                        <span>
                            ${segment.duration} min
                        </span>

                    </div>

                </div>

            `;
        }

        if (segment.mode === "TRANSFER") {

            const arrivalLine =
                segment.arrivalLine || "NE";

            const departureLine =
                segment.departureLine || "NS";

            return `

                <div class="route-summary">

                    <div class="route-main">

                        <span class="station-name">
                            DHOBY GHAUT MRT STATION
                        </span>

                        <span class="route-arrow">
                            →
                        </span>

                        <span class="station-name">
                            DHOBY GHAUT MRT STATION
                        </span>

                    </div>

                    <div class="route-meta">

                        <span
                            class="line-dot ${getLineClass(
                                arrivalLine
                            )}"
                        ></span>

                        <span class="route-line-name">
                            ${getLineDisplayName(
                                arrivalLine
                            )}
                        </span>

                        <span class="route-arrow">
                            →
                        </span>

                        <span
                            class="line-dot ${getLineClass(
                                departureLine
                            )}"
                        ></span>

                        <span class="route-line-name">
                            ${getLineDisplayName(
                                departureLine
                            )}
                        </span>

                        <span class="route-separator">
                            ·
                        </span>

                        <span class="transfer-label">
                            Transfer
                        </span>

                    </div>

                </div>

            `;
        }

        const line =
            segment.line || "MRT";

        const transportSegments =
            segments.filter(
                s =>
                    s.mode !== "WALK" &&
                    s.mode !== "TRANSFER"
            );

        const isDirect =
            transportSegments.length === 1;

        return `

            <div class="route-summary">

                <div class="route-main">

                    <span class="station-name">
                        ${segment.from}
                    </span>

                    <span class="route-arrow">
                        →
                    </span>

                    <span class="station-name">
                        ${segment.to}
                    </span>

                </div>

                <div class="route-meta">

                    <span class="stop-count">
                        ${segment.stopCount} stops
                    </span>

                    <span class="route-separator">
                        ·
                    </span>

                    <span
                        class="line-dot ${getLineClass(
                            line
                        )}"
                    ></span>

                    <span class="route-line-name">
                        ${getLineDisplayName(
                            line
                        )}
                    </span>

                    <span class="${
                        isDirect
                            ? "direct-label"
                            : "transfer-label"
                    }">

                        ${
                            isDirect
                                ? "Direct"
                                : "Transfer"
                        }

                    </span>

                </div>

            </div>

        `;

    }).join("");
}


// ===============================
// FIND NEAREST MEETING POINT
// ===============================

function findNearestMeetingPoint(
    userStart,
    friendStart,
    destination
) {

    const userRoute =
        findRoute(
            userStart,
            destination
        );

    const friendRoute =
        findRoute(
            friendStart,
            destination
        );

    if (!userRoute || !friendRoute) {
        return null;
    }

    const friendStations =
        new Set(friendRoute);

    const commonStations =
        userRoute.filter(
            station =>
                friendStations.has(station) &&
                station !== destination
        );

    if (commonStations.length === 0) {
        return null;
    }

    let bestStation = null;
    let bestDistance = Infinity;

    for (const station of commonStations) {

        const userDistance =
            userRoute.indexOf(station);

        const friendDistance =
            friendRoute.indexOf(station);

        const totalDistance =
            userDistance +
            friendDistance;

        if (totalDistance < bestDistance) {

            bestDistance =
                totalDistance;

            bestStation =
                station;
        }
    }

    return bestStation;
}


// ===============================
// FIND TRANSFER STATIONS
// ===============================

function getTransferStations(route) {

    if (!route || route.length < 3) {
        return [];
    }

    const transferStations = [];

    let previousLine =
        getLineBetween(
            route[0],
            route[1]
        );

    for (
        let i = 1;
        i < route.length - 1;
        i++
    ) {

        const currentLine =
            getLineBetween(
                route[i],
                route[i + 1]
            );

        if (currentLine !== previousLine) {

            transferStations.push(
                route[i]
            );
        }

        previousLine =
            currentLine;
    }

    return transferStations;
}


// ===============================
// FIND NEAREST COMMON TRANSFER
// ===============================

function findNearestTransferPoint(
    userStart,
    friendStart,
    destination
) {

    const userRoute =
        findRoute(
            userStart,
            destination
        );

    const friendRoute =
        findRoute(
            friendStart,
            destination
        );

    if (!userRoute || !friendRoute) {
        return null;
    }

    const userTransfers =
        getTransferStations(
            userRoute
        );

    const friendTransfers =
        getTransferStations(
            friendRoute
        );

    const friendTransferSet =
        new Set(friendTransfers);

    const commonTransfers =
        userTransfers.filter(
            station =>
                friendTransferSet.has(station)
        );

    if (commonTransfers.length === 0) {
        return null;
    }

    let bestStation = null;
    let bestDistance = Infinity;

    for (const station of commonTransfers) {

        const userDistance =
            userRoute.indexOf(station);

        const friendDistance =
            friendRoute.indexOf(station);

        const totalDistance =
            userDistance +
            friendDistance;

        if (totalDistance < bestDistance) {

            bestDistance =
                totalDistance;

            bestStation =
                station;
        }
    }

    return bestStation;
}


// ===============================
// FIND COMMON TRANSFER PLACES
// ===============================

function findCommonTransferPlaces(
    userRoutes,
    friendRoutes
) {

    const userTransfers = [];
    const friendTransfers = [];

    function collectTransferStops(
        routes,
        output
    ) {

        routes.forEach(route => {

            if (!route || !route.legs) {
                return;
            }

            const transportLegs =
                route.legs.filter(
                    leg =>
                        leg.mode !== "WALK"
                );

            if (transportLegs.length < 2) {
                return;
            }

            for (
                let i = 0;
                i < transportLegs.length - 1;
                i++
            ) {

                const currentLeg =
                    transportLegs[i];

                const nextLeg =
                    transportLegs[i + 1];

                const currentService =
                    normaliseTransportLine(
                        currentLeg.service
                    );

                const nextService =
                    normaliseTransportLine(
                        nextLeg.service
                    );

                const currentMode =
                    String(
                        currentLeg.mode || ""
                    )
                        .trim()
                        .toUpperCase();

                const nextMode =
                    String(
                        nextLeg.mode || ""
                    )
                        .trim()
                        .toUpperCase();

                const serviceChanged =
                    currentService !==
                    nextService;

                const modeChanged =
                    currentMode !==
                    nextMode;

                const isTransfer =
                    serviceChanged ||
                    modeChanged;

                if (!isTransfer) {
                    continue;
                }

                const transferStop =
                    currentLeg.toDetails;

                if (!transferStop) {
                    continue;
                }

                const latitude =
                    Number(
                        transferStop.lat !== undefined
                            ? transferStop.lat
                            : transferStop.latitude
                    );

                const longitude =
                    Number(
                        transferStop.lon !== undefined
                            ? transferStop.lon
                            : transferStop.longitude
                    );

                if (
                    !Number.isFinite(latitude) ||
                    !Number.isFinite(longitude)
                ) {
                    continue;
                }

                output.push({

                    name:
                        currentLeg.to,

                    latitude:
                        latitude,

                    longitude:
                        longitude,

                    serviceBefore:
                        currentLeg.service,

                    serviceAfter:
                        nextLeg.service,

                    modeBefore:
                        currentLeg.mode,

                    modeAfter:
                        nextLeg.mode,

                    details:
                        transferStop

                });
            }

        });
    }

    collectTransferStops(
        userRoutes,
        userTransfers
    );

    collectTransferStops(
        friendRoutes,
        friendTransfers
    );

    console.log(
        "USER ACTUAL TRANSFERS:",
        userTransfers
    );

    console.log(
        "FRIEND ACTUAL TRANSFERS:",
        friendTransfers
    );

    const commonTransfers = [];

    userTransfers.forEach(
        userTransfer => {

            friendTransfers.forEach(
                friendTransfer => {

                    const distance =
                        calculateDistance(
                            userTransfer.latitude,
                            userTransfer.longitude,
                            friendTransfer.latitude,
                            friendTransfer.longitude
                        );

                    if (distance <= 200) {

                        commonTransfers.push({

                            name:
                                userTransfer.name,

                            latitude:
                                userTransfer.latitude,

                            longitude:
                                userTransfer.longitude,

                            userStop:
                                userTransfer,

                            friendStop:
                                friendTransfer,

                            distanceBetweenStops:
                                Math.round(
                                    distance
                                ),

                            userTransferBefore:
                                userTransfer.serviceBefore,

                            userTransferAfter:
                                userTransfer.serviceAfter,

                            friendTransferBefore:
                                friendTransfer.serviceBefore,

                            friendTransferAfter:
                                friendTransfer.serviceAfter

                        });
                    }

                }
            );

        }
    );

    const uniqueTransfers = [];
    const seen = new Set();

    commonTransfers.forEach(
        candidate => {

            const key =
                `${candidate.name}-${Math.round(
                    candidate.latitude * 10000
                )}-${Math.round(
                    candidate.longitude * 10000
                )}`;

            if (seen.has(key)) {
                return;
            }

            seen.add(key);

            uniqueTransfers.push(
                candidate
            );

        }
    );

    console.log(
        "COMMON ACTUAL TRANSFER PLACES:",
        uniqueTransfers
    );

    return uniqueTransfers;
}


// ===============================
// UPDATE ROUTE CARD
// ===============================

function updateRouteCard(
    elementId,
    route,
    originName = "Origin",
    destinationName = "Destination"
) {

    const element =
        document.getElementById(
            elementId
        );

    if (!element) {
        return;
    }

    // Correct spelling: DHOBY GHAUT
    if (
        elementId === "sharedRoute" &&
        String(originName)
            .toUpperCase()
            .includes("DHOBY GHAUT") &&
        route &&
        route.legs &&
        route.legs.length > 0
    ) {

        const modifiedRoute = {
            ...route,

            legs: route.legs.map(
                (leg, index) => {

                    if (
                        index === 0 &&
                        leg.mode === "WALK"
                    ) {

                        return {

                            ...leg,

                            mode:
                                "TRANSFER",

                            from:
                                "DHOBY GHAUT MRT STATION",

                            to:
                                "DHOBY GHAUT MRT STATION",

                            arrivalLine:
                                "NE",

                            departureLine:
                                "NS",

                            duration:
                                leg.duration || 3

                        };
                    }

                    return leg;
                }
            )
        };

        console.log(
            "SHARED ROUTE AFTER TRANSFER CONVERSION:",
            modifiedRoute
        );

        element.innerHTML =
            formatRouteSummary(
                modifiedRoute,
                originName,
                destinationName
            );

        return;
    }

    element.innerHTML =
        formatRouteSummary(
            route,
            originName,
            destinationName
        );
}


// ===============================
// LOAD BUS STOP DATA
// ===============================

let busStops = [];

async function loadBusStops() {

    try {

        const response =
            await fetch(
                "data/bus-stops.geojson"
            );

        const data =
            await response.json();

        console.log(
            "Number of bus stops:",
            data.features.length
        );

        busStops =
            data.features;

        console.log(
            "Bus stop dataset loaded!"
        );

        console.log(
            "Number of bus stops:",
            busStops.length
        );

        console.log(
            "Example bus stop:",
            busStops[0]
        );

    } catch (error) {

        console.error(
            "Unable to load bus stop data:",
            error
        );
    }
}

loadBusStops();


// ===============================
// FIND NEAREST BUS STOP
// ===============================

function findNearestBusStop(
    latitude,
    longitude
) {

    if (!busStops.length) {
        return null;
    }

    let nearestStop = null;
    let shortestDistance = Infinity;

    busStops.forEach(
        stop => {

            const coordinates =
                stop.geometry.coordinates;

            const stopLongitude =
                coordinates[0];

            const stopLatitude =
                coordinates[1];

            const distance =
                Math.sqrt(
                    Math.pow(
                        latitude -
                        stopLatitude,
                        2
                    ) +
                    Math.pow(
                        longitude -
                        stopLongitude,
                        2
                    )
                );

            if (
                distance <
                shortestDistance
            ) {

                shortestDistance =
                    distance;

                nearestStop =
                    stop;
            }

        }
    );

    return nearestStop;
}


// ===============================
// LOAD BUS ROUTES
// ===============================

async function loadBusRoutes() {

    try {

        const response =
            await fetch(
                "data/bus-routes.json"
            );

        const data =
            await response.json();

        console.log(
            "Bus route dataset loaded!"
        );

        console.log(
            "Number of bus route records:",
            data.value.length
        );

    } catch (error) {

        console.error(
            "Unable to load bus route data:",
            error
        );
    }
}

loadBusRoutes();


// ===============================
// BUILD BUS NETWORK
// ===============================

async function buildBusNetwork() {

    try {

        const response =
            await fetch(
                "data/bus-routes.json"
            );

        const data =
            await response.json();

        const busNetwork = {};
        const routes = {};

        data.value.forEach(
            record => {

                const key =
                    `${record.ServiceNo}-${record.Direction}`;

                if (!routes[key]) {
                    routes[key] = [];
                }

                routes[key].push(
                    record
                );

            }
        );

        Object.values(routes).forEach(
            route => {

                route.sort(
                    (a, b) =>
                        a.StopSequence -
                        b.StopSequence
                );

                for (
                    let i = 0;
                    i < route.length - 1;
                    i++
                ) {

                    const currentStop =
                        route[i].BusStopCode;

                    const nextStop =
                        route[i + 1].BusStopCode;

                    if (!busNetwork[currentStop]) {
                        busNetwork[currentStop] = [];
                    }

                    if (!busNetwork[nextStop]) {
                        busNetwork[nextStop] = [];
                    }

                    if (
                        !busNetwork[currentStop]
                            .includes(nextStop)
                    ) {

                        busNetwork[currentStop]
                            .push(nextStop);
                    }

                    if (
                        !busNetwork[nextStop]
                            .includes(currentStop)
                    ) {

                        busNetwork[nextStop]
                            .push(currentStop);
                    }

                }

            }
        );

        console.log(
            "Bus network built!"
        );

        console.log(
            "Number of bus stops in network:",
            Object.keys(busNetwork).length
        );

        return busNetwork;

    } catch (error) {

        console.error(
            "Unable to build bus network:",
            error
        );

        return null;
    }
}

buildBusNetwork();


// ===============================
// ONEMAP ADDRESS SEARCH
// ===============================

async function getOneMapToken() {

    console.warn(
        "getOneMapToken() is no longer used. " +
        "OneMap authentication is handled by server.js."
    );

    return null;
}


async function searchOneMapLocation(
    searchValue
) {

    if (
        !searchValue ||
        searchValue.trim() === ""
    ) {
        return null;
    }

    try {

        const url =
            `http://localhost:3000/api/search` +
            `?search=${encodeURIComponent(
                searchValue
            )}`;

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                "Backend search failed"
            );
        }

        const data =
            await response.json();

        if (
            !data.results ||
            data.results.length === 0
        ) {

            console.log(
                "Location not found:",
                searchValue
            );

            return null;
        }

        const result =
            data.results[0];

        const location = {

            search:
                searchValue,

            address:
                result.ADDRESS,

            latitude:
                parseFloat(
                    result.LATITUDE
                ),

            longitude:
                parseFloat(
                    result.LONGITUDE
                )
        };

        console.log(
            "OneMap location found:",
            location
        );

        return location;

    } catch (error) {

        console.error(
            "Location search error:",
            error
        );

        return null;
    }
}

async function searchOneMapLocationSuggestions(
    searchValue
) {

    if (
        !searchValue ||
        searchValue.trim() === ""
    ) {
        return [];
    }

    try {

        const url =
            `http://localhost:3000/api/search` +
            `?search=${encodeURIComponent(
                searchValue
            )}`;

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Backend search failed"
            );
        }

        const data =
            await response.json();

        if (
            !data.results ||
            data.results.length === 0
        ) {
            return getFallbackLocationSuggestions(
                searchValue
            );
        }

        const oneMapSuggestions =
            data.results
            .slice(0, 5)
            .map(result => ({
                name:
                    result.SEARCHVAL ||
                    result.BUILDING ||
                    result.ROAD_NAME ||
                    result.ADDRESS,

                address:
                    result.ADDRESS,

                latitude:
                    parseFloat(
                        result.LATITUDE
                    ),

                longitude:
                    parseFloat(
                        result.LONGITUDE
                    )
            }));

        return oneMapSuggestions.length > 0
            ? oneMapSuggestions
            : getFallbackLocationSuggestions(
                searchValue
            );

    } catch (error) {

        console.error(
            "Location suggestion error:",
            error
        );

        return getFallbackLocationSuggestions(
            searchValue
        );
    }
}

const fallbackLocations = [
    "Ang Mo Kio MRT",
    "Bishan MRT",
    "Bugis MRT",
    "Buona Vista MRT",
    "Chinatown MRT",
    "City Hall MRT",
    "Dhoby Ghaut MRT",
    "HarbourFront MRT",
    "Hougang MRT",
    "Jurong East MRT",
    "Little India MRT",
    "Orchard MRT",
    "Outram Park MRT",
    "Paya Lebar MRT",
    "Raffles Place MRT",
    "Serangoon MRT",
    "Sengkang MRT",
    "Tampines MRT",
    "Toa Payoh MRT",
    "Woodlands MRT",
    "Yishun MRT",
    "Nanyang Polytechnic",
    "Singapore Polytechnic",
    "National University of Singapore",
    "Singapore Management University",
    "Changi Airport",
    "VivoCity",
    "Suntec City",
    "Marina Bay Sands",
    "Raffles Hospital",
    "Singapore General Hospital"
];

function getFallbackLocationSuggestions(
    searchValue
) {

    const query =
        String(searchValue || "")
            .trim()
            .toLowerCase();

    if (query.length < 2) {
        return [];
    }

    return fallbackLocations
        .filter(location =>
            location.toLowerCase()
                .includes(query)
        )
        .slice(0, 5)
        .map(location => ({
            name:
                location,

            address:
                "Singapore",

            latitude:
                "",

            longitude:
                ""
        }));
}


// ===============================
// GET PUBLIC TRANSPORT ROUTE
// ===============================

async function getPublicTransportRoute(
    startLat,
    startLon,
    endLat,
    endLon
) {

    try {

        const url =
            `http://localhost:3000/api/route` +
            `?startLat=${encodeURIComponent(
                startLat
            )}` +
            `&startLon=${encodeURIComponent(
                startLon
            )}` +
            `&endLat=${encodeURIComponent(
                endLat
            )}` +
            `&endLon=${encodeURIComponent(
                endLon
            )}`;

        const response =
            await fetch(url);

        if (!response.ok) {

            throw new Error(
                "Backend routing failed"
            );
        }

        const data =
            await response.json();

        console.log(
            "Public transport route received from backend."
        );

        return data;

    } catch (error) {

        console.error(
            "Public transport routing error:",
            error
        );

        return null;
    }
}


// ===============================
// FORMAT ONEMAP ROUTE
// ===============================

function formatOneMapRoutes(data) {

    if (
        !data ||
        !data.plan ||
        !data.plan.itineraries
    ) {
        return [];
    }

    return data.plan.itineraries.map(
        itinerary => {

            const route = [];

            itinerary.legs.forEach(
                leg => {

                    if (
                        leg.mode === "WALK"
                    ) {

                        route.push({

                            mode:
                                "WALK",

                            from:
                                leg.from.name,

                            to:
                                leg.to.name,

                            distance:
                                Math.round(
                                    leg.distance || 0
                                ),

                            duration:
                                leg.duration
                                    ? Math.round(
                                        leg.duration / 60
                                    )
                                    : null,

                            fromDetails:
                                leg.from,

                            toDetails:
                                leg.to,

                            intermediateStops:
                                []

                        });

                    } else {

                        route.push({

                            mode:
                                leg.mode,

                            service:
                                leg.routeShortName ||
                                leg.route ||
                                "",

                            from:
                                leg.from.name,

                            to:
                                leg.to.name,

                            distance:
                                Math.round(
                                    leg.distance || 0
                                ),

                            duration:
                                leg.duration
                                    ? Math.round(
                                        leg.duration / 60
                                    )
                                    : null,

                            fromDetails:
                                leg.from,

                            toDetails:
                                leg.to,

                            intermediateStops:
                                leg.intermediateStops ||
                                []

                        });
                    }

                }
            );

            return {

                duration:
                    Math.round(
                        itinerary.duration / 60
                    ),

                fare:
                    itinerary.fare,

                transfers:
                    itinerary.transfers,

                legs:
                    route

            };
        }
    );
}


// ===============================
// GET PLACES FROM ROUTE
// ===============================

function getRoutePlaces(route) {

    const places = [];

    if (!route || !route.legs) {
        return places;
    }

    route.legs.forEach(
        leg => {

            if (
                leg.from &&
                leg.from !== "Origin" &&
                !places.some(
                    place =>
                        place.name ===
                        leg.from
                )
            ) {

                places.push({

                    name:
                        leg.from,

                    details:
                        leg.fromDetails ||
                        null

                });
            }

            if (
                leg.intermediateStops &&
                leg.intermediateStops.length > 0
            ) {

                leg.intermediateStops.forEach(
                    stop => {

                        if (
                            stop.name &&
                            !places.some(
                                place =>
                                    place.name ===
                                    stop.name
                            )
                        ) {

                            places.push({

                                name:
                                    stop.name,

                                details:
                                    stop

                            });
                        }

                    }
                );
            }

            if (
                leg.to &&
                leg.to !== "Destination" &&
                !places.some(
                    place =>
                        place.name ===
                        leg.to
                )
            ) {

                places.push({

                    name:
                        leg.to,

                    details:
                        leg.toDetails ||
                        null

                });
            }

        }
    );

    return places;
}


// ===============================
// GET INDIVIDUAL TRANSPORT STOPS
// ===============================

function getTransportStops(route) {

    const stops = [];

    if (!route || !route.legs) {
        return stops;
    }

    route.legs.forEach(
        leg => {

            if (leg.mode === "WALK") {
                return;
            }

            let type = "UNKNOWN";

            if (leg.mode === "BUS") {
                type = "BUS";
            }

            else if (leg.mode === "SUBWAY") {
                type = "MRT";
            }

            else if (leg.mode === "TRAM") {
                type = "LRT";
            }

            if (leg.fromDetails) {

                stops.push({

                    type:
                        type,

                    service:
                        leg.service,

                    name:
                        leg.from,

                    details:
                        leg.fromDetails

                });
            }

            if (
                leg.intermediateStops &&
                leg.intermediateStops.length > 0
            ) {

                leg.intermediateStops.forEach(
                    stop => {

                        stops.push({

                            type:
                                type,

                            service:
                                leg.service,

                            name:
                                stop.name,

                            details:
                                stop

                        });
                    }
                );
            }

            if (leg.toDetails) {

                stops.push({

                    type:
                        type,

                    service:
                        leg.service,

                    name:
                        leg.to,

                    details:
                        leg.toDetails

                });
            }

        }
    );

    return stops;
}


// ===============================
// CALCULATE DISTANCE
// ===============================

function calculateDistance(
    lat1,
    lon1,
    lat2,
    lon2
) {

    const R = 6371000;

    const dLat =
        (
            lat2 -
            lat1
        ) *
        Math.PI /
        180;

    const dLon =
        (
            lon2 -
            lon1
        ) *
        Math.PI /
        180;

    const a =
        Math.sin(dLat / 2) *
        Math.sin(dLat / 2) +
        Math.cos(
            lat1 *
            Math.PI /
            180
        ) *
        Math.cos(
            lat2 *
            Math.PI /
            180
        ) *
        Math.sin(dLon / 2) *
        Math.sin(dLon / 2);

    const c =
        2 *
        Math.atan2(
            Math.sqrt(a),
            Math.sqrt(1 - a)
        );

    return R * c;
}


// ===============================
// FIND COMMON TRANSPORT PLACES
// ===============================

function findCommonTransportPlaces(
    userRoutes,
    friendRoutes
) {

    const userStops = [];
    const friendStops = [];

    function collectStops(
        routes,
        output
    ) {

        routes.forEach(
            route => {

                if (!route || !route.legs) {
                    return;
                }

                route.legs.forEach(
                    leg => {

                        if (
                            leg.mode === "WALK"
                        ) {
                            return;
                        }

                        if (leg.fromDetails) {

                            output.push({

                                ...leg.fromDetails,

                                transportType:
                                    leg.mode,

                                service:
                                    leg.service

                            });
                        }

                        if (
                            leg.intermediateStops &&
                            leg.intermediateStops.length > 0
                        ) {

                            leg.intermediateStops.forEach(
                                stop => {

                                    output.push({

                                        ...stop,

                                        transportType:
                                            leg.mode,

                                        service:
                                            leg.service

                                    });
                                }
                            );
                        }

                        if (leg.toDetails) {

                            output.push({

                                ...leg.toDetails,

                                transportType:
                                    leg.mode,

                                service:
                                    leg.service

                            });
                        }

                    }
                );

            }
        );
    }

    collectStops(
        userRoutes,
        userStops
    );

    collectStops(
        friendRoutes,
        friendStops
    );

    function removeDuplicates(stops) {

        const seen =
            new Set();

        return stops.filter(
            stop => {

                const id =
                    stop.stopCode ||
                    stop.stopId ||
                    stop.name;

                if (seen.has(id)) {
                    return false;
                }

                seen.add(id);

                return true;
            }
        );
    }

    const uniqueUserStops =
        removeDuplicates(
            userStops
        );

    const uniqueFriendStops =
        removeDuplicates(
            friendStops
        );

    const commonPlaces = [];

    uniqueUserStops.forEach(
        userStop => {

            uniqueFriendStops.forEach(
                friendStop => {

                    const userLat =
                        Number(
                            userStop.lat !== undefined
                                ? userStop.lat
                                : userStop.latitude
                        );

                    const userLon =
                        Number(
                            userStop.lon !== undefined
                                ? userStop.lon
                                : userStop.longitude
                        );

                    const friendLat =
                        Number(
                            friendStop.lat !== undefined
                                ? friendStop.lat
                                : friendStop.latitude
                        );

                    const friendLon =
                        Number(
                            friendStop.lon !== undefined
                                ? friendStop.lon
                                : friendStop.longitude
                        );

                    if (
                        !Number.isFinite(userLat) ||
                        !Number.isFinite(userLon) ||
                        !Number.isFinite(friendLat) ||
                        !Number.isFinite(friendLon)
                    ) {
                        return;
                    }

                    const distance =
                        calculateDistance(
                            userLat,
                            userLon,
                            friendLat,
                            friendLon
                        );

                    if (distance <= 200) {

                        commonPlaces.push({

                            name:
                                userStop.name,

                            latitude:
                                userLat,

                            longitude:
                                userLon,

                            userStop:
                                userStop,

                            friendStop:
                                friendStop,

                            distanceBetweenStops:
                                Math.round(
                                    distance
                                ),

                            userTransportType:
                                userStop.transportType,

                            friendTransportType:
                                friendStop.transportType,

                            userService:
                                userStop.service,

                            friendService:
                                friendStop.service

                        });
                    }

                }
            );

        }
    );

    return commonPlaces;
}


// ===============================
// SCORE MEETING CANDIDATES
// ===============================

async function scoreMeetingCandidates(
    commonPlaces,
    userLocation,
    friendLocation
) {

    const scoredCandidates = [];

    for (
        const candidate of commonPlaces
    ) {

        console.log(
            "Scoring candidate:",
            candidate.name
        );

        const userRouteData =
            await getPublicTransportRoute(
                userLocation.latitude,
                userLocation.longitude,
                candidate.latitude,
                candidate.longitude
            );

        const friendRouteData =
            await getPublicTransportRoute(
                friendLocation.latitude,
                friendLocation.longitude,
                candidate.latitude,
                candidate.longitude
            );

        if (
            !userRouteData ||
            !friendRouteData
        ) {

            console.log(
                "Unable to route to candidate:",
                candidate.name
            );

            continue;
        }

        const userRoutes =
            formatOneMapRoutes(
                userRouteData
            );

        const friendRoutes =
            formatOneMapRoutes(
                friendRouteData
            );

        const fastestUserRoute =
            getBestTransportRoute(
                userRoutes
            );

        const fastestFriendRoute =
            getBestTransportRoute(
                friendRoutes
            );

        if (
            !fastestUserRoute ||
            !fastestFriendRoute
        ) {
            continue;
        }

        const totalTime =
            fastestUserRoute.duration +
            fastestFriendRoute.duration;

        scoredCandidates.push({

            ...candidate,

            userTravelTime:
                fastestUserRoute.duration,

            friendTravelTime:
                fastestFriendRoute.duration,

            totalTravelTime:
                totalTime

        });
    }

    scoredCandidates.sort(
        (a, b) =>
            a.totalTravelTime -
            b.totalTravelTime
    );

    console.log(
        "SCORED MEETING CANDIDATES:",
        scoredCandidates
    );

    return scoredCandidates;
}


// ===============================
// GET BEST PUBLIC TRANSPORT ROUTE
// ===============================

function getBestTransportRoute(routes) {

    if (!routes || routes.length === 0) {
        return null;
    }

    const validRoutes =
        routes.filter(
            route =>
                route &&
                route.legs &&
                route.legs.length > 0
        );

    if (validRoutes.length === 0) {
        return null;
    }

    function hasRail(route) {

        return route.legs.some(
            leg =>
                leg.mode === "SUBWAY" ||
                leg.mode === "TRAM"
        );
    }

    function hasTransport(route) {

        return route.legs.some(
            leg =>
                leg.mode !== "WALK"
        );
    }

    const railRoutes =
        validRoutes.filter(
            route =>
                hasRail(route)
        );

    if (railRoutes.length > 0) {

        return railRoutes.reduce(
            (best, route) => {

                if (!best) {
                    return route;
                }

                const bestTransfers =
                    Number.isFinite(
                        best.transfers
                    )
                        ? best.transfers
                        : 999;

                const routeTransfers =
                    Number.isFinite(
                        route.transfers
                    )
                        ? route.transfers
                        : 999;

                if (
                    routeTransfers <
                    bestTransfers
                ) {
                    return route;
                }

                if (
                    routeTransfers ===
                    bestTransfers &&
                    route.duration <
                    best.duration
                ) {
                    return route;
                }

                return best;

            },
            null
        );
    }

    const transportRoutes =
        validRoutes.filter(
            route =>
                hasTransport(route)
        );

    if (transportRoutes.length > 0) {

        return transportRoutes.reduce(
            (best, route) => {

                if (!best) {
                    return route;
                }

                const bestTransfers =
                    Number.isFinite(
                        best.transfers
                    )
                        ? best.transfers
                        : 999;

                const routeTransfers =
                    Number.isFinite(
                        route.transfers
                    )
                        ? route.transfers
                        : 999;

                if (
                    routeTransfers <
                    bestTransfers
                ) {
                    return route;
                }

                if (
                    routeTransfers ===
                    bestTransfers &&
                    route.duration <
                    best.duration
                ) {
                    return route;
                }

                return best;

            },
            null
        );
    }

    return validRoutes.reduce(
        (best, route) =>
            !best ||
            route.duration <
            best.duration
                ? route
                : best,
        null
    );
}

// =====================================================
// LIVE JOURNEY MAP
// =====================================================

// Leaflet map
let liveMap = null;

// Track whether the map has already been created
let liveMapInitialised = false;

// User location
let myLocationMarker = null;
let myLocationAccuracy = null;

// Friend location
let friendLocationMarker = null;

// GPS watch
let locationWatchId = null;


// =====================================================
// INITIALISE LIVE JOURNEY MAP
// =====================================================

function initialiseLiveLocationMap() {

    const mapElement =
        document.getElementById("liveMap");

    // Make sure the map HTML exists
    if (!mapElement) {

        console.error(
            "Cannot initialise map: #liveMap not found."
        );

        return;
    }


    // Make sure Leaflet is loaded
    if (typeof L === "undefined") {

        console.error(
            "Cannot initialise map: Leaflet is not loaded."
        );

        return;
    }


    // Prevent creating the map more than once
    if (liveMapInitialised && liveMap) {

        liveMap.invalidateSize(true);

        return;
    }


    // -----------------------------------------
    // CREATE LEAFLET MAP
    // -----------------------------------------

    liveMap =
        L.map("liveMap", {
            zoomControl: true
        }).setView(
            [1.3521, 103.8198],
            12
        );


    // -----------------------------------------
    // OPENSTREETMAP TILES
    // -----------------------------------------

    L.tileLayer(
        "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
        {
            attribution:
                '&copy; OpenStreetMap contributors',

            maxZoom: 19
        }
    ).addTo(liveMap);


    // Mark map as initialized
    liveMapInitialised = true;


    console.log(
        "Live Journey map initialized."
    );


    // -----------------------------------------
    // FIX MAP SIZE AFTER RENDERING
    // -----------------------------------------

    setTimeout(() => {

        if (liveMap) {

            liveMap.invalidateSize(true);

        }

    }, 300);

}


// =====================================================
// REFRESH LIVE MAP SIZE
// =====================================================

function refreshLiveMapSize() {

    if (!liveMap) {
        return;
    }

    setTimeout(() => {

        liveMap.invalidateSize(true);

    }, 100);

}


// =====================================================
// START LOCATION SHARING
// =====================================================

function startLocationSharing() {

    // Check journey connection
    if (!journeyConnected || !journeyCode) {

        updateLocationStatus(
            "Join a journey first."
        );

        return;
    }


    // Check browser geolocation support
    if (!navigator.geolocation) {

        updateLocationStatus(
            "Location is not supported by this browser."
        );

        return;
    }


    // Make sure map exists
    if (!liveMapInitialised) {

        initialiseLiveLocationMap();

    }


    updateLocationStatus(
        "Getting your location..."
    );


    // Stop previous watcher if there is one
    if (locationWatchId !== null) {

        navigator.geolocation.clearWatch(
            locationWatchId
        );

    }


    // Start watching location
    locationWatchId =
        navigator.geolocation.watchPosition(

            position => {

                handleLocationUpdate(
                    position
                );

            },

            error => {

                console.error(
                    "Geolocation error:",
                    error
                );


                if (error.code === 1) {

                    updateLocationStatus(
                        "Location permission was denied."
                    );

                } else if (error.code === 2) {

                    updateLocationStatus(
                        "Unable to determine your location."
                    );

                } else if (error.code === 3) {

                    updateLocationStatus(
                        "Location request timed out."
                    );

                } else {

                    updateLocationStatus(
                        "Unable to get your location."
                    );

                }

            },

            {
                enableHighAccuracy: true,
                maximumAge: 5000,
                timeout: 15000
            }

        );

}

// =====================================================
// LIVE LOCATION MARKER ICONS
// =====================================================

const myLocationIcon = L.divIcon({
    className: "live-location-marker",
    html: `
        <div class="my-location-dot"></div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

const friendLocationIcon = L.divIcon({
    className: "live-location-marker",
    html: `
        <div class="friend-location-dot"></div>
    `,
    iconSize: [20, 20],
    iconAnchor: [10, 10]
});

// =====================================================
// HANDLE LOCATION UPDATE
// =====================================================

function handleLocationUpdate(
    position
) {

    const latitude =
        position.coords.latitude;

    const longitude =
        position.coords.longitude;

    const accuracy =
        position.coords.accuracy;

    checkDestinationAlarm(
    latitude,
    longitude
    );

    console.log(
        "My location:",
        latitude,
        longitude,
        "Accuracy:",
        accuracy
    );


    // Make sure map exists
    if (!liveMap) {

        initialiseLiveLocationMap();

    }


    if (!liveMap) {

        console.error(
            "Live map is not available."
        );

        return;
    }


    // -----------------------------------------
    // CREATE USER MARKER
    // -----------------------------------------

    if (!myLocationMarker) {

        myLocationMarker =
    L.marker(
        [latitude, longitude],
        {
            icon: myLocationIcon
        }
    )
    .addTo(liveMap)
    .bindPopup(
        "<strong>You</strong>"
    );

    } else {

        myLocationMarker.setLatLng(
            [latitude, longitude]
        );

    }


    // -----------------------------------------
    // ACCURACY CIRCLE
    // -----------------------------------------

    if (!myLocationAccuracy) {

        myLocationAccuracy =
            L.circle(
                [latitude, longitude],
                {
                    radius: accuracy
                }
            ).addTo(liveMap);

    } else {

        myLocationAccuracy.setLatLng(
            [latitude, longitude]
        );

        myLocationAccuracy.setRadius(
            accuracy
        );

    }


    // -----------------------------------------
    // MOVE MAP TO YOUR LOCATION
    // -----------------------------------------

    if (
        !myLocationMarker._hasBeenCentered
    ) {

        liveMap.setView(
            [latitude, longitude],
            16
        );

        myLocationMarker._hasBeenCentered =
            true;

    }


    // -----------------------------------------
    // SEND LOCATION TO FRIEND
    // -----------------------------------------

    socket.emit(
        "location-update",
        {
            code: journeyCode,
            latitude: latitude,
            longitude: longitude
        }
    );


    // -----------------------------------------
    // UPDATE STATUS
    // -----------------------------------------

    updateLocationStatus(
        `Location shared · Accuracy ±${Math.round(accuracy)}m`
    );


    // Fix map rendering after marker update
    setTimeout(() => {

        if (liveMap) {

            liveMap.invalidateSize(true);

        }

    }, 100);

}


// =====================================================
// STOP LOCATION SHARING
// =====================================================

function stopLocationSharing() {

    if (locationWatchId !== null) {

        navigator.geolocation.clearWatch(
            locationWatchId
        );

        locationWatchId = null;

    }


    updateLocationStatus(
        "Location sharing stopped."
    );

}


// =====================================================
// LOCATION STATUS
// =====================================================

function updateLocationStatus(
    message
) {

    const status =
        document.getElementById(
            "locationStatus"
        );

    if (status) {

        status.textContent =
            message;

    }

}

// =====================================================
// REAL-TIME JOURNEY CONNECTION
// =====================================================

const socket =
    io();

// =====================================================
// RECEIVE FRIEND LOCATION
// =====================================================

socket.on(
    "friend-location",
    (data) => {

        console.log(
            "Friend location received:",
            data
        );

        // Check received coordinates
        if (
            !data ||
            typeof data.latitude !== "number" ||
            typeof data.longitude !== "number"
        ) {

            console.error(
                "Invalid friend location:",
                data
            );

            return;
        }


        // Make sure the map exists
        if (!liveMapInitialised) {

            initialiseLiveLocationMap();

        }


        if (!liveMap) {

            console.error(
                "Live map is not available."
            );

            return;
        }


        const friendLatLng = [
            data.latitude,
            data.longitude
        ];


        // -----------------------------------------
        // CREATE FRIEND MARKER
        // -----------------------------------------

        if (!friendLocationMarker) {

            friendLocationMarker =
    L.marker(
        friendLatLng,
        {
            icon: friendLocationIcon
        }
    )
    .addTo(liveMap)
    .bindPopup(
        "<strong>Friend</strong>"
    );

            console.log(
                "Friend marker created."
            );

        } else {

            // Move existing marker
            friendLocationMarker.setLatLng(
                friendLatLng
            );

        }


        // Refresh map
        setTimeout(() => {

            if (liveMap) {

                liveMap.invalidateSize(true);

            }

        }, 100);

    }
);

// Current connected journey code
let journeyCode = null;


// Whether this device has successfully
// joined a journey
let journeyConnected = false;


// =====================================================
// JOURNEY UI ELEMENTS
// =====================================================

const journeyCodeInput =
    document.getElementById(
        "journeyCodeInput"
    );

const createJourneyBtn =
    document.getElementById(
        "createJourneyBtn"
    );

const joinJourneyBtn =
    document.getElementById(
        "joinJourneyBtn"
    );

const journeyCodeDisplay =
    document.getElementById(
        "journeyCodeDisplay"
    );

const journeyCodeText =
    document.getElementById(
        "journeyCodeText"
    );

const journeyConnectionStatus =
    document.getElementById(
        "journeyConnectionStatus"
    );

const journeyConnectionText =
    document.getElementById(
        "journeyConnectionText"
    );


// =====================================================
// SHOW LIVE JOURNEY MAP
// =====================================================

function showLiveJourneyMap() {

    const liveJourneySection =
        document.getElementById(
            "liveJourneySection"
        );

    if (!liveJourneySection) {

        console.error(
            "Live Journey section not found."
        );

        return;
    }


    // -----------------------------------------
    // SHOW LIVE JOURNEY SECTION
    // -----------------------------------------

    liveJourneySection.classList.remove(
        "hidden"
    );


    // -----------------------------------------
    // KEEP ROUTE RESULTS HIDDEN
    // -----------------------------------------

    const resultElement =
        document.getElementById(
            "result"
        );

    if (resultElement) {

        resultElement.classList.add(
            "hidden"
        );

    }


    // -----------------------------------------
    // WAIT UNTIL MAP IS VISIBLE
    // -----------------------------------------

    setTimeout(() => {

        console.log(
            "Showing live map..."
        );


        // -------------------------------------
        // INITIALISE LEAFLET
        // -------------------------------------

        if (!liveMapInitialised) {

            initialiseLiveLocationMap();

        }


        // -------------------------------------
        // FORCE LEAFLET TO RECALCULATE SIZE
        // -------------------------------------

        if (liveMap) {

            liveMap.invalidateSize(true);

            console.log(
                "Live map size refreshed."
            );

        }

    }, 500);

}


// =====================================================
// UPDATE JOURNEY CONNECTION UI
// =====================================================

function updateJourneyConnectionStatus(
    connected,
    message
) {

    journeyConnected =
        connected;


    if (
        journeyConnectionText
    ) {

        journeyConnectionText.textContent =
            message;

    }


    if (
        journeyConnectionStatus
    ) {

        if (connected) {

            journeyConnectionStatus.classList.add(
                "connected"
            );

        } else {

            journeyConnectionStatus.classList.remove(
                "connected"
            );

        }

    }

}


// =====================================================
// SOCKET CONNECTED
// =====================================================

socket.on(
    "connect",
    () => {

        console.log(
            "Connected to real-time server:",
            socket.id
        );


        updateJourneyConnectionStatus(
            false,
            "Ready to create or join a journey"
        );

    }
);


// =====================================================
// SOCKET DISCONNECTED
// =====================================================

socket.on(
    "disconnect",
    () => {

        console.log(
            "Disconnected from real-time server."
        );


        journeyConnected =
            false;


        updateJourneyConnectionStatus(
            false,
            "Disconnected from server"
        );

    }
);


// =====================================================
// CREATE JOURNEY
// =====================================================

if (createJourneyBtn) {

    createJourneyBtn.addEventListener(
        "click",
        () => {

            // -----------------------------------------
            // CHECK SOCKET CONNECTION
            // -----------------------------------------

            if (!socket.connected) {

                updateJourneyConnectionStatus(
                    false,
                    "Connecting to server..."
                );

                socket.connect();

                return;

            }


            // -----------------------------------------
            // PREVENT DUPLICATE CLICKS
            // -----------------------------------------

            createJourneyBtn.disabled =
                true;

            createJourneyBtn.textContent =
                "Creating...";


            // -----------------------------------------
            // ASK SERVER TO CREATE JOURNEY
            // -----------------------------------------

            socket.emit(
                "create-journey",
                response => {

                    console.log(
                        "Create journey response:",
                        response
                    );


                    // ---------------------------------
                    // CREATE FAILED
                    // ---------------------------------

                    if (
                        !response ||
                        !response.success
                    ) {

                        createJourneyBtn.disabled =
                            false;

                        createJourneyBtn.textContent =
                            "Generate Journey Code";


                        updateJourneyConnectionStatus(
                            false,
                            response?.message ||
                            "Unable to create journey."
                        );

                        return;

                    }


                    // ---------------------------------
                    // CREATE SUCCESSFUL
                    // ---------------------------------

                    journeyCode =
                        response.code;

                    journeyConnected =
                        true;


                    console.log(
                        "Journey created:",
                        journeyCode
                    );


                    // ---------------------------------
                    // SHOW JOURNEY CODE
                    // ---------------------------------

                    if (journeyCodeText) {

                        journeyCodeText.textContent =
                            journeyCode;

                    }


                    if (journeyCodeDisplay) {

                        journeyCodeDisplay.classList.remove(
                            "hidden"
                        );

                    }


                    // Put code into input as well
                    if (journeyCodeInput) {

                        journeyCodeInput.value =
                            journeyCode;

                    }


                    // ---------------------------------
                    // UPDATE STATUS
                    // ---------------------------------

                    updateJourneyConnectionStatus(
                        true,
                        "Journey created · Share this code with your friend"
                    );


                    // ---------------------------------
                    // SHOW LIVE JOURNEY MAP
                    // ---------------------------------

                    showLiveJourneyMap();


                    // ---------------------------------
                    // UPDATE BUTTON
                    // ---------------------------------

                    createJourneyBtn.disabled =
                        false;

                    createJourneyBtn.textContent =
                        "Generate New Code";

                }
            );

        }
    );

}


// =====================================================
// JOIN JOURNEY
// =====================================================

if (joinJourneyBtn) {

    joinJourneyBtn.addEventListener(
        "click",
        () => {

            // -----------------------------------------
            // GET CODE
            // -----------------------------------------

            const code =
                journeyCodeInput
                    ? journeyCodeInput.value
                        .trim()
                        .toUpperCase()
                    : "";


            // -----------------------------------------
            // CHECK CODE
            // -----------------------------------------

            if (!code) {

                updateJourneyConnectionStatus(
                    false,
                    "Please enter a journey code."
                );

                return;

            }


            if (code.length !== 6) {

                updateJourneyConnectionStatus(
                    false,
                    "Journey code must be 6 characters."
                );

                return;

            }


            // -----------------------------------------
            // CHECK SOCKET CONNECTION
            // -----------------------------------------

            if (!socket.connected) {

                updateJourneyConnectionStatus(
                    false,
                    "Connecting to server..."
                );

                socket.connect();

                return;

            }


            // -----------------------------------------
            // DISABLE BUTTON
            // -----------------------------------------

            joinJourneyBtn.disabled =
                true;

            joinJourneyBtn.textContent =
                "Joining...";


            // -----------------------------------------
            // ASK SERVER TO JOIN
            // -----------------------------------------

            socket.emit(
                "join-journey",
                code,
                response => {

                    console.log(
                        "Join journey response:",
                        response
                    );


                    // ---------------------------------
                    // JOIN FAILED
                    // ---------------------------------

                    if (
                        !response ||
                        !response.success
                    ) {

                        joinJourneyBtn.disabled =
                            false;

                        joinJourneyBtn.textContent =
                            "Join Journey";


                        updateJourneyConnectionStatus(
                            false,
                            response?.message ||
                            "Unable to join journey."
                        );

                        return;

                    }


                    // ---------------------------------
                    // JOIN SUCCESSFUL
                    // ---------------------------------

                    journeyCode =
                        response.code;

                    journeyConnected =
                        true;


                    console.log(
                        "Joined journey:",
                        journeyCode
                    );


                    // ---------------------------------
                    // SHOW JOURNEY CODE
                    // ---------------------------------

                    if (journeyCodeText) {

                        journeyCodeText.textContent =
                            journeyCode;

                    }


                    if (journeyCodeDisplay) {

                        journeyCodeDisplay.classList.remove(
                            "hidden"
                        );

                    }


                    if (journeyCodeInput) {

                        journeyCodeInput.value =
                            journeyCode;

                    }


                    // ---------------------------------
                    // UPDATE STATUS
                    // ---------------------------------

                    updateJourneyConnectionStatus(
                        true,
                        "Journey connected · You can now plan together"
                    );


                    // ---------------------------------
                    // SHOW LIVE JOURNEY MAP
                    // ---------------------------------

                    showLiveJourneyMap();


                    // ---------------------------------
                    // RESET BUTTON
                    // ---------------------------------

                    joinJourneyBtn.disabled =
                        false;

                    joinJourneyBtn.textContent =
                        "Join Journey";

                }
            );

        }
    );

}


// =====================================================
// FRIEND JOINED
// =====================================================

socket.on(
    "friend-joined",
    () => {

        console.log(
            "Friend joined the journey."
        );


        updateJourneyConnectionStatus(
            true,
            "Journey connected · Your friend has joined"
        );


        // Keep live journey map visible
        showLiveJourneyMap();

    }
);


// =====================================================
// FRIEND LEFT
// =====================================================

socket.on(
    "friend-left",
    () => {

        console.log(
            "Friend left the journey."
        );


        // We are still connected to the journey.
        // Only the friend has left.

        updateJourneyConnectionStatus(
            true,
            "Journey connected · Waiting for your friend"
        );

    }
);

// =====================================================
// SHARE MY LOCATION BUTTON
// =====================================================

const shareLocationBtn =
    document.getElementById(
        "shareLocationBtn"
    );

if (shareLocationBtn) {

    shareLocationBtn.addEventListener(
        "click",
        () => {

            console.log(
                "Share My Location clicked."
            );

            startLocationSharing();

        }
    );

} else {

    console.error(
        "Share My Location button not found."
    );

}


// =====================================================
// DESTINATION ALERT
// =====================================================

let selectedAlarmStops = null;

let destinationAlertActive = false;
let destinationAlertStation = null;
let destinationAlertLine = null;
let destinationAlertWatchId = null;
let destinationAlertNotificationInterval = null;

// =====================================================
// GET ALERT ELEMENTS
// =====================================================

const alarmOptionButtons =
    document.querySelectorAll(".alarm-option");

const setDestinationAlarmBtn =
    document.getElementById(
        "setDestinationAlarmBtn"
    );

const alarmDestination =
    document.getElementById(
        "alarmDestination"
    );

const alarmLine =
    document.getElementById(
        "alarmLine"
    );

const destinationAlarmStatus =
    document.getElementById(
        "destinationAlarmStatus"
    );


// =====================================================
// NORMALISE ALERT STATION NAME
// =====================================================

function normaliseAlertStation(name) {

    if (!name) {
        return "";
    }

    let value =
        String(name)
            .trim()
            .replace(/\s+MRT\s+STATION$/i, "")
            .replace(/\s+MRT$/i, "")
            .replace(/\s+MRT\s*$/i, "")
            .trim();

    return value.toLowerCase();

}


// =====================================================
// FIND STATION IN MRT LINE
// =====================================================

function findAlertStationIndex(
    stationName,
    lineName
) {

    const stations =
        mrtLines[lineName];

    if (!stations) {
        return -1;
    }

    const target =
        normaliseAlertStation(
            stationName
        );

    return stations.findIndex(
        station =>
            normaliseAlertStation(
                station
            ) === target
    );

}


// =====================================================
// GET STATION COORDINATES
// =====================================================

async function getAlertStationCoordinates(
    stationName
) {

    const key =
        normaliseAlertStation(
            stationName
        );

    if (
        destinationAlertStationCoordinates[key]
    ) {

        return destinationAlertStationCoordinates[
            key
        ];

    }

    const location =
        await searchOneMapLocation(
            `${stationName} MRT Station`
        );

    if (!location) {

        console.error(
            "Unable to find MRT station:",
            stationName
        );

        return null;
    }

    const coordinates = {

        latitude:
            location.latitude,

        longitude:
            location.longitude

    };

    destinationAlertStationCoordinates[key] =
        coordinates;

    return coordinates;

}


// =====================================================
// FIND NEAREST STATION ON SELECTED LINE
// =====================================================

async function findNearestAlertStation(
    latitude,
    longitude,
    lineName
) {

    const stations =
        mrtLines[lineName];

    if (!stations) {
        return null;
    }

    let nearestStation = null;

    let shortestDistance =
        Infinity;


    for (
        const station of stations
    ) {

        const coordinates =
            await getAlertStationCoordinates(
                station
            );

        if (!coordinates) {
            continue;
        }

        const distance =
            calculateDistance(
                latitude,
                longitude,
                coordinates.latitude,
                coordinates.longitude
            );

        if (
            distance <
            shortestDistance
        ) {

            shortestDistance =
                distance;

            nearestStation = {

                name:
                    station,

                distance:
                    distance,

                index:
                    stations.indexOf(
                        station
                    )

            };

        }

    }

    return nearestStation;

}


// =====================================================
// CHECK DESTINATION ALERT
// =====================================================

async function checkDestinationAlarm(
    latitude,
    longitude
) {

    if (
        !destinationAlertActive ||
        destinationAlertNotified
    ) {

        return;

    }


    if (
        !destinationAlertLine ||
        !destinationAlertStation
    ) {

        return;

    }


    const nearestStation =
        await findNearestAlertStation(
            latitude,
            longitude,
            destinationAlertLine
        );


    if (!nearestStation) {

        return;

    }


    const destinationIndex =
        findAlertStationIndex(
            destinationAlertStation,
            destinationAlertLine
        );


    if (destinationIndex === -1) {

        console.error(
            "Destination station not found on line:",
            destinationAlertStation,
            destinationAlertLine
        );

        return;

    }


    const currentIndex =
        nearestStation.index;


    const stopsAway =
        Math.abs(
            destinationIndex -
            currentIndex
        );


    console.log(
        "Destination Alert:",
        {
            currentStation:
                nearestStation.name,

            destination:
                destinationAlertStation,

            stopsAway:
                stopsAway
        }
    );


    // -----------------------------------------
    // CHECK ALERT DISTANCE
    // -----------------------------------------

    if (
    destinationAlertPreviousStops !== null &&
    destinationAlertPreviousStops > selectedAlarmStops &&
    stopsAway <= selectedAlarmStops &&
    stopsAway > 0
) {

        destinationAlertNotified =
            true;

        destinationAlertActive =
            false;


        if (
            destinationAlertWatchId !== null
        ) {

            navigator.geolocation.clearWatch(
                destinationAlertWatchId
            );

            destinationAlertWatchId =
                null;

        }


        const stopText =
            stopsAway === 1
                ? "stop"
                : "stops";


        const message =
            `${stopsAway} ${stopText} until ${destinationAlertStation} — Get ready to alight!`;


        // -----------------------------------------
        // UPDATE PAGE
        // -----------------------------------------

        if (
            destinationAlarmStatus
        ) {

            destinationAlarmStatus.textContent =
                `🔔 ${message}`;

            destinationAlarmStatus.classList.remove(
                "hidden"
            );

        }


        // -----------------------------------------
        // SEND DEVICE NOTIFICATION
        // -----------------------------------------

        if (
            "Notification" in window &&
            Notification.permission === "granted"
        ) {

            new Notification(
                "CommuteTogether",
                {
                    body:
                        message
                }
            );

        }


        console.log(
            "DESTINATION ALERT TRIGGERED"
        );

    }
    destinationAlertPreviousStops =
    stopsAway;
}


// =====================================================
// SELECT NUMBER OF STOPS
// =====================================================

alarmOptionButtons.forEach(
    button => {

        button.addEventListener(
            "click",
            () => {

                alarmOptionButtons.forEach(
                    btn => {

                        btn.classList.remove(
                            "selected"
                        );

                    }
                );


                button.classList.add(
                    "selected"
                );


                selectedAlarmStops =
                    Number(
                        button.dataset.stops
                    );


                console.log(
                    "Selected alert:",
                    selectedAlarmStops,
                    "stops"
                );

            }
        );

    }
);


// =====================================================
// SET DESTINATION ALERT
// =====================================================

const cancelDestinationAlarmBtn =
    document.getElementById(
        "cancelDestinationAlarmBtn"
    );


if (setDestinationAlarmBtn) {

    setDestinationAlarmBtn.addEventListener(
        "click",
        async () => {

            const destination =
                alarmDestination.value.trim();

            const line =
                alarmLine.value;


            // -----------------------------------------
            // CHECK DESTINATION
            // -----------------------------------------

            if (!destination) {

                destinationAlarmStatus.textContent =
                    "Please enter your destination stop.";

                destinationAlarmStatus.classList.remove(
                    "hidden"
                );

                return;

            }


            // -----------------------------------------
            // CHECK MRT LINE
            // -----------------------------------------

            if (!line) {

                destinationAlarmStatus.textContent =
                    "Please select your MRT line.";

                destinationAlarmStatus.classList.remove(
                    "hidden"
                );

                return;

            }


            // -----------------------------------------
            // CHECK NUMBER OF STOPS
            // -----------------------------------------

            if (!selectedAlarmStops) {

                destinationAlarmStatus.textContent =
                    "Please select when you want to be alerted.";

                destinationAlarmStatus.classList.remove(
                    "hidden"
                );

                return;

            }


            // -----------------------------------------
            // CHECK NOTIFICATIONS
            // -----------------------------------------

            if (!("Notification" in window)) {

                destinationAlarmStatus.textContent =
                    "Notifications are not supported by this browser.";

                destinationAlarmStatus.classList.remove(
                    "hidden"
                );

                return;

            }


            const permission =
                await Notification.requestPermission();


            if (permission !== "granted") {

                destinationAlarmStatus.textContent =
                    "Please allow notifications to use the destination alert.";

                destinationAlarmStatus.classList.remove(
                    "hidden"
                );

                return;

            }


            // -----------------------------------------
            // SAVE ALERT SETTINGS
            // -----------------------------------------

            destinationAlertStation =
                destination;

            destinationAlertLine =
                line;

            destinationAlertActive =
                true;


            // -----------------------------------------
            // CLEAR OLD TEST TIMER
            // -----------------------------------------

            if (
                destinationAlertNotificationInterval !== null
            ) {

                clearInterval(
                    destinationAlertNotificationInterval
                );

            }


            // -----------------------------------------
            // NOTIFICATION FUNCTION
            // -----------------------------------------

            function sendDestinationNotification() {

                const message =
                    `Get ready to alight at ${destinationAlertStation}!`;

                new Notification(
                    "CommuteTogether",
                    {
                        body: message
                    }
                );

                console.log(
                    "Destination notification sent:",
                    new Date().toLocaleTimeString()
                );

            }


            // -----------------------------------------
            // SEND IMMEDIATELY
            // -----------------------------------------

            sendDestinationNotification();


            // -----------------------------------------
            // SEND EVERY 10 SECONDS
            // -----------------------------------------

            destinationAlertNotificationInterval =
                setInterval(
                    () => {

                        if (
                            !destinationAlertActive
                        ) {

                            return;

                        }

                        sendDestinationNotification();

                    },
                    10000
                );


            // -----------------------------------------
            // SHOW STATUS
            // -----------------------------------------

            destinationAlarmStatus.textContent =
                `🔔 Alert active for ${destinationAlertStation} · Notification every 10 seconds.`;

            destinationAlarmStatus.classList.remove(
                "hidden"
            );


            console.log(
                "Destination Alert Started"
            );

        }
    );

}


// =====================================================
// CANCEL DESTINATION ALERT
// =====================================================

if (cancelDestinationAlarmBtn) {

    cancelDestinationAlarmBtn.addEventListener(
        "click",
        () => {

            destinationAlertActive =
                false;


            if (
                destinationAlertNotificationInterval !== null
            ) {

                clearInterval(
                    destinationAlertNotificationInterval
                );

                destinationAlertNotificationInterval =
                    null;

            }


            if (
                destinationAlertWatchId !== null
            ) {

                navigator.geolocation.clearWatch(
                    destinationAlertWatchId
                );

                destinationAlertWatchId =
                    null;

            }


            destinationAlarmStatus.textContent =
                "Alert cancelled.";

            destinationAlarmStatus.classList.remove(
                "hidden"
            );


            console.log(
                "Destination Alert Cancelled"
            );

        }
    );

}


// =====================================================
// DAILY COMMUTE ROUTE ALERT PROTOTYPE
// =====================================================

const commuterRouteFormButton =
    document.getElementById(
        "findButton"
    );

const commuterStartInput =
    document.getElementById(
        "userLocation"
    );

const commuterEndInput =
    document.getElementById(
        "friendLocation"
    );

const commuterRouteNameInput =
    document.getElementById(
        "destination"
    );

const commuteTimeInput =
    document.getElementById(
        "commuteTime"
    );

const notifyBeforeSelect =
    document.getElementById(
        "notifyBefore"
    );

const customNotifyField =
    document.getElementById(
        "customNotifyField"
    );

const customNotifyBeforeInput =
    document.getElementById(
        "customNotifyBefore"
    );

const routePrioritySelect =
    document.getElementById(
        "routePriority"
    );

const savedRoutesList =
    document.getElementById(
        "savedRoutesList"
    );

const editRoutesBtn =
    document.getElementById(
        "editRoutesBtn"
    );

const elderlyModeToggle =
    document.getElementById(
        "elderlyModeToggle"
    );

const incidentTimeLabel =
    document.querySelector(
        ".incident-time"
    );

const SAVED_ROUTES_STORAGE_KEY =
    "commuteTogetherSavedRoutes";

const routeReminderTimers =
    new Map();

const defaultSavedRoutes = [
    {
        id:
            "default-morning",
        name:
            "Morning commute",
        start:
            "Sengkang",
        end:
            "Raffles Place",
        commuteTime:
            "08:00",
        notifyMinutes:
            20,
        priority:
            "fastest"
    },
    {
        id:
            "default-evening",
        name:
            "Evening commute",
        start:
            "Raffles Place",
        end:
            "Sengkang",
        commuteTime:
            "18:15",
        notifyMinutes:
            30,
        priority:
            "fastest"
    }
];

function formatCommuteTime(timeValue) {

    if (!timeValue) {
        return "time not set";
    }

    const [
        hourText,
        minuteText
    ] = timeValue.split(":");

    const hour =
        Number(hourText);

    const suffix =
        hour >= 12
            ? "PM"
            : "AM";

    const displayHour =
        hour % 12 || 12;

    return `${displayHour}:${minuteText} ${suffix}`;
}

function createRouteId() {

    return `route-${Date.now()}-${Math.random()
        .toString(36)
        .slice(2, 8)}`;
}

function getRoutePriorityLabel(value) {

    const labels = {
        fastest:
            "fastest alternative",
        "least-transfer":
            "fewer transfers",
        "bus-friendly":
            "bus backup routes"
    };

    return labels[value] || labels.fastest;
}

function getSelectedNotifyMinutes() {

    if (
        notifyBeforeSelect &&
        notifyBeforeSelect.value === "custom"
    ) {

        const customValue =
            customNotifyBeforeInput
                ? Number(
                    customNotifyBeforeInput.value
                )
                : 0;

        return customValue > 0
            ? customValue
            : 60;
    }

    return notifyBeforeSelect
        ? Number(
            notifyBeforeSelect.value
        )
        : 20;
}

function escapeHtml(value) {

    return String(value)
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function showCommuterMessage(message) {

    const errorMessage =
        document.getElementById(
            "errorMessage"
        );

    if (!errorMessage) {
        return;
    }

    errorMessage.textContent =
        message;

    errorMessage.style.display =
        "block";
}

function loadSavedRoutes() {

    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    SAVED_ROUTES_STORAGE_KEY
                ) || "null"
            );

        if (Array.isArray(saved)) {
            return saved;
        }

    } catch (error) {

        console.error(
            "Unable to load saved routes:",
            error
        );
    }

    saveSavedRoutes(
        defaultSavedRoutes
    );

    return defaultSavedRoutes;
}

function saveSavedRoutes(routes) {

    localStorage.setItem(
        SAVED_ROUTES_STORAGE_KEY,
        JSON.stringify(routes)
    );
}

function getRouteDetailUrl(routeId) {

    return `route.html?id=${encodeURIComponent(routeId)}`;
}

function getNextReminderTime(route) {

    if (!route.commuteTime) {
        return null;
    }

    const [
        hourText,
        minuteText
    ] = route.commuteTime.split(":");

    const reminder =
        new Date();

    reminder.setHours(
        Number(hourText),
        Number(minuteText),
        0,
        0
    );

    reminder.setMinutes(
        reminder.getMinutes() -
            Number(route.notifyMinutes || 0)
    );

    if (reminder <= new Date()) {
        reminder.setDate(
            reminder.getDate() + 1
        );
    }

    return reminder;
}

function showRouteReminderPopup(route) {

    const existingPopup =
        document.querySelector(
            ".route-reminder-popup"
        );

    if (existingPopup) {
        existingPopup.remove();
    }

    const popup =
        document.createElement(
            "div"
        );

    popup.className =
        "route-reminder-popup";

    popup.innerHTML = `
        <div class="route-reminder-card">
            <span class="section-label">ROUTE REMINDER</span>
            <h3>${escapeHtml(route.name || "Saved route")}</h3>
            <p>${escapeHtml(route.start)} to ${escapeHtml(route.end)} is coming up soon.</p>
            <div class="route-reminder-actions">
                <button type="button" class="reminder-open-route">View route map</button>
                <button type="button" class="reminder-dismiss">Dismiss</button>
            </div>
        </div>
    `;

    document.body.appendChild(
        popup
    );

    popup.querySelector(
        ".reminder-open-route"
    ).addEventListener(
        "click",
        () => {
            window.location.href =
                getRouteDetailUrl(route.id);
        }
    );

    popup.querySelector(
        ".reminder-dismiss"
    ).addEventListener(
        "click",
        () => popup.remove()
    );
}

function scheduleRouteReminder(route) {

    if (!route || !route.id) {
        return;
    }

    if (
        routeReminderTimers.has(route.id)
    ) {
        clearTimeout(
            routeReminderTimers.get(route.id)
        );
    }

    const reminderTime =
        getNextReminderTime(route);

    if (!reminderTime) {
        return;
    }

    const timerId =
        setTimeout(
            () => {

                showRouteReminderPopup(
                    route
                );

                if (
                    "Notification" in window &&
                    Notification.permission ===
                        "granted"
                ) {

                    const notification =
                        new Notification(
                            route.name ||
                                "Route reminder",
                            {
                                body:
                                    `${route.start} to ${route.end} is coming up soon.`
                            }
                        );

                    notification.onclick =
                        () => {
                            window.focus();
                            window.location.href =
                                getRouteDetailUrl(
                                    route.id
                                );
                        };
                }

                scheduleRouteReminder(
                    route
                );

            },
            reminderTime.getTime() -
                Date.now()
        );

    routeReminderTimers.set(
        route.id,
        timerId
    );
}

function scheduleAllRouteReminders() {

    routeReminderTimers.forEach(
        timerId => clearTimeout(timerId)
    );

    routeReminderTimers.clear();

    loadSavedRoutes().forEach(
        scheduleRouteReminder
    );
}

function renderSavedRouteItem(route) {

    const article =
        document.createElement(
            "article"
        );

    article.className =
        "saved-route-item";

    article.dataset.routeId =
        route.id;

    const travelTime =
        formatCommuteTime(
            route.commuteTime
        );

    const priority =
        getRoutePriorityLabel(
            route.priority
        );

    article.innerHTML = `
        <button
            class="route-order-handle"
            type="button"
            aria-label="Move route"
            title="Move route"
        >::</button>
        <div class="saved-route-copy">
            <strong>${escapeHtml(route.name || "Daily commute")}</strong>
            <span>${escapeHtml(route.start)} to ${escapeHtml(route.end)} - ${escapeHtml(travelTime)} - alert ${escapeHtml(route.notifyMinutes)} min before - ${escapeHtml(priority)}</span>
        </div>
        <span class="route-status-pill">Monitoring</span>
        <button
            class="delete-route-btn"
            type="button"
        >Delete</button>
    `;

    return article;
}

function renderSavedRoutes() {

    if (!savedRoutesList) {
        return;
    }

    savedRoutesList.innerHTML =
        "";

    loadSavedRoutes().forEach(
        route => {
            savedRoutesList.appendChild(
                renderSavedRouteItem(route)
            );
        }
    );
}

function addSavedCommuterRoute() {

    if (
        !commuterStartInput ||
        !commuterEndInput ||
        !savedRoutesList
    ) {
        return;
    }

    const start =
        (
            commuterStartInput.dataset.address ||
            commuterStartInput.value
        ).trim();

    const end =
        (
            commuterEndInput.dataset.address ||
            commuterEndInput.value
        ).trim();

    if (!start || !end) {

        showCommuterMessage(
            "Please enter a start and end location for this daily route."
        );

        return;
    }

    const routeName =
        commuterRouteNameInput &&
        commuterRouteNameInput.value.trim()
            ? commuterRouteNameInput.value.trim()
            : "Daily commute";

    const notifyMinutes =
        getSelectedNotifyMinutes();

    const travelTime =
        commuteTimeInput
            ? formatCommuteTime(
                commuteTimeInput.value
            )
            : "time not set";

    const priority =
        routePrioritySelect
            ? getRoutePriorityLabel(
                routePrioritySelect.value
            )
            : "fastest alternative";

    const routeItem =
        document.createElement(
            "article"
        );

    routeItem.className =
        "saved-route-item";

    routeItem.innerHTML = `
        <button
            class="route-order-handle"
            type="button"
            aria-label="Move route"
            title="Move route"
        >⋮⋮</button>
        <div class="saved-route-copy">
            <strong>${escapeHtml(routeName)}</strong>
            <span>${escapeHtml(start)} to ${escapeHtml(end)} - ${escapeHtml(travelTime)} - alert ${escapeHtml(notifyMinutes)} min before - ${escapeHtml(priority)}</span>
        </div>
        <span class="route-status-pill">Monitoring</span>
        <button
            class="delete-route-btn"
            type="button"
        >Delete</button>
    `;

    savedRoutesList.prepend(
        routeItem
    );

    if (incidentTimeLabel) {
        incidentTimeLabel.textContent =
            `Check ${notifyMinutes} min before`;
    }

    showCommuterMessage(
        "Route alert saved. LTA incident checks and Google Maps alternatives can be connected when the APIs are linked."
    );
}

function addSavedCommuterRouteV2() {

    if (
        !commuterStartInput ||
        !commuterEndInput ||
        !savedRoutesList
    ) {
        return;
    }

    const start =
        (
            commuterStartInput.dataset.address ||
            commuterStartInput.value
        ).trim();

    const end =
        (
            commuterEndInput.dataset.address ||
            commuterEndInput.value
        ).trim();

    if (!start || !end) {

        showCommuterMessage(
            "Please enter a start and end location for this daily route."
        );

        return;
    }

    const routeName =
        commuterRouteNameInput &&
        commuterRouteNameInput.value.trim()
            ? commuterRouteNameInput.value.trim()
            : "Daily commute";

    const notifyMinutes =
        getSelectedNotifyMinutes();

    const commuteTime =
        commuteTimeInput
            ? commuteTimeInput.value
            : "";

    const travelTime =
        commuteTime
            ? formatCommuteTime(
                commuteTime
            )
            : "time not set";

    const route =
        {
            id:
                createRouteId(),

            name:
                routeName,

            start:
                start,

            end:
                end,

            startLatitude:
                commuterStartInput.dataset.latitude || "",

            startLongitude:
                commuterStartInput.dataset.longitude || "",

            startPlaceId:
                commuterStartInput.dataset.placeId || "",

            endLatitude:
                commuterEndInput.dataset.latitude || "",

            endLongitude:
                commuterEndInput.dataset.longitude || "",

            endPlaceId:
                commuterEndInput.dataset.placeId || "",

            commuteTime:
                commuteTime,

            notifyMinutes:
                notifyMinutes,

            priority:
                routePrioritySelect
                    ? routePrioritySelect.value
                    : "fastest",

            createdAt:
                new Date().toISOString()
        };

    const routes =
        loadSavedRoutes();

    routes.unshift(
        route
    );

    saveSavedRoutes(
        routes
    );

    renderSavedRoutes();

    scheduleRouteReminder(
        route
    );

    if (incidentTimeLabel) {
        incidentTimeLabel.textContent =
            `Check ${notifyMinutes} min before`;
    }

    showCommuterMessage(
        `Route alert saved for ${travelTime}. A reminder popup will appear ${notifyMinutes} minutes before you leave while this app is open.`
    );

    if (
        "Notification" in window &&
        Notification.permission === "default"
    ) {
        Notification.requestPermission();
    }
}

if (commuterRouteFormButton) {

    commuterRouteFormButton.addEventListener(
        "click",
        addSavedCommuterRouteV2
    );
}

if (notifyBeforeSelect && customNotifyField) {

    notifyBeforeSelect.addEventListener(
        "change",
        () => {

            customNotifyField.classList.toggle(
                "hidden",
                notifyBeforeSelect.value !==
                    "custom"
            );

        }
    );
}

if (editRoutesBtn && savedRoutesList) {

    editRoutesBtn.addEventListener(
        "click",
        () => {

            const isEditing =
                savedRoutesList.classList.toggle(
                    "editing"
                );

            editRoutesBtn.classList.toggle(
                "active",
                isEditing
            );

            editRoutesBtn.textContent =
                isEditing ? "Done" : "Edit";

        }
    );
}

if (savedRoutesList) {

    savedRoutesList.addEventListener(
        "click",
        event => {

            const deleteButton =
                event.target.closest(
                    ".delete-route-btn"
                );

            if (deleteButton) {

                const route =
                    deleteButton.closest(
                        ".saved-route-item"
                    );

                if (route) {
                    const routeId =
                        route.dataset.routeId;

                    saveSavedRoutes(
                        loadSavedRoutes()
                            .filter(
                                savedRoute =>
                                    savedRoute.id !==
                                    routeId
                            )
                    );

                    route.remove();

                    scheduleAllRouteReminders();
                }

                return;
            }

            const handle =
                event.target.closest(
                    ".route-order-handle"
                );

            if (!handle) {
                const routeCard =
                    event.target.closest(
                        ".saved-route-item"
                    );

                if (
                    routeCard &&
                    routeCard.dataset.routeId &&
                    !savedRoutesList.classList.contains(
                        "editing"
                    )
                ) {
                    window.location.href =
                        getRouteDetailUrl(
                            routeCard.dataset.routeId
                        );
                }

                return;
            }

            const route =
                handle.closest(
                    ".saved-route-item"
                );

            if (!route) {
                return;
            }

            const nextRoute =
                route.nextElementSibling;

            if (nextRoute) {

                savedRoutesList.insertBefore(
                    nextRoute,
                    route
                );

            } else {

                savedRoutesList.prepend(
                    route
                );

            }

            const orderedIds =
                Array.from(
                    savedRoutesList.querySelectorAll(
                        ".saved-route-item"
                    )
                ).map(
                    item => item.dataset.routeId
                );

            const routesById =
                new Map(
                    loadSavedRoutes().map(
                        savedRoute => [
                            savedRoute.id,
                            savedRoute
                        ]
                    )
                );

            saveSavedRoutes(
                orderedIds
                    .map(id => routesById.get(id))
                    .filter(Boolean)
            );

        }
    );
}

renderSavedRoutes();
scheduleAllRouteReminders();

function setElderlyMode(enabled) {

    document.body.classList.toggle(
        "elderly-mode",
        enabled
    );

    localStorage.setItem(
        "elderlyMode",
        enabled ? "true" : "false"
    );
}

const savedElderlyPreference =
    localStorage.getItem(
        "elderlyMode"
    ) === "true";

setElderlyMode(
    savedElderlyPreference
);

if (elderlyModeToggle) {

    elderlyModeToggle.checked =
        savedElderlyPreference;

    elderlyModeToggle.addEventListener(
        "change",
        () => {

            setElderlyMode(
                elderlyModeToggle.checked
            );

        }
    );
}


// =====================================================
// LOCATION INPUT DROPDOWNS
// =====================================================

const currentLocationLabels =
    new Map();

function getCurrentLocationLabel(inputId) {

    return currentLocationLabels.get(
        inputId
    ) || "Your location";
}

function setCurrentLocationLabel(
    inputId,
    label
) {

    currentLocationLabels.set(
        inputId,
        label
    );
}

function renderLocationSuggestions(
    input,
    menu,
    suggestions,
    state = "ready"
) {

    if (!input || !menu) {
        return;
    }

    const currentLabel =
        getCurrentLocationLabel(
            input.id
        );

    let html = `
        <button
            type="button"
            class="location-suggestion"
            data-kind="current"
        >
            <span class="suggestion-icon">GPS</span>
            <span class="suggestion-text">
                <span class="suggestion-title">${escapeHtml(currentLabel)}</span>
                <span class="suggestion-address">Use your current device location</span>
            </span>
        </button>
    `;

    if (state === "loading") {

        html += `
            <button
                type="button"
                class="location-suggestion loading"
                disabled
            >
                <span class="suggestion-icon">...</span>
                <span class="suggestion-text">
                    <span class="suggestion-title">Searching nearby places</span>
                    <span class="suggestion-address">Finding matching locations...</span>
                </span>
            </button>
        `;

    } else if (
        input.value.trim().length >= 2 &&
        suggestions.length === 0
    ) {

        html += `
            <button
                type="button"
                class="location-suggestion empty"
                disabled
            >
                <span class="suggestion-icon">?</span>
                <span class="suggestion-text">
                    <span class="suggestion-title">No nearby matches found</span>
                    <span class="suggestion-address">Try a station, mall, road, or building name.</span>
                </span>
            </button>
        `;

    } else {

        suggestions.forEach(
            (suggestion, index) => {

                html += `
                    <button
                        type="button"
                        class="location-suggestion"
                        data-kind="place"
                        data-index="${index}"
                    >
                        <span class="suggestion-icon">PIN</span>
                        <span class="suggestion-text">
                            <span class="suggestion-title">${escapeHtml(suggestion.name || "Location")}</span>
                            <span class="suggestion-address">${escapeHtml(suggestion.address || "")}</span>
                        </span>
                    </button>
                `;

            }
        );
    }

    menu.innerHTML =
        html;

    menu.classList.remove(
        "hidden"
    );
}

function useBrowserLocation(
    input,
    menu
) {

    if (!navigator.geolocation) {

        input.value =
            "Your location";

        if (menu) {
            menu.classList.add(
                "hidden"
            );
        }

        showCommuterMessage(
            "Current location is not supported by this browser."
        );

        return;
    }

    input.value =
        "Getting your location...";

    navigator.geolocation.getCurrentPosition(
        position => {

            const label =
                `Your location (${position.coords.latitude.toFixed(4)}, ${position.coords.longitude.toFixed(4)})`;

            setCurrentLocationLabel(
                input.id,
                label
            );

            input.value =
                label;

            input.dataset.latitude =
                position.coords.latitude;

            input.dataset.longitude =
                position.coords.longitude;

            if (menu) {
                menu.classList.add(
                    "hidden"
                );
            }

        },
        () => {

            input.value =
                "Your location";

            if (menu) {
                menu.classList.add(
                    "hidden"
                );
            }

            showCommuterMessage(
                "Location permission was not allowed. You can still type a place manually."
            );

        },
        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 60000
        }
    );
}

function setupLocationDropdown(
    inputId,
    menuId
) {

    return;

    const input =
        document.getElementById(
            inputId
        );

    const menu =
        document.getElementById(
            menuId
        );

    if (!input || !menu) {
        return;
    }

    let latestRequestId = 0;
    let debounceTimer = null;
    let currentSuggestions = [];

    input.value =
        "Your location";

    setCurrentLocationLabel(
        input.id,
        "Your location"
    );

    input.addEventListener(
        "focus",
        () => {

            renderLocationSuggestions(
                input,
                menu,
                currentSuggestions
            );

        }
    );

    input.addEventListener(
        "input",
        () => {

            input.dataset.latitude = "";
            input.dataset.longitude = "";

            const query =
                input.value.trim();

            clearTimeout(
                debounceTimer
            );

            if (query.length < 2) {

                currentSuggestions = [];

                renderLocationSuggestions(
                    input,
                    menu,
                    currentSuggestions
                );

                return;
            }

            renderLocationSuggestions(
                input,
                menu,
                currentSuggestions,
                "loading"
            );

            const requestId =
                latestRequestId + 1;

            latestRequestId =
                requestId;

            debounceTimer =
                setTimeout(
                    async () => {

                        const suggestions =
                            await searchOneMapLocationSuggestions(
                                query
                            );

                        if (
                            requestId !==
                            latestRequestId
                        ) {
                            return;
                        }

                        currentSuggestions =
                            suggestions;

                        renderLocationSuggestions(
                            input,
                            menu,
                            currentSuggestions
                        );

                    },
                    250
                );

        }
    );

    menu.addEventListener(
        "mousedown",
        event => {

            const button =
                event.target.closest(
                    ".location-suggestion"
                );

            if (
                !button ||
                button.disabled
            ) {
                return;
            }

            event.preventDefault();

            if (
                button.dataset.kind ===
                "current"
            ) {

                useBrowserLocation(
                    input,
                    menu
                );

                return;
            }

            const suggestion =
                currentSuggestions[
                    Number(
                        button.dataset.index
                    )
                ];

            if (!suggestion) {
                return;
            }

            input.value =
                suggestion.name;

            input.dataset.latitude =
                suggestion.latitude;

            input.dataset.longitude =
                suggestion.longitude;

            menu.classList.add(
                "hidden"
            );

        }
    );

    input.addEventListener(
        "blur",
        () => {

            setTimeout(
                () => {

                    menu.classList.add(
                        "hidden"
                    );

                },
                140
            );

        }
    );
}

setupLocationDropdown(
    "userLocation",
    "userLocationSuggestions"
);

setupLocationDropdown(
    "friendLocation",
    "friendLocationSuggestions"
);


// =====================================================
// ANY-LOCATION AUTOCOMPLETE
// Based on the smart-commuter start/end location inputs.
// =====================================================

async function searchOneMapSuggestions(
    searchValue,
    limit = 5
) {

    if (
        !searchValue ||
        searchValue.trim().length < 2
    ) {
        return [];
    }

    try {

        const url =
            `http://localhost:3000/api/search` +
            `?search=${encodeURIComponent(
                searchValue
            )}`;

        const response =
            await fetch(url);

        if (!response.ok) {
            throw new Error(
                "Backend search failed"
            );
        }

        const data =
            await response.json();

        if (
            !data.results ||
            data.results.length === 0
        ) {
            return getFallbackLocationSuggestions(
                searchValue
            );
        }

        const options =
            data.results
                .map(result => {

                    const latitude =
                        parseFloat(
                            result.LATITUDE
                        );

                    const longitude =
                        parseFloat(
                            result.LONGITUDE
                        );

                    if (
                        !Number.isFinite(latitude) ||
                        !Number.isFinite(longitude)
                    ) {
                        return null;
                    }

                    return {
                        name:
                            result.BUILDING ||
                            result.SEARCHVAL ||
                            result.ADDRESS,

                        address:
                            result.ADDRESS,

                        latitude:
                            latitude,

                        longitude:
                            longitude
                    };
                })
                .filter(Boolean)
                .slice(0, limit);

        return options.length > 0
            ? options
            : getFallbackLocationSuggestions(
                searchValue
            );

    } catch (error) {

        console.error(
            "Location suggestion error:",
            error
        );

        return getFallbackLocationSuggestions(
            searchValue
        );
    }
}

function setSelectedLocation(
    input,
    location
) {

    input.value =
        location.name;

    input.dataset.address =
        location.address || location.name;

    input.dataset.latitude =
        String(location.latitude || "");

    input.dataset.longitude =
        String(location.longitude || "");
}

function clearSelectedLocation(
    input
) {

    delete input.dataset.address;
    delete input.dataset.latitude;
    delete input.dataset.longitude;
}

function createLocationSuggestionButton(
    option,
    onSelect
) {

    const button =
        document.createElement(
            "button"
        );

    button.type =
        "button";

    button.className =
        "location-suggestion";

    const icon =
        document.createElement(
            "span"
        );

    icon.className =
        "location-suggestion-icon suggestion-icon";

    icon.textContent =
        option.icon || "PIN";

    const text =
        document.createElement(
            "span"
        );

    const main =
        document.createElement(
            "span"
        );

    main.className =
        "location-suggestion-main suggestion-title";

    main.textContent =
        option.name;

    const sub =
        document.createElement(
            "span"
        );

    sub.className =
        "location-suggestion-sub suggestion-address";

    sub.textContent =
        option.address || "";

    text.appendChild(main);

    if (option.address) {
        text.appendChild(sub);
    }

    button.appendChild(icon);
    button.appendChild(text);

    button.addEventListener(
        "mousedown",
        event => {

            event.preventDefault();

            onSelect(option);
        }
    );

    return button;
}

function setupLocationAutocomplete({
    inputId,
    suggestionsId,
    includeCurrentLocation = false
}) {

    const input =
        document.getElementById(
            inputId
        );

    const suggestions =
        document.getElementById(
            suggestionsId
        );

    if (!input || !suggestions) {
        return;
    }

    input.value =
        "";

    clearSelectedLocation(
        input
    );

    let debounceTimer = null;
    let requestId = 0;
    let latestOptions = [];

    function hideSuggestions() {

        suggestions.classList.add(
            "hidden"
        );

        suggestions.innerHTML =
            "";
    }

    function showMessage(message) {

        suggestions.innerHTML =
            "";

        suggestions.appendChild(
            createLocationSuggestionButton(
                {
                    name:
                        message,
                    icon:
                        "i"
                },
                () => {}
            )
        );

        suggestions.classList.remove(
            "hidden"
        );
    }

    function chooseCurrentLocation() {

        if (!navigator.geolocation) {

            showMessage(
                "Current location is not supported by this browser."
            );

            return;
        }

        showMessage(
            "Getting your current location..."
        );

        navigator.geolocation.getCurrentPosition(
            position => {

                const latitude =
                    position.coords.latitude;

                const longitude =
                    position.coords.longitude;

                setSelectedLocation(
                    input,
                    {
                        name:
                            "Current location",

                        address:
                            `${latitude.toFixed(5)}, ${longitude.toFixed(5)}`,

                        latitude:
                            latitude,

                        longitude:
                            longitude
                    }
                );

                hideSuggestions();
            },
            error => {

                console.error(
                    "Current location error:",
                    error
                );

                showMessage(
                    "Allow location access to use current location."
                );
            },
            {
                enableHighAccuracy:
                    true,

                maximumAge:
                    30000,

                timeout:
                    12000
            }
        );
    }

    function renderSuggestions(
        options
    ) {

        suggestions.innerHTML =
            "";

        if (includeCurrentLocation) {

            suggestions.appendChild(
                createLocationSuggestionButton(
                    {
                        name:
                            "Use current location",

                        address:
                            "Use this device's GPS position",

                        icon:
                            "GPS"
                    },
                    chooseCurrentLocation
                )
            );
        }

        options.forEach(
            option => {

                suggestions.appendChild(
                    createLocationSuggestionButton(
                        {
                            ...option,
                            icon:
                                "PIN"
                        },
                        selected => {

                            setSelectedLocation(
                                input,
                                selected
                            );

                            hideSuggestions();
                        }
                    )
                );
            }
        );

        if (
            suggestions.children.length === 0
        ) {

            hideSuggestions();

            return;
        }

        suggestions.classList.remove(
            "hidden"
        );
    }

    input.addEventListener(
        "focus",
        () => {

            renderSuggestions(
                latestOptions
            );
        }
    );

    input.addEventListener(
        "input",
        () => {

            clearSelectedLocation(
                input
            );

            window.clearTimeout(
                debounceTimer
            );

            const value =
                input.value.trim();

            if (value.length < 2) {

                latestOptions =
                    [];

                renderSuggestions(
                    latestOptions
                );

                return;
            }

            debounceTimer =
                window.setTimeout(
                    async () => {

                        const currentRequest =
                            ++requestId;

                        const options =
                            await searchOneMapSuggestions(
                                value
                            );

                        if (
                            currentRequest !==
                            requestId
                        ) {
                            return;
                        }

                        latestOptions =
                            options;

                        renderSuggestions(
                            latestOptions
                        );

                    },
                    250
                );
        }
    );

    input.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {
                hideSuggestions();
            }
        }
    );

    document.addEventListener(
        "mousedown",
        event => {

            if (
                input.contains(event.target) ||
                suggestions.contains(event.target)
            ) {
                return;
            }

            hideSuggestions();
        }
    );
}

async function getGoogleMapsApiKey() {

    try {

        const response =
            await fetch(
                "/api/config/maps"
            );

        if (!response.ok) {
            return "";
        }

        const config =
            await response.json();

        return config.googleMapsApiKey || "";

    } catch (error) {

        console.error(
            "Unable to load Google Maps config:",
            error
        );

        return "";
    }
}

function loadGooglePlacesScript(apiKey) {

    return new Promise(
        (resolve, reject) => {

            if (
                window.google &&
                window.google.maps &&
                window.google.maps.places
            ) {
                resolve();
                return;
            }

            window.initGooglePlacesAutocomplete =
                resolve;

            const script =
                document.createElement(
                    "script"
                );

            script.src =
                "https://maps.googleapis.com/maps/api/js" +
                `?key=${encodeURIComponent(apiKey)}` +
                "&libraries=places" +
                "&callback=initGooglePlacesAutocomplete";

            script.async =
                true;

            script.defer =
                true;

            script.onerror =
                () => reject(
                    new Error(
                        "Unable to load Google Places"
                    )
                );

            document.head.appendChild(
                script
            );
        }
    );
}

function setupGooglePlaceInput(
    inputId
) {

    const input =
        document.getElementById(
            inputId
        );

    if (!input) {
        return;
    }

    const autocomplete =
        new google.maps.places.Autocomplete(
            input,
            {
                fields: [
                    "formatted_address",
                    "geometry",
                    "name",
                    "place_id"
                ]
            }
        );

    input.value =
        "";

    clearSelectedLocation(
        input
    );

    input.addEventListener(
        "input",
        () => {
            clearSelectedLocation(
                input
            );
        }
    );

    autocomplete.addListener(
        "place_changed",
        () => {

            const place =
                autocomplete.getPlace();

            if (
                !place ||
                !place.geometry ||
                !place.geometry.location
            ) {
                showCommuterMessage(
                    "Please select a location from the Google suggestions."
                );
                return;
            }

            const latitude =
                place.geometry.location.lat();

            const longitude =
                place.geometry.location.lng();

            setSelectedLocation(
                input,
                {
                    name:
                        place.name ||
                        place.formatted_address ||
                        input.value,

                    address:
                        place.formatted_address ||
                        place.name ||
                        input.value,

                    latitude:
                        latitude,

                    longitude:
                        longitude
                }
            );

            input.dataset.placeId =
                place.place_id || "";
        }
    );
}

async function initStartEndLocationInputs() {

    const apiKey =
        await getGoogleMapsApiKey();

    if (apiKey) {

        try {

            await loadGooglePlacesScript(
                apiKey
            );

            document
                .querySelectorAll(
                    ".location-suggestions"
                )
                .forEach(
                    element => {
                        element.classList.add(
                            "hidden"
                        );
                    }
                );

            setupGooglePlaceInput(
                "userLocation"
            );

            setupGooglePlaceInput(
                "friendLocation"
            );

            return;

        } catch (error) {

            console.error(
                "Google Places autocomplete failed:",
                error
            );
        }
    }

    setupLocationAutocomplete({
        inputId:
            "userLocation",

        suggestionsId:
            "userLocationSuggestions",

        includeCurrentLocation:
            true
    });

    setupLocationAutocomplete({
        inputId:
            "friendLocation",

        suggestionsId:
            "friendLocationSuggestions"
    });
}

initStartEndLocationInputs();


// =====================================================
// LIVE LTA TRAIN SERVICE ALERTS
// =====================================================

const incidentCard =
    document.querySelector(
        ".incident-card"
    );

const incidentHeading =
    incidentCard
        ? incidentCard.querySelector(
            "h3"
        )
        : null;

const incidentDescription =
    incidentCard
        ? incidentCard.querySelector(
            "p"
        )
        : null;

function formatLtaAlertTime(
    timestamp
) {

    if (!timestamp) {
        return "Live LTA check";
    }

    return new Date(
        timestamp * 1000
    ).toLocaleTimeString(
        [],
        {
            hour:
                "numeric",

            minute:
                "2-digit"
        }
    );
}

function renderLtaTrainAlerts(
    data
) {

    if (
        !incidentCard ||
        !incidentHeading ||
        !incidentDescription
    ) {
        return;
    }

    const alerts =
        data && data.alerts
            ? data.alerts
            : [];

    if (alerts.length === 0) {

        incidentCard.classList.remove(
            "urgent"
        );

        incidentHeading.textContent =
            "No active train alerts";

        incidentDescription.textContent =
            "LTA is not reporting any active GTFS realtime train service alerts right now.";

    } else {

        const firstAlert =
            alerts[0];

        incidentCard.classList.add(
            "urgent"
        );

        incidentHeading.textContent =
            firstAlert.header ||
            "Live LTA train service alert";

        incidentDescription.textContent =
            firstAlert.description ||
            `${alerts.length} active train service alert${alerts.length === 1 ? "" : "s"} reported by LTA.`;
    }

    if (incidentTimeLabel) {
        incidentTimeLabel.textContent =
            `Updated ${formatLtaAlertTime(
                data.timestamp
            )}`;
    }
}

async function loadLtaTrainAlerts() {

    try {

        const useMockFault =
            new URLSearchParams(
                window.location.search
            ).get("mockFault") === "1";

        const response =
            await fetch(
                useMockFault
                    ? "/api/lta/train-alerts?mock=fault"
                    : "/api/lta/train-alerts"
            );

        if (!response.ok) {
            throw new Error(
                "Unable to fetch LTA alerts"
            );
        }

        const data =
            await response.json();

        renderLtaTrainAlerts(
            data
        );

    } catch (error) {

        console.error(
            "LTA alert load error:",
            error
        );

        if (
            incidentHeading &&
            incidentDescription
        ) {
            incidentHeading.textContent =
                "Unable to load LTA alerts";

            incidentDescription.textContent =
                "The app could not reach the LTA train service alert feed. Try again later.";
        }
    }
}

loadLtaTrainAlerts();
