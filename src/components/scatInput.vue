<template lang="html">
  <div class="">
    <form class="" @submit="newPoop" action="" method="post">
      <div class="w3-container">
        <!-- Moods -->
        <div class=" w3-half ">
          <div class="w3-deep-purple w3-border w3-center">
            <label v-scroll-to="'#humeurSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle')">Moods <i class="fas fa-chevron-down" v-show="!check.toggle"></i><i class="fas fa-chevron-up" v-show="check.toggle"></i></label>
            <label v-scroll-to="'#humeurMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle')">Moods <i class="fas fa-chevron-down" v-show="!check.toggle"></i><i class="fas fa-chevron-up" v-show="check.toggle"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(0)"></i>
          </div>
          <div class="empty">
            <span class="w3-text-red" v-show="errorHumor">Choose at least one mood</span>
          </div>
        </div>

        <transition-group id='humeurSmall' name="list" tag="ul" class=" w3-ul w3-row w3-hide-medium w3-hide-large">
          <li v-show="check.toggle" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, humeurs, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in humeursArray">{{item['text']}}</li>
        </transition-group>

        <div class="w3-half">
          <div class=" w3-deep-purple w3-border w3-center">
            <label v-scroll-to="'#breakfastSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle2')">Breakfast <i class="fas fa-chevron-down" v-show="!check.toggle2"></i><i class="fas fa-chevron-up" v-show="check.toggle2"></i></label>
            <label v-scroll-to="'#breakfastMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle2')">Breakfast <i class="fas fa-chevron-down" v-show="!check.toggle2"></i><i class="fas fa-chevron-up" v-show="check.toggle2"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(1)"></i>
          </div>
          <div class="empty"></div>
        </div>

        <transition-group id='breakfastSmall' tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
          <li v-show="check.toggle2" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, breakfast, 'isActive1')" v-bind:class="{'w3-teal' : item.isActive1}" :key="'breakfast'+item.value" v-for="item in aliments">{{item.value}}</li>
        </transition-group>

        <transition-group id="humeurMed" name="list" tag="ul" class=" w3-ul w3-row w3-hide-small">
          <li v-show="check.toggle" class="w3-half w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, humeurs, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in humeursArray">{{item['text']}}</li>
        </transition-group>

        <transition-group id="breakfastMed" tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
          <li v-show="check.toggle2" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, breakfast, 'isActive1')" v-bind:class="{'w3-teal' : item.isActive1}" :key="'breakfast'+item.value" v-for="item in aliments">{{item.value}}</li>
        </transition-group>

        <!-- Lunch -->
        <div class="w3-half">
          <div class=" w3-deep-purple w3-border w3-center">
            <label v-scroll-to="'#lunchSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle3')">Lunch <i class="fas fa-chevron-down" v-show="!check.toggle3"></i><i class="fas fa-chevron-up" v-show="check.toggle3"></i></label>
            <label v-scroll-to="'#lunchMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle3')">Lunch <i class="fas fa-chevron-down" v-show="!check.toggle3"></i><i class="fas fa-chevron-up" v-show="check.toggle3"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(1)"></i>
          </div>
          <div class="empty"></div>
        </div>

        <transition-group id='lunchSmall' tag="ul" class=" w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
          <li v-show="check.toggle3" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, lunch, 'isActive2')" v-bind:class="{'w3-teal' : item.isActive2}" :key="'lunch'+item.value" v-for="item in aliments">{{item.value}}</li>
        </transition-group>

        <div class="w3-half">
          <div class="w3-center w3-deep-purple w3-border">
            <label v-scroll-to="'#DinnerSmall'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle4')">Dinner <i class="fas fa-chevron-down" v-show="!check.toggle4"></i><i class="fas fa-chevron-up" v-show="check.toggle4"></i></label>
            <label v-scroll-to="'#DinnerMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle4')">Dinner <i class="fas fa-chevron-down" v-show="!check.toggle4"></i><i class="fas fa-chevron-up" v-show="check.toggle4"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(1)"></i>
          </div>
          <div class="empty"></div>
        </div>

        <transition-group id='DinnerSmall' tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
          <li v-show="check.toggle4" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, dinner, 'isActive3')" v-bind:class="{'w3-teal' : item.isActive3}" :key="'Dinner'+item.value" v-for="item in aliments">{{item.value}}</li>
        </transition-group>

        <transition-group id='lunchMed' tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
          <li v-show="check.toggle3" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, lunch, 'isActive2')" v-bind:class="{'w3-teal' : item.isActive2}" :key="'lunch'+item.value" v-for="item in aliments">{{item.value}}</li>
        </transition-group>

        <transition-group id="DinnerMed" tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
          <li v-show="check.toggle4" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup(item, dinner, 'isActive3')" v-bind:class="{'w3-teal' : item.isActive3}" :key="'Dinner'+item.value" v-for="item in aliments">{{item.value}}</li>
        </transition-group>

        <hr>

        <div class=" w3-half">
          <div class="w3-center w3-deep-purple w3-border">
            <label v-scroll-to="'#Type'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle5')">Type <i class="fas fa-chevron-down" v-show="!check.toggle5"></i><i class="fas fa-chevron-up" v-show="check.toggle5"></i></label>
            <label v-scroll-to="'#TypeMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle5')">Type <i class="fas fa-chevron-down" v-show="!check.toggle5"></i><i class="fas fa-chevron-up" v-show="check.toggle5"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(2)"></i>
          </div>
          <div class="empty"><span class="w3-text-red" v-show="errorType">Choose a type</span></div>
        </div>

        <transition-group id="Type" tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
          <li v-show="check.toggle5" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, typesOfPoop, poopType, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in typesOfPoop">
            <div class="centering" style="width:9vh;">
              <img :src="require('../assets/'+item.value+'.png')" class="w3-image" alt="">
            </div>
          </li>
        </transition-group>

        <!-- Color -->
        <div class=" w3-half">
          <div v-scroll-to="'#Color'" class="w3-center w3-deep-purple w3-border">
            <label class="w3-xlarge" for="" @click="toggle('toggle6')">color <i class="fas fa-chevron-down" v-show="!check.toggle6"></i><i class="fas fa-chevron-up" v-show="check.toggle6"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(3)"></i>
          </div>
          <div class="empty"><span class="w3-text-red" v-show="errorColor">Choose a Color</span></div>
        </div>

        <transition-group id="TypeMed" tag="ul" class=" w3-ul w3-row w3-hide-small" name="list">
          <li v-show="check.toggle5" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, typesOfPoop, poopType, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in typesOfPoop">
            <div class="centering" style="width:9vh;">
              <img :src="require('../assets/'+item.value+'.png')" class="w3-image" alt="">
            </div>
          </li>
        </transition-group>

        <transition-group id="Color" tag="ul" class=" w3-ul w3-row" name="list">
          <li v-show="check.toggle6" class="w3-half w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, colorsofPoop, poopColor, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item['value']" v-for="item in colorsofPoop">{{item["text"]}}</li>
        </transition-group>

        <div class=" w3-half">
          <div class="w3-center w3-deep-purple w3-border">
            <label v-scroll-to="'#Time'" class="w3-xlarge w3-hide-medium w3-hide-large" for="" @click="toggle('toggle7')">time <i class="fas fa-chevron-down" v-show="!check.toggle7"></i><i class="fas fa-chevron-up" v-show="check.toggle7"></i></label>
            <label v-scroll-to="'#TimeMed'" class="w3-xlarge w3-hide-small" for="" @click="toggle('toggle7')">time <i class="fas fa-chevron-down" v-show="!check.toggle7"></i><i class="fas fa-chevron-up" v-show="check.toggle7"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(4)"></i>
          </div>
          <div class="empty"><span class="w3-text-red" v-show="errorTime">Choose a time</span></div>
        </div>

        <transition-group id="Time" tag="ul" class="w3-ul w3-row w3-hide-medium w3-hide-large" name="list">
          <li v-show="check.toggle7" class="w3-third w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, timesOfDay, time, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in timesOfDay">{{item.value}}</li>
        </transition-group>

        <div class="w3-half">
          <div class="w3-center w3-deep-purple w3-border">
            <label v-scroll-to="'#Date'" class="w3-xlarge" for="" @click="toggle('toggle8')">Date <i class="fas fa-chevron-down" v-show="!check.toggle8"></i><i class="fas fa-chevron-up" v-show="check.toggle8"></i></label>
            <i class="w3-large w3-right far fa-question-circle" @click="modal(5)"></i>
          </div>
          <div class="empty"></div>
        </div>

        <transition-group id="TimeMed" tag="ul" class="w3-ul w3-row w3-hide-small" name="list">
          <li v-show="check.toggle7" class="w3-half w3-border w3-border-teal BorderCollapse" v-on:click="toggleSup2(item, timesOfDay, time, 'isActive')" v-bind:class="{'w3-teal' : item.isActive}" :key="item.value" v-for="item in timesOfDay">{{item.value}}</li>
        </transition-group>

        <transition-group id="Date" tag="div" class="w3-row w3-margin-bottom" name="list">
          <input v-show="check.toggle8" :key="'dateInput'" class="w3-input w3-border-teal BorderCollapse" type="date" name="" value="">
        </transition-group>

        <div class="w3-display-container w3-padding">
          <div class="w3-display-middle">
            <button class="w3-btn w3-indigo" type="submit" name="button">New Poop</button>
            <span class="w3-text-red" v-if="allow">Please fill in the form</span>
          </div>
        </div>
      </div>
    </form>
    <div v-if="check2" class="w3-modal w3-block">
      <div class="w3-modal-content w3-card">
        <header class="w3-container w3-deep-purple">
          <h3>Tip</h3>
          <span class="w3-button w3-display-topright" v-on:click="checking">&times;</span>
        </header>
        <div class="w3-container">
          <p class="w3-margin w3-xlarge" v-if="Modalcheck[0]">Choose the moods you have felt most strongly during the day</p>
          <p class="w3-margin w3-xlarge" v-if="Modalcheck[1]">Select the aliments you have eaten at this meal</p>
          <div class="w3-margin w3-xlarge" v-if="Modalcheck[2]">
            <ul class="w3-ul w3-margin w3-xlarge">
              <li>Type 1: small rabbit like pellets</li>
              <li>Type 2: Sausage-like but hard and granular</li>
              <li>Type 3: Sausage-like with a cracked surface</li>
              <li>Type 4: Sausage-like, smooth</li>
              <li>Type 5: Soft with well defined borders</li>
              <li>Type 6: filament or shredded poop full of liquid</li>
              <li>Type 7: entirely liquid</li>
            </ul>
            <p>!Type 1 and 2: constipation, Type 3 and 4: normal, type 5 to 7: diareha (stay hydrated)</p>
          </div>
          <ul v-if="Modalcheck[3]" class="w3-ul w3-margin w3-xlarge">
            <li>Brown, pale to medium: normal</li>
            <li>Beige, grey or yellow: May indicate issue with your liver, pancreas or gall bladder.</li>
            <li>Green: May be caused by green food, medication, iron supplement or a chronical disease</li>
            <li>Red: May be cause by beet consumption, tomato juice or red gelatin. If not, it may be traces of blood.</li>
            <li>Dark brown to black: Possibility of blood in the digestive track, please consult your doctor.</li>
          </ul>
          <p class="w3-margin w3-xlarge" v-if="Modalcheck[4]">Choose the time of day during which you pooped</p>
          <p class="w3-margin w3-xlarge" v-if="Modalcheck[5]">Optionnal: enter the date at which you pooped, default to today if nothing is entered</p>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
