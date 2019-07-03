import Vue from 'vue';
import Vuex from 'vuex';
// import home from './modules/home'
// import { newList } from './modules/classify'
import app from './modules/app'
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {

  },
  modules: {
    app
  }

})

export default store