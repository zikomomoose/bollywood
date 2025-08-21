/**
 * Ad config (web) + Server URL (for app & web)
 * Fill these values, then deploy.
 */
window.ADS = {
  // Multiplayer server URL:
  // Example local: 'http://192.168.1.23:5174'
  // Example public: 'https://your-app.onrender.com'
  SERVER_URL: 'http://192.168.1.23:5174',

  // Web ads (works in browsers/PWA). Choose 'gam' or 'adsense'.
  PROVIDER: 'gam',

  // AdSense (web only)
  ADSENSE_CLIENT: 'ca-pub-XXXXXXXXXXXXXXXX',
  ADSENSE_BANNER_SLOT: 'YYYYYYYYYY',

  // GAM (web)
  GAM_PATHS: {
    banner: '/123456789/bollywood_banner_320x50',
    rewarded: '/123456789/bollywood_rewarded'
  }
};