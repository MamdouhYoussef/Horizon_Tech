'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "d6ab111f4da571d8146adec4fdcffda7",
".git/config": "e3a729178b0b8df07ca6969d4cf64363",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "9e29b45f3d4b7e29388cd45a7626bfcf",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b05ce673a2ac84c3482a88f750fe2209",
".git/logs/refs/heads/main": "d14151a06b0b754dcaec31604a5b6517",
".git/objects/07/f28c61004fe9af9ff4f5c473797194eba7db05": "2c53a944af83f2575ff1d54ddb696cc6",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/29/2214367c0af9a2eee8f873b2944224e2fe3f0c": "902d6cf3d5ea70392a74bfc9ded583bb",
".git/objects/2c/c1698a5ecc8892955c09f242a75190878b96a2": "141f51d62c65c837fd890dc4620775d6",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/c8/561421ddd2e189ee814186cb79564646cda211": "7e8ccfd41f291846ee3df6c14877f172",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/refs/heads/main": "2fed90d5d66fd266fb00d35fc40acd1b",
"assets/AssetManifest.json": "7b686f0b07586434ca1c47cd409dc7dd",
"assets/assets/animation/96084-arrow.json": "f1828068f72a69693ea4bfd6458aae08",
"assets/assets/images/background.png": "0614a717659df3fd409c60ff04fac983",
"assets/assets/images/basel.png": "ae73f1c5a02af4f5f132e80e62615ab9",
"assets/assets/images/basel_profile_img.jpg": "12608735da99c41b096bc1a9d4936ef3",
"assets/assets/images/bg.jpg": "89e5da6af1c18489d72622b22b845310",
"assets/assets/images/bg2.jpg": "8f7aee275950cd036451915b72907cca",
"assets/assets/images/bg3.jpg": "20f93ca7892708cd33666dd90db6abdb",
"assets/assets/images/bg4.jpg": "b98761e5c6914637202819c60bb98fd3",
"assets/assets/images/bg_img_2.png": "8257ef89b2dfeab767578260965a7e2d",
"assets/assets/images/contact_icon.png": "856b95eb03d60fa2576140e4c3d034b9",
"assets/assets/images/desktop.png": "d4794e3ddcb4fce9a2c12246e3b4d8a7",
"assets/assets/images/download.png": "d9317d736e7b69f20f57f6ab13f34d3c",
"assets/assets/images/ehab.png": "46ebb2acdd78879146182b26f7ec656a",
"assets/assets/images/ehab_profile_img.jpg": "34ff89d2fd5e125f8f2942420b12290c",
"assets/assets/images/email.png": "f59e8ec158ec05d21c8b251d7b0017ca",
"assets/assets/images/graphic.png": "d7aaa5a5615483382572b5d5c24c5e5b",
"assets/assets/images/hand.png": "d7c6f40ec1244a86fb4610cd515fee55",
"assets/assets/images/Hover.png": "f0a2318c40269d84384f56f54d25ad69",
"assets/assets/images/Hover_flip.png": "57d317fc22080b316188ebe73407065b",
"assets/assets/images/Intreaction_design.png": "98e873648b7c2d3062556f2f8c09d4c3",
"assets/assets/images/Logo.png": "f76fc5deb917710b053e34eb147af750",
"assets/assets/images/logo_b.png": "d88fb2201895fa32f80f0fbc2a417673",
"assets/assets/images/machine-learning.png": "0945bb9758105f60ac1359942fc0cb4a",
"assets/assets/images/mamdouh.png": "8d53d31f9410b3e8f647d60aae8e7752",
"assets/assets/images/messanger.png": "beacdbb3a93df25674af2f5302f5633a",
"assets/assets/images/mobile_development.png": "49f3dab84be57d6cc8307177d61faa3b",
"assets/assets/images/people.png": "faffdaa2aee19d3fddacc822c2b31be2",
"assets/assets/images/person.png": "6ede1e25d66c72b4e0ca2e5459cfd8b1",
"assets/assets/images/recent_work_bg.png": "531a8461fd1ec42f03f4cfb891790635",
"assets/assets/images/resized_mobile_development.png": "9459f64d68e13b97bcc17837b54ec386",
"assets/assets/images/resized_mobile_development_white_bg.png": "4b089a98a4b40ad7d00f44f94b2678f0",
"assets/assets/images/resized_sp.png": "1762c1d2fa20626fcbc7ca1e02672e69",
"assets/assets/images/resize_ehab_profile_img.jpg": "e0472c720f1ff3e93fe632d4180b03ae",
"assets/assets/images/sp.png": "c5eb9b5164715a6b469f67dbd5dc36dc",
"assets/assets/images/SyriaJoy.png": "ddeb5c8b51d618cdf7516ae6732a5c22",
"assets/assets/images/syriajoy_logo.png": "12a9d1ddd394b6f7ccfc88d1a7c08d7a",
"assets/assets/images/ui.png": "6ca82a6c70f80fd75c56b1fe66caa180",
"assets/assets/images/web-development.png": "89b20cf7746ae0c2100354f0fda1fbd1",
"assets/assets/images/whatsapp.png": "e33ef8b852729cd9dd7c6af3837f9b23",
"assets/assets/images/work_1.png": "ff8242cdad37e4c83136a90a325810a8",
"assets/assets/images/work_2.png": "e1d3843d3e6d8752cfe40f655caab6d5",
"assets/assets/images/work_3.png": "035401cff7e0fc62875bb280c53523c5",
"assets/assets/images/work_4.png": "74e5fc2d50c04cdd638cfa878bd2ef66",
"assets/assets/logo/logo%25201.png": "13e644a9411e20ce91df9c41b34dc821",
"assets/assets/logo/logo%25202.png": "9b784b6c4e223e26d8db8b4c8c42bbec",
"assets/assets/logo/logo%25203.png": "6f92eba1495ce2cba6b4000939e09aa2",
"assets/assets/logo/logo%25204.png": "8f97d45456fd90c8ef6613225e767202",
"assets/assets/logo/logo%25205.png": "a024f912a014d031dedf58cbf0f4225c",
"assets/assets/logo/logo%25206.png": "f4f39acdd50b0cd880289415563673dc",
"assets/assets/logo/logo%25207.png": "a31b9dca1cb7f9acc924467b3193b21a",
"assets/assets/logo/logowithcircle.png": "88e072ceee88d4f008a4a50db1038a48",
"assets/assets/spredditimages/spreddit_categorys.jpg": "27aca1574dce9dc32451f9e96ed76fbf",
"assets/assets/spredditimages/spreddit_drawer.jpg": "2f72b3fd5024ea5d1753bd6fe4861829",
"assets/assets/spredditimages/spreddit_favorite.jpg": "2536e61f2abb983fb66a44eefa9ef468",
"assets/assets/spredditimages/spreddit_home.jpg": "ae586d55a655383f23744c1bf7bf22e2",
"assets/assets/spredditimages/spreddit_login.jpg": "0af5927375e178e97b5a890bb0acb5bb",
"assets/assets/spredditimages/spreddit_message.jpg": "0aa777b78cc2839493d685683e88e222",
"assets/assets/spredditimages/spreddit_messages.jpg": "8df8a50e9916cbb8c5e89c58b758bab1",
"assets/assets/spredditimages/spreddit_product_by_category.jpg": "5d943455664c05da044ea8f785e58524",
"assets/assets/spredditimages/spreddit_product_history.jpg": "4c33073db54d26fd244186f7e0e0fc23",
"assets/assets/spredditimages/spreddit_search.jpg": "1f91ca6595a6fa30d4821da872d75f91",
"assets/assets/syriajoy%2520images/striajoy_searchForTrip.jpeg": "987a1ea218ee81b486dba422fd2d403d",
"assets/assets/syriajoy%2520images/syriajoy_companyProfile.jpg": "ecf13cf183029842c4e1b6458aee7fd7",
"assets/assets/syriajoy%2520images/syriajoy_drawer.jpg": "73ff1630e206aed99867c962d1eb3987",
"assets/assets/syriajoy%2520images/syriajoy_favorite.jpg": "e2cc94e38e687a382420d2f225d532eb",
"assets/assets/syriajoy%2520images/syriajoy_login.jpg": "61a4d78027e5203a10bd13d5604f10b1",
"assets/assets/syriajoy%2520images/syriajoy_message.jpg": "ea0816e601babf1a5464a6c23fb6ddc4",
"assets/assets/syriajoy%2520images/syriajoy_message_screen.jpg": "1f02c904ae74ae951c56076af2d45510",
"assets/assets/syriajoy%2520images/syriajoy_myprofile.jpeg": "3a1696307572f7b9a0d6714f89cdf998",
"assets/assets/syriajoy%2520images/syriajoy_tripstype.jpg": "0364bc96d7720d1536a23fecea9706d4",
"assets/assets/syriajoy%2520images/syriajoy_trip_by_category.jpg": "aa2de6a1216db88199c78045df3c41e4",
"assets/assets/syriajoy%2520images/syriajoy_trip_detail.jpg": "ac4b580424f54072c130a1ef212a2d67",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"assets/NOTICES": "5a77beef6536540cd273b7b8f2a8abbf",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "115e937bb829a890521f72d2e664b632",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d1722d5cf2c7855862f68edb85e31f88",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "613e4cc1af0eb5148b8ce409ad35446d",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "dd3c4233029270506ecc994d67785a37",
"assets/packages/getwidget/icons/dribble.png": "1e36936e4411f32b0e28fd8335495647",
"assets/packages/getwidget/icons/facebook.png": "293dc099a89c74ae34a028b1ecd2c1f0",
"assets/packages/getwidget/icons/google.png": "596c5544c21e9d6cb02b0768f60f589a",
"assets/packages/getwidget/icons/line.png": "da8d1b531d8189396d68dfcd8cb37a79",
"assets/packages/getwidget/icons/linkedin.png": "822742104a63a720313f6a14d3134f61",
"assets/packages/getwidget/icons/pinterest.png": "d52ccb1e2a8277e4c37b27b234c9f931",
"assets/packages/getwidget/icons/slack.png": "19155b848beeb39c1ffcf743608e2fde",
"assets/packages/getwidget/icons/twitter.png": "caee56343a870ebd76a090642d838139",
"assets/packages/getwidget/icons/wechat.png": "ba10e8b2421bde565e50dfabc202feb7",
"assets/packages/getwidget/icons/whatsapp.png": "30632e569686a4b84cc68169fb9ce2e1",
"assets/packages/getwidget/icons/youtube.png": "1bfda73ab724ad40eb8601f1e7dbc1b9",
"assets/shaders/ink_sparkle.frag": "08bc2da262a8eda0feac5f251fad35a7",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.ico": "0fe03990d0e9cf4459f210bb5c7d36f1",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "eb2682e33f25cd8f1fc59011497c35f8",
"icons/Icon-192.png": "d5957e178281ee87a48ad9526bb81fe0",
"icons/Icon-512.png": "f95f766d7661cee3520c3b18147b5b8d",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "c809607f855c5ca2d85af8e200c7fdb3",
"/": "c809607f855c5ca2d85af8e200c7fdb3",
"main.dart.js": "52cb4f969acb990ef23bac63fbc19f85",
"manifest.json": "9ca9b1eefeda8a6b66f25e862dc8f308",
"version.json": "c2a08cda2a1e690bfed5ce9fc4d9e5b1"
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
