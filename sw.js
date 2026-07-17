const CACHE='smart-math-rara-gold-v4.1';
const FILES=['./','./index.html','./manifest.json','./rara_home.jpg','./boy_avatar.jpg','./girl_avatar.jpg','./casual.jpg','./doctor.jpg','./pilot.jpg','./chef.jpg','./teacher.jpg','./astronaut.jpg','./police.jpg','./firefighter.jpg','./scientist.jpg','./engineer.jpg','./artist.jpg','./farmer.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting())));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).then(resp=>{const copy=resp.clone();caches.open(CACHE).then(c=>c.put(e.request,copy));return resp}).catch(()=>caches.match('./index.html'))))});
