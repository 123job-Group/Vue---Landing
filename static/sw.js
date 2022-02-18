importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/07851dd.js",
    "revision": "e9e85ee7fc427c69ccf9f74f374001df"
  },
  {
    "url": "/_nuxt/1b5cc38.js",
    "revision": "91cf31f260e5b37b8208d365e13cf6a2"
  },
  {
    "url": "/_nuxt/2dd4c9b.js",
    "revision": "d5bd09878da53278b3ed11e97df40e8c"
  },
  {
    "url": "/_nuxt/43b630d.js",
    "revision": "ab485c8163e4e57ce29d19b05fd9d6a7"
  },
  {
    "url": "/_nuxt/43e1f14.js",
    "revision": "7650e62a6119b600af4c067764313e78"
  },
  {
    "url": "/_nuxt/4eb5f17.js",
    "revision": "db6feae036148aed3dfcb555233335fd"
  },
  {
    "url": "/_nuxt/67de30b.js",
    "revision": "a69b2705cfd702704f89cfc98d64fa23"
  },
  {
    "url": "/_nuxt/9602d16.js",
    "revision": "3b8717632643075af15d03f0dac3fd46"
  },
  {
    "url": "/_nuxt/b830221.js",
    "revision": "842f521ffff270545d178d8cb4251cb0"
  },
  {
    "url": "/_nuxt/be0f325.js",
    "revision": "8e601bf8b809eef3abcff3243b172ddd"
  },
  {
    "url": "/_nuxt/c41f812.js",
    "revision": "88ceb69e981b637c2d07e7e070ed413c"
  },
  {
    "url": "/_nuxt/ee6555e.js",
    "revision": "fb4d04a14dc368fe83db82d351dbdafb"
  },
  {
    "url": "/_nuxt/f486ced.js",
    "revision": "5b0a5f5f5d59ba8cede2a9f38b9c1337"
  }
], {
  "cacheId": "stater-project",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
