<template>
  <div class="flex flex-col shadow-xl">
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-8">
      <div class="py-2 inline-block min-w-full sm:px-6 lg:px-8">
        <div class="overflow-hidden">
          <table class="min-w-full text-center">
            <thead class="border-b">
            <tr class="bg-primary bg-opacity-80">
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Total Days</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Present</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Late</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Absent</th>
              <th scope="col" class="px-6 py-3 text-left text-md font-medium text-white uppercase tracking-wider">Percentage</th>
            </tr>
            </thead>
            <tbody class="bg-white divide divide-gray-200 bg-gray-200 text-white">
            <tr >
              <td class="text-sm text-gray-900 bg-blue-400 font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-white"> </div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 bg-green-400 font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-gray-900"></div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 bg-yellow-400-500 font-light px-6 py-2 whitespace-nowrap">
                <div class="flex items-center">
                  <div class="ml-4">
                    <div class="text-sm font-medium text-black"></div>
                  </div>
                </div>
              </td>
              <td class="text-sm text-gray-900 bg-red-500 font-light px-6 py-2 whitespace-nowrap">
                <div class="text-sm text-white"></div>
              </td>
              <td class="text-sm text-white bg-blue-400 font-light px-6 py-2 whitespace-nowrap">
                <div class="text-sm text-gray-900"></div>
              </td>
            </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "UserDashboard"
}
</script>

<style scoped>

</style>