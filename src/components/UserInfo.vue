<template>
<!--<h2>heloooooooo</h2>-->
  <div class="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden my-4">
    <img class="w-full h-56 object-cover object-center" src="https://avatars3.githubusercontent.com/u/42278188?v=4" alt="avatar">
    <div class="flex items-center px-6 py-3 bg-primary">
      <svg class="h-6 w-6 text-white fill-current" viewBox="0 0 512 512">
        <path d="M256 48C150 48 64 136.2 64 245.1v153.3c0 36.3 28.6 65.7 64 65.7h64V288h-85.3v-42.9c0-84.7 66.8-153.3 149.3-153.3s149.3 68.5 149.3 153.3V288H320v176h64c35.4 0 64-29.3 64-65.7V245.1C448 136.2 362 48 256 48z"/>
      </svg>
      <h1 class="mx-3 text-white font-semibold text-lg">User Details</h1>
    </div>
    <div class="py-4 px-6 bg-gray-200">
      <h1 class="text-2xl font-semibold text-gray-800">{{getUser.name}}</h1>
      <p class="py-2 text-lg text-gray-700">{{getUser.jatriId}}</p>
      <div class="flex items-center mt-4 text-gray-700">
        <img :src="designation" alt="" class="w-6">
        <h1 class="px-2 text-sm">{{getUser.designation}}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <img :src="user" alt="" class="w-6">
        <h1 class="px-2 text-sm">{{getUser.role}}</h1>
      </div>
      <div class="flex items-center mt-4 text-gray-700">
        <img :src="mail" alt="" class="w-6">
        <h1 class="px-2 text-sm">{{getUser.email}}</h1>
      </div>

      <div class="flex items-center mt-4 text-gray-700">
        <img :src="lineManagerImage" alt="" class="w-6">
        <h1 class="px-2 text-sm">{{getUser.lineManager}}</h1>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "UserInfo",
  data(){
    return{
      lineManagerImage:require("../assets/images/manager-50.png"),
      designation:require("../assets/images/designation.png"),
      user:require("../assets/images/user.png"),
      mail:require("../assets/images/mail.png"),
    }

  },
  computed:{
    ...mapGetters('login',['getUser'])

  }
}
</script>

<style scoped>

</style>