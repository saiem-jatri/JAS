<template>
<!--  test-->
  <div class="h-5/6">
    <div class="lg:flex lg:justify-between gap-10 lg:items-center">
      <div class="lg:w-1/4 w-full">
        <UserInfo/>
      </div>
      <div class="lg:w-3/4 w-full overflow-y-auto">
        <UserDashboard/>
      </div>

    </div>
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