import { io } from "socket.io-client";
import axios from "axios";

const state = {
  onlineData: '',
}

const getters ={
  getOnlineData: (state) => state.onlineData,
}

const actions ={
  async onlineUserData({commit}){
    const socket = io("http://localhost:3333", {withCredentials: true});
    socket.on("online", (data)=>{
      commit('setOnlineData',data)
    });

  },
}

const mutations = {
  setOnlineData:(state,data) => (state.onlineData = data),
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}