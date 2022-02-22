<template>
  <nav class="flex justify-between bg-primary p-4 ">
    <div class="text-4xl font-semibold">
      <img :src="image2" alt="" class="w-20">
    </div>
    <div v-if="!user" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white">

      <router-link class="mx-2" to="/login">login</router-link>
    </div>
    <div v-if="user" class="flex gap-4 text-2xl font-semibold justify-center items-center text-white">
      <router-link class="mx-2" to="/">Home</router-link>
      <router-link class="mx-2" to="/meeting">Meeting</router-link>
      <a href="javascript:void(0)" @click="handleClick" class="mx-2" >logout</a>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  props:['user'],
  methods:{
    handleClick(){
      localStorage.removeItem('token');
      this.$router.push('/');
    }
  },
  data(){
    return{
      user: '',
      image1:require("../assets/images/jas_logo (1).png"),
      image2:require("../assets/images/jas-logo-png-transparent.png"),
    }
  }
};
</script>
