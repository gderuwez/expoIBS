<template lang="html">
  <button type="button" name="button" v-on:click="logingOut">Disconnect</button>
</template>

<script>
export default {
  name: 'Logout',
  methods : {
    logingOut () {
      if (localStorage.users) {
        let dataToCheckAgainst = JSON.parse(localStorage.users);
        for (var i in dataToCheckAgainst) {
          if (dataToCheckAgainst[i].isLoggedIn) {
            dataToCheckAgainst[i].isLoggedIn = false;
          }
        }
        const parsed = JSON.stringify(dataToCheckAgainst);
        localStorage.users = parsed;
        this.$router.push({ name: 'loading' });
      }
    }
  }
}
</script>

<style lang="css">
</style>
