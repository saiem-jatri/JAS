<template>
 <div class="h-5/6">
   <div class="lg:flex lg:justify-between gap-10 lg:items-center">
     <div class="lg:w-1/4 w-full">
       <UserInfo/>
     </div>

     <div class="lg:w-3/4 w-full h-screen overflow-y-auto">
       <AdminDashboard/>
       <AllUserAttendanceDashboard/>
       <AllUserMeetingDashboard/>
     </div>

   </div>
 </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import AdminDashboard from "@/components/AdminComponents/AdminDashboard";
import AllUserAttendanceDashboard from "@/components/AdminComponents/AllUserAttendanceDashboard";
import AllUserMeetingDashboard from "@/components/AdminComponents/AllUserMeetingDashboard";

export default {
  name: "adminStatisticsPage",
  data(){
    return{
      arrow:require("../assets/images/downArrow.png"),
    }
  },
  components: {
    UserInfo,
    AdminDashboard,
    AllUserAttendanceDashboard,
    AllUserMeetingDashboard
  }
}
</script>

<style scoped>

</style>