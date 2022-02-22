import axios from 'axios';

axios.default.headers.common['Authorization'] = '\'Bearer \' + localStorage.getItem(\'token\')'
const state={};
const getters={};
const actions ={};

const mutations ={};

export default {
  state,
  getters,
  actions,
  mutations
};
