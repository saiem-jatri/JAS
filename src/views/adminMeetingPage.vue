<template>
  <h2 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Welcome This is your Meeting page</h2>
  <div class="w-full flex justify-center mx-auto item-center">
    <div class="w-2/5 p-5 bg-gray-300 bg-opacity-20 rounded-lg shadow-lg p-4 mt-5">
      <div class="flex flex-col w-full">
<!--        <MeetingAdd/>-->
<!--        <MeetingFilter/>-->
      </div>
    </div>
    <div class="mt-5 w-3/5">
      <AdminMeetingAdd />
    </div>
  </div>
</template>

<script>
import AdminMeetingAdd from "@/components/AdminComponents/AdminMeetingAdd";

export default {
  name: "adminMeetingPage",
  components: {AdminMeetingAdd}
}
</script>

<style scoped>

</style>