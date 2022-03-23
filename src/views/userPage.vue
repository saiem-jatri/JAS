<template>
<!--test-->
  <h2 class="text-md lg:text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">User Attendance page</h2>
  <div class=" gap-4 mt-10">
    <div class="lg:w-full lg:flex lg:flex lg:justify-between gap-4">
      <div class="lg:w-1/2 w-full">
        <FILTER />
      </div>
      <div class="lg:w-1/2 w-full">
        <TimeCard/>
      </div>

    </div>
    <div class="w-full mt-10">
      <UserData/>
    </div>

  </div>
</template>

<script>
import {mapGetters} from 'vuex'
// import Home from "@/components/TimeCard.vue";
import UserData from "@/components/UserData.vue";
import meeting from "@/components/MeetingShow.vue";
import TimeCard from "@/components/TimeCard";
import FILTER from "@/components/AttendnanceFilter";


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
