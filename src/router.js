import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from 'components/Home'

Vue.use(VueRouter)

export default class {
  constructor () {
    const router = new VueRouter({
      mode: 'history',
      routes: [
        {
          path: '/',
          name: 'home',
          components: {
            main: Home
          }
        }
      ]
    })
    return router
  }
}
