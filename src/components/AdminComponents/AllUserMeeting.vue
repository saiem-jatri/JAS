<template>
  <div class="flex justify-center item-center w-full">
    <div class="absolute bottom-20 right-20">
      <button @click="openMeetingModal" type="button" class="active:outline-0 w-16 h-16 rounded-full bg-primary flex justify-center items-center text-white shadow-xl"><span><i class="fa fa-plus"></i></span></button>
    </div>
    <div class="shadow overflow-x-auto border-b border-gray-200 sm:rounded-lg w-full mt-5">
      <table class="min-w-full divide-y divide-gray-200 divide">
        <thead class="bg-gray-50">
        <tr class="bg-primary bg-opacity-80">
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Date</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">From Time</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">To Time</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Comment</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Status</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Update</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Accept</th>
          <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Reject</th>
        </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
        <tr :class="++i%2 === 0 ? '' : 'bg-gray-200'" v-for="meetings in allUserMeeting.payloads" :key="meetings">
          <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
            <div class="text-sm text-gray-900"> {{meetings.date}} </div>
          </td>
          <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
            <div class="flex items-center">
              <div class="ml-4">
                <div class="text-sm font-medium text-gray-900"> {{meetings.fromTime}} </div>
              </div>
            </div>
          </td>
          <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
            <div class="text-sm text-gray-900">{{meetings.toTime}}  </div>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
            <span  class="px-2 inline-flex text-xs font-robato leading-5 font-semibold rounded-full"> {{meetings.comments}} </span>
          </td>
          <td class="text-sm text-gray-900 font-light px-6 py-2 whitespace-nowrap">
            <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
            <span :class="meetings.status === 'pending'? 'bg-yellow-200 text-red-800' : meetings.status === 'rejected'? 'bg-red-800 text-white' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full"> {{meetings.status}} </span>

          </td>
          <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
            <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
            <button @click="updateMeeting(meetings)" type="button" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg">Update <span><i class="fa fa-filter"></i></span> </button>

          </td>
          <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
            <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
            <button  @click="acceptMeeting(meetings)" type="button" class="shadow-sm bg-green-800 text-white mx-auto flex items-center px-2 rounded-lg"> <span class="ml-2"><i class="fa fa-check"></i></span> </button>

          </td>

          <td class="text-sm text-gray-900  font-light px-6 py-2 whitespace-nowrap">
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
  <AdminMeetingModal
      v-if="isOpen"
      @close="closeMeetingModal()"
  />

</template>

<script>
import UpdateAllUserMeeting from "@/components/AdminComponents/UpdateAllUserMeeting.vue"
import {mapActions,mapGetters} from "vuex";
import AdminMeetingModal from "@/components/AdminComponents/AdminMeetingModal";


export default {
  components: {UpdateAllUserMeeting,
              AdminMeetingModal

  },
  data(){
    return{
      isUpdateOpen: false,
      isOpen:false,
      i:0,
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
    closeMeetingModal(){
      this.isOpen=false
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
    },
    openMeetingModal(){
      this.isOpen = true
      console.log("aaaaaaaaa")
    }
  },
  created() {
    this.fetchAllMeeting()
  },

}

</script>

<style scoped>

</style>