const CACHE='rara-gold-5-v1';
const FILES=['./','./index.html','./manifest.json','./assets/rara_home.jpg','./assets/boy_avatar.jpg','./assets/girl_avatar.jpg','./assets/casual.jpg','./assets/doctor.jpg','./assets/pilot.jpg','./assets/chef.jpg','./assets/teacher.jpg','./assets/astronaut.jpg','./assets/police.jpg','./assets/firefighter.jpg','./assets/scientist.jpg','./assets/engineer.jpg','./assets/artist.jpg','./assets/farmer.jpg'];
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==CACHE).map(x=>caches.delete(x))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request))));
