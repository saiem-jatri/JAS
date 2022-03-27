import async from "async";
import axios from "axios";
import toastMessage from "@/store/common/toaster";

const state = {
  userAttendance: [],
  adminAttendance:[]
}

const getters ={
  allUserAttendance: (state) => state.userAttendance,
  allAdminAttendance: (state) => state.adminAttendance
}

const actions ={
  async fetchAttendance ({commit}){
    try{
      const date = new Date();
      const to = new Date().toISOString().split("T")[0];
      const from = new Date(new Date().setDate(date.getDate() - 8)).toISOString().split("T")[0];
      const response = await axios.get(`http://localhost:3333/user/attendance/?from=${from}&to=${to}`, { withCredentials: true });
      commit('setAttendance',response.data);
    } catch (error) {
      commit('setAttendance', []);
      await toastMessage(error.response.data);
    }

  },

  async fetchAdminAttendance ({commit}){
    try{
      const date = new Date();
      const to = new Date().toISOString().split("T")[0];
      const from = new Date(new Date().setDate(date.getDate() - 8)).toISOString().split("T")[0];
      const response = await axios.get(`http://localhost:3333/admin/attendance/?from=${from}&to=${to}`, { withCredentials: true });
      commit('setAdminAttendance',response.data);
    }catch (error) {
      commit('setAdminAttendance',[]);
      await toastMessage(error.response.data)
    }
  },
  async addAttendance({commit},timestamp){
    try {
      commit('newAttendance',[]);
      const response = await axios.post('http://localhost:3333/user/attendance',{timestamp}, { withCredentials: true });
      await toastMessage(response);
      commit('newAttendance',response.data.attendance);
    } catch (err) {
      await toastMessage(err.response.data);
    }
  },

  async addAdminAttendance({commit},timestamp){
    try{
      const response = await axios.post('http://localhost:3333/admin/attendance',{timestamp}, { withCredentials: true });

     await toastMessage(response);
      commit('newAdminAttendance',response.data)
    }catch (err) {
      await toastMessage(err.response.data);
    }
  },

  async addFilter({commit}, {dateRange}){
    const response = await axios.get(`http://localhost:3333/user/attendance/?from=${dateRange.FromDate}&to=${dateRange.ToDate}`, {withCredentials: true});
    commit('setFilter',response.data)
  },
  async addAdminAttendanceFilter({commit}, {dateRange}){
    const response = await axios.get(`http://localhost:3333/admin/attendance/?from=${dateRange.FromDate}&to=${dateRange.ToDate}`,{withCredentials: true});
    commit('setAdminAttendanceFilter',response.data)
  }
}

const mutations = {
  setAttendance:(state,user) => (state.userAttendance = user),
  newAttendance:(state,resTime) => (state.userAttendance.unshift(resTime)),
  setFilter:(state,resData) =>(state.userAttendance = resData),
  newAdminAttendance:(state,response) =>(state.adminAttendance=response),
  setAdminAttendance:(state,adminAttendance) =>(state.adminAttendance = adminAttendance),
  setAdminAttendanceFilter:(state,resData) =>(state.adminAttendance = resData),
}



export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}