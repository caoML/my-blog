// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './icons/index.js'
import './styles/index.less'
import './styles/transition.less'
import './assets/css/md.less' // 导入markdown样式,需要在全局中导入,在其他地方导入不生效

// import mavonEditor from 'mavon-editor'
// import 'mavon-editor/dist/css/index.css'
// Vue.use(mavonEditor)
// import VueHighlightJS from 'vue-highlightjs'
// Tell Vue.js to use vue-highlightjs
// Vue.use(VueHighlightJS)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
