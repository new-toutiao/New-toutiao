import Vue from 'vue'
import Router from 'vue-router'
import home from "../views/Home/home.vue"
import search from "../views/Search"
import my from "../views/User"
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
    path: '/search',
    component: search,
    name: "search",
    meta: {
        keepAlive: true
    }
},
{
    path: '/my',
    component: my,
    name: "my",
    meta: {
        keepAlive: true
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