<template lang="html">
  <form class="" @submit="testDate" action="" method="post">
    <!-- <label for="">Type</label>
    <select class="" name="" v-model="poopType">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
      <option value="5">5</option>
      <option value="6">6</option>
      <option value="7">7</option>
    </select>
    <br>
    <label for="">color</label>
    <select class="" name="" v-model="poopColor">
      <option value="1">brun pale à brun moyen</option>
      <option value="2">beige gris ou jaune</option>
      <option value="3">Vert</option>
      <option value="4">Rouge</option>
      <option value="5">Brun foncé ou noir</option>
    </select>
    <br>
    <label for="">time</label>
    <input type="time" name="" value="00:00"> -->
    <br>
    <button type="button" name="button" v-on:click="testDate">set initial data</button>
    <button type="button" name="button" v-on:click="testlocal">testing local</button>
    <br>
    {{allData}}
    <hr>
    {{currentYear}}
    <hr>
    {{currentMonth}}
    <hr>
    {{currentDay}}
  </form>

</template>

<script>
export default {
  name: 'ScatInput',
  data: function (){
    return {
      allData: '',
      currentYear: '',
      currentMonth: '',
      currentDay: '',
    }
  },
  mounted () {
    if (localStorage.data) {
      var allData = JSON.parse(localStorage.data);
      this.allData = allData;
      var currentYear = allData[allData.length - 1];
      this.currentYear = currentYear;
      var currentMonth = currentYear.month[currentYear.month.length - 1];
      this.currentMonth = currentMonth;
      var currentDay = currentMonth.day[currentMonth.day.length - 1];
      this.currentDay = currentDay;
    }
  },
  methods: {
    testDate: function () {
      var test = [{"year": 2017, "month": [{"idmonth": 1, "day": [{"idday": 12, "humeur" : ["serenité", "colère"], "poops": [{"idtime": 123, "type": 1, "color": 1, "aliments": ["coke", "sausage"]}]}]}]}];
      const parsed = JSON.stringify(test);
      localStorage.data = parsed;
    },
    testlocal: function () {
      var humeur = this.currentDay.humeur;
      humeur.push("test");
      this.currentDay.humeur = humeur;
      const parsed = JSON.stringify(this.allData);
      localStorage.data = parsed;
    },
    newPoop: function (e) {
      e.preventDefault();
      var date = new Date();
      var year = date.getFullYear();
      var month = date.getMonth();
      var day = date.getDate();

      // Push logic for data
      // check if current year = current year from data
      if (year !== this.currentYear.year) {
        this.allData.push(dataToPush);
      }
      // if yes check if current month = current month from data
      else if (month !== this.currentMonth.idmonth) {
        this.currentYear.month.push(dataToPush);
      }
      // if yes check if current day = current day from data
      else if (day !== this.currentDay.idday) {
        this.currentMonth.day.push(dataToPush);
      }
      //if yes push humor and new poop to the day
      else {
        // push humor and new poop to day
      }
    }
  }
}
</script>

<style lang="css">
</style>
