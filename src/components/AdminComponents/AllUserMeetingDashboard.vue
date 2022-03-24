<template>
  <div class="relative  overflow-auto shadow-md sm:rounded-lg mt-10 shadow-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
      <tr class="text-center">
        <th class="px-4 py-3 text-white text-2xl"  colspan="5">All User Meeting Dashboard</th>
      </tr>
      <tr>
        <th scope="col" class="px-6 py-3">
          Date
        </th>
        <th scope="col" class="px-6 py-3">
          Accept
        </th>
        <th scope="col" class="px-6 py-3">
          Pending
        </th>
        <th scope="col" class="px-6 py-3">
          Reject
        </th>
        <th scope="col" class="px-6 py-3">
          Total Meeting
        </th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="meetings in getAdminDashboard.meetingStat" :key="meetings"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <th scope="row" class="px-6 py-4 font-medium text-gray-900 dark:text-white whitespace-nowrap">
          {{meetings.date}}
        </th>
        <td class="px-6 py-4">
          {{meetings.accepted}}
        </td>
        <td class="px-6 py-4">
          {{meetings.pending}}
        </td>
        <td class="px-6 py-4">
          {{ meetings.rejected }}
        </td>
        <td class="px-6 py-4 ">
          {{meetings.totalMeetings}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>


<!--  test-->
<!--  <div class="flex h-3/5 justify-center item-center w-full">-->
<!--    <div class="w-full overflow-auto">-->
<!--      <table class="min-w-full divide-y divide-gray-200 relative">-->
<!--        <thead>-->
<!--        <tr class="text-center">-->
<!--          <th class="px-4 py-3 text-white text-2xl"  colspan="5">All User Meeting Dashboard</th>-->
<!--        </tr>-->
<!--        <tr>-->
<!--          <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>-->
<!--          <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accept</th>-->
<!--          <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Pending</th>-->
<!--          <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reject</th>-->
<!--          <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Meeting</th>-->
<!--        </tr>-->
<!--        </thead>-->
<!--        <tbody class="bg-white divide-y divide-gray-200 h-full">-->

<!--        <tr v-for="meetings in getAdminDashboard.meetingStat" :key="meetings"  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">-->
<!--          <td class="px-6 py-4 whitespace-nowrap">-->
<!--            <div class="flex items-center">-->
<!--              <div class="ml-4">-->
<!--                <div class="text-sm font-medium text-gray-900"> {{meetings.date}} </div>-->
<!--              </div>-->
<!--            </div>-->
<!--          </td>-->
<!--          <td class="px-6 py-4 whitespace-nowrap">-->
<!--            <div class="text-sm text-gray-900">  {{meetings.accepted}}  </div>-->
<!--          </td>-->
<!--          <td class="px-6 py-4 whitespace-nowrap">-->
<!--              <div class="text-sm text-gray-900">  {{meetings.pending}}</div>-->
<!--          </td>-->
<!--          <td class="px-6 py-4 whitespace-nowrap">-->
<!--            <div class="text-sm text-gray-900">   {{ meetings.rejected }}</div>-->
<!--          </td>-->
<!--          <td class="px-6 py-4 whitespace-nowrap">-->
<!--            <div class="text-sm text-gray-900"> {{meetings.totalMeetings}}</div>-->
<!--          </td>-->
<!--        </tr>-->
<!--        </tbody>-->
<!--      </table>-->
<!--    </div>-->
<!--  </div>-->
</template>

<script>
import {mapGetters,mapActions} from "vuex";


export default {
  data(){
    return{
      i:0
    }
  },
  name: "AllUserMeetingDashboard",
  computed:{
    ...mapGetters('statistics',['getAdminDashboard'])
  },
  methods: {
    ...mapActions('statistics',['fetchAdminStatistics']),
  },
  created(){
    this.fetchAdminStatistics()
  }
}
</script>

<style scoped>

</style>