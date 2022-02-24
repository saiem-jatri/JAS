import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import login from  './modules/login'
import attendance from './modules/attendance'
import attendence from "@/store/modules/attendance";

const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    login,
    attendance
  }
})

export default store;