<template>

 <Home />
  <UserData/>
</template>

<script>
import Home from "@/components/TimeCard.vue";
import UserData from "@/components/UserData.vue";


export default {
  name: 'UserPage',
  components: {
    Home,
    UserData
  },

};
</script>
