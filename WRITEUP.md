# Project Write-up

## CommuteTogether

CommuteTogether is a Singapore-focused public transport assistant designed around Rachel, a daily commuter who wants a simpler and more reliable way to plan journeys, monitor train disruptions, meet friends, and stay informed while travelling. The application also includes accessibility-oriented features such as larger text, clear route information, and journey notifications.

## Project Architecture

The application uses a Node.js and Express backend with a responsive HTML, CSS, and JavaScript frontend. OneMap provides location search and public transport routing, Google Maps displays route maps and directions, LTA DataMall provides real-time train alerts, and Gemini generates disruption guidance and food recommendations. Socket.IO supports live friend location sharing, including direction arrows. The application is deployed as a Docker container on Google Cloud Run.

Saved routes and user preferences are stored locally in the user's browser using `localStorage`, while live journey-sharing data is held temporarily in server memory.

## Data and Privacy

The application only stores information that the user enters directly, such as their name, phone number, saved commute routes, travel times, and route preferences. This information is stored locally in the user's own browser using `localStorage` and is not stored in an external database.

Live location is used only while the user actively chooses to share their journey and is not permanently saved. Browser-stored data remains on the device until the user clears the site's data, logs out, clears local storage, or the browser removes it.

API credentials are kept in environment variables and are not intended to be committed to the repository. In deployment, credentials are provided through Cloud Run configuration.

## Assumptions

- Users are travelling within Singapore and have internet access.
- Users grant location and notification permissions when required.
- External services such as OneMap, Google Maps, LTA DataMall, and Gemini are available during use.
- Rachel has a regular commute with a known origin, destination, and travel time.
- Users access the application from a modern mobile browser.

## Limitations

- Saved preferences and routes are stored locally in the browser and are not synchronised across devices.
- Live journey-sharing data is temporary and may be lost if the server restarts.
- Notifications, vibration, and device-heading features depend on browser and operating-system support.
- AI-generated recommendations may occasionally be inaccurate or outdated and are intended to support, not replace, live transport data.
- Route results depend on the availability, quotas, billing, and restrictions of external APIs.
- The application does not currently provide permanent offline support when the user is underground or has no network connection.
- Google Maps and OneMap are currently used for mapping and routing; a future version could add a full OpenStreetMap-based visual layer to align more closely with the hackathon specification.
