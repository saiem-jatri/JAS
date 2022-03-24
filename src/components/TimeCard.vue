<template>
  <div class="">
    <form @submit.prevent="onSubmit">
      <div class="justify-center items-center lg:flex mx-auto lg:justify-evenly bg-primary p-4 mt-5 lg:mt-0 shadow-lg lg:w-full">
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
  name: "Home",
  data(){
    return{
      addTime: new Date().getHours() + ":" + new Date().getMinutes(),
    }
  },
  methods: {
    ...mapActions('attendance',['addAttendance']),
    async onSubmit(){
      // creating timestamp
      const time = this.addTime;
      console.log("TIME ", time)
      const timestamp = new Date().toISOString().split("T")[0] + "T" + time;
      await this.addAttendance(timestamp);
      this.reloadPage()
    },
    reloadPage() {
      window.location.reload();
    },
  }

}
</script>

<style scoped>

</style>