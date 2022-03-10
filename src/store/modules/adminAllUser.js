import axios from "axios";
import toastMessage from "../common/toaster";

const state={
  allAdminUsers:[],
}

const getters={
  getAllAdminUsers:(state) => state.allAdminUsers
}
const actions={
  async fetchallAdminUsers({commit}) {
    const response = await axios.get('http://localhost:3333/admin/user/', {withCredentials: true});
    commit('setallAdminUsers', response.data)
  },
  async updateUserData({commit}, payloads){
    const response = await axios.put(`http://localhost:3333/admin/user/${payloads._id}`,{ ...payloads}, {withCredentials: true});
    toastMessage(response);
    commit('setUpdateUserData',response.data)
  }
}
const mutations={
  setallAdminUsers:(state,resallUsers) => state.allAdminUsers = resallUsers,
  setUpdateUserData:(state,resUpdData) => state.allAdminUsers = resUpdData
}


export default{
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}