const SAVED_ROUTES_STORAGE_KEY =
    "commuteTogetherSavedRoutes";
const ROUTE_DECISIONS_STORAGE_KEY =
    "commuteTogetherRouteDecisions";

function getSavedRoutes() {
    try {
        const routes =
            JSON.parse(
                localStorage.getItem(
                    SAVED_ROUTES_STORAGE_KEY
                ) || "[]"
            );

        return Array.isArray(routes)
            ? routes
            : [];
    } catch (error) {
        console.error(
            "Unable to read saved routes:",
            error
        );

        return [];
    }
}

function saveSavedRoutes(routes) {
    localStorage.setItem(
        SAVED_ROUTES_STORAGE_KEY,
        JSON.stringify(routes)
    );
}

function updateSavedRoute(routeId, updates) {
    const routes =
        getSavedRoutes();

    const updatedRoutes =
        routes.map(route =>
            route.id === routeId
                ? {
                    ...route,
                    ...updates
                }
                : route
        );

    saveSavedRoutes(
        updatedRoutes
    );
}

function getRouteId() {
    return new URLSearchParams(
        window.location.search
    ).get("id");
}

function formatTime(timeValue) {
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
        hour >= 12 ? "PM" : "AM";

    const displayHour =
        hour % 12 || 12;

    return `${displayHour}:${minuteText} ${suffix}`;
}

function setText(id, value) {
    const element =
        document.getElementById(id);

    if (element) {
        element.textContent =
            value;
    }
}

function getGoogleDirectionsUrl(route) {
    const origin =
        encodeURIComponent(
            route.start
        );

    const destination =
        encodeURIComponent(
            route.end
        );

    const waypoints =
        Array.isArray(route.viaPoints)
            ? route.viaPoints
                .map(point => point.address || point.name)
                .filter(Boolean)
                .map(encodeURIComponent)
                .join("|")
            : "";

    return (
        "https://www.google.com/maps/dir/?api=1" +
        `&origin=${origin}` +
        `&destination=${destination}` +
        (waypoints
            ? `&waypoints=${waypoints}`
            : "") +
        "&travelmode=transit"
    );
}

function setMapStatus(message) {
    setText(
        "routeMapStatus",
        message
    );
}

