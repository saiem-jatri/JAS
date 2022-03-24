<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10 shadow-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
      <thead class="text-xs text-white uppercase bg-primary dark:bg-gray-700 dark:text-gray-400">
      <tr class="text-center">
        <th class="px-4 py-3 text-white text-2xl"  colspan="5">Admin Attendance Dashboard</th>
      </tr>
      <tr>
        <th scope="col" class="px-6 py-3">
          WeekDays
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
          {{ getAdminDashboard.attendanceStatOwn.weekdays }}
        </th>
        <td class="px-6 py-4">
          {{getAdminDashboard.attendanceStatOwn.present}}
        </td>
        <td class="px-6 py-4">
          {{getAdminDashboard.attendanceStatOwn.late}}
        </td>
        <td class="px-6 py-4">
          {{getAdminDashboard.attendanceStatOwn.absent}}
        </td>
        <td class="px-6 py-4 ">
          {{getAdminDashboard.attendanceStatOwn.presentPercentage}}
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import {mapGetters,mapActions} from "vuex";

export default {
  name: "AdminDashboard",
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