<template>
    <div class="flex justify-center items-center mx-auto">
      <form @submit ="onSubmit" class="bg-green-100  shadow-md rounded px-8 mt-5 mb-5">
        <div class="flex gap-4">
          <div class="mb-4">
            <label class="block text-yellow-600 text-xl text-center font-bold mb-2">
              Add Date
            </label>
            <input v-model="meetingDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Time is...">
          </div>
          <div class="mb-4">
            <label class="block text-yellow-600 text-xl text-center font-bold mb-2">
              From Time
            </label>
            <input v-model="fromTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
          </div>
          <div class="mb-4">
            <label class="block text-yellow-600 text-xl text-center font-bold mb-2">
              To Time
            </label>
            <input v-model="toTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
          </div>

        </div>
        <div>
          <h3 v-if="toTime <= fromTime" :class="toTime >= fromTime ? 'display' : 'none'" class="text-red-600 font-bold">To Time Must Greater than fromTime!!</h3>
        </div>
        <div class="mb-4">
          <label class="block text-yellow-600 text-xl text-center font-bold mb-2">
            Comments
          </label>
          <textarea v-model="comments" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Add Your Comment here..."></textarea>
        </div>
        <div class="flex w-full items-center justify-center mt-5 mb-5">
          <button v-if="toTime <= fromTime" class="bg-gray-400 cursor-not-allowed select-none  text-white font-bold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline">
            Submit
          </button>
          <button v-else class="bg-primary text-white font-bold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>

</template>

<script>
import {mapActions} from "vuex"
export default {
  name: "MeetingAdd",
  data(){
    return{
      meetingDate:'',
      fromTime:new Date().getHours() + ":" + new Date().getMinutes(),
      toTime:new Date().getHours() + ":" + new Date().getMinutes(),
      comments:''
    }
  },
  methods:{
    ...mapActions('meeting',['addMeeting']),
    onSubmit(){
      const date = this.meetingDate;
      const fromTime= this.fromTime;
      const toTime = this.toTime;
      const comments = this.comments;
      this.addMeeting({date, fromTime, toTime, comments});
      console.log(this.addMeeting)
    }
  }
}
</script>

<style scoped>

</style>