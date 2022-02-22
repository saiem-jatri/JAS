import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/userPage.vue';
import login from "@/components/login";
import meeting from "@/components/meeting";
// import logout from "@/components/logout";

const routes=[
  {path:'/',component:HomePage},
  {path:'/login',component:login},
  // {path:'/logout',component:logout},
  {path:'/meeting',component:meeting},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;