function escapeHtml(value) {
    return String(value || "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}

function setIncidentText(heading, summary) {
    setText(
        "routeIncidentHeading",
        heading
    );

    setText(
        "routeIncidentSummary",
        summary
    );
}

function renderLtaAlerts(alerts) {
    const container =
        document.getElementById(
            "routeLtaAlerts"
        );

    if (!container) {
        return;
    }

    if (!Array.isArray(alerts) || alerts.length === 0) {
        container.innerHTML = "";
        return;
    }

    container.innerHTML =
        alerts
            .map(alert => `
                <article class="lta-incident-alert">
                    <strong>${escapeHtml(alert.header || "LTA train service alert")}</strong>
                    <span>${escapeHtml(alert.description || "No further details were supplied by LTA.")}</span>
                    ${alert.decisionSummary
                        ? `<em>Gemini: ${escapeHtml(alert.decisionSummary)}</em>`
                        : ""}
                </article>
            `)
            .join("");
}

function getTodayKey() {
    const today =
        new Date();

    return [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, "0"),
        String(today.getDate()).padStart(2, "0")
    ].join("-");
}

function saveRouteDecision(route, affectedAlerts, decisions) {
    let savedDecisions = {};

    try {
        savedDecisions =
            JSON.parse(
                localStorage.getItem(
                    ROUTE_DECISIONS_STORAGE_KEY
                ) || "{}"
            );
    } catch (error) {
        console.error(
            "Unable to read route decisions:",
            error
        );
    }

    savedDecisions[route.id] = {
        date:
            getTodayKey(),
        evaluatedAt:
            new Date().toISOString(),
        status:
            "complete",
        affectedAlerts:
            affectedAlerts,
        decisions:
            decisions
    };

    localStorage.setItem(
        ROUTE_DECISIONS_STORAGE_KEY,
        JSON.stringify(savedDecisions)
    );
}

async function loadRouteIncidentGuidance(route) {
    try {
        setIncidentText(
            "Checking this route",
            "Fetching the latest LTA disruptions before deciding whether this route is affected."
        );

        const useMockFault =
            new URLSearchParams(
                window.location.search
            ).get("mockFault") === "1";

        const alertsResponse =
            await fetch(
                useMockFault
                    ? "/api/lta/train-alerts?mock=fault"
                    : "/api/lta/train-alerts"
            );

        if (!alertsResponse.ok) {
            throw new Error(
                "Unable to load LTA alerts"
            );
        }

        const alertData =
            await alertsResponse.json();

        const alerts =
            Array.isArray(alertData.alerts)
                ? alertData.alerts
                : [];

        if (alerts.length === 0) {
            saveRouteDecision(
                route,
                [],
                []
            );

            setIncidentText(
                "No active train alerts",
                "LTA has no current disruptions, so Gemini was not called."
            );

            renderLtaAlerts([]);
            return;
        }

        const decisions =
            await Promise.all(
                alerts.map(async alert => {
                    const decisionResponse =
                        await fetch(
                            "/api/incidents/gemini-decision",
                            {
                                method:
                                    "POST",
                                headers: {
                                    "Content-Type":
                                        "application/json"
                                },
                                body:
                                    JSON.stringify({
                                        route:
                                            route,
                                        alert:
                                            alert
                                    })
                            }
                        );

                    if (!decisionResponse.ok) {
                        throw new Error(
                            "Unable to decide whether an LTA alert affects this route"
                        );
                    }

                    const decision =
                        await decisionResponse.json();

                    return {
                        alert:
                            alert,
                        decision:
                            decision
                    };
                })
            );

        const affectedAlerts =
            decisions
                .filter(item => item.decision.affected === true)
                .map(item => ({
                    ...item.alert,
                    decisionSummary:
                        item.decision.summary || ""
                }));

        saveRouteDecision(
            route,
            affectedAlerts,
            decisions.map(item => ({
                alertId:
                    item.alert.id,
                affected:
                    item.decision.affected === true,
                source:
                    item.decision.source,
                summary:
                    item.decision.summary || ""
            }))
        );

        setIncidentText(
            affectedAlerts.length > 0
                ? "Your route may be affected"
                : "No disruption affects this route",
            affectedAlerts.length > 0
                ? "Gemini identified the following LTA disruption as relevant to this saved route."
                : "Gemini checked the active LTA disruptions and found none that affect this saved route."
        );

        renderLtaAlerts(
            affectedAlerts
        );
    } catch (error) {
        console.error(
            "Route incident guidance error:",
            error
        );

        setIncidentText(
            "Unable to load route decision",
            "The saved route decision could not be read. It will be checked again at the next scheduled alert time."
        );

        renderLtaAlerts([]);
    }
}

function loadGoogleMapsScript(apiKey) {
    return new Promise(
        (resolve, reject) => {

            if (window.google && window.google.maps) {
                resolve();
                return;
            }

            window.initCommuteRouteMap =
                resolve;

            const script =
                document.createElement(
                    "script"
                );

            script.src =
                "https://maps.googleapis.com/maps/api/js" +
                `?key=${encodeURIComponent(apiKey)}` +
                "&callback=initCommuteRouteMap";

            script.async =
                true;

            script.defer =
                true;

            script.onerror =
                () => {
                    reject(
                        new Error(
                            "Unable to load Google Maps"
                        )
                    );
                };

            document.head.appendChild(
                script
            );
        }
    );
}

function getRouteDepartureTime(route) {
    if (!route || !route.commuteTime) {
        return null;
    }

    const [hourText, minuteText] =
        route.commuteTime.split(":");

    const hour = Number(hourText);
    const minute = Number(minuteText);

    if (
        !Number.isFinite(hour) ||
        !Number.isFinite(minute)
    ) {
        return null;
    }

    const departureTime = new Date();

    departureTime.setHours(
        hour,
        minute,
        0,
        0
    );

    if (departureTime.getTime() < Date.now()) {
        departureTime.setDate(
            departureTime.getDate() + 1
        );
    }

    return departureTime;
}

function getRoutePreference(route) {
    return (
        route.disruptionPreference ||
        route.priority ||
        "fastest"
    );
}

function getTransitPreferenceOptions(route) {
    const preference =
        getRoutePreference(route);

    const options = {};

    if (
        preference === "least-walking" &&
        google.maps.TransitRoutePreference
    ) {
        options.routingPreference =
            google.maps.TransitRoutePreference.LESS_WALKING;
    }

    if (
        preference === "least-transfer" &&
        google.maps.TransitRoutePreference
    ) {
        options.routingPreference =
            google.maps.TransitRoutePreference.FEWER_TRANSFERS;
    }

    if (
        preference === "bus-friendly" &&
        google.maps.TransitMode
    ) {
        options.modes =
            [
                google.maps.TransitMode.BUS
            ];
    }

    return options;
}

function applyTransitDepartureTime(
    request,
    route
) {

    const departureTime =
        getRouteDepartureTime(
            route
        );

    const transitOptions = {
        ...getTransitPreferenceOptions(
            route
        )
    };

    if (departureTime) {
        transitOptions.departureTime =
            departureTime;
    }

    if (
        Object.keys(transitOptions).length === 0
    ) {
        return request;
    }

    return {
        ...request,

        transitOptions:
            transitOptions
    };
}

function getDirectionsRequest(route) {
    const request = {
        origin:
            route.start,

        destination:
            route.end,

        travelMode:
            google.maps.TravelMode.TRANSIT,

        provideRouteAlternatives:
            true
    };

    if (
        route.startLatitude &&
        route.startLongitude
    ) {
        request.origin =
            {
                lat:
                    Number(route.startLatitude),

                lng:
                    Number(route.startLongitude)
            };
    }

    if (
        route.endLatitude &&
        route.endLongitude
    ) {
        request.destination =
            {
                lat:
                    Number(route.endLatitude),

                lng:
                    Number(route.endLongitude)
            };
    }

    return applyTransitDepartureTime(
        request,
        route
    );
}

async function searchLocationSuggestions(
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
        const response =
            await fetch(
                `/api/search?search=${encodeURIComponent(searchValue)}`
            );

        if (!response.ok) {
            return [];
        }

        const data =
            await response.json();

        if (
            !data.results ||
            data.results.length === 0
        ) {
            return [];
        }

        return data.results
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
                        result.ADDRESS ||
                        result.SEARCHVAL,

                    latitude:
                        latitude,

                    longitude:
                        longitude
                };
            })
            .filter(Boolean)
            .slice(
                0,
                limit
            );

    } catch (error) {
        console.error(
            "Via point suggestion error:",
            error
        );

        return [];
    }
}

