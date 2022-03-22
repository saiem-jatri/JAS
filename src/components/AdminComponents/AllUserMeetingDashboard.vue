<template>
  <div class="flex flex-col shadow-xl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b">
            <tr class="bg-primary bg-opacity-80">
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-blue-800 font-bold uppercase tracking-wider">date</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-blue-800 font-bold uppercase tracking-wider">Accept</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-blue-800 font-bold uppercase tracking-wider">Pending</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-blue-800 font-bold uppercase tracking-wider">Reject</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-blue-800 font-bold uppercase tracking-wider">Total Meetings</th>
            </tr>
            </thead>
            <tbody class="bg-primary divide divide-gray-200 bg-gray-200 text-white">
            <tr :class="++i%2 === 0 ? '' : 'bg-gray-200'" v-for="meetings in getAdminDashboard.meetingStat">
              <td class="text-sm text-white font-light px-6 py-2 whitespace-nowrap">
                <div class="text-sm text-gray-900">{{meetings.date}}</div>
              </td>
              <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-black">{{meetings.accepted}} </div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{meetings.pending}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-black">{{ meetings.rejected }}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
                <div class="text-sm text-black">{{meetings.totalMeetings}}</div>
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