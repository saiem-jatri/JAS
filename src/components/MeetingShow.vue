<template>
  <div class="flex flex-col shadow-xl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center shadow-xl">
            <thead class="border-b">
                <tr class="bg-primary bg-opacity-80">
                  <th scope="col" class="text-md font-medium text-white px-6 py-4">Date</th>
                  <th scope="col" class="text-md font-medium text-white px-6 py-4">From Time</th>
                  <th scope="col" class="text-md font-medium text-white px-6 py-4">To Time</th>
                  <th scope="col" class="text-md font-medium text-white px-6 py-4">Comment</th>
                  <th scope="col" class="text-md font-medium text-white px-6 py-4">Status</th>
                  <th scope="col" class="text-md font-medium text-white px-6 py-4">Update</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr :class="++i%2 === 0 ? '':'bg-gray-200 bg-opacity-80'"  class="text-center border-b" v-for="meet in allUserMeeting.payloads" :key="meet">
                  <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{meet.date}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{meet.fromTime}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{meet.toTime}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">{{meet.comments}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
<!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
                    <span :class="meet.status === 'pending'? 'bg-yellow-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>

                  </td>

                  <td class="px-6 py-4 whitespace-nowrap">
                    <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
                    <button @click="updateMeeting(meet)" type="button" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg">Update <span><i class="fa fa-filter"></i></span> </button>

                  </td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
    </div>
  </div>
  <UpdateUserMeeting
    v-if="isUpdateOpen"
    @close="closeUpdateModal()"
    :meetingData="selectedMeetingData"
  />
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
import UpdateUserMeeting from "@/components/UpdateUserMeeting";
export default {
  name: "meeting",
  components: {UpdateUserMeeting},
  data(){
    return{
      isUpdateOpen: false,
      i:0,
      selectedMeetingData:{
        date:'',
        fromTime:new Date().getHours() + ":" + new Date().getMinutes(),
        toTime:new Date().getHours() + ":" + new Date().getMinutes(),
        comments:'',
        id:''
      }
    }
  },
  methods: {
    ...mapActions('meeting',['fetchMeeting']),
    updateMeeting(meet) {
      this.isUpdateOpen = true;
      this.selectedMeetingData.date=meet.date;
      this.selectedMeetingData.fromTime=meet.fromTime;
      this.selectedMeetingData.toTime=meet.toTime;
      this.selectedMeetingData.comments=meet.comments;
      this.selectedMeetingData.id=meet.meetingId;
    },
    closeUpdateModal() {
      this.isUpdateOpen = false
    }
  },
  computed:{
    ...mapGetters('meeting',['allUserMeeting'])
  },
  created() {
    this.fetchMeeting()
  }
}
</script>

<style scoped>

</style>