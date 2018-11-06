<template lang="html">
  <div class="w3-container">
    <a class="w3-btn w3-block w3-indigo" :href="savingJson" target="_blank" download="my-poop-data.json">save your data</a>
  </div>
</template>

<script>
export default {
  name: 'Saving',
  data () {
    return {
      alldata: ''
    }
  },
  props: {
    loggedName: String
  },
  computed: {
    savingJson () {
      let blob = new Blob([this.alldata], {type: "octet/stream"});
      let url = window.URL.createObjectURL(blob);
      return url;
    },
  },
  watch: {
    loggedName () {
      if (localStorage["data" + this.loggedName]) {
        this.alldata = localStorage["data" + this.loggedName];
      }
    }
  }
}
</script>

<style lang="css">
</style>
