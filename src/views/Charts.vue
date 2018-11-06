<template lang="html">
  <div class="posCont">
    <Header />
    <div class="w3-container posBod">
      <HumorCalendar :loggedName="loggedName"/>
      <hr class="leftClear">
      <ChartsDisplay :loggedName="loggedName"/>
      <Saving :loggedName="loggedName" />
    </div>
    <Footer />
  </div>
</template>

<script>
import ChartsDisplay from '@/components/chartsDisplay';
import Header from '@/components/header';
import HumorCalendar from '@/components/humorCalendar';
import Footer from '@/components/footer';
import Saving from '@/components/saving';

export default {
  components: {
    ChartsDisplay,
    Header,
    HumorCalendar,
    Footer,
    Saving
  },
  data () {
    return {
      loggedName: ''
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
  },
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
