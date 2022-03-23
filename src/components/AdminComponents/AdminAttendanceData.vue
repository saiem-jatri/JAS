<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 shadow-lg">
    <table class="w-full text-sm text-center text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" class="px-6 py-3">
          Date
        </th>
        <th scope="col" class="px-6 py-3">
          Entry Time
        </th>
        <th scope="col" class="px-6 py-3">
          Status
        </th>
      </tr>
      </thead>
      <tbody>
      <tr :class="++i%2 === 0 ? '' :'bg-gray-200'" v-for="attendance in allAdminAttendance.attendances" :key="attendance" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {{attendance.timeDate.split("T")[0]}}
        </td>
        <td class="px-6 py-4">
          {{(new Date(attendance.timeDate) + addTime).split(" ")[4]}}
        </td>
        <td class="px-6 py-4">
          <span :class="attendance.status === 'late'? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{attendance.status}}</span>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AdminAttendnanceData",
  data(){
    return{
      addTime: 1000*60*60*6,
      i:0,

    }
  },
  methods: {
    ...mapActions('attendance',['fetchAdminAttendance']),
  },
  computed:{
    ...mapGetters('attendance', ['allAdminAttendance'])
  },
  created() {
    this.fetchAdminAttendance();
  }
}
</script>

<style scoped>

</style>