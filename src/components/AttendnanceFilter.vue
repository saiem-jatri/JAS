<template>

  <form @submit.prevent="onSubmit">
    <div class="flex gap-4 bg-green-100 p-6 shadow-lg">
      <div>
        <label class="text-sm text-yellow-600 font-bold mb-2">
          From Time
        </label>
        <input v-model="dateRange.FromDate" type="date" >
      </div>
      <div>
        <label class="text-sm text-yellow-600 font-bold mb-2">
          From Time
        </label>
        <input v-model="dateRange.ToDate" type="date" >
      </div>
      <button type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Filters <span><i class="fa fa-filter"></i></span> </button>
    </div>
  </form>


</template>

<script>
import {mapGetters, mapActions} from "vuex";
export default {
  name: "FILTER",
  data(){
    return{
      dateRange: {
        FromDate:'',
        ToDate:''
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