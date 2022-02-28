<template>
  <div class="flex justify-center item-center w-full">
            <div class="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg w-full">
              <table class="min-w-full divide-y divide-gray-200 divide">
                <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Time</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Time</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="meet in allUserMeeting.payloads" :key="meet">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{meet.date}} </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900"> {{meet.fromTime}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{meet.toTime}} </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.comments}}</span>
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
      selectedMeetingData:{
        date:'',
        fromTime:'',
        toTime:'',
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