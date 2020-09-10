// Declarar as variáveis / constantes necesárias para atuação do nosso service worker
var CACHE_NAME = 'adrianocastro-cache-v1'
var urlsToCache = [
    'css/adrianocastro.css',
    'css/bootstrap.css',
    'img/favicon.png',
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

self.addEventListener('fetch', function(event) {

})