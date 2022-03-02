<template>
  <h3 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Show All User</h3>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
        <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr class="text-center">
<!--              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">jatriId</th>-->
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">lineManager</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nid</th>

            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">

            <tr class="text-center" v-for="userInfo in getAllAdminUsers.users" :key="userInfo">
<!--              <td class="px-6 py-4 whitespace-nowrap">-->
<!--                <div class="flex items-center">-->
<!--                  <div class="ml-4">-->
<!--                    <div class="text-sm font-medium text-gray-900">{{userInfo.jatriId}}</div>-->
<!--                  </div>-->
<!--                </div>-->
<!--              </td>-->
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.name}}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.email}}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.mobile}}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.designation}}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.lineManager}}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.role}}</div>
                  </div>
                </div>
              </td>
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.nid}}</div>
                  </div>
                </div>
              </td>




            </tr>


            <!-- More people... -->
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions,mapGetters} from 'vuex'
export default {
  name: "AllUser",
  methods: {
    ...mapActions('adminAllUser',['fetchallAdminUsers'])
  },
  computed:{
    ...mapGetters('adminAllUser',['getAllAdminUsers'])
  },
  created() {
    this.fetchallAdminUsers()
  }
}
</script>

<style scoped>

</style>