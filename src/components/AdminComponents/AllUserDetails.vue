<template class="">
  <div class="flex flex-col justify-between gap-5 customheight">

    <div class="h-1/5">
      <h2 class="text-primary  font-bold px-5 text-center mb-1 bg-green-200 w-1/2 mx-auto py-4 shadow-lg">All Attendance Of {{allUserDetails.name}}</h2>
      <div class="flex  justify-center items-center mb-5 mt-0">
        <form @submit.prevent="filterUserAttendance" class="w-1/2">
          <div class="flex gap-4 bg-green-100 p-6 shadow-lg">
            <div>
              <label class="text-sm text-yellow-600 font-bold mb-2">
                From Time
              </label>
              <input v-model="DateRange.fromDate" type="date" >
            </div>
            <div>
              <label class="text-sm text-yellow-600 font-bold mb-2">
                From Time
              </label>
              <input v-model="DateRange.toDate" type="date" >
            </div>
            <button type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Filters <span><i class="fa fa-filter"></i></span> </button>
          </div>
        </form>
      </div>
    </div>
    <div class="flex h-3/5 justify-center item-center w-full">
      <div class="w-1/2 overflow-auto">
        <table class="min-w-full divide-y divide-gray-200 relative">
          <thead>
            <tr>
              <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
              <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entry Time</th>
              <th scope="col" class="sticky bg-green-300 top-0 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
            </tr>
          </thead>
          <tbody class="bg-white divide-y divide-gray-200 h-full">

          <tr class="" v-for="attendance in allUserDetails.attendances" :key="attendance">
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{attendance.timeDate.split("T")[0]}} </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900"> {{(new Date(attendance.timeDate) + addTime).split(" ")[4]}}  </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <span :class="attendance.status === 'late'? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{attendance.status}}</span>
            </td>
          </tr>


          <!-- More people... -->
          </tbody>
        </table>
      </div>
    </div>
    <div class="h-1/5 ">
      <h3 class="text-primary font-bold px-5 text-center mb-5 bg-green-200 w-1/2 mx-auto py-4 shadow-lg">Employee Attednance Status <span><i class="fa-solid fa-face-smile"></i></span></h3>
      <div class="w-1/2 flex justify-center mx-auto">
        <table class="min-w-full divide-y divide-gray-200">
          <thead class="bg-gray-50">
          <tr class="">
            <th scope="col" class="px-6 bg-pink-600 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">totalDays</th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium bg-green-600 text-white uppercase tracking-wider">Present</th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium bg-red-600 text-white uppercase tracking-wider">Late</th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium bg-yellow-600 text-white uppercase tracking-wider">Absent</th>
            <th scope="col" class="px-6 py-3 text-center text-xs font-medium bg-pink-600 text-white uppercase tracking-wider">Percentage</th>
          </tr>
          </thead>
          <tbody class="bg-white divide divide-gray-200 bg-gray-200 text-white">
          <tr >
            <td class="px-6 py-4 whitespace-nowrap divide-x divide-black text-center ">
              <div class="flex items-center">
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900 ">{{allUserDetails.attendanceStat.weekdays}} </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{allUserDetails.attendanceStat.present}} </div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="flex items-center">
                <div class="ml-4">
                  <div class="text-sm font-medium text-gray-900">{{allUserDetails.attendanceStat.late}}</div>
                </div>
              </div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{allUserDetails.attendanceStat.absent}}</div>
            </td>
            <td class="px-6 py-4 whitespace-nowrap">
              <div class="text-sm text-gray-900">{{allUserDetails.attendanceStat.presentPercentage}}</div>
           </td>
          </tr>
          </tbody>
        </table>
      </div>

    </div>
  </div>


</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "AllUserDetails",
  data(){
    return{
      DateRange:{
        fromDate:'',
        toDate:''
      }
    }
  },


  methods: {
    ...mapActions('allEmployee',['fetchDetails','fetchFilterDetails']),
    filterUserAttendance(){
      const data = {
        id: this.allUserDetails.id,
        from: this.DateRange.fromDate,
        to: this.DateRange.toDate,
      }
      console.log(data)
      return this.fetchFilterDetails(data);
    }

  },
  computed:{
    ...mapGetters('allEmployee',['allUserDetails'])
  },

}
</script>

<style scoped>
.customheight{
  height: calc(100vh - 130px);
}
</style>