<template>
  <h2 class="text-md lg:text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Admin Attendance page</h2>
  <div class=" gap-4 mt-10">
    <div class="lg:w-full lg:flex lg:flex lg:justify-between gap-4">
      <div class="lg:w-1/2 w-full">
        <AdminAttendnanceFilter/>
      </div>
      <div class="lg:w-1/2 w-full">
        <AdminAttendnance/>
      </div>

    </div>
    <div class="w-full">
      <AdminAttendnanceData/>
    </div>

  </div>
</template>


<script>
import AdminAttendnance from "@/components/AdminComponents/AdminAttendance";
import AdminAttendnanceData from "@/components/AdminComponents/AdminAttendanceData";
import AdminAttendnanceFilter from "@/components/AdminComponents/AdminAttendanceFilter";

export default {
  name: "adminAttendnancePage",
  components: {
    AdminAttendnanceData,
    AdminAttendnance,
    AdminAttendnanceFilter
  }
}
</script>

<style scoped>

</style>