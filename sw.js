const CACHE_NAME = 'la701fm-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/styles.css',
    '/app.js',
    '/config.js',
    '/manifest.json',
    'https://code.jquery.com/jquery-3.5.1.min.js',
    'https://extassisnetwork.com/player/Luna2/luna.css',
    'https://extassisnetwork.com/player/Luna2/luna.js',
    'https://extassisnetwork.com/player/Luna2/luna2.js',
    'https://extassisnetwork.com/player/Luna2/luna3.js'
];

// Instalar Service Worker
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Cache abierto');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.log('Error en cache:', err);
            })
    );
    self.skipWaiting();
});

// Activar Service Worker
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Eliminando cache antiguo:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

// Fetch - Network first, fallback to cache
self.addEventListener('fetch', event => {
    // Para streaming, siempre ir a la red
    if (event.request.url.includes('streaming') || event.request.url.includes('shockmedia')) {
        event.respondWith(
            fetch(event.request)
                .catch(() => {
                    return new Response('Streaming no disponible', {
                        status: 503,
                        statusText: 'Service Unavailable'
                    });
                })
        );
        return;
    }

    // Para otros recursos, cache first
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    return response;
                }
                return fetch(event.request)
                    .then(response => {
                        if (!response || response.status !== 200 || response.type === 'error') {
                            return response;
                        }
                        const responseToCache = response.clone();
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        return response;
                    })
                    .catch(() => {
                        return caches.match('/index.html');
                    });
            })
    );
});

// Manejar notificaciones
self.addEventListener('push', event => {
    const data = event.data ? event.data.json() : {};
    const options = {
        body: data.body || 'Nueva notificación',
        icon: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
        badge: 'https://i.ibb.co/1fFmt954/Photoroom-20260128-163712.png',
        tag: 'la701fm',
        requireInteraction: false
    };
    event.waitUntil(
        self.registration.showNotification(data.title || 'La 70.1 FM', options)
    );
});

// Manejar clicks en notificaciones
self.addEventListener('notificationclick', event => {
    event.notification.close();
    event.waitUntil(
        clients.matchAll({ type: 'window' }).then(clientList => {
            for (let client of clientList) {
                if (client.url === '/' && 'focus' in client) {
                    return client.focus();
                }
            }
            if (clients.openWindow) {
                return clients.openWindow('/');
            }
        })
    );
});
