<template>

 <Home v-if="user" />
  <TimeCard/>
  <UserData/>
</template>

<script>
import Home from "@/components/TimeCard.vue";
import UserData from "@/components/UserData.vue";
import meeting from "@/components/meeting.vue";
import TimeCard from "@/components/TimeCard";


export default {
  name: 'UserPage',
  props:['user'],

  components: {
    Home,
    UserData,
    meeting,
    TimeCard
  },

};
</script>
