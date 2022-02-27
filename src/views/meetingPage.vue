<template>
  <h2 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Welcome This is your Meeting page</h2>
  <div class="w-full flex justify-center mx-auto item-center">
    <div class="w-2/5 p-5 bg-gray-300 bg-opacity-20 rounded-lg shadow-lg p-4 mt-5">
      <div class="flex flex-col ">
        <MeetingAdd/>
        <MeetingFilter/>
      </div>
    </div>
    <div class="mt-5 w-2/3">
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
    MeetingFilter
  }
}
</script>

<style scoped>

</style>