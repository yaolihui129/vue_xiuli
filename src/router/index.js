import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import First from '../views/First.vue'
import Login from '../views/Login.vue'
import A from '../components/A.vue'
import B from '../components/B.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'First',
    component: First
  },
  {
	path:'/login',
	name:'Login',
	component: Login
  },
  {
    path: '/home',
    name: 'Home',
    component: Home,
	children:[
	{
	  path: '/a',
	  name: 'A',
	  component: A
	},
	{
	  path: '/b',
	  name: 'B',
	  component: B
	}
	]
  }
  
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
