import axios from "axios";

const state={
  allAdminUsers:[],
}

const getters={
  getAllAdminUsers:(state) => state.allAdminUsers
}
const actions={
  async fetchallAdminUsers({commit}) {
    const response = await axios.get('http://localhost:3333/admin/user/', {withCredentials: true});
    console.log("res =====>",response.data)
    commit('setallAdminUsers', response.data)
  },
  async updateUserData({commit}, payloads){
    console.log(">>>>", payloads._id)
    const response = await axios.put(`http://localhost:3333/admin/user/${payloads._id}`,{ ...payloads}, {withCredentials: true});

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