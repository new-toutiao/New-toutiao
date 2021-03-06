import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/Home/home.vue"
import search from "../views/Search"
import my from "../views/User"
import search_x from "../views/search_x"
import search_detail from "../views/search_detail"
import login from '.././components/login.vue'
import { Indicator } from 'mint-ui';

Vue.use(Router);
let spinRoute = {
    show() {//加载中显示loading组件
        Indicator.open({ text: '加载中...', spinnerType: 'fading-circle' });//开启loading组件，这里我用的mint-ui
    },
    resolve(resolve) {//加载完成隐藏loading组件
        return component => {
            setTimeout(() => {
                Indicator.close()//关闭loading组件
                resolve(component);
            }, 1000)
        }
    }
}
const routes = [{
    path: '/home/:type',
    component: home,
    name: "home",
    meta: {
        keepAlive: true
    }
},
{
    path: '/hypermarket',
    component: resolve => {
        spinRoute.show();//加载时开启loading
        require(["../views/hypermarket/index.vue"], spinRoute.resolve(resolve))//路由懒加载
    },
    name: "hypermarket",
    mata: {
        keepAlive: true
    }
}
    ,

{
    path: '/my',
    component: my,
    name: "my",
    meta: {
        keepAlive: false
    }
},
//搜索
{
    path: '/search',
    component: search,
    name: "search",
    meta: {
        keepAlive: true
    }
},
{
    path: '/search_x',
    component: search_x,
    name: "search_x",
    // meta: {
    //     // title: "搜索",
    //     flag: false
    // }
    meta: {
        keepAlive: true
    }
},
//搜索详情页
{
    path: '/search_detail',
    component: search_detail,
    meta: {
        keepAlive: true
    }
},
{
    path: '/my/login',
    component: login,
    name: "login",
    meta: {
        keepAlive: false
    }
},



{
    path: '*',
    redirect: '/home/all?type=__all__'
},
{
    path: '',
    redirect: '/home/all?type=__all__'
},
{
    path: '/article/:id',
    component: resolve => {
        spinRoute.show();//加载时开启loading
        require(["../views/Article/index.vue"], spinRoute.resolve(resolve))//路由懒加载
    },
    name: 'article',
    props: true,
    meta: {
        keepAlive: false
    }
},
{
    path: '/list/:id',
    component: resolve => {
        spinRoute.show();//加载时开启loading
        require(['../views/list/list.vue'], spinRoute.resolve(resolve))//路由懒加载
    },
    name: 'list',
    props: true,
    meta: {
        keepAlive: true
    }
}
];

//返回之前页面的时候保持定位
const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}

const router = new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes,
    scrollBehavior
})

export default router