# Bollywood — Guess the Movie! (Repo‑ready)

## What’s here
- `public/` — web app files (index.html, style.css, script.js, ads-config.js)
- `server.js` — Express + Socket.IO
- `package.json` — start scripts + deps

## Run locally
```
npm install
npm start
```
Open `http://localhost:5174`.

## Configure your Server URL
Edit `public/ads-config.js`:
```js
SERVER_URL: 'http://192.168.1.23:5174'   // your local IP + :5174
// Later replace with your public URL after deployment
```

## Deploy to Render (public URL)
- Create a Web Service → connect this repo
- Build Command: `npm install`
- Start Command: `node server.js`
- After it’s live, put the given URL into `SERVER_URL` in `public/ads-config.js` and push.

## Android app (Capacitor) quick start
```
npm i @capacitor/core @capacitor/cli @capacitor/android
npx cap init "Bollywood Guess" "com.yourname.bollywood"  # web dir: public
npx cap add android
npx cap copy
npx cap open android
```
(Optional) Native ads:
```
npm i @capacitor-community/admob
npx cap sync
```
