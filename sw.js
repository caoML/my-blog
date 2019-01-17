// const CACHE_NAME = 'blog-cache'
// this.addEventListener('install',(event)=>{
//     this.skipWaitng()
//     console.log('install service worker')
//     //创建与打开一个缓存库
//     caches.open(CACHE_NAME)
//     //首页
//     let cacheRes = 'http://localhost:8080'
//     event.waitUntil(
//         caches.open(CACHE_NAME).then((cache)=>{
//             cache.addAll(cacheRes)
//         })
//     )
// })