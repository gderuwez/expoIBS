<template lang="html">
  <div class="">
    <Header />
    <div class="w3-container">
      <HumorCalendar :loggedName="loggedName"/>
      <hr class="leftClear">
      <ChartsDisplay :loggedName="loggedName"/>
    </div>
  </div>
</template>

<script>
import ChartsDisplay from '@/components/chartsDisplay';
import Header from '@/components/header';
import HumorCalendar from '@/components/humorCalendar';

export default {
  components: {
    ChartsDisplay,
    Header,
    HumorCalendar
  },
  data () {
    return {
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
  },
}
</script>

<style lang="css">
</style>
