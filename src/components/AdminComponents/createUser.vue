<template>
<h3 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary bg-gray-200 shadow-lg p-4">Add a user</h3>
<div class="flex justify-center">
  <form @submit.prevent ="onUserFormSubmit"  class="bg-green-200 border border-gray-400 p-5 mt-5 w-1/2 flex justify-between items-center shadow-lg">
    <div>
      <div class="my-4">
        <label class="text-primary font-bold">Jatri-Id</label>
        <input v-model="jatriId" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Id is..." >
      </div>
      <div class="my-4">
        <label class="text-primary font-bold">Name</label>
        <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name is..." >
      </div>
      <div class="my-4">
        <label class="text-primary font-bold">Email</label>
        <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email is..." >
      </div>
      <div class="my-4">
        <label class="text-primary font-bold">Mobile</label>
        <input v-model="mobile" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Mobile is..." >
      </div>

      <div class="my-4">
        <label class="text-primary font-bold">Password</label>
        <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Password is..." >
      </div>
    </div>
<div>
  <div class="my-4">
    <label class="text-primary font-bold">Designation</label>
    <input v-model="designation" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Designation is..." >
  </div>
  <div class="my-4">
    <label class="text-primary font-bold">Line Manager</label> <br>
    <select v-model="lineManager" class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
      <option  v-for="lineManager in getallDropList.users" :key="lineManager._id" :value="lineManager._id" > {{lineManager.name}}</option>
    </select>
  </div>
  <div class="my-4">
    <label class="text-primary font-bold">Role</label>
    <input v-model="role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Role is..." >
  </div>
  <div class="my-4">
    <label class="text-primary font-bold">Nid</label>
    <input v-model="nid" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nid is..." >
  </div>
  <div class="my-4">
    <button
            type="submit"
            class="w-full rounded shadow-md bg-primary text-white p-2"
    >Submit
    </button>
  </div>
</div>

  </form>
</div>

</template>

<script>
import {mapGetters,mapActions} from 'vuex'
export default {
  name: "createUser",
  data(){
    return{
      jatriId:'',
      name:'',
      email:'',
      mobile:'',
      password:'',
      designation:'',
      lineManager:'',
      role:'',
      nid:''

    }

  },
  methods: {
    ...mapActions('admin',['fetchdropList']),
    ...mapActions('admin',['addUser']),
    onUserFormSubmit(){
      const jatriId = this.jatriId;
      const name= this.name;
      const email = this.email;
      const password = this.password;
      const designation = this.designation;
      const mobile=this.mobile;
      const lineManager = this.lineManager;
      const role = this.role;
      const nid = this.nid;
      this.addUser({jatriId,name,email,password,designation,lineManager,role,nid,mobile})
    }
  },
  computed:{
    ...mapGetters('admin',['getallDropList'])
  },

  created() {
    this.fetchdropList()
  }
}
</script>

<style scoped>

</style>