function getPointLocation(point) {

    if (
        point.latitude &&
        point.longitude
    ) {
        return {
            lat:
                Number(point.latitude),

            lng:
                Number(point.longitude)
        };
    }

    return point.address || point.name;
}

function getRouteStops(route) {

    const stops = [
        {
            name:
                route.start,
            address:
                route.start,
            latitude:
                route.startLatitude,
            longitude:
                route.startLongitude
        },
        ...(
            Array.isArray(route.viaPoints)
                ? route.viaPoints
                : []
        ),
        {
            name:
                route.end,
            address:
                route.end,
            latitude:
                route.endLatitude,
            longitude:
                route.endLongitude
        }
    ];

    return stops.filter(
        stop =>
            stop &&
            (stop.address || stop.name)
    );
}

function getRouteSummary(route) {

    if (
        !route ||
        !route.legs ||
        route.legs.length === 0
    ) {
        return {
            duration:
                "",
            details:
                "Route details unavailable"
        };
    }

    const leg =
        route.legs[0];

    const duration =
        leg.duration
            ? leg.duration.text
            : "";

    const transitSteps =
        leg.steps
            .filter(step =>
                step.travel_mode ===
                google.maps.TravelMode.TRANSIT
            )
            .map(step => {
                const transit =
                    step.transit;

                if (!transit || !transit.line) {
                    return "";
                }

                return (
                    transit.line.short_name ||
                    transit.line.name ||
                    "Transit"
                );
            })
            .filter(Boolean);

    const walkingSteps =
        leg.steps.filter(step =>
            step.travel_mode ===
            google.maps.TravelMode.WALKING
        );

    return {
        duration:
            duration,

        details:
            [
                transitSteps.length
                    ? transitSteps.join(" + ")
                    : "Transit route",
                `${walkingSteps.length} walk segment${walkingSteps.length === 1 ? "" : "s"}`
            ].join(" - ")
    };
}

