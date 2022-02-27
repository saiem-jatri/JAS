import async from "async";
import axios from "axios";

const state = {
  userMeeting: [],
}
const getters={
  allUserMeeting: (state) => state.userMeeting
}
const actions={
  async fetchMeeting ({commit}){
    const response = await axios.get('http://localhost:3333/user/meeting/',{withCredentials: true});
    // console.log('kuyfytfgyj=>',response.data)
    commit('setMeetings',response.data)
  },
  async addMeeting ({commit},{fromTime,toTime,comments}){
    const response = await axios.post('http://localhost:3333/user/meeting/',{fromTime,toTime,comments}, { withCredentials: true });
    commit('newMeetings',response.data)
  },

  async addMeetingFilter({commit}, {filterDate}){
    const response = await axios.get(`http://localhost:3333/user/meeting/?date=${filterDate}`, {withCredentials: true});
    console.log(response.data)
    commit('setMeetingFilter',response.data)
  }
}
const mutations={
  setMeetings:(state,resMeeting) =>(state.userMeeting=resMeeting),
  newMeetings:(state,res) => state.userMeeting.push(res),
  setMeetingFilter:(state,filterRes) => state.userMeeting=filterRes
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}