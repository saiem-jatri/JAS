<template>
  <div class="lg:flex lg:justify-between lg:items-center">
    <UserInfo/>
    <UserDashboard/>
  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import UserDashboard from "@/components/UserDashboard";

export default {
  name: "userStatisticsPage",
  components: {
    UserInfo,
    UserDashboard
  }
}
</script>

<style scoped>

</style>