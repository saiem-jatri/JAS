<template>
  <nav class="bg-primary py-3 px-3">
    <div class="flex justify-between">
      <div class="text-4xl font-semibold">
        <a href="./"><img :src="image2" alt="" class="w-20"></a>
      </div>
      <div v-if="!getUser" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white">

        <router-link class="mx-2" to="/login">login</router-link>
      </div>
      <div v-if="getUser && getUser.role ==='user'" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white relative">
        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="/HomePage">Home</router-link>
        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="/meetingPage">Meeting</router-link>
        <a href="javascript:void(0)" @click="handleClick" class="mx-2 text-sm hover:text-gray-300 shadow-lg" >logout</a>
        <p class="absolute top-0 right-2 text-xs">{{getUser.name}}</p>
        <div class="w-2 h-2 rounded-full animate-ping  bg-green-700 absolute -top-2 right-0 bottom-5">

        </div>
      </div>
      <div v-if="getUser && getUser.role === 'admin'" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white relative">
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./adminHomePage">adminHomePage </router-link>-->
        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./allUser">User's </router-link>
        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./adminAttendnance">AdminAttendnance </router-link>
        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./allAttendance">Attendance's </router-link>
        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./allMeeting">Meeting's </router-link>
<!--        <router-link class="mx-2 text-sm shadow-lg hover:text-gray-300" to="./AdminMeeting">Admin Meeting </router-link>-->
        <a href="javascript:void(0)" @click="handleClick" class="mx-2 text-sm hover:text-gray-300 shadow-lg" >logout </a>
        <p class="absolute top-0 right-2 text-xs">{{getUser.name}}</p>
        <div class="w-2 h-2 rounded-full animate-ping  bg-green-700 absolute -top-2 right-0 bottom-5">

        </div>
<!--        <LogoutDropdown/>-->
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
    }
  }
};
</script>
