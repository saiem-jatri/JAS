<template>
  <section @click="close()" class="z-20 w-screen h-screen fixed top-0 opacity-50">

  </section>
  <div class="absolute inset-0 ">
    <div class ="flex h-full w-full">
      <div class="z-30 m-auto bg-green-400 rounded p-4 shadow">
        <div class="p-2 border">
          <h1 class="text-2xl text-center text-primary font-bold">Update All User Data</h1>
          <form @submit="onUserDataFormSubmit" class="p-2 my-2">
            <div class="my-4">
              <label>Name</label>
              <input v-model="allData.name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name is..." >
            </div>
            <div class="my-4">
              <label>Email</label>
              <input v-model="allData.email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email is..." >
            </div>
            <div class="my-4">
              <label>Phone</label>
              <input v-model="allData.mobile" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Number is..." >
            </div>
            <div class="my-4">
              <label>Designation</label>
              <input v-model="allData.designation" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Designation is..." >
            </div>
            <div class="my-4">
              <label class="text-primary font-bold">Line Manager</label> <br>
              <select v-model="allData.lineManager"  class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                <option  v-for="lineManager in getallDropList.users" :key="lineManager._id" :value="lineManager._id" > {{lineManager.name}}</option>
              </select>
              {{}}
            </div>
            <div class="my-4">
              <label>Role</label>
              <input v-model="allData.role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Role is..." >
            </div>
            <div class="my-4">
              <label>Nid</label>
              <input v-model="allData.nid" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nid is..." >
            </div>

            <div class="my-4">

              <button
                      type="submit"
                      class="w-full rounded shadow-md bg-primary text-white p-2"
              >Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import {mapActions, mapGetters} from "vuex";
import {beforeMount} from "vue";

export default {
  data(){
    return{
      allData:{
        name:'',
        email:'',
        mobile:'',
        designation:'',
        lineManager:'',
        role:'',
        nid:'',
        _id:''
      }

    }
  },
  name: "AllUserUpdateModal",
  props:['allUserData'],
  methods: {
    ...mapActions('admin',['fetchdropList']),
    ...mapActions('adminAllUser',['updateUserData']),
    close() {
      this.$emit('close')
    },
    onUserDataFormSubmit(){
      const payloads=this.allData;
      console.log("my id is =>",payloads);
      this.updateUserData(payloads)
    }
  },
  computed:{
    ...mapGetters('admin',['getallDropList']),
  },
  created() {
    this.fetchdropList()
  },
  beforeMount(){
    this.allData.name=this.allUserData.name;
    this.allData.email=this.allUserData.email;
    this.allData.mobile=this.allUserData.mobile;
    this.allData.designation=this.allUserData.designation;
    this.allData.lineManager=this.allUserData.lineManager;
    this.allData.role=this.allUserData.role;
    this.allData.nid=this.allUserData.nid;
    this.allData._id=this.allUserData._id;
    console.log("MyTest ====>",this.allData)
  }
}

</script>

<style scoped>

</style>