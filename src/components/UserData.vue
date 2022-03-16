<template>

  <div class="flex flex-col shadow-xl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b">
            <tr class="bg-primary bg-opacity-80">
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Date</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Entry Time</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Status</th>
            </tr>
                </thead>
            <tbody class="bg-white divide-y divide-gray-200">

            <tr :class="++i%2 === 0 ? '' :'bg-gray-200'" v-for="attendance in allUserAttendance.attendances" :key="attendance">
              <td class="text-sm text-gray-900 bg-yellow-400-500 font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{attendance.timeDate.split("T")[0]}} </div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 bg-yellow-400-500 font-light px-6 py-2 whitespace-nowrap">
                <div class="text-sm text-gray-900"> {{(new Date(attendance.timeDate) + addTime).split(" ")[4]}}  </div>
              </td>
              <td class="text-sm text-gray-900 bg-yellow-400-500 font-light px-6 py-2 whitespace-nowrap">
                <span :class="attendance.status === 'late'? 'bg-red-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{attendance.status}}</span>
              </td>
            </tr>


            <!-- More people... -->
            </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>



</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  data(){
    return{
      addTime: 1000*60*60*6,
      i:0
    }
  },
  name: "UserData",
  methods: {
    ...mapActions('attendance',['fetchAttendance']),
  },
computed:{
    ...mapGetters('attendance', ['allUserAttendance'])
},
  created() {
    this.fetchAttendance();
  }


}
</script>

<style scoped>

</style>