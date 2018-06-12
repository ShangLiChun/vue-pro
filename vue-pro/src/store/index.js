import Vue from 'vue'
import Vuex from 'vuex'
import getters from './getters'

Vue.use(Vuex)
// import menuData from '../service/getMenu'
import mutations from './mutations'


const state = {
    searchShow:false,
    token:'admin'
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
})
