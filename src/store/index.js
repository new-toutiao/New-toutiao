import Vue from 'vue';
import Vuex from 'vuex';
// import home from './modules/home'
// import { newList } from './modules/classify'
import app from './modules_app/app'
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    ifLoad:true   //是否登陆判断
  },
  getters:{
    getLoad(){
      return state.ifLoad;
    }
  },
  modules: {
    app
  }

})

export default store