let activeRoutePolylines = [];

function clearColoredRoutePolylines() {
    activeRoutePolylines.forEach(polyline => {
        polyline.setMap(null);
    });

    activeRoutePolylines = [];
}

function normaliseRouteLineName(value) {
    const text =
        String(value || "")
            .trim()
            .toUpperCase();

    if (text === "NE" || text.includes("NORTH EAST")) return "NE";
    if (text === "NS" || text.includes("NORTH SOUTH")) return "NS";
    if (text === "EW" || text.includes("EAST WEST")) return "EW";
    if (text === "CC" || text.includes("CIRCLE")) return "CC";
    if (text === "DT" || text.includes("DOWNTOWN")) return "DT";
    if (text === "TE" || text.includes("THOMSON")) return "TE";
    if (text === "CR" || text.includes("CROSS ISLAND")) return "CR";

    return text;
}

function getRouteStepColor(step) {
    if (
        step.travel_mode ===
        google.maps.TravelMode.WALKING
    ) {
        return "#8f9b94";
    }

    const transit =
        step.transit;

    if (!transit || !transit.line) {
        return "#173b2a";
    }

    const vehicleType =
        transit.line.vehicle &&
        transit.line.vehicle.type
            ? String(transit.line.vehicle.type).toUpperCase()
            : "";

    if (vehicleType.includes("BUS")) {
        return "#00c853";
    }

    const line =
        normaliseRouteLineName(
            transit.line.short_name ||
            transit.line.name
        );

    const lineColors = {
        NE:
            "#9b26b6",
        NS:
            "#d42e12",
        EW:
            "#009645",
        CC:
            "#fa9e0d",
        DT:
            "#0055b8",
        TE:
            "#9b6b43",
        CR:
            "#e78ac3"
    };

    if (lineColors[line]) {
        return lineColors[line];
    }

    if (transit.line.color) {
        return `#${String(transit.line.color).replace(/^#/, "")}`;
    }

    return "#173b2a";
}

function drawColoredRoute(
    map,
    route,
    options = {}
) {
    if (!options.append) {
        clearColoredRoutePolylines();
    }

    if (!route || !Array.isArray(route.legs)) {
        return;
    }

    route.legs.forEach(leg => {
        (leg.steps || []).forEach(step => {
            if (!step.path || step.path.length === 0) {
                return;
            }

            const isWalking =
                step.travel_mode ===
                google.maps.TravelMode.WALKING;

            const polyline =
                new google.maps.Polyline({
                    map:
                        map,
                    path:
                        step.path,
                    strokeColor:
                        getRouteStepColor(step),
                    strokeOpacity:
                        isWalking ? 0.65 : 0.95,
                    strokeWeight:
                        isWalking ? 4 : 7,
                    zIndex:
                        isWalking ? 1 : 2,
                    icons:
                        isWalking
                            ? [
                                {
                                    icon: {
                                        path:
                                            "M 0,-1 0,1",
                                        strokeOpacity:
                                            1,
                                        scale:
                                            3
                                    },
                                    offset:
                                        "0",
                                    repeat:
                                        "14px"
                                }
                            ]
                            : []
                });

            activeRoutePolylines.push(
                polyline
            );
        });
    });
}

