<template class="relative">
  <h3 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Show All User</h3>
  <div class="absolute bottom-20 right-20">
    <button @click="openMyModal" type="button" class="active:outline-0 w-16 h-16 rounded-full bg-primary flex justify-center items-center text-white shadow-xl"><span><i class="fa fa-plus"></i></span></button>
  </div>

  <div class="flex justify-center item-center w-full mt-10">
    <div>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg w-full">
          <table class="min-w-full divide-y divide-gray-200">
            <thead class="bg-gray-50">
            <tr class="text-center">
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Mobile</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Designation</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">lineManager</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Nid</th>
              <th scope="col" class="px-6 py-3  text-center text-xs font-medium text-gray-500 uppercase tracking-wider">Update</th>


            </tr>
            </thead>
            <tbody class="bg-white divide-y divide-gray-200">

            <tr class="text-center" v-for="userInfo in getAllAdminUsers.users" :key="userInfo">
              <td class="px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 relative">
                    <span :class="onlineUsersId.includes(userInfo._id) === true ?
                    'w-2 h-2 rounded-full animate-ping  bg-green-700 absolute top-2 -right-5 bottom-5' : ''"></span>
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
                  <div  class="ml-4" >
                    <div class="text-sm font-medium text-gray-900">{{userInfo.lineManager.name}}</div>
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
              <td class="px-6 py-4 whitespace-nowrap">
                <!--                    <span  class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full">{{meet.status}}</span>-->
                <button @click="updateUserData(userInfo)" type="button" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg">Update <span><i class="fa fa-filter"></i></span> </button>

              </td>
            </tr>

            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
    </div>
  </div>
  <AllUserUpdateModal
      v-if="isUpdateOpen"
      @close="closeUpdateModal()"
      :allUserData="selectallUserData"
  />
  <userCreateModal
      v-if="isOpen"
      @close="closeModal()"
  />
</template>
<script>
import AllUserUpdateModal from "./AllUserUpdateModal.vue"
import {mapActions,mapGetters} from 'vuex'
import userCreateModal from "@/components/AdminComponents/userCreateModal";

export default {
  data(){
    return{
      image1:require("../../assets/images/plus.png"),
      isOpen:false,
      isUpdateOpen:false,
      selectallUserData:{
        name:'',
        email:'',
        mobile:'',
        designation:'',
        lineManager:'',
        role:'',
        nid:'',
        _id:'',
      },
      onlineUsersId:'',
    }
  },
  components: {AllUserUpdateModal,userCreateModal},
  name: "AllUser",
  sockets: {
    // Fired when the server sends something on the "messageChannel" channel.
    online(data) {
      this.onlineUsersId = data;
      console.log("Online asdasdas users",data);
    }
  },
  methods: {
    ...mapActions('adminAllUser',['fetchallAdminUsers']),
    closeUpdateModal() {
      this.isUpdateOpen = false
    },
    closeModal(){
      this.isOpen = false
    },
    updateUserData(userInfo){
      this.isUpdateOpen = true;
      this.selectallUserData.name=userInfo.name;
      this.selectallUserData.email=userInfo.email;
      this.selectallUserData.mobile=userInfo.mobile;
      this.selectallUserData.designation=userInfo.designation;
      this.selectallUserData.lineManager=userInfo.lineManager;
      this.selectallUserData.role=userInfo.role;
      this.selectallUserData.nid=userInfo.nid;
      this.selectallUserData._id=userInfo._id;
    },
    openMyModal(){
      this.isOpen=true;
    },
  },
  computed:{
    ...mapGetters('adminAllUser',['getAllAdminUsers'])
  },
  created() {
    this.fetchallAdminUsers();
  }
}
</script>

<style scoped>

</style>