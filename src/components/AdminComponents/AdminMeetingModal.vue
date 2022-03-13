<template>
  <section @click="close()" class="z-20 w-screen h-screen fixed top-0 opacity-50">

  </section>

  <div class="absolute inset-0 ">
    <div class ="flex h-full w-full">
      <div class="z-30 m-auto bg-primary rounded p-4 shadow">
        <div class="p-2 border">
          <h1 class="text-2xl text-center text-white shadow-lg font-semibold">Add Meeting</h1>

          <form @submit ="onSubmit" class="rounded px-8 mt-5 mb-5">
            <div class="flex gap-4">
              <div class="mb-4">
                <label class="block text-white text-xl text-center font-bold mb-2">
                  Add Date
                </label>
                <input v-model="meetingDate" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Time is...">
              </div>
              <div class="mb-4">
                <label class="block text-white text-xl text-center font-bold mb-2">
                  From Time
                </label>
                <input v-model="fromTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
              </div>
              <div class="mb-4">
                <label class="block text-white text-xl text-center font-bold mb-2">
                  To Time
                </label>
                <input v-model="toTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
              </div>

            </div>
            <div>
              <h3 v-if="toTime <= fromTime" :class="toTime >= fromTime ? 'display' : 'none'" class="text-red-600 font-bold bg-white">To Time Must Greater than fromTime!!</h3>
            </div>
            <div class="mb-4">
              <label class="block text-white text-xl text-center font-bold mb-2">
                Comments
              </label>
              <textarea v-model="comments" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Add Your Comment here..."></textarea>
            </div>
            <div class="flex w-full items-center justify-center mt-5 mb-5">
              <button v-if="toTime <= fromTime" class="bg-gray-400 cursor-not-allowed select-none  text-white font-bold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline">
                Submit
              </button>
              <button v-else class="bg-white text-primary font-bold py-2 px-12 rounded-full focus:outline-none focus:shadow-outline" type="submit">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AdminMeetingModal",
  data(){
    return{
      meetingDate:'',
      fromTime: new Date().getHours() + ":" + new Date().getMinutes(),
      toTime: new Date().getHours() + ":" + new Date().getMinutes(),
      comments:''
    }
  },
  methods:{
    ...mapActions('adminMeeting',['addMeeting']),
    onSubmit(){
      const date = this.meetingDate;
      const fromTime= this.fromTime;
      const toTime = this.toTime;
      const comments = this.comments;
      this.addMeeting({date, fromTime, toTime, comments});
    },
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>