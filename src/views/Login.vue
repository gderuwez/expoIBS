<template lang="html">
  <div class="">
    <form class="" action="" method="post">
      <label for="">Name</label>
      <input type="text" name="" value="" v-model="nameInput">
      <p v-if="errorMessage">{{errorMessage}}</p>
      <br>
      <button type="submit" name="button" v-on:click="logging">Login</button>
      <button type="submit" name="button" v-on:click="registering">Register</button>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nameInput: '',
      errorMessage: ''
    }
  },
  methods: {
    registering (e) {
      e.preventDefault();
      if (localStorage.users) {
        let dataToCheckAgainst = JSON.parse(localStorage.users);
        let check = true;
        for (var i in dataToCheckAgainst) {
          if (dataToCheckAgainst[i].Name === this.nameInput) {
            check = false;
            this.errorMessage = 'This username already exists';
            break;
          }
        }
        if (check) {
          let dataToPush = {Name: this.nameInput, isLoggedIn: true};
          dataToCheckAgainst.push(dataToPush);
          const parsed = JSON.stringify(dataToCheckAgainst);
          localStorage.users = parsed;
          this.$router.push({ name: 'loading' })
        }
      }
      else {
        let dataToPush = {Name: this.nameInput, isLoggedIn: true};
        let users = [];
        users.push(dataToPush);
        const parsed = JSON.stringify(users);
        localStorage.users = parsed;
        this.$router.push({ name: 'loading' })
      }
    },
    logging (e) {
      e.preventDefault();
      if (localStorage.users) {
        let dataToCheckAgainst = JSON.parse(localStorage.users);
        let check = true;
        for (var i in dataToCheckAgainst) {
          if (dataToCheckAgainst[i].Name === this.nameInput) {
            check = false;
            dataToCheckAgainst[i].isLoggedIn = true;
            const parsed = JSON.stringify(dataToCheckAgainst);
            localStorage.users = parsed;
            this.$router.push({ name: 'loading' })
            break;
          }
        }
        if (check) {
          this.errorMessage = "This username doesn't exist";
        }
      }
      else {
        this.errorMessage = "This username doesn't exist";
      }
    }
  }
}
</script>

<style lang="css">
</style>
