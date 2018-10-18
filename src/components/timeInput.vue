<template lang="html">
  <form class="" @submit="testing" action="" method="post">
    <div class=""  v-bind:key="item.id" v-for="item in timesInput">
      <label v-bind:for="item.id">{{item.time}}</label>
      <input type="time" v-bind:id="item.id" name="" value="00:00">
    </div>
    <button type="submit" name="button">submit</button>
  </form>
</template>

<script>
export default {
  name: "TimeInput",
  methods: {
    testing : function (e) {
      e.preventDefault();
      for (var i = 0; i < (e.target.length); i++) {
        if (e.target[i].type === "time") {
          console.log(e.target[i].value);
        }
      }
    }
  },
  data: function () {
    return {
      breakfastTime: '',
      lunchTime: '',
      dinnerTime: '',
      timesInput: [
        {time:"breakfast", modelToUse: "breakfastTime", id:"breakfastId"},
        {time:"lunch", modelToUse: "lunchTime", id:"lunchId"},
        {time:"dinner", modelToUse: "dinnerTime", id:"dinnerId"},
      ]
    }
  }
}
</script>

<style lang="css">
</style>
