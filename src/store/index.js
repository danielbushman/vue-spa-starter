import sampleModule from './modules/sampleModule'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    sampleModule
  },
  strict: true
})
