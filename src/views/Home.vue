<template>
  <div class="posCont">
    <Header />
    <div class="posBod">
      <Sequential @newData="newData" :dataSubmit="dataSubmit" :loggedName="loggedName"/>
      <!-- <Reminder :loggedName="loggedName" /> -->
      <div>
        <!-- <TimeInput :loggedName="loggedName" /> -->
        <HumorOfTheDay :loggedName="loggedName"/>
        <ScatInput @newData="newData" :loggedName="loggedName"/>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import TimeInput from '@/components/timeInput.vue';
import ScatInput from '@/components/scatInput';
import Sequential from '@/components/sequential';
import Header from '@/components/header';
import Reminder from '@/components/reminder';
import HumorOfTheDay from '@/components/humorOfTheDay';
import Footer from '@/components/footer';


export default {
  components: {
    TimeInput,
    ScatInput,
    Sequential,
    Header,
    Reminder,
    HumorOfTheDay,
    Footer
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
      let test = false;
      for (var i in data) {
        if(data[i].isLoggedIn) {
          this.loggedName = data[i].Name;
          test = true;
          break;
        }
      }
      if(!test) {this.$router.push({name: 'loading'});}
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
.posCont {
  min-height: 100%;
  position: relative;
}
.posBod {
  padding-bottom: 100px;
}
</style>
