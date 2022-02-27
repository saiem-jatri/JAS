import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import login from  './modules/login'
import attendance from './modules/attendance'
import meeting from "@/store/modules/meeting";


const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    login,
    attendance,
    meeting
  }
})

export default store;