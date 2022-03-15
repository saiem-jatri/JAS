<template>
  <div class="">
    <form @submit="onSubmit">
      <div class="justify-center items-center lg:flex mx-auto lg:justify-evenly bg-primary bg-opacity-80 p-4 mt-5 lg:mt-0 shadow-lg w-1/2 lg:w-full">
        <label class="text-white text-xl text-center font-bold mb-2">
          Entry Time
        </label>
        <div class="w-full lg:w-1/3">
          <input v-model="addTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
        </div>
        <div class="">
          <button class="bg-white text-primary font-bold py-2 mt-2 lg:mt-0 px-8 rounded focus:outline-none focus:shadow-outline" type="submit">
            Submit
          </button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "AdminAttendnance",
  data(){
    return{
      addTime: new Date().getHours() + ":" + new Date().getMinutes(),
    }
  },
  methods: {
    ...mapActions('attendance',['addAttendance']),
    onSubmit(){
      // creating timestamp
      const time = this.addTime;
      console.log(time)
      const timestamp = new Date().toISOString().split("T")[0] + "T" + time;

      this.addAttendance(timestamp);
    }
  }
}
</script>

<style scoped>

</style>