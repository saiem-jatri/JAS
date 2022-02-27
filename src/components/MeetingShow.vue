<template>
  <div class="flex justify-center item-center w-full">
    <div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
              <table class="min-w-full divide-y divide-gray-200 divide">
                <thead class="bg-gray-50">
                <tr>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">From Time</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">To Time</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Comments</th>
                  <th scope="col" class="px-12 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                <tr v-for="meet in allUserMeeting.meetings" :key="meet">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900"> {{meet.fromTime}}</div>
                      </div>
                    </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="text-sm text-gray-900">{{meet.toTime}} </div>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.comments}}</span>
                  </td>
                  <td class="px-6 py-4 whitespace-nowrap">
<!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
                    <span :class="meet.status === 'pending'? 'bg-yellow-200 text-red-800' : 'bg-green-200 text-green-800'" class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>

                  </td>
                </tr>


                <!-- More people... -->
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "meeting",
  methods: {
    ...mapActions('meeting',['fetchMeeting']),
  },
  computed:{
    ...mapGetters('meeting',['allUserMeeting'])
  },
  created() {
    this.fetchMeeting()
  }
}
</script>

<style scoped>

</style>