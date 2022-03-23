<template>
<!--  attendance table-->

  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
      <tr class="text-center">
        <th class="px-4 py-3 text-white text-2xl"  colspan="5">All User Attendance Today</th>
      </tr>
      <tr>
        <th scope="col" class="px-6 py-3">
         Name
        </th>
        <th scope="col" class="px-6 py-3">
          Jatri Id
        </th>
        <th scope="col" class="px-6 py-3">
          Date
        </th>
        <th scope="col" class="px-6 py-3">
          Entry Time
        </th>

        <th scope="col" class="px-6 py-3">
          Details
        </th>

      </tr>
      </thead>
      <tbody>
      <tr :class="++i%2 === 0 ? '': 'bg-gray-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600' "  v-for="attendance in allUserAttendanceToday.todayAttendances" :key="attendance" class="border-b bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-2 font-medium text-black dark:text-white whitespace-nowrap">
          {{attendance.userId.name}}
        </th>
        <td class="px-6 py-2 font-medium text-black dark:text-white whitespace-nowrap">
          {{attendance.userId._id}}
        </td>
        <td class="px-6 py-2 font-medium text-black dark:text-white whitespace-nowrap">
          {{attendance.timeDate.split("T")[0]}}
        </td>
        <td class="px-6 py-2 font-medium text-black dark:text-white whitespace-nowrap">
          {{(new Date(attendance.timeDate) + addTime).split(" ")[4]}}
        </td>
        <td class="px-6 py-2 font-medium text-black dark:text-white whitespace-nowrap">
          <router-link class="mx-2" to="./details">
            <button @click="submitDetails(attendance.userId._id)"  type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Details <span><i class="fa fa-filter"></i></span> </button>
          </router-link>
        </td>
      </tr>


      </tbody>
    </table>
  </div>


<!--  status-->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 shadow-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
      <tr class="text-center">
        <th class="px-4 py-3 text-white text-2xl"  colspan="5">Today Attendance Statistics</th>
      </tr>
      <tr>
        <th scope="col" class="px-6 py-3">
          totalEmployee
        </th>
        <th scope="col" class="px-6 py-3">
          Present
        </th>
        <th scope="col" class="px-6 py-3">
          Late
        </th>
        <th scope="col" class="px-6 py-3">
          Absent
        </th>
        <th scope="col" class="px-6 py-3">
          Persentage
        </th>
      </tr>
      </thead>
      <tbody>
      <tr  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {{allUserAttendanceToday.attendanceStat.totalEmployee}}
        </th>
        <td class="px-6 py-4">
          {{allUserAttendanceToday.attendanceStat.present}}
        </td>
        <td class="px-6 py-4">
          {{allUserAttendanceToday.attendanceStat.late}}
        </td>
        <td class="px-6 py-4">
          {{allUserAttendanceToday.attendanceStat.absent}}
        </td>
        <td class="px-6 py-4 ">
          {{allUserAttendanceToday.attendanceStat.presentPercentage}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "AllAttendance",
  data(){
    return{
      addTime: 1000*60*60*6,
      attendDetails:'',
      i:0
    }
  },
  computed:{
    ...mapGetters('allEmployee',['allUserAttendanceToday'])

  },
  methods: {
    ...mapActions('allEmployee',['fetchAttendance']),
    ...mapActions('allEmployee',['fetchDetails']),
    submitDetails(id){
      this.fetchDetails(id);
    }
  },
  created() {
    this.fetchAttendance()
  }

}
</script>

<style scoped>

</style>