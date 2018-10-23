<template lang="html">
  <circle-spin :loading="isLoading"></circle-spin>
</template>

<script>
export default {
  data() {
    return {
      isLoading : true,
      check: false
    }
  },
  mounted () {
    if (localStorage.users) {
      let data = JSON.parse(localStorage.users);
      for (var i in data) {
        if(data[i].isLoggedIn) {
          this.check = true;
          break;
        }
      }
      this.check ? this.$router.push({name: 'home'}) : this.$router.push({name: 'login'});
    }
    else {this.$router.push({name: 'login'});}
  }
}
</script>

<style lang="css">
</style>
