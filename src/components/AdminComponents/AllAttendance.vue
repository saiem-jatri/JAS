<template>
<!--  <div class="flex justify-center item-center w-full">-->
<!--    <div>-->
<!--      <div class="flex flex-col">-->
<!--        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">-->
<!--          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">-->
<!--            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">-->
<!--              <table class="min-w-full divide-y divide-gray-200">-->
<!--                <thead class="bg-gray-50">-->
<!--                <tr>-->
<!--                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>-->
<!--                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Jatri Id</th>-->
<!--                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>-->
<!--                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Entry Time</th>-->
<!--                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>-->
<!--                  <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Details</th>-->
<!--                </tr>-->
<!--                </thead>-->
<!--                <tbody class="bg-white divide-y divide-gray-200">-->
<!--                <tr v-for="attendance in allUserAttendanceToday.todayAttendances" :key="attendance">-->

<!--                  <td class="px-6 py-4 whitespace-nowrap">-->
<!--                    <div class="flex items-center">-->
<!--                      <div class="ml-4">-->
<!--                        <div class="text-sm font-medium text-gray-900">{{attendance.userId.name}} </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="px-6 py-4 whitespace-nowrap">-->
<!--                    <div class="flex items-center">-->
<!--                      <div class="ml-4">-->
<!--                        <div class="text-sm font-medium text-gray-900">{{attendance.userId._id}} </div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="px-6 py-4 whitespace-nowrap">-->
<!--                    <div class="flex items-center">-->
<!--                      <div class="ml-4">-->
<!--                        <div class="text-sm font-medium text-gray-900">{{attendance.timeDate.split("T")[0]}}</div>-->
<!--                      </div>-->
<!--                    </div>-->
<!--                  </td>-->
<!--                  <td class="px-6 py-4 whitespace-nowrap">-->
<!--                    <div class="text-sm text-gray-900">{{(new Date(attendance.timeDate) + addTime).split(" ")[4]}}</div>-->
<!--                  </td>-->
<!--                  <td class="px-6 py-4 whitespace-nowrap">-->
<!--                    <span :class="attendance.status === 'late'? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{attendance.status}}</span>-->
<!--                  </td>-->
<!--                  <td class="px-6 py-4 whitespace-nowrap">-->
<!--                    <router-link class="mx-2" to="./details">-->
<!--                      <button @click="submitDetails(attendance.userId._id)"  type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Details <span><i class="fa fa-filter"></i></span> </button>-->
<!--                    </router-link>-->
<!--                  </td>-->
<!--                </tr>-->
<!--                &lt;!&ndash; More people... &ndash;&gt;-->
<!--                </tbody>-->
<!--              </table>-->
<!--            </div>-->
<!--          </div>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->


<!--  attendance table-->
  <div class="flex flex-col shadow-xl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b">
            <tr class="bg-primary bg-opacity-80">
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Jatri Id</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Date</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Entry Time</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Status</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Details</th>
            </tr>
            </thead>
            <tbody>
            <tr :class="++i%2 === 0 ? '': 'bg-yellow-200 bg-opacity-50' "  v-for="attendance in allUserAttendanceToday.todayAttendances" :key="attendance" class="border-b">
              <td class="text-sm text-gray-900 font-medium px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{attendance.userId.name}} </div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{attendance.userId._id}} </div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{attendance.timeDate.split("T")[0]}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{(new Date(attendance.timeDate) + addTime).split(" ")[4]}}</div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                <span :class="attendance.status === 'late'? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{attendance.status}}</span>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                <router-link class="mx-2" to="./details">
                  <button @click="submitDetails(attendance.userId._id)"  type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Details <span><i class="fa fa-filter"></i></span> </button>
                </router-link>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>


<!--  status-->
  <div class="flex flex-col shadow-xl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b">
        <tr class="bg-primary bg-opacity-80">
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">totalEmployee</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Present</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Late</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Absent</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Percentage</th>
        </tr>
        </thead>
        <tbody class="bg-white divide divide-gray-200 bg-gray-200 text-white">
        <tr >
          <td class="text-sm text-gray-900 bg-blue-400 font-light px-6 py-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-white">{{allUserAttendanceToday.attendanceStat.totalEmployee}} </div>
              </div>
            </div>
          </td>
          <td class="text-sm text-gray-900 bg-green-400 font-light px-6 py-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900">{{allUserAttendanceToday.attendanceStat.present}} </div>
              </div>
            </div>
          </td>
          <td class="text-sm text-gray-900 bg-yellow-400-500 font-light px-6 py-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-black">{{allUserAttendanceToday.attendanceStat.late}}</div>
              </div>
            </div>
          </td>
          <td class="text-sm text-gray-900 bg-red-500 font-light px-6 py-2 whitespace-nowrap">
            <div class="text-sm text-white">{{allUserAttendanceToday.attendanceStat.absent}}</div>
          </td>
          <td class="text-sm text-white bg-blue-400 font-light px-6 py-2 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{allUserAttendanceToday.attendanceStat.presentPercentage}}</div>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
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