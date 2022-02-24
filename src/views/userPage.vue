<template>
<!-- <Home />-->
  <h2 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Welcome This is your Attendnance page</h2>
  <div class="flex items-center gap-4">
    <FILTER class="ml-28" />
    <TimeCard/>
  </div>
  <UserData/>
</template>

<script>
import {mapGetters} from 'vuex'
// import Home from "@/components/TimeCard.vue";
import UserData from "@/components/UserData.vue";
import meeting from "@/components/meeting.vue";
import TimeCard from "@/components/TimeCard";
import FILTER from "@/components/FILTER";


export default {
  name: 'UserPage',
  computed:{
    ...mapGetters('login', ['getUser'])
  },
  components: {
    // Home,
    UserData,
    meeting,
    TimeCard,
    FILTER
  },

};
</script>
