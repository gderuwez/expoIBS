<template lang="html">
  <div class="w3-cell-row w3-margin-top w3-hide-medium w3-hide-large posRel">
    <div class="w3-container w3-teal w3-cell w3-mobile">Made by Guillaume Deruwez base on an idea by Emily Marghella</div>
    <div class="w3-indigo w3-container w3-cell w3-cell-bottom w3-mobile w3-center" name="button" v-scroll-to="'#top'">Back to top</div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="css">
.posRel {
  position: absolute;
  bottom: 0;
}
</style>
