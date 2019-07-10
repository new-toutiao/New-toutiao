import Vue from 'vue';
import Router from 'vue-router';
import home from '../views/Home/home.vue';
import search from '../views/Search';
import my from '../views/User';
import search_x from '../views/search_x';
import search_detail from '../views/search_detail';
import login from '.././components/login.vue';
import { Indicator } from 'mint-ui';
// import Shouye from '../views/Car/shouye/index.vue';
// import CarSelection from '../views/Car/CarSelection/index.vue';
// import Myring from '../views/Car/Myring/index.vue';
// import Smallvideo from '../views/Car/Smallvideo/index.vue';
// import Rankinglist from '../views/Car/Rankinglist/index.vue';
// import Addedservice from '../views/Car/Addedservice/index.vue';
// import Essay from '../views/Car/Essay/index.vue';
// import Video from '../views/Car/Video/index.vue';
// import Grabble from '../views/Car/grabble/index.vue';
Vue.use(Router);

let spinRoute = {
  show() {
    //加载中显示loading组件
    Indicator.open({ text: '加载中...', spinnerType: 'fading-circle' }); //开启loading组件，这里我用的mint-ui
  },
  resolve(resolve) {
    //加载完成隐藏loading组件
    return component => {
      setTimeout(() => {
        Indicator.close(); //关闭loading组件
        resolve(component);
      }, 1000);
    };
  }
};

const routes = [
  {
    path: '/home/:type',
    component: home,
    name: 'home',
    meta: {
      keepAlive: true
    }
  },
  //首页
  {
    path: '/car',
    component: resolve => require(['../views/Car/shouye/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //
  {
    path: '/car/carNav',
    component: resolve => require(['../views/Car/shouyeNav/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //选车
  {
    path: '/car/CarSelection',
    component: resolve => require(['../views/Car/CarSelection/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //选车详情
  {
    path: '/car/CarSelection/CarNav',
    component: resolve => require(['../views/Car/CarSelectionNav/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //车友圈
  {
    path: '/car/Myring',
    component: resolve => require(['../views/Car/Myring/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //车有圈详情
  {
    path: '/car/Myring/MyringNav',
    component: resolve => require(['../views/Car/MyringNav/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //小视频
  // {
  //   path: '/car/Smallvideo',
  //   component: Smallvideo
  // },
  //排行榜
  {
    path: '/car/Rankinglist',
    component: resolve => require(['../views/Car/Rankinglist/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //服务
  {
    path: '/car/Addedservice',
    component: resolve => require(['../views/Car/Addedservice/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  {
    path: '/car/Addedservice/AddedserviceDetail',
    component: resolve => require(['../views/Car/AddedserviceDetail/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //文章
  {
    path: '/car/Essay',
    component: resolve => require(['../views/Car/Essay/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //视频
  // {
  //   path: '/car/Video',
  //   component: Video
  // },
  //搜索
  {
    path: '/car/grabble',
    component: resolve => require(['../views/Car/grabble/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },
  //文章详情
  {
    path: '/car/grabble/atlas',
    component: resolve => require(['../views/Car/grabbleAtlas/index.vue'], resolve),
    meta:{
      car_info:true
    }
  },

  //----------------
  {
    path: '/hypermarket',
    component: resolve => {
      spinRoute.show(); //加载时开启loading
      require(['../views/hypermarket/index.vue'], spinRoute.resolve(resolve)); //路由懒加载
    },
    name: 'hypermarket',
    mata: {
      keepAlive: true
    }
  },
  {
    path: '/my',
    component: my,
    name: 'my',
    meta: {
      keepAlive: false
    }
  },
  //搜索
  {
    path: '/search',
    component: search,
    name: 'search',
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/search_x',
    component: search_x,
    name: 'search_x',
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
    name: 'login',
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
      spinRoute.show(); //加载时开启loading
      require(['../views/Article/index.vue'], spinRoute.resolve(resolve)); //路由懒加载
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
      spinRoute.show(); //加载时开启loading
      require(['../views/list/list.vue'], spinRoute.resolve(resolve)); //路由懒加载
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
    return savedPosition;
  } else {
    return { x: 0, y: 0 };
  }
};

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior
});

export default router;
