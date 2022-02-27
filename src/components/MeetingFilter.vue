<template>
  <form @submit.prevent="formSubmit">
    <div class="flex gap-4 bg-green-100 p-6 shadow-lg">
      <div>
        <label class="text-sm text-yellow-600 font-bold mb-2">
          From Date
        </label>
        <input v-model="filterDate" type="date" >
      </div>
      <button type="submit" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg " data-toggle="collapse" data-target="#filters">Filters <span><i class="fa fa-filter"></i></span> </button>
    </div>
  </form>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "MeetingFilter",
  data(){
    return{
      filterDate:''
    }
  },
  computed:{
    ...mapGetters('meeting',['allUserMeeting']),
    ...mapActions('meeting',['addMeetingFilter'])
  },
  methods:{

    formSubmit(){
      return this.addMeetingFilter(filterDate);
    }
  },

}
</script>

<style scoped>

</style>