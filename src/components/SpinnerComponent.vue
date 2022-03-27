<template>
  <div id="app">
    <SpinnerComponent
        :animation-duration="1000"
        :size="60"
        :color="'#ff1d5e'"
    />
  </div>
</template>

<script>
import SpinnerComponent from 'epic-spinners'
export default {
  name: "SpinnerComponent",
  component: SpinnerComponent
}
</script>

<style scoped>

</style>