const state = {
  userData: null
}

const getters = {
  getUser(state){
    return state.userData;
  }
}

const actions = {
  getUserFromApi(context,user){
    context.commit('SetUser',user);
  }
}

const mutations = {
  SetUser(state,user){
    state.userData=user;
    console.log(state.userData)
  },
  SetLogOut(state){
    state.userData=null
  }
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations,
}

