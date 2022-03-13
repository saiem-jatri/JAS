<template>
  <form @submit.prevent="onSubmit">
    <div class="flex justify-evenly bg-primary bg-opacity-80 p-5 shadow-lg">
      <div>
        <label class="text-sm text-white font-bold mb-2">
          From Time
        </label>
        <input v-model="dateRange.FromDate" type="date" >
      </div>
      <div>
        <label class="text-sm text-white font-bold mb-2">
          From Time
        </label>
        <input v-model="dateRange.ToDate" type="date" >
      </div>
      <button type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Filters <span><i class="fa fa-filter"></i></span> </button>
    </div>
  </form>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "AdminAttendnanceFilter",
  data() {
    return {
      dateRange: {
        FromDate: '',
        ToDate: ''
      }
    }
  },
  computed:{
    ...mapGetters('attendance', ['allUserAttendance']),
    ...mapActions('attendance', ['addFilter'])
  },
  methods:{

    onSubmit(){
      return this.addFilter(this.dateRange);
    }
  }
  }
</script>

<style scoped>

</style>