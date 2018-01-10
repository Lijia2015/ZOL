import Vue from 'vue'
import Router from 'vue-router'


//引进路由模块
import AppHome from '../components/home/AppHome'
import AppCategory from '../components/category/AppCategory'
import AppShopCar from '../components/shoppingCar/AppShoppingCar'
import AppMine from '../components/mine/AppMine'
import AppLogin from '../components/login/AppLogin'
import AppRegister from '../components/register/AppRegister'
import AppDetail from '../components/detail/AppDetail'


//设置路由
Vue.use(Router)

const routes = [
	{path:'',redirect:'/home'},
	{path:'/home',name:'home',component:AppHome},
	{path:'/category',name:'category',component:AppCategory},
	{path:'/car',name:'car',component:AppShopCar},
	{path:'/mine',name:'mine',component:AppMine},
	{path:'/login',name:'login',component:AppLogin},
	{path:'/detail',name:'detail',component:AppDetail},
	{path:'/register',name:'register',component:AppRegister},
	{path:'**',redirect:'/home'},
]

const router = new Router({
	routes,
})


export default router
