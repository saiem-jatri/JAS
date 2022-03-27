<template>
  <section @click="close()" class="z-20 w-screen h-screen fixed top-0 opacity-50">

  </section>
  <div class="absolute inset-0 ">
    <div class ="flex h-full w-full">
      <div class="z-30 m-auto bg-primary rounded p-4 shadow">
        <div class="p-2 border">
          <h1 class="text-2xl text-center text-white shadow-lg font-semibold">Create A User</h1>

          <form @submit.prevent ="onUserFormSubmit"  class="bg-primary p-5 w-full mx-auto flex justify-between items-center shadow-lg">
            <div>
              <div class="my-4 text-white w-2/3">
                <label class="font-bold">Jatri-Id</label>
                <input v-model="jatriId" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Id is..." >
              </div>
              <div class="my-4 text-white w-2/3">
                <label class="font-bold">Name</label>
                <input v-model="name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Name is..." >
              </div>
              <div class="my-4 text-white w-2/3">
                <label class="font-bold">Email</label>
                <input v-model="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email is..." >
              </div>
              <div class="my-4 text-white w-2/3">
                <label class="font-bold">Mobile</label>
                <input v-model="mobile" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Mobile is..." >
              </div>

              <div class="my-4 text-white w-2/3">
                <label class="font-bold">Password</label>
                <input v-model="password" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Password is..." >
              </div>
            </div>
            <div>
              <div class="my-4 text-white w-2/3">
                <label class="font-bold">Designation</label>
                <input v-model="designation" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Designation is..." >
              </div>
              <div class="my-4 text-white w-2/3">
                <label class=" font-bold">Line Manager</label> <br>
                <select v-model="lineManager" class="shadow border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
                  <option  v-for="lineManager in getallDropList.users" :key="lineManager._id" :value="lineManager._id" > {{lineManager.name}}</option>
                </select>
              </div>
              <div class="my-4 text-white w-2/3">
                <label class=" font-bold">Role</label>
                <input v-model="role" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Role is..." >
              </div>
              <div class="my-4 text-white w-2/3">
                <label class="font-bold">Nid</label>
                <input v-model="nid" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Nid is..." >
              </div>
              <div class="my-4 w-2/3">
                <button
                    type="submit"
                    class="w-full rounded shadow-md bg-green-500  text-white font-bold p-2 outline-none focus:outline-none hover:bg-green-600"
                >Submit
                </button>
              </div>
            </div>

          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from "vuex";

export default {
  name: "userCreateModal",
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
      nid:'',
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
      this.$emit('close')
      this.reloadPage()
    },
    close() {
      this.$emit('close')
    },
    reloadPage(){
      window.location.reload();
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