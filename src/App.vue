<template>
  <Header :user="user" />
  <div class="container">
    <router-view :user="user" />
  </div>
</template>

<script>
import Header from '@/components/Header';
import axios from "axios";


export default {
  components: {
    Header,
  },
  data(){
    return{
      user:null,
      props:['user']
    }
  },
  async created(){
    const response = await axios.get('user');
    console.log(response)
  },

};
</script>
