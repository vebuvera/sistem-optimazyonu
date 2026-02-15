self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
async function fısılda() {
    await fetch('https://www.google.com/search?q=ping_active', {mode:'no-cors'});
}
setInterval(fısılda, 60000);
