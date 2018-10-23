<template lang="html">
  <div class="">
    <button type="button" name="button" v-on:click="monthBack" :disabled="limitBack">Previous month</button>
    <button type="button" name="button" v-on:click="clickChart">Display chart</button>
    <button type="button" name="button" v-on:click="monthForward" :disabled="limitFront">NextMonth</button>
    <h3>Mois du {{monthDisplayed}}</h3>
    {{arrayHumorMonth}}
    <p>Votre humeur moyenne du mois : {{averageHumor}} </p>
    <p> nombre de poop pour ce mois : {{totalPoopOfMonth}}</p>
    <br>
    <div class="" v-if="check">
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
export default {
  name: 'ChartsDisplay',
  data () {
    return {
      allData : '',
      check: false,
      yearCheck : '',
      monthCheck : ''
    }
  },
  mounted () {
    this.JsonParsing ();
    let dateCheck = new Date();
    this.yearCheck = dateCheck.getFullYear();
    this.monthCheck = dateCheck.getMonth();
  },
  computed: {
    limitBack () {
      let allData = this.allData
      let check = this.yearCheck.toString() + this.monthCheck.toString();
      let isBackdisable = false;
      if (allData) {
        let firstYear = allData[0].year;
        let firstMonth = allData[0].month[0].idmonth;
        let limit = firstYear.toString() + firstMonth.toString();
        check > limit ? isBackdisable = false : isBackdisable = true
        return isBackdisable;
      }
      else {
        return isBackdisable;
      }
    },
    limitFront () {
      let allData = this.allData
      let check = this.yearCheck.toString() + this.monthCheck.toString();
      let isFrontdisable = false;
      if (allData) {
        let LastYear = allData[allData.length - 1].year;
        let LastMonth = allData[allData.length - 1].month[allData[allData.length - 1].month.length - 1].idmonth;
        let limit = LastYear.toString() + LastMonth.toString();
        check < limit ? isFrontdisable = false : isFrontdisable = true
        return isFrontdisable;
      }
      else {
        return isFrontdisable;
      }
    },
    displayByDay() {
      // using ifss to select month / year
      let test2 = [];
      this.allData.forEach((year) => {
        let monthCheck = this.monthCheck;
        let yearCheck = this.yearCheck;
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
          let monthCheck = this.monthCheck;
          let yearCheck = this.yearCheck;
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
          let monthCheck = this.monthCheck;
          let yearCheck = this.yearCheck;
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
    monthDisplayed () {
      let date = new Date(this.yearCheck, this.monthCheck);
      return date.toDateString();
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
      let newMonthCheck = this.monthCheck
      if (newMonthCheck - 1 === -1) {
        this.yearCheck -= 1;
        this.monthCheck = 11;
      }
      else {
        this.monthCheck -= 1;
      }
    },
    monthForward () {
      let newMonthCheck = this.monthCheck
      if (newMonthCheck + 1 === 12) {
        this.yearCheck += 1;
        this.monthCheck = 0;
      }
      else {
        this.monthCheck += 1;
      }
    },
    clickChart () {
      this.check = !this.check;
    },
    JsonParsing () {
      let allData = JSON.parse(localStorage.data);
      this.allData = allData;
    },
  }
}
</script>

<style lang="css">
</style>
