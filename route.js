const SAVED_ROUTES_STORAGE_KEY =
    "commuteTogetherSavedRoutes";

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

    return (
        "https://www.google.com/maps/dir/?api=1" +
        `&origin=${origin}` +
        `&destination=${destination}` +
        "&travelmode=transit"
    );
}

function setMapStatus(message) {
    setText(
        "routeMapStatus",
        message
    );
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

    return request;
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

    const directionsRenderer =
        new google.maps.DirectionsRenderer({
            map:
                map,

            suppressMarkers:
                false
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

                setMapStatus(
                    `Google could not load this route: ${status}`
                );
                return;
            }

            directionsRenderer.setDirections(
                result
            );

            setMapStatus(
                "Google transit route loaded."
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
