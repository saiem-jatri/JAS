<template>
<!--  <nav class="bg-primary py-3 px-3 hidden lg:block">-->
<!--    <div class="flex justify-between">-->
<!--      <div class="text-4xl font-semibold">-->
<!--        <a href="./"><img :src="image2" alt="" class="w-20"></a>-->
<!--      </div>-->
<!--      <div v-if="!getUser" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white">-->

<!--        <router-link class="mx-2" to="/login">login</router-link>-->
<!--      </div>-->
<!--      <div v-if="getUser && getUser.role ==='user'" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white relative">-->
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="/HomePage">Home</router-link>-->
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="/meetingPage">Meeting</router-link>-->
<!--        <a href="javascript:void(0)" @click="handleClick" class="mx-2 text-sm hover:text-gray-300 shadow-lg" >logout</a>-->
<!--        <p class="absolute top-0 right-2 text-xs">{{getUser.name}}</p>-->
<!--        <div class="w-2 h-2 rounded-full animate-ping  bg-green-700 absolute -top-2 right-0 bottom-5">-->

<!--        </div>-->
<!--      </div>-->
<!--      <div v-if="getUser && getUser.role === 'admin'" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white relative">-->
<!--&lt;!&ndash;        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./adminHomePage">adminHomePage </router-link>&ndash;&gt;-->
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./allUser">User's </router-link>-->
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./adminAttendnance">AdminAttendnance </router-link>-->
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./allAttendance">Attendance's </router-link>-->
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./allMeeting">Meeting's </router-link>-->
<!--&lt;!&ndash;        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./AdminMeeting">Admin Meeting </router-link>&ndash;&gt;-->
<!--        <a href="javascript:void(0)" @click="handleClick" class="mx-2 text-sm hover:text-gray-300 shadow-lg" >logout </a>-->
<!--        <p class="absolute top-0 right-2 text-xs">{{getUser.name}}</p>-->
<!--        <div class="w-2 h-2 rounded-full animate-ping  bg-green-700 absolute -top-2 right-0 bottom-5">-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </nav>-->


<!--  Phone nav start-->
    <nav class="flex w-full items-center bg-primary justify-between flex-wrap p-4">
        <div class="flex items-center flex-no-shrink text-white mr-6">
          <a href="./"><img :src="image2" alt="" class="w-20"></a>
        </div>
        <div class="block sm:hidden">
          <button @click="toggle" class="flex items-center px-3 py-2 border rounded text-teal-lighter border-teal-light hover:text-white hover:border-white">
            <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
          </button>
        </div>
        <div :class="open ? 'block': 'hidden'" class="w-4/5 flex-grow sm:flex sm:items-center sm:w-auto">
                <div v-if="!getUser" class="flex gap-4 text-2xl font-semibold justify-end items-center text-white">

                  <router-link class="mx-2" to="/login">login</router-link>
                </div>

            <div v-if="getUser && getUser.role ==='user'" class="text-sm w-full flex-grow sm:flex sm:items-center sm:w-auto relative">
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/HomePage' ? 'text-green-500' : ''" to="/HomePage">Home</router-link>
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/userInfo' ? 'text-green-500' : ''" to="/userInfo">User Info</router-link>
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/meetingPage' ? 'text-green-500' : ''" to="/meetingPage">Meeting</router-link>
              <a href="javascript:void(0)" @click="handleClick" class="mx-2 text-sm shadow-lg text-white" >logout</a>
              <p :class="open ? 'hidden' : 'block'" class=" ml-auto top-0 right-2 text-xs font-bold text-white">{{getUser.name}}</p>
              <div :class="open ? 'hidden' : 'block'" class="w-2 h-2 rounded-full animate-ping  bg-green-700 absolute -top-2 right-0 bottom-5">
              </div>
            </div>
            <div v-if="getUser && getUser.role === 'admin'" class="w-full flex-grow sm:flex sm:items-center sm:w-auto relative">
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/allUser' ? 'text-green-500' : ''" to="./allUser">User's </router-link>
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/statistics' ? 'text-green-500' : ''" to="./statistics">Statistics </router-link>
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/adminAttendnance' ? 'text-green-500' : ''" to="./adminAttendnance">AdminAttendnance </router-link>
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/allAttendance' ? 'text-green-500' : ''" to="./allAttendance">Attendance's </router-link>
              <router-link class="mx-2 text-sm shadow-lg text-white" :class="$route.path ==='/allMeeting' ? 'text-green-500' : ''" to="./allMeeting">Meeting's </router-link>
              <a href="javascript:void(0)" @click="handleClick" class="mx-2 text-sm text-white shadow-lg" >logout </a>
              <p :class="open ? 'hidden' : 'block'" class=" ml-auto top-0 right-2 text-xs font-bold text-white">{{getUser.name}}</p>
              <div :class="open ? 'hidden' : 'block'" class="w-2 h-2 rounded-full animate-ping  bg-green-700 absolute -top-2 right-0 bottom-5">
              </div>
            </div>
          </div>




    </nav>
</template>

<script>
import {mapGetters, mapMutations} from 'vuex'
import LogoutDropdown from "@/components/LogoutDropdown";
import { io } from "socket.io-client";
const socket = io("http://localhost:3333", {
  withCredentials: true,
});


export default {
  name: 'Header',
  methods:{
    ...mapMutations('login',['SetLogOut']),
    handleClick(){
      socket.emit("logout", localStorage.getItem('token'));
      localStorage.removeItem('token');
      this.SetLogOut()
      this.$router.push('/');
    },
    toggle() {
      this.open = !this.open
    }
  },
  components: {
    LogoutDropdown
  },
  computed:{
    ...mapGetters('login', ['getUser'])
  },
  data(){
    return{
      image1:require("../assets/images/jas_logo (1).png"),
      image2:require("../assets/images/jas-logo-png-transparent.png"),
      open:false,
    }
  },
  // created() {
  //   window.addEventListener('beforeunload', this.handleClick)
  // },
};
</script>
