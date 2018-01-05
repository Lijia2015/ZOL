import Vue from 'vue'
import Router from 'vue-router'


//引进路由模块
import AppMain from '../components/main/AppMain'
import AppLogin from '../components/login/AppLogin'
import AppRegister from '../components/register/AppRegister'
import AppContent from '../components/main/content/AppContent'
import AppHome from '../components/main/content/children/home/AppHome'
import AppCategory from '../components/main/content/children/category/AppCategory'
import AppShopCar from '../components/main/content/children/shoppingCar/AppShoppingCar'
import AppMine from '../components/main/content/children/mine/AppMine'


//设置路由
Vue.use(Router)

const routes = [
	{path:'',redirect:'/main'},
	{path:'/main',name:'main',component:AppMain,children:[
		{path:'/main',redirect:'home'},
		{path:'/main/home',name:'home',component:AppHome},
		{path:'/main/category',name:'category',component:AppCategory},
		{path:'/main/car',name:'car',component:AppShopCar},
		{path:'/main/mine',name:'mine',component:AppMine},
	 ]},
	{path:'/login',name:'login',component:AppLogin},
	{path:'/register',name:'register',component:AppRegister},
	{path:'**',redirect:'/main'},
]

const router = new Router({
	routes,
})


export default router
