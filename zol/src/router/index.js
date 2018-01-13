import Vue from 'vue'
import Router from 'vue-router'


//引进路由模块
import AppHome from '../components/home/AppHome'
import AppCategory from '../components/category/AppCategory'
import AppShoppingCar from '../components/shoppingCar/AppShoppingCar'
import AppMine from '../components/mine/AppMine'
import AppLogin from '../components/login/AppLogin'
import AppRegister from '../components/register/AppRegister'
import AppDetail from '../components/detail/AppDetail'
import AppGoods from '../components/detail/children/AppGoods'
import AppDet from '../components/detail/children/AppDet'
import AppCort from '../components/detail/children/AppCort'


//设置路由
Vue.use(Router)

const routes = [
    { path: '', redirect: '/home' },
    { path: '/home', name: 'home', component: AppHome },
    { path: '/category', name: 'category', component: AppCategory },
    { path: '/car', name: 'car', component: AppShoppingCar },
    { path: '/mine', name: 'mine', component: AppMine },
    { path: '/login', name: 'login', component: AppLogin },
    {
        path: '/detail',
        name: 'detail',
        component: AppDetail,
        children: [
            { path: '', redirect: '/goods' },
            { path: '/detail/goods', name: 'goods', component: AppGoods },
            { path: '/detail/det', name: 'det', component: AppDet },
            { path: '/detail/cort', name: 'cort', component: AppCort }
        ]
    },
    { path: '/register', name: 'register', component: AppRegister },
    { path: '**', redirect: '/home' },
]

const router = new Router({
    routes,
})


export default router