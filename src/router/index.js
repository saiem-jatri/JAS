import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/userPage.vue';
import meetingPage from "../views/meetingPage.vue";
import login from "@/components/Login";
import meeting from "@/components/MeetingShow";
import adminHomePage from "@/views/adminHomePage";
import allUser from "@/components/AdminComponents/AllUser";
import adminAttendnancePage from "@/views/adminAttendancePage";


const routes=[
  {path:'/',component:login},
  {path:'/HomePage',component:HomePage},
  {path:'/meetingPage',component:meetingPage},
  {path:'/adminHomePage',component:adminHomePage},
  {path:'/allUser',component:allUser},
  {path:'/adminAttendnance',component: adminAttendnancePage}
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



