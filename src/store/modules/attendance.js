import async from "async";
import axios from "axios";

const state = {
  userAttendance: [],
}

const getters ={
  allUserAttendance: (state) => state.userAttendance
}

const actions ={
  async fetchAttendance ({commit}){
    const date = new Date();
    const to = new Date().toISOString().split("T")[0];
    const from = new Date(new Date().setDate(date.getDate() - 8)).toISOString().split("T")[0];
    const response = await axios.get(`http://localhost:3333/user/attendance/?from=${from}&to=${to}`, { withCredentials: true });
    commit('setAttendance',response.data);
  },
  async addAttendance({commit},timestamp){
    const response = await axios.post('http://localhost:3333/user/attendance',{timestamp}, { withCredentials: true });
    commit('newAttendance',response.data)
  },
  async addFilter({commit}, {dateRange}){
    const response = await axios.get(`http://localhost:3333/user/attendance/?from=${dateRange.FromDate}&to=${dateRange.ToDate}`, {withCredentials: true});
    console.log(response.data)
    commit('setFilter',response.data)
  }
}

const mutations = {
  setAttendance:(state,user) => (state.userAttendance = user),
  newAttendance:(state,resTime) => state.userAttendance.unshift(resTime),
  setFilter:(state,resData) =>(state.userAttendance = resData)
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}