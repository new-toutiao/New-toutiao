import Vue from 'vue';
import App from './App.vue';
import router from './router/router.js';
import './views/Car/icon/iconfont.css';
import './views/Car/commot/moke/index.js';
import store from './store/index.js';
import VueLazyLoad from 'vue-lazyload';
import './components/index.js';
import './mock/index.js';
import BScroll from './views/Car/commot/BScroll/index.vue';
Vue.component('BScroll', BScroll);
Vue.use(VueLazyLoad, {
  error: require('./static/imgerror.jpg'),
  loading: require('./static/pulldownload.gif')
});
Vue.prototype.$observer = new Vue();
Vue.prototype.bus = new Vue();
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
});
