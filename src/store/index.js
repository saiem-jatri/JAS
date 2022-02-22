import Vuex from 'vuex';
import Vue from 'vue';
// import todos from './modules/todos';
import login from  './modules/login'




//load Vuex
Vue.use(Vuex);

//create Store

export default new Vuex.Store({
  modules:{
    login
  }
})