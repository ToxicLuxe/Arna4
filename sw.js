const CACHE = 'arna-sweet-16-v1';
const ASSETS = [
  './', './index.html', './styles.css', './script.js', './manifest.webmanifest',
  './assets/upright-IMG_20260916_223058_345.jpg',
  './assets/upright-IMG_20260918_010444_319.jpg',
  './assets/upright-IMG_20260915_214008_980~2.jpg',
  './assets/upright-IMG_20251112_203810_715.jpg',
  './assets/upright-IMG_20260226_235214_167.jpg',
  './assets/upright-IMG_20260706_212826_485.jpg',
  './assets/upright-IMG_20260706_212947_615.jpg',
  './assets/upright-IMG_20260913_231135_223.jpg',
  './assets/upright-IMG_20260913_231151_023.jpg',
  './assets/upright-IMG_20260918_113754_075.jpg'
];
self.addEventListener('install', event => event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS))));
self.addEventListener('activate', event => event.waitUntil(self.clients.claim()));
self.addEventListener('fetch', event => event.respondWith(caches.match(event.request).then(hit => hit || fetch(event.request))));
