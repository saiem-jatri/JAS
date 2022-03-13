<template>
  <h2 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Hello Admin This is your Attendnance page</h2>
  <div class="lg:flex lg:justify-evenly mt-10">
    <div class="lg:w-1/2">
      <AdminAttendnanceFilter/>
      <AdminAttendnance/>
    </div>
    <div class="w-1/2">
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