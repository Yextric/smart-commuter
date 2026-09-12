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
                [latitude, longitude]
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
    io("http://localhost:3000");

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
                    friendLatLng
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