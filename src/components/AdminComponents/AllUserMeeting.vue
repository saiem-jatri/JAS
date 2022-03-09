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
          <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Accept</th>
          <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Reject</th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr v-for="meetings in allUserMeeting.payloads" :key="meetings">
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900"> {{meetings.date}} </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900"> {{meetings.fromTime}} </div>
              </div>
            </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{meetings.toTime}}  </div>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"> {{meetings.comments}} </span>
          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
            <span :class="meetings.status === 'pending'? 'bg-yellow-200 text-red-800' : meetings.status === 'rejected'? 'bg-red-800 text-white' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"> {{meetings.status}} </span>

          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
            <button @click="updateMeeting(meetings)" type="button" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg">Update <span><i class="fa fa-filter"></i></span> </button>

          </td>
          <td class="px-6 py-4 whitespace-nowrap">
            <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
            <button  @click="acceptMeeting(meetings)" type="button" class="shadow-sm bg-green-800 text-white mx-auto flex items-center px-2 rounded-lg"> <span class="ml-2"><i class="fa fa-check"></i></span> </button>

          </td>          <td class="px-6 py-4 whitespace-nowrap">
          <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
          <button :class="meetings.status === 'rejected' ? 'cursor-not-allowed' : 'display-block' " @click="rejectMeeting(meetings)"  type="button" class="shadow-sm bg-red-600 text-white flex items-center mx-auto px-2 rounded-lg"> <span class="ml-2"><i class="fa fa-times"></i></span> </button>

        </td>
        </tr>
        </tbody>
      </table>
    </div>
  </div>
<UpdateAllUserMeeting
    v-if="isUpdateOpen"
    @close="closeUpdateModal()"
    :meetingData="selectedMeetingData"
/>
</template>

<script>
import UpdateAllUserMeeting from "@/components/AdminComponents/UpdateAllUserMeeting.vue"
import {mapActions,mapGetters} from "vuex";


export default {
  components: {UpdateAllUserMeeting},
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
  name: "AllUserMeeting",
  computed:{
    ...mapGetters('allEmployeeMeeting',['allUserMeeting'])
  },
  methods:{
    ...mapActions('allEmployeeMeeting',['fetchAllMeeting', 'meetingDecison']),
    updateMeeting(meetings){
      this.isUpdateOpen = true;
      this.selectedMeetingData.date=meetings.date;
      this.selectedMeetingData.fromTime=meetings.fromTime;
      this.selectedMeetingData.toTime=meetings.toTime;
      this.selectedMeetingData.comments=meetings.comments;
      this.selectedMeetingData.id=meetings.meetingId;
    },
    closeUpdateModal() {
      this.isUpdateOpen = false
    },
    acceptMeeting(meetings){
      const payloads={
        id:meetings.meetingId,
        status:"accepted"
      };
      this.meetingDecison(payloads)
    },
    rejectMeeting(meetings){
      const payloads={
         id:meetings.meetingId,
        status:"rejected"
      };
      this.meetingDecison(payloads)
    }
  },
  created() {
    this.fetchAllMeeting()
  }
}

</script>

<style scoped>

</style>