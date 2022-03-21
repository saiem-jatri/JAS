<template>
  <div class="lg:flex lg:justify-between lg:items-center">
    <UserInfo/>
    <div>
      <div class="flex items-center mt-4 text-gray-700 gap-2">
        <h3 class="text-2xl font-bold text-primary">Admin Dashboard </h3>
        <img :src="arrow" alt="" class="w-6">
      </div>
      <UserDashboard/>
    </div>

  </div>
</template>

<script>
import UserInfo from "@/components/UserInfo";
import UserDashboard from "@/components/UserDashboard";

export default {
  name: "adminStatisticsPage",
  data(){
    return{
      arrow:require("../assets/images/downArrow.png")
    }
  },
  components: {
    UserInfo,
    UserDashboard
  }
}
</script>

<style scoped>

</style>