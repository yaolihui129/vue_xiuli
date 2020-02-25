import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
	count:0,
	userInfo:""
  },
  mutations: {
	countIncrease(state){
		state.count++
	},
	login(state,v){
		state.userInfo = v
	}
  },
  actions: {
  },
  modules: {
  }
})
