<template>
  <div class="w-full flex justify-center items-center h-full my-auto">
    <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Email
        </label>
        <input v-model="Email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username">
      </div>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
          Password
        </label>
        <input v-model="Password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="**********">
      </div>
      <div class="flex items-center justify-between">
        <button class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Sign In
        </button>
      </div>
    </form>

  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "login",
  data(){
    return {
      Email:'',
      Password:'',
      range: {
        start: new Date(2020, 0, 1),
        end: new Date(2020, 0, 5)
      }
    }
  },
  methods: {
    handleSubmit(){
      const data ={
        Email:this.Email,
        Password:this.Password
      };
      axios.post("http://localhost:8000/register",data)
      .then(
          res =>{
            console.log(res);
          }
      )
    }
  }
}
</script>

<style scoped>

</style>