<template>
  <div class="flex justify-center item-center w-full">
    <div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jatri Id</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entry Time</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="attendance in allUserAttendanceToday.todayAttendances" :key="attendance">

                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{attendance.userId.name}} </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{attendance.userId._id}} </div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{attendance.timeDate.split("T")[0]}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{(new Date(attendance.timeDate) + addTime).split(" ")[4]}}</div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span :class="attendance.status === 'late'? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{attendance.status}}</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <router-link class="mx-2" to="./details">
                      <button @click="submitDetails(attendance.userId._id)"  type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Details <span><i class="fa fa-filter"></i></span> </button>
                    </router-link>
                  </td>
                </tr>
                <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="mt-10">
    <h3 class="text-primary font-bold px-5 text-center mb-5 bg-green-200 w-1/2 mx-auto py-4 shadow-lg">Employee Attednance Status <span><i class="fa-solid fa-face-smile"></i></span></h3>
    <div class="w-1/2 flex justify-center mx-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
        <tr class="">
          <th scope="col" class="px-6 bg-pink-600 py-3 text-center text-xs font-medium text-white uppercase tracking-wider">totalEmployee</th>
          <th scope="col" class="px-6 py-3 text-center text-xs font-medium bg-green-600 text-white uppercase tracking-wider">Present</th>
          <th scope="col" class="px-6 py-3 text-center text-xs font-medium bg-red-600 text-white uppercase tracking-wider">Late</th>
          <th scope="col" class="px-6 py-3 text-center text-xs font-medium bg-yellow-600 text-white uppercase tracking-wider">Absent</th>
        </tr>
        </thead>
        <tbody class="bg-white divide divide-gray-200 bg-gray-200 text-white">
        <tr >
          <td class="px-6 py-4 whitespace-nowrap divide-x divide-black text-center ">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900 ">{{allUserAttendanceToday.attendanceStat.totalEmployee}} </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{{allUserAttendanceToday.attendanceStat.present}} </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{{allUserAttendanceToday.attendanceStat.late}}</div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{allUserAttendanceToday.attendanceStat.absent}}</div>
          </td>
        </tr>


        <!-- More people... -->
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "AllAttendance",
  data(){
    return{
      addTime: 1000*60*60*6,
      attendDetails:''
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