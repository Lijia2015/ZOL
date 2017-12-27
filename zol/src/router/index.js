import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import AppMain from '../components/main/AppMain'

Vue.use(Router)

const routes = [
	{path:'',redirect:'/main'},
	{path:'/main',name:'main',component:AppMain},
	{path:'**',redirect:'/main'},
]

const router = new Router({
	routes,
})


export default router
