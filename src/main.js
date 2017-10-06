import Promise from 'promise-polyfill'
import Router from 'router'
import Rx from 'rxjs/Rx'
import VeeValidate from 'vee-validate'
import Vue from 'vue'
import VueRx from 'vue-rx'

import App from 'App'
import store from 'store'

// pollyfill for promises to support IE 11
if (!window.Promise) {
  window.Promise = Promise
}

Vue.config.productionTip = false

Vue.use(VeeValidate)
Vue.use(VueRx, Rx)

const router = new Router()

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  render: h => h(App)
})
