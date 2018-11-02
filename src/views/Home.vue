<template>
  <div>
    <Header />
    <div class="">
      <Sequential @newData="newData" :dataSubmit="dataSubmit" :loggedName="loggedName"/>
      <!-- <Reminder :loggedName="loggedName" /> -->
      <div>
        <!-- <TimeInput :loggedName="loggedName" /> -->
        <HumorOfTheDay :loggedName="loggedName"/>
        <ScatInput @newData="newData" :loggedName="loggedName"/>
        <!-- <Saving :loggedName="loggedName" /> -->
      </div>
    </div>
  </div>
</template>

<script>
import TimeInput from '@/components/timeInput.vue';
import ScatInput from '@/components/scatInput';
import Sequential from '@/components/sequential';
import Header from '@/components/header';
import Saving from '@/components/saving';
import Reminder from '@/components/reminder';
import HumorOfTheDay from '@/components/humorOfTheDay';


export default {
  components: {
    TimeInput,
    ScatInput,
    Sequential,
    Header,
    Saving,
    Reminder,
    HumorOfTheDay
  },
  data () {
    return {
      value: '',
      loggedName: '',
      dataSubmit: false,
    }
  },
  methods: {
    newData() {
      this.dataSubmit = !this.dataSubmit;
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
    if (localStorage['value'+this.loggedName]) {
      this.value = localStorage['value'+this.loggedName]
    }
  }
}
</script>

<style lang="css">
</style>
