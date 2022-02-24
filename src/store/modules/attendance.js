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
    const response = await axios.get('http://localhost:3333/user/attendance/?from=2022-02-16&to=2022-02-28', { withCredentials: true });
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