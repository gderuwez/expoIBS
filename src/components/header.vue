<template lang="html">
  <div class="">
    <div class="w3-container w3-teal">
      <h1>I.B.S. Journal</h1>
      <Logout />
    </div>
    <div class="w3-bar w3-cyan">
      <router-link to="/home" class="w3-bar-item w3-button">Home</router-link>
      <router-link to="/charts" class="w3-bar-item w3-button">Charts</router-link>
      <router-link to="/update" class="w3-bar-item w3-button">Update</router-link>
    </div>
  </div>
</template>

<script>
import Logout from '@/components/logout';

export default {
  name: 'Header',
  components: {
    Logout
  }
}
</script>

<style lang="css">
</style>
