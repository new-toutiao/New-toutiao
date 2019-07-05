import Vue from 'vue'
import App from './App.vue'
import router from './router/router.js'
import store from './store/index.js'
import VueLazyLoad from 'vue-lazyload'
import { InfiniteScroll } from 'mint-ui';
import 'mint-ui/lib/style.css'
Vue.use(InfiniteScroll);
Vue.use(VueLazyLoad, {
  error: require('./static/imgerror.jpg'),
  loading: require('./static/pulldownload.gif')
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
