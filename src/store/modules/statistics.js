import axios from "axios";
import toastMessage from "@/store/common/toaster";

const state = {
  userStatistics: [],
  adminStatistics: [],
}
const getters ={
  getUserStatistics: (state) => state.userStatistics,
  getAdminDashboard:(state) => state.adminStatistics
}
const actions ={
  async fetchstatistics({commit}){
    const response = await axios.get(`http://localhost:3333/user/dashboard`, {withCredentials: true});
    commit('setStatistics',response.data)
  },
  async fetchAdminStatistics({commit}){
    const response = await axios.get(`http://localhost:3333/admin/dashboard`,{withCredentials:true});
    commit('setAdminStatistics',response.data)
  }
}

const mutations = {
  setStatistics:(state,statistics) => (state.userStatistics = statistics),
  setAdminStatistics:(state,adminStatistics) => (state.adminStatistics = adminStatistics),
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}