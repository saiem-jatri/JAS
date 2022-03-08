import async from "async";
import axios from "axios";

const state={
allMeeting:[]
}
const getters={
  allUserMeeting: (state) => state.allMeeting,
}
const actions={
  async fetchAllMeeting ({commit}){
    const response = await axios.get('http://localhost:3333/admin/meeting/',{withCredentials: true});
    commit('setAllMeetings',response.data)
  },
  async updateAllMeetingFilter({commit}, payloads){
    const response = await axios.put(`http://localhost:3333/admin/meeting/${payloads.mainId}`,{ ...payloads}, {withCredentials: true});
    commit('updateFilter',response.data)
  }
}
const mutations={
  setAllMeetings:(state,resMeeting) =>(state.allMeeting=resMeeting),
  updateFilter:(state,updMeeting) =>(state.allMeeting=updMeeting)
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}