function renderRouteAlternatives(
    result,
    selectedIndex,
    onSelect
) {

    const container =
        document.getElementById(
            "routeAlternatives"
        );

    if (!container) {
        return;
    }

    container.innerHTML = "";

    const uniqueRoutes = [];
    const fingerprints = new Set();

    result.routes.forEach((route, originalIndex) => {
        const summary =
            getRouteSummary(route);

        const transitSignature =
            route.legs
                .flatMap(leg => leg.steps || [])
                .filter(step =>
                    step.travel_mode === google.maps.TravelMode.TRANSIT
                )
                .map(step => {
                    const transit = step.transit;
                    return transit && transit.line
                        ? transit.line.short_name || transit.line.name || "Transit"
                        : "Transit";
                })
                .join(">");

        const fingerprint = [
            summary.duration,
            summary.details,
            transitSignature
        ].join("|");

        if (!fingerprints.has(fingerprint)) {
            fingerprints.add(fingerprint);
            uniqueRoutes.push({
                route,
                originalIndex
            });
        }
    });

    uniqueRoutes.forEach(
        ({ route, originalIndex }, displayIndex) => {
            const summary =
                getRouteSummary(route);

            const button =
                document.createElement(
                    "button"
                );

            button.type =
                "button";

            button.className =
                "route-alternative-option";

            if (originalIndex === selectedIndex) {
                button.classList.add(
                    "selected"
                );
            }

            button.innerHTML = `
                <strong>Route ${displayIndex + 1}${originalIndex === selectedIndex ? " - selected" : ""}</strong>
                <span>${summary.duration || "Duration unavailable"}</span>
                <small class="route-option-description">${escapeHtml(route.summary || "Google transit alternative for this commute.")}</small>
                <small>${summary.details}</small>
            `;

            button.addEventListener(
                "click",
                () => onSelect(originalIndex)
            );

            container.appendChild(
                button
            );
        }
    );
}

function renderDefinedRouteSegments(
    stops
) {

    const container =
        document.getElementById(
            "routeAlternatives"
        );

    if (!container) {
        return;
    }

    container.innerHTML =
        "";

    for (
        let index = 0;
        index < stops.length - 1;
        index++
    ) {
        const card =
            document.createElement(
                "div"
            );

        card.className =
            "route-alternative-option selected";

        const title =
            document.createElement(
                "strong"
            );

        title.textContent =
            `Segment ${index + 1}`;

        const start =
            document.createElement(
                "span"
            );

        start.textContent =
            stops[index].name ||
            stops[index].address;

        const end =
            document.createElement(
                "small"
            );

        end.textContent =
            `to ${stops[index + 1].name || stops[index + 1].address}`;

        card.append(
            title,
            start,
            end
        );

        container.appendChild(
            card
        );
    }
}

function renderViaPoints(route) {

    const container =
        document.getElementById(
            "viaPointsList"
        );

    if (!container) {
        return;
    }

    const viaPoints =
        Array.isArray(route.viaPoints)
            ? route.viaPoints
            : [];

    container.innerHTML =
        "";

    viaPoints.forEach(
        (point, index) => {
            const item =
                document.createElement(
                    "div"
                );

            item.className =
                "via-point-chip";

            const label =
                document.createElement(
                    "span"
                );

            label.textContent =
                point.name || point.address;

            const removeButton =
                document.createElement(
                    "button"
                );

            removeButton.type =
                "button";

            removeButton.setAttribute(
                "aria-label",
                "Remove via point"
            );

            removeButton.textContent =
                "Remove";

            item.append(
                label,
                removeButton
            );

            removeButton.addEventListener(
                "click",
                () => {
                    const nextPoints =
                        viaPoints.filter(
                            (_, pointIndex) =>
                                pointIndex !== index
                        );

                    route.viaPoints =
                        nextPoints;

                    updateSavedRoute(
                        route.id,
                        {
                            viaPoints:
                                nextPoints
                        }
                    );

                    renderViaPoints(route);
                    renderGoogleRoute(route);
                }
            );

            container.appendChild(
                item
            );
        }
    );
}

