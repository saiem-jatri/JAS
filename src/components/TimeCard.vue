<template>
  <h2 class="text-4xl text-center font-bold tracking-wide underline-offset-4 text-primary">Welcome This is your Attendnance page</h2>
  <div class="w-full flex items-center justify-center">
    <form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-5">
      <div class="mb-4">
        <label class="block text-yellow-600 text-xl font-bold mb-2">
          Add Time
        </label>
        <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Time is...">
      </div>
      <div class="flex w-full items-center justify-between">
        <button class="bg-primary text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
          Submit
        </button>
      </div>
    </form>
  </div>

  <div>

  </div>
</template>

<script>
export default {
  name: "Home"
}
</script>

<style scoped>

</style>