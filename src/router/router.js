import Vue from 'vue'
import Router from 'vue-router'
import list from '../views/list/list.vue'
import home from "../views/Home/home.vue"

Vue.use(Router);

const routes = [{
    path: '/home/:type',
    component: home,
    name: "home",
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
    path: '/list/:id',
    component: list,
    name: 'list',
    props:true
}
];

const scrollBehavior = (to, from, savedPosition) => {
    if (savedPosition) {
        return savedPosition
    } else {
        return { x: 0, y: 0 }
    }
}

const router = new Router({
    mode: 'history',
    routes,
    scrollBehavior
})

export default router