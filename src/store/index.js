import { createStore } from "vuex"
import createPersistedState from "vuex-persistedstate";

import login from  './modules/login'
import attendance from './modules/attendance'
import meeting from "@/store/modules/meeting";
import admin from '../store/modules/admin';
import adminAllUser from '../store/modules/adminAllUser'
import allEmployee from "@/store/modules/allEmployee";
import allEmployeeMeeting from "@/store/modules/allEmloyeeMeeting"
import adminMeeting from "@/store/modules/adminMeeting";


const store = createStore({
  plugins: [createPersistedState()],
  modules: {
    login,
    attendance,
    meeting,
    admin,
    adminAllUser,
    allEmployee,
    allEmployeeMeeting,
   adminMeeting
  }
})

export default store;