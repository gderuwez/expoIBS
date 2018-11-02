<!-- ask what makes more sense ? base the sequence on real time or database time ? -->
<template lang="html">
  <div class="w3-border w3-padding">
    <p>You have filled your journal {{sequenceCheck}} days in a row.</p>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'Sequential',
  props: {
    loggedName: String,
    dataSubmit: Boolean,
  },
  watch: {
    loggedName: function () {
      if(!localStorage['sequence'+this.loggedName]){localStorage['sequence'+this.loggedName] = 0;}
      if(!localStorage["PreviousDataDate"+this.loggedName]){
        localStorage["PreviousDataDate"+this.loggedName] = moment().year() + "-" + moment().month() + "-" + moment().subtract(1, 'days').date();
      }
    }
  },
  computed: {
    sequenceCheck () {
      if(this.dataSubmit) {
        let previous = localStorage['PreviousDataDate'+this.loggedName];
        let current = localStorage["newDataDate"+this.loggedName];
        if( moment(previous).isSame(moment(current).subtract(1, 'days'), 'days') ) {
          localStorage['sequence'+this.loggedName] = parseInt(localStorage['sequence'+this.loggedName]) + 1;
        }
        else if ( !moment(previous).isSame(moment(current), 'days') ) {
          localStorage['sequence'+this.loggedName] = 0;
        }
        localStorage['PreviousDataDate'+this.loggedName] = current;
        this.$emit('newData');
      }
      return localStorage["sequence"+this.loggedName];
    }
  }
}
</script>

<style lang="css">
</style>
