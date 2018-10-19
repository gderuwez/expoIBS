<template lang="html">
  <form class="" @submit="newPoop" action="" method="post">
    <p>Vos humeurs du jour: {{humeursDisplay}}</p>
    <br>
    <label for="">Humeurs</label>
    <select class="" name="" v-model="humeurs" multiple>
      <option :value="item.value" v-for="item in humeursArray">{{item['text']}}</option>
    </select>
    <br>
    <label for="">Breakfast</label>
    <select class="" name="" v-model="breakfast" multiple>
      <option :value="item" v-for="item in aliments">{{item}}</option>
    </select>
    <label for="">Lunch</label>
    <select class="" name="" v-model="lunch" multiple>
      <option :value="item" v-for="item in aliments">{{item}}</option>
    </select>
    <label for="">Dinner</label>
    <select class="" name="" v-model="dinner" multiple>
      <option :value="item" v-for="item in aliments">{{item}}</option>
    </select>
    <br>
    <label for="">Type</label>
    <select class="" name="" v-model="poopType">
      <option :value="item" v-for="item in typesOfPoop">{{item}}</option>
    </select>
    <br>
    <label for="">color</label>
    <select class="" name="" v-model="poopColor">
      <option :value="item['value']" v-for="item in colorsofPoop">{{item["text"]}}</option>
    </select>
    <br>
    <label for="">time</label>
    <select class="" name="" v-model="time">
      <option :value="item" v-for="item in timesOfDay">{{item}}</option>
    </select>
    <br>
    <button type="submit" name="button">new data test</button>
    <br>
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
      time: "Matin",
      poopType: 1,
      poopColor: 1,
      humeurs: [],
      breakfast: [],
      lunch:[],
      dinner: [],
      aliments: ["volailles", "poissons", "viandes", "charcuterie", "algues", "mollusques et crustacés", "fruits", "céréales", "légumes", "champignons", "noix et graines", "épices", "huiles et graisses", "produits laitiers", "produits transformés (pizza, burger,...)", "boissons sucrées", "boissons énergisantes", "boissons alcoolisés"],
      colorsofPoop: [{value: 1, text: "brun pale à brun moyen"}, {value: 2, text: "beige gris ou jaune"}, {value: 3, text: "vert"}, {value: 4, text: "rouge"}, {value: 5, text: "Brun foncé ou noir"}],
      humeursArray: [{value: 1, text: "Sérénité"}, {value: 2, text: "Joie"}, {value: 3, text: "angoisse"}, {value: 4, text: "colère"}, {value: 5, text: "tristesse"}, {value: 6, text: "malade"}],
      typesOfPoop: [1, 2, 3, 4, 5, 6, 7],
      timesOfDay: ["Matin", "Midi", "Soir", "Nuit"]
    }
  },
  mounted () {
    if (localStorage.data) {
      let allData = JSON.parse(localStorage.data);
      let currentYear = allData[allData.length - 1];
      let currentMonth = currentYear.month[currentYear.month.length - 1];
      let currentDay = currentMonth.day[currentMonth.day.length - 1];
      let humors = currentDay.humeur;
      this.allData = allData;
      this.currentYear = currentYear;
      this.currentMonth = currentMonth;
      this.currentDay = currentDay;
      this.humeurs = humors;
    }
    else {
      const test = [{"year": 2017, "month": [{"idmonth": 1, "day": [{"idday": 12, "humeur" : [1], "poops": [{"idtime": "matin", "type": 1, "color": 1, "aliments": [{"meal":"breakfast", "food":["milk", "toast"]}, {"meal":"lunch", "food":["coke, cake"]}, {"meal":"dinner", "food":["soup", "meat"]}]}]}]}]}];
      const parsed = JSON.stringify(test);
      localStorage.data = parsed;
      let allData = JSON.parse(localStorage.data);
      let currentYear = allData[allData.length - 1];
      let currentMonth = currentYear.month[currentYear.month.length - 1];
      let currentDay = currentMonth.day[currentMonth.day.length - 1];
      let humors = currentDay.humeur;
      this.allData = allData;
      this.currentYear = currentYear;
      this.currentMonth = currentMonth;
      this.currentDay = currentDay;
      this.humeurs = humors;
    }
  },
  computed: {
    humeursDisplay() {
      let result = [];
      for (var item in this.humeurs) {
        if (this.humeurs[item] == 1) {result.push("Sérénité");}
        if (this.humeurs[item] == 2) {result.push("Joie");}
        if (this.humeurs[item] == 3) {result.push("angoisse");}
        if (this.humeurs[item] == 4) {result.push("colère");}
        if (this.humeurs[item] == 5) {result.push("tristesse");}
        if (this.humeurs[item] == 6) {result.push("malade");}
      }
      return result;
    }
  },
  methods: {
    newPoop: function (e) {
      e.preventDefault();
      let date = new Date();
      let year = date.getFullYear();
      let month = date.getMonth();
      let day = date.getDate();
      let time = this.time;
      let poopType = this.poopType;
      let poopColor = this.poopColor;
      let humeurs = this.humeurs;
      let breakfast = this.breakfast;
      let lunch = this.lunch;
      let dinner = this.dinner;
      let dataToPush = '';
      console.log("check");
      // Push logic for data
      // check if current year = current year from data
      if (year !== this.currentYear.year) {
        dataToPush = {"year": year, "month": [{"idmonth": month, "day": [{"idday": day, "humeur" : humeurs, "poops": [{"idtime": time, "type": poopType, "color": poopColor, "aliments": [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}]}]}]}]};
        this.allData.push(dataToPush);
      }
      // if yes check if current month = current month from data
      else if (month !== this.currentMonth.idmonth) {
        dataToPush = {"idmonth": month, "day": [{"idday": day, "humeur" : humeurs, "poops": [{"idtime": time, "type": poopType, "color": poopColor, "aliments": [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}]}]}]};
        this.currentYear.month.push(dataToPush);
      }
      // if yes check if current day = current day from data
      else if (day !== this.currentDay.idday) {
        dataToPush = {"idday": day, "humeur" : humeurs, "poops": [{"idtime": time, "type": poopType, "color": poopColor, "aliments": [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}]}]};
        this.currentMonth.day.push(dataToPush);
      }
      //if yes push humor and new poop to the day
      else {
        dataToPush = {"idtime": time, "type": poopType, "color": poopColor, "aliments": [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}]};
        this.currentDay.humeur = this.humeurs;
        this.currentDay.poops.push(dataToPush);
        // push humor and new poop to day
      }
      const parsed = JSON.stringify(this.allData);
      localStorage.data = parsed;
      //
      let allData = JSON.parse(localStorage.data);
      let currentYear = allData[allData.length - 1];
      let currentMonth = currentYear.month[currentYear.month.length - 1];
      let currentDay = currentMonth.day[currentMonth.day.length - 1];
      let humors = currentDay.humeur;
      this.allData = allData;
      this.currentYear = currentYear;
      this.currentMonth = currentMonth;
      this.currentDay = currentDay;
      this.humeurs = humors;
    }
  }
}
</script>

<style lang="css">
</style>
