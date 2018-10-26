<template>
  <div>
    <Header />
    <div class="w3-container">
      <Sequential :PostedDate="dateCheckValue" :loggedName="loggedName"/>
      <div v-if="check" class="">
        <p >Cette application est un outil pour mieux se connaître. Elle ne remplace en aucun cas l'avis d'un professionel. En cas de doute, consultez votre medecin</p>
        <p >Les données collectées par cette application ne sont pas storée en ligne, toute les données son présente uniquement sur votre appareil.</p>
        <button type="button" name="button" v-on:click="checking">Don't remind me</button>
        <hr />
      </div>
      <TimeInput :loggedName="loggedName" />
      <ScatInput @dateCheck="dateCheck" :loggedName="loggedName"/>
      <br>
      <hr>
      <br>
      <ChartsDisplay :loggedName="loggedName"/>
    </div>
  </div>
</template>

<script>
import TimeInput from '@/components/timeInput.vue';
import ScatInput from '@/components/scatInput';
import ChartsDisplay from '@/components/chartsDisplay';
import Sequential from '@/components/sequential';
import Header from '@/components/header'


export default {
  components: {
    TimeInput,
    ScatInput,
    ChartsDisplay,
    Sequential,
    Header
  },
  data () {
    return {
      check: true,
      value: '',
      allData: [],
      dateCheckValue: 0,
      loggedName: ''
    }
  },
  mounted() {
    if (localStorage.users) {
      let data = JSON.parse(localStorage.users);
      for (var i in data) {
        if(data[i].isLoggedIn) {
          this.loggedName = data[i].Name;
          break;
        }
      }
    }
    else {
      this.$router.push({name: 'loading'});
    }
    if (localStorage['check'+this.loggedName]) {
      var turntoBool = true;
      if (localStorage['check'+this.loggedName] === "false") {
        turntoBool = false;
      }
      this.check = turntoBool;
    }
    if (localStorage['value'+this.loggedName]) {
      this.value = localStorage['value'+this.loggedName]
    }
  },
  methods: {
    checking() {
      this.check = !this.check;
      localStorage['check'+this.loggedName] = this.check;
    },
    dateCheck(value) {
      this.dateCheckValue = value.getTime();
    }
  }
}
</script>

<style lang="css">
  .test {
    color: red;
  }
</style>
