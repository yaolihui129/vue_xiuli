import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import axios from 'axios'
// import Bootstrap from 'bootstrap'

Vue.prototype.$http = axios
Vue.config.productionTip = false

// router.beforeEach((to,from,next)=>{
// 	console.log(store.state,"store.state")
// 	if(store.state.userInfo||to.Path("/login")){
// 		next()
// 	}else{
// 		next({
// 			Path:"/login"
// 		})
// 	}
	
// })

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
