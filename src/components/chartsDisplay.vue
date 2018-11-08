<template lang="html">
  <div class="">
    <div class="w3-container">
      <p>Votre humeur moyenne du mois : {{averageHumor}} </p>
      <p> nombre de poop pour ce mois : {{totalPoopOfMonth}}</p>
      <button class="w3-deep-purple w3-block w3-center w3-btn w3-margin-bottom" type="button" name="button" v-on:click="clickChart">Display chart</button>
    </div>

    <div class="" v-if="check">
      <div class="w3-cell-row">
        <div class="w3-cell">
          <button class="w3-block w3-btn w3-deep-purple" name="button" @click="monthBack" :class="{'w3-disabled' : limitBack}" :disabled="{'w3-disabled' : limitBack}">
            <i class="fas fa-chevron-left"></i>
          </button>
        </div>
        <div class="w3-cell w3-teal w3-center">
          {{monthDisplayed}}
        </div>
        <div class="w3-cell">
          <button class="w3-block w3-btn w3-deep-purple" name="button" @click="monthForward" :class="{'w3-disabled' : limitFront}" :disabled="{'w3-disabled' : limitFront}">
            <i class="fas fa-chevron-right"></i>
          </button>
        </div>
      </div>
      <label for="">nombre de poop par jour</label>
      <line-chart :colors="['#b00', '#666']" :data="displayByDay" ></line-chart>
      <br>
      <label for="">Pourcentage de poop par humeur</label>
      <column-chart :data="poopByHumor" suffix="%" :colors="['#666']"></column-chart>
      <br>
      <label for="">Poop per humor per month</label>
      <line-chart :colors="['#b00', '#666']" :data="arrayHumorMonth" ></line-chart>
    </div>
  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'ChartsDisplay',
  data () {
    return {
      allData : '',
      check: false,
      yearCheck : '',
      monthCheck : '',
      dateContext : moment()
    }
  },
  props: {
    loggedName: String
  },
  watch: {
    loggedName () {
      if (localStorage["data" + this.loggedName]) {
        this.JsonParsing();
      }
    }
  },
  mounted () {
    this.yearCheck = moment().year()
    this.monthCheck = moment().month();
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
    monthDisplayed() {
      return this.dateContext.format('MMM YYYY');
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
    displayByDay() {
      let test2 = [];
      this.allData.forEach((year) => {
        let monthCheck = this.monthIndex;
        let yearCheck = this.year;
        // creating date to use in data
        let date = new Date();
        //setting year to use in data
        if (year.year == yearCheck) {
          date.setFullYear(year.year);
          //checking months
          year.month.forEach((idmonth) => {
            //checking if months = condition
            if (idmonth.idmonth == monthCheck) {
              // if yes setting month to use in data
              date.setMonth(idmonth.idmonth);
              //checking days
              idmonth.day.forEach((idday) => {
                date.setDate(idday.idday);
                let dateKey = date.toDateString();
                let poopValue = idday.poops.length;
                let ArrayToPush = [dateKey, poopValue];
                test2.push(ArrayToPush);
              });
            }
          });
        }
      });
      return test2;
    },
    averageHumor() {
      let allData = this.allData;
      if (allData) {
        let store = [];
        let average;
        allData.forEach((year) => {
          let monthCheck = this.monthIndex;
          let yearCheck = this.year;
          if (year.year == yearCheck) {
            year.month.forEach((idmonth) => {
              if (idmonth.idmonth == monthCheck) {
                idmonth.day.forEach((idday) => {
                  idday.humeur.forEach((item) => {
                    store.push(item);
                  });
                });
              }
            });
          }
        });
        let frequency = {};  // array of frequency.
        let max = 0;  // holds the max frequency.
        let result;   // holds the max frequency element.
        for(var i in store) {
          frequency[store[i]]=(frequency[store[i]] || 0)+1; // increment frequency.
          if(frequency[store[i]] > max) { // is this frequency > max so far ?
                  max = frequency[store[i]];  // update max.
                  result = store[i];          // update result.
          }
        }
        switch (result) {
          case 1:
            average = "Sérénité"
            break;
          case 2:
            average = "Joie"
            break;
          case 3:
            average = "Angoisse"
            break;
          case 4:
            average = "Colère"
            break;
          case 5:
            average = "tristesse"
            break;
          case 6:
            average = "malade"
            break;
          default:
        }
        return average;
      }
    },
    poopByHumor () {
      let allData = this.allData;
      if (allData) {
        let result = [["sérénité", 0], ["joie" , 0], ["angoisse" , 0], ["colère" , 0], ["tristesse" , 0], ["malade" , 0]];
        allData.forEach((year) => {
          year.month.forEach((month) => {
            month.day.forEach((day) => {
              day.humeur.forEach((humeur) => {
                switch (humeur) {
                  case 1:
                    result[0][1] += 1;
                    break;
                  case 2:
                    result[1][1] += 1;
                    break;
                  case 3:
                    result[2][1] += 1;
                    break;
                  case 4:
                    result[3][1] += 1;
                    break;
                  case 5:
                    result[4][1] += 1;
                    break;
                  case 6:
                    result[5][1] += 1;
                    break;
                  default:
                }
              })
            })
          })
        })
        let total = result[0][1] + result[1][1] + result[2][1] + result[3][1] + result[4][1] + result[5][1];
        result.forEach((item) => {
          item[1] = item[1] / total * 100;
        })
        return result;
      }
    },
    totalPoopOfMonth () {
      let test2 = 0;
      if (this.allData) {
        this.allData.forEach((year) => {
          let monthCheck = this.monthIndex;
          let yearCheck = this.year;
          // creating date to use in data
          if (year.year == yearCheck) {
            //checking months
            year.month.forEach((idmonth) => {
              //checking if months = condition
              if (idmonth.idmonth == monthCheck) {
                //checking days
                idmonth.day.forEach((idday) => {
                  test2 += idday.poops.length;
                });
              }
            });
          }
        });
      }
      return test2;
    },
    arrayHumorMonth () {
      let allData = this.allData;
      let MonthlyHumor = [];
      if (allData) {
        allData.forEach((year) => {
          let date = new Date();
          date.setFullYear(year.year);
          year.month.forEach((month) => {
            let store = [];
            let average;
            date.setMonth(month.idmonth);
            let stringDate = date.toDateString();
            let arrayDate = stringDate.split(' ');
            let newArrayDate = [];
            newArrayDate.push(arrayDate[1]);
            newArrayDate.push(arrayDate[3]);
            let date2 = newArrayDate[0] + ' ' + newArrayDate[1];
            let poopOfMonth = 0;
            month.day.forEach((day) => {
              poopOfMonth += day.poops.length;
              day.humeur.forEach((item) => {
                store.push(item);
              });
            });
            let frequency = {};  // array of frequency.
            let max = 0;  // holds the max frequency.
            let result;   // holds the max frequency element.
            for(var i in store) {
              frequency[store[i]]=(frequency[store[i]] || 0)+1; // increment frequency.
              if(frequency[store[i]] > max) { // is this frequency > max so far ?
                      max = frequency[store[i]];  // update max.
                      result = store[i];          // update result.
              }
            }
            switch (result) {
              case 1:
                average = "Sérénité"
                break;
              case 2:
                average = "Joie"
                break;
              case 3:
                average = "Angoisse"
                break;
              case 4:
                average = "Colère"
                break;
              case 5:
                average = "tristesse"
                break;
              case 6:
                average = "malade"
                break;
              default:
            }
            let toPush = [date2 + ' : ' + average, poopOfMonth];
            MonthlyHumor.push(toPush);
          });
        });
        return MonthlyHumor;
      }
    },
  },
  methods : {
    monthBack () {
      this.dateContext = moment(this.dateContext).subtract(1, 'month');
    },
    monthForward () {
      this.dateContext = moment(this.dateContext).add(1, 'month');
    },
    clickChart () {
      this.check = !this.check;
    },
    JsonParsing () {
      let allData = JSON.parse(localStorage["data" + this.loggedName]);
      this.allData = allData;
    },
  }
}
</script>

<style lang="css">
</style>
