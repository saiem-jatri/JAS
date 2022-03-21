import axios from "axios";
import toastMessage from "@/store/common/toaster";

const state = {
  userStatistics: [],
}

const getters ={
  getUserStatistics: (state) => state.userStatistics
}

const actions ={
  async fetchstatistics({commit}){
    const response = await axios.get(`http://localhost:3333/user/dashboard`, {withCredentials: true});
    console.log("heloooooooo =======>",response.data)
    commit('setStatistics',response.data)
  }
}

const mutations = {
  setStatistics:(state,statistics) => (state.userStatistics = statistics),
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}