<template lang="html">
  <div class="">
    <div class="w3-cell-row w3-margin-top">
      <div class="w3-cell">
        <button type="button" class="w3-block w3-btn w3-deep-purple" name="button" v-on:click="subtractMonth" :class="{'w3-disabled' : limitBack}" :disabled="{'w3-disabled' : limitBack}"><i class="fas fa-chevron-left"></i></button>
      </div>
      <div class="w3-cell w3-center w3-teal">
        <h4 class="line w3-margin-left w3-margin-right">{{month}} {{year}}</h4>
      </div>
      <div class="w3-cell">
        <button type="button" class="w3-block w3-btn w3-deep-purple" name="button" v-on:click="addMonth" :class="{'w3-disabled' : limitFront}" :disabled="{'w3-disabled' : limitFront}"><i class="fas fa-chevron-right" ></i></button>
      </div>
    </div>

    <div class="w3-row">
      <div class="w3-half">
        <h5 class="w3-center">Moods per days</h5>
        <ul class="weekdays resize">
          <li class="w3-blue-grey w3-display-container" :key="index" v-for="(day, index) in days"><div class="w3-display-middle">{{day}}</div></li>
        </ul>
        <ul class="dates resize leftClear">
          <li :key="'blank' + index + month" v-for="(blank, index) in firstDayOfMonth">&nbsp;</li>
          <li v-on:click="testing(index)" :key="date + index + month" v-for="(date, index) in daysInMonth" class="w3-display-container" :class="{'current-day': date == initialDate &amp;&amp; month == initialMonth && year == initialYear}">
            <div class="w3-display-middle CallendarNumber">{{date}}</div>
            <div v-for="(item, index) in colorHumors" :key="'piecharts' + index">
              <div v-if="index == date && item">
                <pie-chart class="w3-display-middle" style="height:10vw" :donut="true" :legend="false" :data="item[0]" :colors="item[1]"></pie-chart>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w3-half">
        <h5 class="w3-center">Types per days</h5>
        <ul class="weekdays resize">
          <li class="w3-blue-grey w3-display-container" :key="index" v-for="(day, index) in days"><div class="w3-display-middle">{{day}}</div></li>
        </ul>
        <ul class="dates resize leftClear">
          <li :key="'blankb' + index + month" v-for="(blank, index) in firstDayOfMonth">&nbsp;</li>
          <li :key="'dateb' + date + index + month" v-for="(date, index) in daysInMonth" class="w3-display-container" :class="{'current-day': date == initialDate &amp;&amp; month == initialMonth && year == initialYear}">
            <div class="w3-display-middle CallendarNumber">{{date}}</div>
            <div v-for="(item, index) in colorType" :key="'piecharts2' + index">
              <div v-if="index == date && item">
                <pie-chart class="w3-display-middle" style="height:10vw" :donut="true" :legend="false" :data="item[0]" :colors="item[1]"></pie-chart>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div v-if="check" class="w3-modal w3-block">
      <div class="w3-modal-content w3-card">
        <header class="w3-container w3-deep-purple">
          <h3>Your food</h3>
          <span class="w3-button w3-display-topright" v-on:click="checking">&times;</span>
        </header>
        <div class="w3-container">
          <p :key="'aliment' + index" v-for="(aliment, index) in display.aliments">{{aliment.meal}} : <span :key="'food'+ index" v-for="(food, index) in aliment.food">{{food}} </span></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'HumorCalendar',
  props: {
    loggedName: String
  },
  data(){
    return{
        today: moment(),
        dateContext: moment(),
        days: ['S', 'M', 'T', 'W', 'T', 'F', 'S'],
        allData: '',
        check: false,
        display: ''
    }
  },
  computed: {
    year() {
      return this.dateContext.format('Y');
    },
    month() {
      return this.dateContext.format('MMMM');
    },
    monthIndex() {
      return this.dateContext.get('month');
    },
    daysInMonth() {
      return this.dateContext.daysInMonth();
    },
    currentDate() {
      return this.dateContext.get('date');
    },
    firstDayOfMonth() {
      var firstDay = moment(this.dateContext).subtract((this.currentDate - 1), 'days');
      return firstDay.weekday();
    },
    initialDate() {
        return this.today.get('date');
    },
    initialMonth() {
        return this.today.format('MMMM');
    },
    initialYear() {
        return this.today.format('Y');
    },
    colorHumors() {
      let data = [];
      let check = this.allData;
      for(var i in check) {
        if(check[i].year == this.year) {
          for(var j in check[i].month) {
            if(check[i].month[j].idmonth == this.monthIndex) {
              for(var k in check[i].month[j].day ){
                data[check[i].month[j].day[k].idday] = [];
                data[check[i].month[j].day[k].idday][0] = [];
                for(var l in check[i].month[j].day[k].humeur) {
                  switch (check[i].month[j].day[k].humeur[l]) {
                    case 1:
                      data[check[i].month[j].day[k].idday][0].push(["Sérénité", 1]);
                      break;
                    case 2:
                      data[check[i].month[j].day[k].idday][0].push(["Joie", 1]);
                      break;
                    case 3:
                      data[check[i].month[j].day[k].idday][0].push(["angoisse", 1]);
                      break;
                    case 4:
                      data[check[i].month[j].day[k].idday][0].push(["colère", 1]);
                      break;
                    case 5:
                      data[check[i].month[j].day[k].idday][0].push(["tristesse", 1]);
                      break;
                    case 6:
                      data[check[i].month[j].day[k].idday][0].push(["malade", 1]);
                      break;
                    default:
                  }
                }
                data[check[i].month[j].day[k].idday][1] = [];
                for(var m in check[i].month[j].day[k].humeur) {
                  switch (check[i].month[j].day[k].humeur[m]) {
                    case 1:
                      data[check[i].month[j].day[k].idday][1].push('#800080');
                      break;
                    case 2:
                      data[check[i].month[j].day[k].idday][1].push('#008000');
                      break;
                    case 3:
                      data[check[i].month[j].day[k].idday][1].push('#FFA500');
                      break;
                    case 4:
                      data[check[i].month[j].day[k].idday][1].push('#FF0000');
                      break;
                    case 5:
                      data[check[i].month[j].day[k].idday][1].push('#0000FF');
                      break;
                    case 6:
                      data[check[i].month[j].day[k].idday][1].push('#FFFF00');
                      break;
                    default:
                  }
                }
              }
            }
          }
        }
      }
      return data;
    },
    colorType() {
      let data = [];
      let check = this.allData;
      for(var i in check) {
        if(check[i].year == this.year) {
          for(var j in check[i].month) {
            if(check[i].month[j].idmonth == this.monthIndex) {
              for(var k in check[i].month[j].day ){
                data[check[i].month[j].day[k].idday] = [];
                data[check[i].month[j].day[k].idday][0] = [];
                for(var l in check[i].month[j].day[k].poops){
                  switch (check[i].month[j].day[k].poops[l].type) {
                    case 1:
                      data[check[i].month[j].day[k].idday][0].push(["type 1", 1]);
                      break;
                    case 2:
                      data[check[i].month[j].day[k].idday][0].push(["type 2", 1]);
                      break;
                    case 3:
                      data[check[i].month[j].day[k].idday][0].push(["type 3", 1]);
                      break;
                    case 4:
                      data[check[i].month[j].day[k].idday][0].push(["type 4", 1]);
                      break;
                    case 5:
                      data[check[i].month[j].day[k].idday][0].push(["type 5", 1]);
                      break;
                    case 6:
                      data[check[i].month[j].day[k].idday][0].push(["type 6", 1]);
                      break;
                    case 7:
                      data[check[i].month[j].day[k].idday][0].push(["type 7", 1]);
                      break;
                    default:
                  }
                }
                data[check[i].month[j].day[k].idday][1] = [];
                for(var m in check[i].month[j].day[k].poops){
                  switch (check[i].month[j].day[k].poops[m].type) {
                    case 1:
                      data[check[i].month[j].day[k].idday][1].push('#191970');
                      break;
                    case 2:
                      data[check[i].month[j].day[k].idday][1].push('#0000CD');
                      break;
                    case 3:
                      data[check[i].month[j].day[k].idday][1].push('#6495ED');
                      break;
                    case 4:
                      data[check[i].month[j].day[k].idday][1].push('#00BFFF');
                      break;
                    case 5:
                      data[check[i].month[j].day[k].idday][1].push('#ADD8E6');
                      break;
                    case 6:
                      data[check[i].month[j].day[k].idday][1].push('#5F9EA0');
                      break;
                    case 7:
                      data[check[i].month[j].day[k].idday][1].push('#40E0D0');
                      break;
                    default:
                  }
                }
              }
            }
          }
        }
      }
      return data;
    },
    limitBack () {
      let check = this.year + '-' + this.monthIndex + '-01';
      if (this.allData) {
        let allData = this.allData;
        let firstYear = allData[0].year;
        let firstMonth = allData[0].month[0].idmonth;
        let limit = firstYear + '-' + firstMonth + '-01';
        return moment(check).isSameOrBefore(moment(limit));
      }
    },
    limitFront () {
      let check = this.year + '-' + this.monthIndex + '-01';
      if(this.allData) {
        let allData = this.allData;
        let LastYear = allData[allData.length - 1].year;
        let LastMonth = allData[allData.length - 1].month[allData[allData.length - 1].month.length - 1].idmonth;
        let limit = LastYear + '-' + LastMonth + '-01';
        return moment(check).isSameOrAfter(moment(limit));
      }
    },
  },
  methods: {
    addMonth() {
        this.dateContext = moment(this.dateContext).add(1, 'month');
    },
    subtractMonth() {
        this.dateContext = moment(this.dateContext).subtract(1, 'month');
    },
    JsonParsing () {
      let allData = JSON.parse(localStorage["data" + this.loggedName]);
      this.allData = allData;
    },
    testing(value) {
      this.check = true;
      let test = value + 1;
      for(var i in this.allData) {
        if(this.allData[i].year == this.year) {
          for(var j in this.allData[i].month) {
            if(this.allData[i].month[j].idmonth == this.monthIndex) {
              for(var k in this.allData[i].month[j].day) {
                if (this.allData[i].month[j].day[k].idday == test) {
                  this.display = this.allData[i].month[j].day[k];
                  break;
                }
              }
            }
          }
        }
      }
    },
    checking() {
      this.check = false;
    }
  },
  watch: {
    loggedName () {
      if (localStorage["data" + this.loggedName]) {
        this.JsonParsing();
      }
    }
  }
}
</script>

<style lang="css">
  .weekdays li, .dates li {
    list-style:none;
    float:left;
    padding: 5px 10px;
    border: 1px solid #eee;
  }
  .line {
    display: inline;
  }
  .resize li {
    width: 12vw;
    height: 12vw;
  }
  @media (min-width:601px) {
    .resize li {
      width: 6vw;
      height: 6vw;
    }
    .CallendarNumber {
      font-size: 9px;
    }
  }
  .leftClear{
    clear: left;
  }
  .current-day {
    background-color: #ccc;
  }
  .CallendarNumber {
    font-weight: bold;
    font-size: 14px;
  }
</style>