import moment from 'moment';

export default {
  name: 'ScatInput',
  props: {
    loggedName: String
  },
  data (){
    return {
      check: {toggle: false, toggle2: false, toggle3: false, toggle4: false, toggle5: false, toggle6: false, toggle7: false, toggle8: false},
      allow: false,
      error: [],
      allData: {},
      time: [],
      poopType: [],
      poopColor: [],
      humeurs: [],
      breakfast: [],
      lunch:[],
      dinner: [],
      Modalcheck: [false, false, false, false, false, false],
      check2: false,

      aliments: [{value: "volailles", isActive1: false, isActive2: false, isActive3: false}, {value: "poissons", isActive1: false, isActive2: false, isActive3: false}, {value: "viandes", isActive1: false, isActive2: false, isActive3: false}, {value: "charcuterie", isActive1: false, isActive2: false, isActive3: false}, {value: "algues", isActive1: false, isActive2: false, isActive3: false}, {value: "mollusques et crustacés", isActive1: false, isActive2: false, isActive3: false}, {value: "fruits", isActive1: false, isActive2: false, isActive3: false}, {value: "céréales", isActive1: false, isActive2: false, isActive3: false}, {value: "légumes", isActive1: false, isActive2: false, isActive3: false}, {value: "champignons", isActive1: false, isActive2: false, isActive3: false}, {value: "noix et graines", isActive1: false, isActive2: false, isActive3: false}, {value: "épices", isActive1: false, isActive2: false, isActive3: false}, {value: "huiles et graisses", isActive1: false, isActive2: false, isActive3: false}, {value: "produits laitiers", isActive1: false, isActive2: false, isActive3: false}, {value: "produits transformés (pizza, burger,...)", isActive1: false, isActive2: false, isActive3: false}, {value: "boissons sucrées", isActive1: false, isActive2: false, isActive3: false}, {value: "boissons énergisantes", isActive1: false, isActive2: false, isActive3: false}, {value: "boissons alcoolisés", isActive1: false, isActive2: false, isActive3: false}],

      humeursArray: [{value: 1, text: "Sérénité", isActive: false}, {value: 2, text: "Joie", isActive: false}, {value: 3, text: "angoisse", isActive: false}, {value: 4, text: "colère", isActive: false}, {value: 5, text: "tristesse", isActive: false}, {value: 6, text: "malade", isActive: false}],

      colorsofPoop: [{value: 1, text: "brun pale à brun moyen", isActive: false}, {value: 2, text: "beige gris ou jaune", isActive: false}, {value: 3, text: "vert", isActive: false}, {value: 4, text: "rouge", isActive: false}, {value: 5, text: "Brun foncé ou noir", isActive: false}],

      typesOfPoop: [{value: 1, isActive: false}, {value: 2, isActive: false}, {value: 3, isActive: false}, {value: 4, isActive: false}, {value: 5, isActive: false}, {value: 6, isActive: false}, {value: 7, isActive: false}],

      timesOfDay: [{value: "Matin", isActive: false}, {value: "Midi", isActive: false}, {value: "Soir", isActive: false}, {value: "Nuit", isActive: false}]
    }
  },
  watch: {
    loggedName: function () {
      if (localStorage["data" + this.loggedName]) {
        this.JsonParsing();
      }
      else {
        let year = moment().year();
        let month = moment().month();
        let day = moment().date();
        const test = [{"year": year, "month": [{"idmonth": month, "day": [{"idday": day, "humeur" : [1], "poops": [], "aliments": []}]}]}];
        const parsed = JSON.stringify(test);
        localStorage["data" + this.loggedName] = parsed;
        this.JsonParsing();
      }
    }
  },
  computed: {
    errorTime() {
      if(!this.time[0]) {return true;}
      else {return false;}
    },
    errorType() {
      if(!this.poopType[0]) {return true;}
      else {return false;}
    },
    errorColor() {
      if(!this.poopColor[0]) {return true;}
      else {return false;}
    },
    errorHumor() {
      if(!this.humeurs[0]) {return true;}
      else {return false;}
    }
  },
  methods: {
    toggle(input) {
      this.check[input] = !this.check[input]
    },
    toggleSup (theObject, array, objectToggle) {
      let check = false;
      for(var i in array) {
        if (array[i] === theObject.value) {array.splice(i, 1); check = true; break;}
      }
      if(!check) {array.push(theObject.value);}
      theObject[objectToggle] = !theObject[objectToggle];
    },
    //item, colorsofPoop, poopColor, 'isActive'
    toggleSup2 (input, inputParentArray, outputArray, inputToggle) {
      outputArray.splice(0,1);
      for(var i in inputParentArray) {
        if(inputParentArray[i] === input) {
          if(!inputParentArray[i][inputToggle]) {outputArray.push(input.value);}
          inputParentArray[i][inputToggle] = !inputParentArray[i][inputToggle];
        }
        else if (inputParentArray[i][inputToggle]) {
          inputParentArray[i][inputToggle] = false;
        }
      }
    },
    JsonParsing () {
      let allData = JSON.parse(localStorage["data" + this.loggedName]);
      let currentYear = allData[allData.length - 1];
      let currentMonth = currentYear.month[currentYear.month.length - 1];
      let currentDay = currentMonth.day[currentMonth.day.length - 1];
      let humors = currentDay.humeur;
      let food = currentDay.aliments;
      for(var p in humors) {
        for (var q in this.humeursArray) {
          if(humors[p] == this.humeursArray[q].value){
            this.humeursArray[q].isActive = true;
            break;
          }
        }
      }
      this.allData = allData;
      this.humeurs = humors;
      for(var i in food) {
        if(food[i].meal === "breakfast") {
          this.breakfast = food[i].food;
          for(var j in food[i].food) {
            for(var k in this.aliments) {
              if(food[i].food[j] == this.aliments[k].value) {this.aliments[k].isActive1 = true; break}
            }
          }
        }
        if(food[i].meal === "lunch") {
          this.lunch = food[i].food;
          for(var l in food[i].food) {
            for(var m in this.aliments) {
              if(food[i].food[l] == this.aliments[m].value) {this.aliments[m].isActive2 = true; break}
            }
          }
        }
        if(food[i].meal === "dinner") {
          this.dinner = food[i].food;
          for(var n in food[i].food) {
            for(var o in this.aliments) {
              if(food[i].food[n] == this.aliments[o].value) {this.aliments[o].isActive3 = true; break}
            }
          }
        }
      }
    },
    modal(value) {
      this.Modalcheck[value] = true;
      this.check2 = true;
    },
    checking() {
      for(var i in this.Modalcheck) {
        this.Modalcheck[i] = false;
      }
      this.check2 = false;
    },
    newPoop (e) {
      e.preventDefault();
      this.allow = false;

      let year = moment().year();
      let month = moment().month();
      let day = moment().date();
      let time = this.time[0];
      let poopType = this.poopType[0];
      let poopColor = this.poopColor[0];
      let humeurs = this.humeurs;
      let breakfast = this.breakfast;
      let lunch = this.lunch;
      let dinner = this.dinner;
      for (var i = 0; i < (e.target.length); i++) {
        if (e.target[i].type === "date") {
          let value = e.target[i].value;
          if (value) {
            let array = value.split('-');
            year = parseInt(array[0]);
            month = parseInt((array[1] -1));
            day = parseInt(array[2]);
          }
        }
      }

      if(!this.errorHumor && !this.errorColor && !this.errorTime && !this.errorType) {
        let dataYearCheck = false;
        let dataYearNum = 0;
        let dataMonthCheck = false;
        let dataMonthNum = 0;
        let dataDayCheck = false;
        let dataDayNum = 0;
        let dataToPush;
        for (var j in this.allData) { //check year
          if (this.allData[j].year === year) { //if year found
            for (var k in this.allData[j].month) { //check month
              if (this.allData[j].month[k].idmonth === month) { //if month found
                for (var l in this.allData[j].month[k].day) { // check day
                  if (this.allData[j].month[k].day[l].idday === day) { // if day found
                    dataDayCheck = true;
                    dataDayNum = l;
                    break;
                  }
                }
                dataMonthCheck = true;
                dataMonthNum = k;
                break;
              }
            }
            dataYearCheck = true;
            dataYearNum = j;
            break;
          }
        }

        if (!dataYearCheck) {
          dataToPush = {"year": year, "month": [{"idmonth": month, "day": [{"idday": day, "humeur" : humeurs, "poops": [{"idtime": time, "type": poopType, "color": poopColor}], "aliments": [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}]}]}]};
          this.allData.push(dataToPush);
          this.allData.sort((a, b) => {
            return a.year - b.year;
          })
        }
        if (dataYearCheck && !dataMonthCheck) {
          dataToPush = {"idmonth": month, "day": [{"idday": day, "humeur" : humeurs, "poops": [{"idtime": time, "type": poopType, "color": poopColor}], "aliments": [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}]}]};
          this.allData[dataYearNum].month.push(dataToPush);
          this.allData[dataYearNum].month = this.allData[dataYearNum].month.sort((a, b) => {
            return a.idmonth - b.idmonth;
          });
        }
        if (dataMonthCheck && !dataDayCheck) {
          dataToPush = {"idday": day, "humeur" : humeurs, "poops": [{"idtime": time, "type": poopType, "color": poopColor}], "aliments": [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}]};
          this.allData[dataYearNum].month[dataMonthNum].day.push(dataToPush);
          this.allData[dataYearNum].month[dataMonthNum].day = this.allData[dataYearNum].month[dataMonthNum].day.sort((a, b) => {
            return a.idday - b.idday;
          });
        }
        if (dataDayCheck) {
          dataToPush = {"idtime": time, "type": poopType, "color": poopColor};
          this.allData[dataYearNum].month[dataMonthNum].day[dataDayNum].humeur = this.humeurs;
          this.allData[dataYearNum].month[dataMonthNum].day[dataDayNum].aliments = [{"meal":"breakfast", "food": breakfast}, {"meal":"lunch", "food": lunch}, {"meal":"dinner", "food": dinner}];
          this.allData[dataYearNum].month[dataMonthNum].day[dataDayNum].poops.push(dataToPush);
        }

        const parsed = JSON.stringify(this.allData);
        localStorage["data" + this.loggedName] = parsed;
        const newDataDate = moment().year() + "-" + moment().month() + "-" + moment().date();
        localStorage["newDataDate"+this.loggedName] = newDataDate;
        //
        this.JsonParsing();
        this.$emit('newData');
      }
      else {this.allow = true;}
    }
  }
}
</script>

<style lang="css">
  .BorderCollapse {
    border-collapse: collapse;
  }
  .centering {
    margin: auto;
  }
  .list-item {
    display: inline-block;
  }
  .list-enter-active {
    transition: all 0.5s;
  }
  .list-leave-active {
    transition: all 0.1s;
  }
  .list-enter, .list-leave-to {
    opacity: 0;
    transform: translateY(-30px);
  }
  .empty {
    height: 20px;
  }
</style>
