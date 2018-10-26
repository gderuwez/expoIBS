<template lang="html">
  <div class="w3-container w3-teal">
    <h1>I.B.S. Journal</h1>
    <Logout />
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
