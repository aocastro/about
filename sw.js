// Declarar as variáveis / constantes necesárias para atuação do nosso service worker
var CACHE_NAME = 'adrianocastro-cache-v1'
var urlsToCache = [
    'css/adrianocastro.css',
    'css/bootstrap.css',
    'img/favicon.png',
    'img/logo_html5.png',
    'img/logo_php.png',
    'img/social-media-marketing.svg',
    'js/bootstrap.js',
    'js/jquery-3.5.1.min.js',
    'js/portifolio.js',
    'libs/sweetalert2-master/src/sweetalert2.js',
]

self.addEventListener('install', function(event) {
    // Paremetrizar as estapas de instalação do nosso cache no dispositivo
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Cache aberto...')
            return cache.addAll(urlsToCache)
        })
    )
})

// Aqui, definimos nosso evento fetch e, em event.respondWith(), passamos uma promessa de caches.match(). Esse método examina a solicitação e encontra todos os resultados armazenados em qualquer um dos caches criados pelo service worker.
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
        .then(function(response) {
            if (response) {
                return response
            }

            var fecthRequest = event.request.clone()

            return fetch(fecthRequest).then(
                function(response) {
                    if (!response || response.status !== 200 || response.type !== 'basic') {
                        return response
                    }

                    var responseToCache = response.clone()

                    caches.open(CACHE_NAME).then(
                        function(cache) {
                            cache.put(event.request, responseToCache)
                        }
                    )

                    return response

                }
            )
        })
    )
})

self.addEventListener('active', function(event) {
    var cacheAllowlist = ['adrianocastro-cache-v1', 'adrianocastro-cache-v2']

    event.waitUntil(
        caches.keys().then(function(cacheNames) {
            return Promisse.all(
                cacheNames.map(function(cacheName) {
                    if (cacheAllowlist.indexOf(cacheName) === -1) {
                        return cache.delete(cacheName)
                    }
                })
            )
        })
    )
})