<template>
<!-- <Home />-->
  <TimeCard/>
  <UserData/>
</template>

<script>
import {mapGetters} from 'vuex'
// import Home from "@/components/TimeCard.vue";
import UserData from "@/components/UserData.vue";
import meeting from "@/components/meeting.vue";
import TimeCard from "@/components/TimeCard";


export default {
  name: 'UserPage',
  computed:{
    ...mapGetters('login', ['getUser'])
  },
  components: {
    // Home,
    UserData,
    meeting,
    TimeCard
  },

};
</script>
