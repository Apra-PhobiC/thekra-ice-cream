const CACHE='thekra-menu-v4';
const ASSETS=['./','./index.html','./manifest.webmanifest','./logo.jpg','./mango.png','./strawberry.png','./vanilla.png','./chocolate.png','./berry.png','./pistachio.png','./milkshake-oreo.png','./milkshake-lotus.png','./milkshake-chocolate.png','./milkshake-strawberry.png','./milkshake-vanilla.png','./tiramisu.jpg','./pudding.jpg','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return res}).catch(()=>caches.match('./index.html')))));