function setupRoutePreferences(route) {
    const preferenceSelect =
        document.getElementById(
            "disruptionPreference"
        );

    if (preferenceSelect) {
        preferenceSelect.value =
            getRoutePreference(route);

        preferenceSelect.onchange =
            () => {
                const nextPreference =
                    preferenceSelect.value;

                route.disruptionPreference =
                    nextPreference;

                route.priority =
                    nextPreference;

                updateSavedRoute(
                    route.id,
                    {
                        disruptionPreference:
                            nextPreference,
                        priority:
                            nextPreference
                    }
                );

                renderGoogleRoute(
                    route
                );
            };
    }
}

function setupViaPointInput(route) {

    const input =
        document.getElementById(
            "viaPointInput"
        );

    const button =
        document.getElementById(
            "addViaPointBtn"
        );

    const suggestions =
        document.getElementById(
            "viaPointSuggestions"
        );

    if (!input || !button || !suggestions) {
        return;
    }

    let debounceTimer = null;
    let requestId = 0;
    let selectedPoint = null;

    function hideSuggestions() {
        suggestions.classList.add(
            "hidden"
        );

        suggestions.innerHTML =
            "";
    }

    function renderSuggestions(options) {
        suggestions.innerHTML =
            "";

        if (options.length === 0) {
            const empty =
                document.createElement(
                    "div"
                );

            empty.className =
                "location-suggestion empty";

            empty.textContent =
                "No matching places found";

            suggestions.appendChild(
                empty
            );
            suggestions.classList.remove(
                "hidden"
            );
            return;
        }

        options.forEach(
            option => {
                const item =
                    document.createElement(
                        "button"
                    );

                item.type =
                    "button";

                item.className =
                    "location-suggestion";

                const icon =
                    document.createElement(
                        "span"
                    );

                icon.className =
                    "location-suggestion-icon suggestion-icon";

                icon.textContent =
                    "PIN";

                const text =
                    document.createElement(
                        "span"
                    );

                text.className =
                    "suggestion-text";

                const title =
                    document.createElement(
                        "span"
                    );

                title.className =
                    "location-suggestion-main suggestion-title";

                title.textContent =
                    option.name;

                const address =
                    document.createElement(
                        "span"
                    );

                address.className =
                    "location-suggestion-sub suggestion-address";

                address.textContent =
                    option.address || "";

                text.appendChild(
                    title
                );

                if (option.address) {
                    text.appendChild(
                        address
                    );
                }

                item.append(
                    icon,
                    text
                );

                item.addEventListener(
                    "mousedown",
                    event => {
                        event.preventDefault();

                        selectedPoint =
                            option;

                        input.value =
                            option.name;

                        hideSuggestions();
                    }
                );

                suggestions.appendChild(
                    item
                );
            }
        );

        suggestions.classList.remove(
            "hidden"
        );
    }

    const addViaPoint =
        () => {

            const value =
                input.value.trim();

            if (!value) {
                return;
            }

            const point =
                selectedPoint || {
                    name:
                        value,

                    address:
                        value
                };

            const viaPoints =
                Array.isArray(route.viaPoints)
                    ? route.viaPoints
                    : [];

            const nextPoints = [
                ...viaPoints,
                point
            ];

            route.viaPoints =
                nextPoints;

            route.preferredRouteIndex =
                0;

            updateSavedRoute(
                route.id,
                {
                    viaPoints:
                        nextPoints,

                    preferredRouteIndex:
                        0
                }
            );

            input.value =
                "";

            selectedPoint =
                null;

            hideSuggestions();
            renderViaPoints(route);
            renderGoogleRoute(route);
        };

    button.onclick =
        addViaPoint;

    input.onkeydown =
        event => {
            if (event.key !== "Enter") {
                return;
            }

            event.preventDefault();
            addViaPoint();
        };

    input.oninput =
        () => {
            selectedPoint =
                null;

            window.clearTimeout(
                debounceTimer
            );

            const value =
                input.value.trim();

            if (value.length < 2) {
                hideSuggestions();
                return;
            }

            const currentRequest =
                ++requestId;

            debounceTimer =
                window.setTimeout(
                    async () => {
                        const options =
                            await searchLocationSuggestions(
                                value
                            );

                        if (currentRequest !== requestId) {
                            return;
                        }

                        renderSuggestions(
                            options
                        );
                    },
                    250
                );
        };

    input.onblur =
        () => {
            window.setTimeout(
                hideSuggestions,
                150
            );
        };
}

