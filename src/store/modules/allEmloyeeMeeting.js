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
    console.log('kuyfytfgyj=>',response.data)
    commit('setAllMeetings',response.data)
  },
}
const mutations={
  setAllMeetings:(state,resMeeting) =>(state.allMeeting=resMeeting),
}


export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}