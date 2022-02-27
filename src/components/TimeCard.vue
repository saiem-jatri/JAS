<template>
  <div class="w-2/5">
    <form @submit="onSubmit" class="bg-green-100 flex gap-4 shadow-md rounded px-8 mt-5 mb-5">
      <div class="mb-4">
        <label class="block text-yellow-600 text-xl text-center font-bold mb-2">
          Add Time
        </label>
        <input v-model="addTime" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="time" placeholder="Time is...">
      </div>
      <div class="flex w-full items-center justify-between mt-5">
        <button class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
          Submit
        </button>
      </div>
    </form>
  </div>

  <div>

  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "Home",
  data(){
    return{
      addTime:''
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