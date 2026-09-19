# CommuteTogether

CommuteTogether is a Singapore public-transport commuting assistant. It helps users search locations, compare transit routes, monitor train disruptions, find meetup food recommendations, share live journeys, and receive browser notifications.

## Features

- OneMap address and postal-code search
- OneMap public-transport route planning
- Google Maps embedded route maps and directions
- LTA GTFS realtime train-service alerts
- Gemini-powered incident decisions and meetup food recommendations
- Saved route monitoring in the browser
- Live friend location sharing with Google Maps and facing-direction arrows
- Journey codes with refresh/reconnect support
- Browser notifications and vibration where supported
- Responsive desktop and mobile layouts

## Requirements

- Node.js 22 or newer
- npm
- OneMap account credentials
- LTA DataMall account key
- Google Maps API key with billing enabled
- Gemini API key
- Docker, if building the container locally

## Local Setup

Install dependencies:

```powershell
npm install
```

Create a local `.env` file. Do not commit it:

```env
ONEMAP_EMAIL=your_onemap_email
ONEMAP_PASSWORD=your_onemap_password
LTA_ACCOUNT_KEY=your_lta_account_key
GOOGLE_MAPS_API_KEY=your_google_maps_api_key
GEMINI_API_KEY=your_gemini_api_key
```

Start the server:

```powershell
npm start
```

Open:

```text
http://localhost:3000
```

The server listens on `PORT` when provided by the hosting platform, otherwise it uses port `3000`.

## API Configuration

Enable these services in Google Cloud where applicable:

- Maps JavaScript API
- Directions API
- Cloud Run
- Cloud Build

For Google Maps API-key restrictions, allow the deployed Cloud Run domain. During local testing, allow the local origin used by the app.

## Deployment

The repository includes a production [Dockerfile](Dockerfile) and is compatible with Cloud Run.

Cloud Run environment variables:

```text
ONEMAP_EMAIL
ONEMAP_PASSWORD
LTA_ACCOUNT_KEY
GOOGLE_MAPS_API_KEY
GEMINI_API_KEY
```

Cloud Run does not automatically read the local `.env` file. Add these values under **Variables & secrets** in the Cloud Run service, or use Secret Manager for production credentials.

A typical container build is:

```powershell
docker build -t commutetogether .
docker run --env-file .env -p 3000:8080 commutetogether
```

Cloud Build can build the image from the repository using the included Dockerfile. The application uses `process.env.PORT` and binds to `0.0.0.0` for Cloud Run.

## Data Storage

The current application does not use Cloud SQL or another database.

- Saved routes, local profiles, route decisions, and preferences use browser `localStorage`.
- Live journey membership and location relay use server memory through Socket.IO.
- Empty journey codes are retained briefly for refresh/reconnect and are lost when the server restarts.
- OneMap, LTA, Google Maps, and Gemini provide external API data at request time.

For permanent multi-device storage, a database integration would need to be added deliberately, along with authentication and secret management.

## Main Endpoints

```text
GET  /api/test
GET  /api/config/maps
GET  /api/search?search=<location>
GET  /api/route?startLat=<lat>&startLon=<lon>&endLat=<lat>&endLon=<lon>
GET  /api/lta/train-alerts
POST /api/meetup/gemini-places
POST /api/incidents/gemini-decision
POST /api/incidents/gemini-summary
```

Socket.IO events support creating and joining journeys, location updates, friend presence, and leaving a journey.

## Demo Scenarios

### Location and route search

Enter a Singapore building, road, postal code, school, hospital, or MRT station in the start and end fields. Select a suggestion to use its coordinates, then request a route.

### Friend sharing

1. Open the website on two devices or browser sessions.
2. Create a journey on one device.
3. Join using the six-character code on the other device.
4. Allow location access.
5. Start location sharing.
6. Move one device to demonstrate the live marker and direction arrow.

### Gemini meetup recommendations

Enter both meetup locations, choose a category, set the travel limits, and select **Show restaurants**. The backend sends the request to Gemini so the API key is not exposed in browser code.

### Mock train disruption

For a repeatable disruption demonstration, open a saved route with:

```text
?mockFault=1
```

Example:

```text
https://YOUR-CLOUD-RUN-URL/route.html?id=YOUR_ROUTE_ID&mockFault=1
```

### Notifications

Allow browser notifications on the phone. Destination alerts can be triggered immediately for a demo. Vibration depends on browser support, phone settings, silent mode, and Do Not Disturb.

## Validation

Run JavaScript syntax checks:

```powershell
node --check server.js
node --check public/app.js
node --check public/route.js
```

There is currently no automated test suite configured. The `npm test` script is still the default placeholder.

## Security Notes

- Never commit `.env` or API keys.
- Use Cloud Run environment variables or Secret Manager for deployed credentials.
- Restrict Google Maps keys by API and website origin.
- Rotate any credentials that have been exposed in Git history, screenshots, chat, or logs.
- Do not use a root database account for application access if a database is added later.