function requestDirections(
    directionsService,
    request
) {

    return new Promise(
        (resolve, reject) => {
            directionsService.route(
                request,
                (result, status) => {
                    if (
                        status ===
                        google.maps.DirectionsStatus.OK
                    ) {
                        resolve(result);
                        return;
                    }

                    reject(
                        new Error(status)
                    );
                }
            );
        }
    );
}

async function renderSegmentedTransitRoute(
    route,
    map,
    directionsService
) {

    const stops =
        getRouteStops(route);

    if (stops.length < 2) {
        setMapStatus(
            "Add at least a start and end point to show this route."
        );
        return;
    }

    renderDefinedRouteSegments(
        stops
    );

    clearColoredRoutePolylines();

    for (
        let index = 0;
        index < stops.length - 1;
        index++
    ) {
        const result =
            await requestDirections(
                directionsService,
                applyTransitDepartureTime(
                    {
                        origin:
                            getPointLocation(
                                stops[index]
                            ),

                        destination:
                            getPointLocation(
                                stops[index + 1]
                            ),

                        travelMode:
                            google.maps.TravelMode.TRANSIT,

                        provideRouteAlternatives:
                            false
                    },
                    route
                )
            );

        const renderer =
            new google.maps.DirectionsRenderer({
                map:
                    map,

                suppressMarkers:
                    false,

                suppressPolylines:
                    true,

                preserveViewport:
                    index !== 0
            });

        renderer.setDirections(
            result
        );

        drawColoredRoute(
            map,
            result.routes[0],
            {
                append:
                    true
            }
        );
    }

    setMapStatus(
        `Defined route loaded for ${formatTime(route.commuteTime)} using your saved pass-by points. Google transit route options are shown segment by segment.`
    );
}

