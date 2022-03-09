<template>

  <section @click="close()" class="z-20 w-screen h-screen fixed top-0 opacity-50">

  </section>
  <div class="absolute inset-0 ">
    <div class ="flex h-full w-full">
      <div class="z-30 m-auto bg-primary rounded p-4 shadow">
        <div class="p-2 border">
          <h1 class="text-2xl text-center text-white shadow-lg font-semibold">Update Your Meeting Time</h1>

          <form @submit="onFormSubmit" class="p-2 my-2">
            <div class="my-4 text-white">
              <label>Add Date</label>
              <input v-model="mainData.date" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="date" placeholder="Date is..." >
            </div>
            <div class="my-4 text-white">
              <label>From Time</label>
              <input v-model="mainData.fromTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
            </div>
            <div class="my-4 text-white">
              <label>To Time</label>
              <input v-model="mainData.toTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
            </div>
            <div class="my-4 text-white">
              <div>
                <h3 v-if="mainData.toTime <= mainData.fromTime" :class="mainData.toTime >= mainData.fromTime ? 'display' : 'none'" class="text-red-600 font-bold">To Time Must Greater than fromTime!!</h3>

              </div>
              <label>Comment</label>
              <textarea v-model="mainData.comments" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"  placeholder="Add Your Comment here..."></textarea>
            </div>
            <div class="my-4">
              <button v-if="mainData.toTime <= mainData.fromTime"
                      type="submit"
                      class="w-full bg-gray-400 cursor-not-allowed select-none rounded shadow-md bg-primary text-white p-2 font-bold"
              >Submit
              </button>
              <button v-else
                      type="submit"
                      class="w-full rounded shadow-md bg-white text-primary hover:text-white hover:bg-primary p-2 font-bold"
              >Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from "vuex";
import {beforeMount} from "vue";

export default {
  name: "UpdateAllUserMeeting",
  props:['meetingData'],
  data(){
    return{
      mainData:{
        date:'',
        fromTime:new Date().toString().split(" ")[4].slice(0,5),
        toTime:new Date().toString().split(" ")[4].slice(0,5),
        comments:'',
        mainId:''
      }
    }
  },
  methods: {
    ...mapActions('allEmployeeMeeting',['updateAllMeetingFilter']),
    close() {
      this.$emit('close')
    },
    onFormSubmit(){
      const payloads = this.mainData;
      this.updateAllMeetingFilter(payloads)
    }
  },
  beforeMount(){
    this.mainData.date=this.meetingData.date;
    this.mainData.fromTime=this.meetingData.fromTime;
    this.mainData.toTime=this.meetingData.toTime;
    this.mainData.comments=this.meetingData.comments;
    this.mainData.mainId=this.meetingData.id;
  }
}
</script>

<style scoped>

</style>