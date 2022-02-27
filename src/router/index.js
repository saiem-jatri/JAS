import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/userPage.vue';
import meetingPage from "../views/meetingPage.vue";
import login from "@/components/Login";
import meeting from "@/components/MeetingShow";

const routes=[
  {path:'/',component:HomePage},
  {path:'/login',component:login},
  {path:'/meetingPage',component:meetingPage},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



