<template lang="html">
  <form class="" @submit="testing" action="" method="post">
    <label for="breakfastTime">breakfast time</label>
    <input type="time" id="breakfastTime" name="" :value="breakfastTime">
    <label for="lunchTime">lunch time</label>
    <input type="time" id="lunchTime" name="" :value="lunchTime">
    <label for="dinnerTime">dinner time</label>
    <input type="time" id="dinnerTime" name="" :value="dinnerTime">
    <button type="submit" name="button">submit</button>
  </form>
</template>

<script>
export default {
  name: "TimeInput",
  props: {
    loggedName: String
  },
  mounted() {
    localStorage['breakfastTime'+this.loggedName] ? this.breakfastTime = localStorage['breakfastTime'+this.loggedName] : this.breakfastTime = '00:00';
    localStorage['lunchTime'+this.loggedName] ? this.lunchTime = localStorage['lunchTime'+this.loggedName] : this.lunchTime = '00:00';
    localStorage['dinnerTime'+this.loggedName] ? this.dinnerTime = localStorage['dinnerTime'+this.loggedName] : this.dinnerTime = '00:00';
  },
  methods: {
    testing : function (e) {
      e.preventDefault();
      for (var i = 0; i < (e.target.length); i++) {
        if (e.target[i].type === "time") {
          //set data value to value input
          this[e.target[i].id] = e.target[i].value;
          //set localStorage to value input
          console.log(this.loggedName);
          localStorage[e.target[i].id + this.loggedName] = e.target[i].value;
        }
      }
    }
  },
  data: function () {
    return {
      breakfastTime: '',
      lunchTime: '',
      dinnerTime: '',
    }
  }
}
</script>

<style lang="css">
</style>
