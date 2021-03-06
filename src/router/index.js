import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/userPage.vue';
import meetingPage from "../views/meetingPage.vue";
import login from "@/components/Login";
import meeting from "@/components/MeetingShow";
import adminHomePage from "@/views/adminHomePage";
import allUser from "@/components/AdminComponents/AllUser";
import adminAttendnancePage from "@/views/adminAttendancePage";
import allAttendance from "@/components/AdminComponents/AllAttendance";
import AllUserDetails from "@/components/AdminComponents/AllUserDetails";
import AllUserMeeting from "@/components/AdminComponents/AllUserMeeting";
import AdminMeeting from "@/components/AdminComponents/AdminMeetingAdd";
import UserInfo from "@/components/UserInfo";
import UserDashboard from "@/components/UserDashboard";
import userStatisticsPage from "@/views/userStatisticsPage";
import adminStatisticsPage from "@/views/adminStatisticsPage";


const routes=[
  {path:'/',component:login},
  {path:'/login',component:login},
  {path:'/HomePage',component:HomePage},
  {path:'/meetingPage',component:meetingPage},
  {path:'/adminHomePage',component:adminHomePage},
  {path:'/allUser',component:allUser},
  {path:'/adminAttendnance',component: adminAttendnancePage},
  {path:'/allAttendance',component: allAttendance},
  {path:'/details',component: AllUserDetails},
  {path:'/allMeeting',component: AllUserMeeting},
  {path:'/adminMeeting',component: AdminMeeting},
  {path:'/userInfo',component: userStatisticsPage},
  {path:'/statistics',component: adminStatisticsPage},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
  AllUserDetails
});

export default router;



