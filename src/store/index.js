import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import login from  './modules/login'

const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    login
  }
})

export default store;