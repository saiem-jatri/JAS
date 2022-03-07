<template>
  <div>
    <AllUserDetails/>
  </div>
  <div>
    <UserAttendanceFilter/>
  </div>

</template>

<script>
import AllUserDetails from "@/components/AdminComponents/AllUserDetails";
import UserAttendanceFilter from "@/components/AdminComponents/UserAttendanceFilter";

export default {
  name: "allUserDetailsPage",
  components:{
    AllUserDetails,
    UserAttendanceFilter
  }
}
</script>

<style scoped>

</style>