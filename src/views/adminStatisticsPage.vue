<template>
  <div class="lg:flex lg:justify-between lg:items-center">
    <div class="flex justify-center items-center w-full mx-auto">
      <UserInfo/>
    </div>

    <div>
      <div class="flex items-center mt-4 text-gray-700 gap-2">
        <h3 class="text-2xl font-bold text-primary">Admin Attendance Dashboard </h3>
        <img :src="arrow" alt="" class="w-6">
      </div>
      <AdminDashboard/>
      <div class="flex items-center mt-10 text-gray-700 gap-2">
        <h3 class="text-2xl font-bold text-primary">All User Attendance Dashboard </h3>
        <img :src="arrow" alt="" class="w-6">
      </div>
      <AllUserAttendanceDashboard/>

      <div class="flex items-center mt-10 text-gray-700 gap-2">
        <h3 class="text-2xl font-bold text-primary">All User Meeting Dashboard </h3>
        <img :src="arrow" alt="" class="w-6">
      </div>
      <AllUserMeetingDashboard/>
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