import { createRouter, createWebHistory } from 'vue-router'
import HomePage from '../views/userPage.vue';
import login from "@/components/login";

const routes=[
  {path:'/',component:HomePage},
  {path:'/login',component:login},
]
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;



