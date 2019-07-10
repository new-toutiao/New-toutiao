import Vue from 'vue';
import Vuex from 'vuex';
import app from './modules_app/app'
import login from './modules_login/login'
Vue.use(Vuex);

const store = new Vuex.Store({

  state: {
    
  },
  getters:{
   
  },
  modules: {
    app,login
  }

})

export default store