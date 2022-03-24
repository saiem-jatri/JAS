<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 shadow-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
      <tr class="text-center">
        <th class="px-4 py-3 text-white text-2xl"  colspan="5">Your Attendance Dashboard</th>
      </tr>
      <tr>
        <th scope="col" class="px-6 py-3">
          Total Days
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
      <tr v-for="userState in getUserStatistics" :key="userState"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {{userState.weekdays}}
        </th>
        <td class="px-6 py-4">
          {{userState.present}}
        </td>
        <td class="px-6 py-4">
          {{userState.late}}
        </td>
        <td class="px-6 py-4">
          {{userState.absent}}
        </td>
        <td class="px-6 py-4 ">
          {{userState.presentPercentage}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>


<!--  Meeting Statistics-->
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 shadow-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
      <tr class="text-center">
        <th class="px-4 py-3 text-white text-2xl"  colspan="5"> Your Meeting Dashboard</th>
      </tr>
      <tr>
        <th scope="col" class="px-6 py-3">
          Pending
        </th>
        <th scope="col" class="px-6 py-3">
          Accepted
        </th>
        <th scope="col" class="px-6 py-3">
          Rejected
        </th>
        <th scope="col" class="px-6 py-3">
          Total Meetings
        </th>
        <th scope="col" class="px-6 py-3">
          Date
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="userState in getUserStatistics.meetingStat" :key="userState"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {{userState.pending}}
        </th>

        <td class="px-6 py-4">
          {{userState.accepted}}
        </td>
        <td class="px-6 py-4">
          {{userState.rejected}}
        </td>
        <td class="px-6 py-4">
          {{userState.totalMeetings}}
        </td>
        <td class="px-6 py-4 ">
          {{userState.date}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: "UserDashboard",
  computed:{
    ...mapGetters('statistics',['getUserStatistics'])
  },
  methods: {
    ...mapActions('statistics',['fetchstatistics']),
  },
  created(){
     this.fetchstatistics();
  }
}
</script>

<style scoped>

</style>