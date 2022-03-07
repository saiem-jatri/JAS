import axios from "axios";

const state ={
  allUserAttendance: [],
  details: [],
}
const getters={
  allUserAttendanceToday: (state) => state.allUserAttendance,
  allUserDetails:(state) =>state.details
};
const actions = {
  async fetchAttendance({commit}) {
    const response = await axios.get(`http://localhost:3333/admin/attendance/all`, {withCredentials: true});
    commit('setAttendanceToday', response.data);
  },
  async fetchDetails({commit},id) {
    const response = await axios.get(`http://localhost:3333/admin/attendance/${id}`, {withCredentials: true});
    console.log("Details",response.data)
    commit('setAllUserDetails', response.data);
  }

}
const mutations ={
  setAttendanceToday:(state,userAttendance) => (state.allUserAttendance = userAttendance),
  setAllUserDetails:(state,userdetails) => (state.details = userdetails),
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}