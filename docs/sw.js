importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0e825988fd23cfd59176.js",
    "revision": "6901e7b20fd6777b2a8ad0ae8b0cb90e"
  },
  {
    "url": "/_nuxt/119e06f47cd89b770181.js",
    "revision": "3632e3bc662cd615c004a0ef00b162cd"
  },
  {
    "url": "/_nuxt/3edbda2ea11498514265.js",
    "revision": "3ee81d6f0f9af187405c8ddc463dd966"
  },
  {
    "url": "/_nuxt/5c255fa57b9b2d9da0b9.js",
    "revision": "0258c3bd6a3f7f7619985f3ab9a70abc"
  },
  {
    "url": "/_nuxt/5f5b6d3d8b632ae38685.js",
    "revision": "704e3c75118f7dc8d16c26fd10c4aa53"
  },
  {
    "url": "/_nuxt/761a8ab4fe5f43cdf684.js",
    "revision": "0be2011eddf5b17916a5f032e78669c3"
  },
  {
    "url": "/_nuxt/cec8e07344cfa58c7096.js",
    "revision": "29c510d8a276d4bf03753dcd9ac6d989"
  }
], {
  "cacheId": "vuemmerce",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
