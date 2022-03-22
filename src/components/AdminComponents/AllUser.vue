<template class="relative bg-gray-200">
  <h3 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Show All User</h3>
  <div class="absolute bottom-20 right-20">
    <button @click="openMyModal" type="button" class="active:outline-0 w-16 h-16 rounded-full bg-primary flex justify-center items-center text-white shadow-xl"><span><i class="fa fa-plus"></i></span></button>
  </div>
<!-- table -->
  <div class="flex flex-col shadow-xl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center shadow-xl">
            <thead class="border-b">
            <tr class="bg-primary bg-opacity-80">
              <th scope="col" class="text-md font-medium text-white px-6 py-4">
                Name
              </th>
              <th scope="col" class="text-md font-medium text-white  px-6 py-4">
                Email
              </th>
              <th scope="col" class="text-md font-medium text-white px-6 py-4">
                Mobile
              </th>
              <th scope="col" class="text-md font-medium text-white px-6 py-4">
                Designation
              </th>
              <th scope="col" class="text-md font-medium text-white px-6 py-4">
                Line Manager
              </th>
              <th scope="col" class="text-md font-medium text-white px-6 py-4">
                Role
              </th>
              <th scope="col" class="text-md font-medium text-white px-6 py-4">
                Nid
              </th>
              <th scope="col" class="text-md font-medium text-white px-6 py-4">
                Update
              </th>
            </tr>
            </thead>
            <tbody>
            <tr :class="++i%2 === 0 ? '':'bg-gray-200 bg-opacity-80'"  class="text-center border-b" v-for="userInfo in getAllAdminUsers.users" :key="userInfo">
              <td class="text-sm text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4 relative">
                    <span :class="getOnlineData.includes(userInfo._id) === true ?
                    'w-2 h-2 rounded-full animate-ping  bg-green-700 absolute top-2 -right-5 bottom-5' : ''"></span>
                    <div class="text-sm font-medium text-gray-900">{{userInfo.name}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 text-center font-light px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.email}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.mobile}}</div>
                  </div>
                </div>
              </td>


              <td class="text-sm  text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.designation}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div  class="ml-4" >
                    <div class="text-sm font-medium text-gray-900">{{userInfo.lineManager.name}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.role.toUpperCase()}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm  text-gray-900 font-medium px-6 py-4 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900">{{userInfo.nid}}</div>
                  </div>
                </div>
              </td>
              <td class="text-sm  text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                <button @click="updateUserData(userInfo)" type="button" class="shadow-sm bg-red-200 flex items-center px-2 rounded-lg">Update <span><i class="fa fa-filter"></i></span> </button>
              </td>
            </tr>
            </tbody>
          </table>
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
      i:0,
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
    }
  },
  components: {AllUserUpdateModal,userCreateModal},
  name: "AllUser",
  methods: {
    ...mapActions('adminAllUser',['fetchallAdminUsers']),
    ...mapActions('socket',['onlineUserData']),
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
    ...mapGetters('adminAllUser',['getAllAdminUsers']),
    ...mapGetters('socket',['getOnlineData']),
  },
  created() {
    this.fetchallAdminUsers();
    this.onlineUserData()
  }
}
</script>

<style scoped>

</style>