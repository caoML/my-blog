window.addEventListener('load', function () {
  console.log('will the service worker register?')
  navigator.serviceWorker.register('../cache/sw.js')
    .then((reg) => {
      console.log('yes you did')
    }).catch((err) => {
      console.log('no it didn\'t', err)
    })
})
