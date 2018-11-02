<template lang="html">
  <button type="button" name="button"> <a :href="savingJson" target="_blank" download="my-poop-data.json">save your data</a> </button>
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
