<template lang="html">
  <div class="">
    <p class="w3-center w3-jumbo w3-hide-small w3-text-indigo">Vos humeurs du jour: <span :key="item" v-for="item in humeursDisplay">{{item}} </span></p>
    <p class="w3-container w3-center w3-hide-medium w3-hide-large w3-xlarge w3-text-indigo">Vos humeurs du jour: <span :key="item" v-for="item in humeursDisplay">{{item}} </span></p>
    <hr>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'HumorOfTheDay',
  props: {
    loggedName: String
  },
  data () {
    return {
      humeursToDisplay: []
    }
  },
  computed: {
    humeursDisplay() {
      let result = [];
      for (var item in this.humeursToDisplay) {
          switch (this.humeursToDisplay[item]) {
          case 1:
            result.push("Sérénité");
            break;
          case 2:
            result.push("Joie");
            break;
          case 3:
            result.push("angoisse");
            break;
          case 4:
            result.push("colère");
            break;
          case 5:
            result.push("tristesse");
            break;
          case 6:
            result.push("malade");
            break;
          default:
        }
      }
      return result;
    },
  },
  watch: {
    loggedName() {
      if (localStorage["data" + this.loggedName]) {
        this.JsonParsing();
      }
    }
  },
  methods: {
    JsonParsing () {
      let allData = JSON.parse(localStorage["data" + this.loggedName]);
      let currentYear = allData[allData.length - 1];
      let currentMonth = currentYear.month[currentYear.month.length - 1];
      let currentDay = currentMonth.day[currentMonth.day.length - 1];
      let humors = currentDay.humeur;
      let currentTime = currentDay.moment;
      if(moment(currentTime).isSame(moment(), 'day')) {
        this.humeursToDisplay = humors;
      }
    },
  }
}
</script>

<style lang="css">
</style>
