<template>
  <Header />
  <div class="container">
    <router-view />
  </div>
</template>

<script>
import {mapActions} from 'vuex'
import Header from '@/components/Header';
import axios from "axios";

export default {
  methods: {
    ...mapActions('admin',['fetchOnlineUsers'])
  },
  components: {
    Header,
  },
  //
  // async created(){
  //   const response = await axios.get('http://localhost:3333/login');
  //   this.$store.dispatch('user',response.data);
  // },

};
</script>
