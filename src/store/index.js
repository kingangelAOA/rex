import Vue from 'vue'
import Vuex from 'vuex'
import alert from './mudules/alert'
import request from './mudules/request'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    alert,
    request
  },
  strict: true
})