async function renderGoogleRoute(route) {
    const configResponse =
        await fetch(
            "/api/config/maps"
        );

    const config =
        await configResponse.json();

    if (!config.googleMapsApiKey) {
        setMapStatus(
            "Add GOOGLE_MAPS_API_KEY to .env to show the embedded Google route map. The Google Maps directions link is ready above."
        );
        return;
    }

    await loadGoogleMapsScript(
        config.googleMapsApiKey
    );

    setupViaPointInput(
        route
    );

    setupRoutePreferences(
        route
    );

    renderViaPoints(
        route
    );

    const mapElement =
        document.getElementById(
            "googleRouteMap"
        );

    const map =
        new google.maps.Map(
            mapElement,
            {
                center:
                    {
                        lat:
                            1.3521,

                        lng:
                            103.8198
                    },

                zoom:
                    12,

                mapTypeControl:
                    false
            }
        );

    const directionsService =
        new google.maps.DirectionsService();

    if (
        Array.isArray(route.viaPoints) &&
        route.viaPoints.length > 0
    ) {
        try {
            await renderSegmentedTransitRoute(
                route,
                map,
                directionsService
            );
        } catch (error) {
            console.error(
                "Segmented route error:",
                error
            );

            setMapStatus(
                "Google could not load one of the pass-by route segments. Try removing or changing a via point."
            );
        }

        return;
    }

    const directionsRenderer =
        new google.maps.DirectionsRenderer({
            map:
                map,

            suppressMarkers:
                false,

            suppressPolylines:
                true,

            routeIndex:
                Number(route.preferredRouteIndex || 0)
        });

    directionsService.route(
        getDirectionsRequest(route),
        (result, status) => {

            if (
                status !==
                google.maps.DirectionsStatus.OK
            ) {
                if (status === "REQUEST_DENIED") {
                    setMapStatus(
                        "Google denied the route request. Enable Directions API (Legacy) for the same Google Cloud project as your Maps JavaScript API key, make sure billing is enabled, and allow http://localhost:3000/* in the key's website restrictions."
                    );
                    return;
                }

                if (status === "INVALID_REQUEST") {
                    setMapStatus(
                        "Google could not use these via points for this transit route. Transit directions may not support manual via points the same way driving routes do. Remove a via point or choose one of the available alternatives."
                    );
                    return;
                }

                setMapStatus(
                    `Google could not load this route: ${status}`
                );
                return;
            }

            directionsRenderer.setDirections(
                result
            );

            const selectedIndex =
                Math.min(
                    Number(
                        route.preferredRouteIndex || 0
                    ),
                    result.routes.length - 1
                );

            directionsRenderer.setRouteIndex(
                selectedIndex
            );

            drawColoredRoute(
                map,
                result.routes[selectedIndex]
            );

            const handleAlternativeSelect =
                nextIndex => {
                    route.preferredRouteIndex =
                        nextIndex;

                    updateSavedRoute(
                        route.id,
                        {
                            preferredRouteIndex:
                                nextIndex
                        }
                    );

                    directionsRenderer.setRouteIndex(
                        nextIndex
                    );

                    drawColoredRoute(
                        map,
                        result.routes[nextIndex]
                    );

                    renderRouteAlternatives(
                        result,
                        nextIndex,
                        handleAlternativeSelect
                    );

                    setMapStatus(
                        `Route ${nextIndex + 1} saved as your preferred route.`
                    );
                };

            renderRouteAlternatives(
                result,
                selectedIndex,
                handleAlternativeSelect
            );

            setMapStatus(
                `Google transit alternatives loaded for ${formatTime(route.commuteTime)}. Select the route you usually take.`
            );
        }
    );
}

async function initRoutePage() {
    const routeId =
        getRouteId();

    const route =
        getSavedRoutes()
            .find(
                savedRoute =>
                    savedRoute.id === routeId
            );

    if (!route) {
        setText(
            "routeDetailName",
            "Route not found"
        );

        setText(
            "routeDetailSummary",
            "Go back and choose one of your saved routes."
        );

        setMapStatus(
            "No saved route was found for this link."
        );

        return;
    }

    const time =
        formatTime(
            route.commuteTime
        );

    setText(
        "routePageTitle",
        route.name || "Saved Route"
    );

    setText(
        "routeDetailName",
        route.name || "Saved Route"
    );

    setText(
        "routePageSubtitle",
        `${route.start} to ${route.end}`
    );

    setText(
        "routeDetailSummary",
        `${route.start} to ${route.end} at ${time}. You will be alerted ${route.notifyMinutes} minutes before leaving.`
    );

    const link =
        document.getElementById(
            "googleDirectionsLink"
        );

    if (link) {
        link.href =
            getGoogleDirectionsUrl(route);
    }

    loadRouteIncidentGuidance(
        route
    );

    try {
        await renderGoogleRoute(
            route
        );
    } catch (error) {
        console.error(
            "Google route error:",
            error
        );

        setMapStatus(
            "Unable to load the embedded Google route map. Use the Google Maps link above."
        );
    }
}

initRoutePage();
