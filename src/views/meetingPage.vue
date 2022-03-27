<template>
  <h2 class="text-md lg:text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Welcome This is your Meeting page</h2>
  <div class=" gap-4 mt-10">
    <div class="lg:w-full w-1/3 lg:flex lg:flex-col lg:justify-center gap-4">
      <MeetingAdd />
      <MeetingFilter/>
    </div>
    <div class="w-full">
      <MeetingShow/>
    </div>

  </div>

</template>

<script>
import {mapGetters} from 'vuex'
import MeetingShow from "@/components/MeetingShow";
import MeetingAdd from "@/components/MeetingAdd"
import MeetingFilter from "@/components/MeetingFilter";
export default {
  name: "meetingPage",

  computed:{
    ...mapGetters('login', ['getUser'])
  },
  components:{
    MeetingShow,
    MeetingAdd,
    MeetingFilter,
  }
}
</script>

<style scoped>

</style>