<template lang="html">
  <div class="">
    <p>you have consulted this app {{sequenceCheck}} days in a row.</p>
  </div>
</template>

<script>
export default {
  name: 'Sequential',
  props: {
    loggedName: String,
    PostedDate: Number,
  },
  data () {
    return {
      sequence: 0,
      previousDate: 0,
    }
  },
  watch: {
    loggedName: function () {
      if(!localStorage['date'+this.loggedName]) {
        localStorage['date'+this.loggedName] = new Date().getTime();
        localStorage['sequence'+this.loggedName] = this.sequence;
      }
      this.previousDate = localStorage['date'+this.loggedName];
      this.sequence = localStorage['sequence'+this.loggedName];
    }
  },
  computed: {
    sequenceCheck() {
      if (this.PostedDate) {
        let CurrentDate = new Date(this.PostedDate);
        let previousDate = new Date(parseInt(this.previousDate));
        let sequence = this.sequence;
        CurrentDate.getDate() !== previousDate.getDate() && CurrentDate.getTime() < previousDate.getTime() + 86400001 ? sequence += 1: sequence = 0;
        localStorage['date'+this.loggedName] = CurrentDate.getTime();
        localStorage['sequence'+this.loggedName] = this.sequence;
        return sequence;
      }
      else {
        return this.sequence;
      }
    }
  }
}
</script>

<style lang="css">
</style>
