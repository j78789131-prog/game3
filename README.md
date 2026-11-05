# Skybound Flight Simulator

Expo / React Native client foundation, browser preview, Node.js + Socket.IO API, MongoDB persistence and CesiumJS Earth.

## Included foundation
- Responsive Expo app target and web preview build.
- Registration/login API with bcrypt password hashing, JWT sessions and optional avatar data.
- MongoDB user preferences for aircraft, Earth mode, map style, weather layer and opacity.
- CesiumJS globe page with World Terrain, lighting/water effects, 3D/2D/Columbus modes.
- Server-side OpenWeather tile proxy for temperature, precipitation, clouds, pressure and wind, plus current conditions lookup.
- Authenticated place/coordinate search using OpenStreetMap Nominatim.
- Socket.IO pilot position/state broadcasting and voice-message relay endpoint.
- Cloudflare Workers AI chat and image-generation API routes (credentials required).

## Codespaces
1. Open this repository in GitHub Codespaces.
2. Run npm install.
3. Copy .env.example to .env and set MONGODB_URI, JWT_SECRET, CESIUM_ION_TOKEN and OPENWEATHER_API_KEY. Optionally set ADMIN_EMAIL before registering the administrator account; the exact matching email receives the admin role.
4. Run npm run dev.
5. Build the production web preview with npm run export:web, then npm start (port 3000).

## Render Web Service
- Service type: Web Service (not Blueprint); Runtime: Node.
- Build command: npm install && npm run export:web
- Start command: npm start
- Health check path: /api/health
- Leave Root Directory blank (repository root).
- Add environment variables from .env.example in the Render dashboard.
- Use MongoDB Atlas for MONGODB_URI.
- Set EXPO_PUBLIC_API_URL to the public Render service URL before making native builds.
- Render disk is ephemeral; persistent user records belong in MongoDB.

## Android APK
1. npm install -g eas-cli
2. eas login
3. eas build:configure
4. Set EXPO_PUBLIC_API_URL to the deployed Render URL in the EAS build environment.
5. eas build --platform android --profile preview
6. Download the APK from the EAS build page.

Render hosts the API and web preview. EAS Build creates the APK.

## Windows
Expo supports Android and web directly. A native Windows desktop executable requires adding/configuring the React Native Windows target and building with Visual Studio on Windows. The browser preview is available on Windows through Edge/Chrome; it is not a packaged native Windows executable yet.

## Credentials
- Cesium ion: https://ion.cesium.com/tokens
- OpenWeather: https://openweathermap.org/api
- MongoDB Atlas: https://www.mongodb.com/atlas
- Cloudflare Workers AI: https://developers.cloudflare.com/workers-ai/

## Assets
Earlier project notes verify only two aircraft assets: S7 Airbus A320 at https://github.com/kristimsu-beep/pinnogram/blob/main/games/airbus_a320_s7_airlines.glb and an SR-72 Darkstar URL that was truncated in the earlier conversation. The earlier project did not contain eight additional verified aircraft-specific models. The remaining eight must be supplied or individually sourced and license-checked; this project will not label fallback geometry as real aircraft.

Selected hangar asset: Innerscene Aircraft Hangar, GLB, 8.3 MB, public-domain CC0, 75.0 × 62.2 × 25.0 m. Model page and download: https://www.innerscene.com/tools/library/3d-parts/aircraft-hangar-67cccf91

## Scope
This is a deployable application foundation, not yet a complete certified flight simulator. Full aircraft physics, a detailed 3D hangar scene, map geocoding/search, native voice recording/playback UI, time controls, and admin-role provisioning require further implementation and device testing. Do not put provider secrets in client-side code.
