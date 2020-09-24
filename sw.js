// Declarar as variáveis / constantes necesárias para atuação do nosso service worker
var CACHE_NAME = 'adrianocastro-cache-v1'
var urlsToCache = [
    'css/adrianocastro.css',
    'css/bootstrap.css',
    'img/favicon.png',
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