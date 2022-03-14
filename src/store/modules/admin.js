import axios from "axios";
import toastMessage from "../common/toaster";

const state={
  dropList:[],
  userlist:[],
};
  const getters={
    getallDropList: (state) => state.dropList,
    getallUserList: (state) => state.userlist,
};
  const actions= {
    async fetchdropList({commit}) {
      const response = await axios.get('http://localhost:3333/admin/user/list', {withCredentials: true});
      commit('setdropList', response.data)
    },

    async addUser ({commit},{jatriId,name,email,password,designation,lineManager,role,nid,mobile}){
      const response = await axios.post('http://localhost:3333/admin/user/',{jatriId,name,email,password,designation,lineManager,role,nid,mobile}, { withCredentials: true });
      toastMessage(response);
      commit('setnewUser',response.data)
    },

  };
  const mutations = {
      setdropList:(state,resData) => (state.dropList=resData),
      setnewUser:(state,resUserData) => (state.userlist=resUserData),
  }




export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}