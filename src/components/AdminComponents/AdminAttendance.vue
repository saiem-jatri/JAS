<template>
  <div class="absolute bottom-20 right-20 ">
    <router-link class="mx-2 text-sm shadow-lg text-white active:outline-0 w-16 h-16 rounded-full bg-primary flex justify-center items-center text-white shadow-xl" :class="$route.path ==='/allAttendance' ? 'text-green-500' : ''" to="./allAttendance"><img :src="detailsImage" alt="" class="w-10"> </router-link>
<!--    <button @click="" type="button" class="active:outline-0 w-16 h-16 rounded-full bg-primary flex justify-center items-center text-white shadow-xl"><span> <img :src="detailsImage" alt="" class="w-10"></span></button>-->
  </div>
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
  name: "AdminAttendnance",
  data(){
    return{
      addTime: new Date().getHours() + ":" + new Date().getMinutes(),
      detailsImage:require('@/assets/images/details_black.png')
    }
  },
  methods: {
    ...mapActions('attendance',['addAdminAttendance']),
   async onSubmit(){
      // creating timestamp
      const time = this.addTime;
      console.log(time)
      const timestamp = new Date().toISOString().split("T")[0] + "T" + time;
    await this.addAdminAttendance(timestamp);
    await this.reloadPage()
    },
    reloadPage() {
      window.location.reload();
    },
    routeToAttendance(){

    }
  }
}
</script>

<style scoped>

</style>