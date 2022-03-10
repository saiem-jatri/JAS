import axios from "axios";
import toastMessage from "../common/toaster";

const state ={
meeting: [],
}
const getters={
  getAdminMeeting:(state)=>state.meeting
}
const actions ={
  async addMeeting ({commit},{date,fromTime,toTime,comments}){
    const response = await axios.post('http://localhost:3333/admin/meeting/',{date,fromTime,toTime,comments}, { withCredentials: true });

    toastMessage(response);

    commit('newMeetings',response.data)
  },
}
const mutations ={
  newMeetings:(state,res) => state.meeting.push(res),
}




export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}