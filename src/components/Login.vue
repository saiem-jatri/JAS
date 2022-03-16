<template>
  <div class="w-full flex justify-center items-center h-full my-auto">
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input v-model="username"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Password
        </label>
        <input v-model="password"
               class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
               id="password" type="password" placeholder="**********">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit">
          Sign In
        </button>
      </div>
    </form>

  </div>
</template>

<script>

import axios from "axios";
import store from "@/store";
import {mapActions} from "vuex";

import { io } from "socket.io-client";
const socket = io("http://localhost:3333", {
  withCredentials: true,
});

export default {
  name: "login",
  data() {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    ...mapActions('login', ['getUserFromApi']),
    async handleSubmit() {

      const response = await axios.post('http://localhost:3333/login', {
        username: this.username,
        password: this.password

      }, {
        withCredentials: true //correct
      });
      console.log(response);
      localStorage.setItem('token', response.data.token);
      console.log("====",response)
      socket.emit("login", localStorage.getItem('token'));
      this.getUserFromApi(response.data.userObj);
      if(response.data.userObj.role === 'admin'){
        await this.$router.push('./allUser')
      }else{
        await this.$router.push('/userInfo');
      }

      console.log(store.state.login.userData)
    },
  }

}
</script>

<style scoped>

</style>