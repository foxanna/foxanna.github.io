'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "980547175e325fe622a3362b84d55b6a",
"canvaskit/canvaskit.wasm": "bf50631470eb967688cca13ee181af62",
"canvaskit/canvaskit.js": "2bc454a691c631b07a9307ac4ca47797",
"canvaskit/profiling/canvaskit.wasm": "95a45378b69e77af5ed2bc72b2209b94",
"canvaskit/profiling/canvaskit.js": "38164e5a72bdad0faa4ce740c9b8e564",
"favicon.png": "d39edea9b4bf8b37899a65286fc4ac0c",
"flutter.js": "f85e6fb278b0fd20c349186fb46ae36d",
"index.html": "95c68cc582940a3f89963a620917bf90",
"/": "95c68cc582940a3f89963a620917bf90",
"manifest.json": "c2da142e55e4fa411a7c725d4e499fff",
"main.dart.js": "503a1b69583aed8e642504a6d9c7b352",
"assets/AssetManifest.json": "d8ae3b6a25c58287226aa0e1dcf928c2",
"assets/FontManifest.json": "4ac1ec5236759858b7f3c8cff0e68567",
"assets/NOTICES": "44e6a03aef6bb0185ef799b84716b2a9",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/assets/images/developex_logo.png": "867247391eac759ba747ea0c63500cc6",
"assets/assets/images/blog_3.jpg": "c347fb4e6626fb6a5114eb2715fed549",
"assets/assets/images/flutter_logo.png": "952d8724c49bd60bf4a3729fd9f5066a",
"assets/assets/images/wtm_logo.png": "3af8179fffbc53e1997d859e8dffcd74",
"assets/assets/images/blog_13.png": "b00e9197e1ce4cdc6101731952488105",
"assets/assets/images/blog_9.png": "54b72a0c422586ee30e15bc0b6543527",
"assets/assets/images/blog_2.jpg": "3d0855a3c243ca04b4ae293722546fe2",
"assets/assets/images/blog_1.jpg": "a5ad8e9e4d2a312e728add59ffb386c5",
"assets/assets/images/blog_10.png": "98ac51be95007065e699cee195cdad48",
"assets/assets/images/tide_logo.png": "7a42a376f65be72f1947114f1e21a891",
"assets/assets/images/isd_logo.png": "1b260bd7b3f72aab414d38bccf00a34b",
"assets/assets/images/blog_6.png": "d3fcc502d003d4b6034b237a6c4f6a2b",
"assets/assets/images/my_photo.png": "62599c6fcbc85ac1a9dc66ab4b0f8f78",
"assets/assets/images/blog_7.png": "2c0d3ec9b97742c68c5024d7c3858531",
"assets/assets/images/go_logo.png": "2ba73e5ad08894a0c22f85f7586e5e73",
"assets/assets/images/blog_11.png": "55c23e7c7b9b99a28830d626c6229818",
"assets/assets/images/computer-girl.jpg": "a410d883542ea1d66481dc0944606ab6",
"assets/assets/images/project_2.jpg": "1d81f4f844370da8784d2754252acb59",
"assets/assets/images/sessionize.png": "51a4f8565a5a6ca4bbe6f84e955ceed7",
"assets/assets/images/blog_8.png": "884ec1c3befc2a9723fc3919334e301e",
"assets/assets/images/xamarin_logo.png": "afcba489bed83caf06067f74af3b1676",
"assets/assets/images/project_1.png": "ec2bb9a082c72ade4c953f1015445d86",
"assets/assets/images/flutter_logo_white.png": "69749f4105e385ffba8388201f5e5efa",
"assets/assets/images/gde_logo.png": "bd954ceeeb42b91899ebe1c3b0d79850",
"assets/assets/images/blog_4.jpg": "896a6129feba8d1b574b6f90505293c0",
"assets/assets/images/spotware_logo.png": "b1ddffbc64f9264df90452704cd16a76",
"assets/assets/images/blog_5.png": "8f17c80dea826024d3d6398d638e2153",
"assets/assets/images/ciklum_logo.png": "451c72afa7d16207d0da6a35ed461647",
"assets/assets/images/blog_12.png": "f6c25d0d82f6cc2e7e62ff23e6fe0943",
"assets/assets/fonts/NotoColorEmoji.ttf": "6051f30ae4a4764bf2fe717f62275e45",
"assets/assets/docs/Anna_Domashych_CV.pdf": "1c1c721355f1a27f23a5c0c33758749e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "26f5af2d93473531f82ef5060f9c6d45",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "4e20cb87b0d43808c49449ffd69b1a74",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "1f7cb220b3f5309130bd6d9ad87e0fc0",
"assets/shaders/ink_sparkle.frag": "1ed03b0025463b56a87ebe9d27588c8a",
"icons/flutter.png": "fe7abd264d04a2ff2b04ff55bfe58824",
"icons/Icon-192.png": "97bb4e7ab07aafa26aef4397fe9aeb99",
"icons/Icon-512.png": "4bfc1c513a97572dba74166a7651ea66"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
