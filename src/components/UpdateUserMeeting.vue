<template>

    <section @click="close()" class="z-20 w-screen h-screen bg-gray-200 fixed top-0 opacity-50">

    </section>
    <div class="absolute inset-0 ">
      <div class ="flex h-full w-full">
        <div class="z-30 m-auto bg-green-400 rounded p-4 shadow">
          <div class="p-2 border">
            <h1 class="text-2xl text-center">Update Your Meeting Time</h1>
            <form @submit.prevent="onFormSubmit" class="p-2 my-2">
              <div class="my-4">
                <label>Add Date</label>
                <input  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Time is..." :value="date">
              </div>
              <div class="my-4">
                <label>From Time</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is..." :value="fromTime">
              </div>
              <div class="my-4">
                <label>To Time</label>
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is..." :value="toTime">

              </div>
              <div class="my-4">
                <label>Comment</label>
                <textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Add Your Comment here..." :value="comments" ></textarea>
              </div>
              <div class="my-4">
                <button
                    type="submit"
                    class="w-full rounded shadow-md bg-primary text-white p-2"
                >Submit
                </button>

              </div>
            </form>
          </div>
        </div>
      </div>
    </div>


<!--  <button  type="button" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" >Update <span><i class="fa fa-filter"></i></span> </button>-->

</template>

<script>
import {mapActions} from "vuex"
export default {
  data(){
    return{
      date:this.meetingData.date,
      fromTime: this.meetingData.fromTime.split(' ')[0],
      toTime: this.meetingData.toTime.split(' ')[0],
      comments: this.meetingData.comments,
      id:this.meetingData.id
    }
  },
  props:['meetingData'],
  name: "UpdateUserMeeting",

  methods: {
    close() {
      this.$emit('close')
    },
    ...mapActions('meeting',['updateMeetingFilter']),
    onFormSubmit(){
      console.log(this.date)
      console.log(this.fromTime)
      console.log(this.toTime)
      console.log(this.comments)
      console.log(this.id)
      this.updateMeetingFilter({
        date:this.date,
        fromTime:this.fromTime,
        toTime:this.toTime,
        comments:this.comments,
        id:this.id
      })
    }
  }

}
</script>

<style scoped>

</style>