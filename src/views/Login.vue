<template lang="html">
  <div class="">
    <Header />
    <form class="w3-container" action="" method="post">
      <div class="w3-section">
        <div class="w3-row">
          <label  class="" for="">UserName</label>
          <input class="w3-input" type="text" placeholder="Enter your username" v-model="nameInput">
          <p v-if="errorMessage">{{errorMessage}}</p>
        </div>
        <div class="w3-row">
          <label for="">Password</label>
          <input class="w3-input" type="password" placeholder="Enter your password" v-model="passwordInput">
          <p v-if="errorMessage2">{{errorMessage2}}</p>
        </div>


      </div>
      <button class="w3-button w3-teal" type="submit" name="button" v-on:click="logging">Login</button>
      <button class="w3-button w3-teal w3-margin-left" type="submit" name="button" v-on:click="registering">Register</button>
    </form>
  </div>
</template>

<script>
import Header from '@/components/header'

export default {
  components: {
    Header
  },
  data () {
    return {
      nameInput: '',
      passwordInput: '',
      errorMessage: '',
      errorMessage2: ''
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
          if (dataToCheckAgainst[i].Password === this.passwordInput) {
            check = false;
            this.errorMessage = 'This password already exists';
            break;
          }
        }
        if (check) {
          let dataToPush = {Name: this.nameInput, isLoggedIn: true, Password: this.passwordInput};
          dataToCheckAgainst.push(dataToPush);
          const parsed = JSON.stringify(dataToCheckAgainst);
          localStorage.users = parsed;
          this.$router.push({ name: 'loading' })
        }
      }
      else {
        if (!this.nameInput) {
          this.errorMessage = "enter a username";
        }
        if (!this.passwordInput) {
          this.errorMessage2 = "enter a password";
        }
        if (this.nameInput && this.passwordInput) {
          let dataToPush = {Name: this.nameInput, isLoggedIn: true, Password: this.passwordInput};
          let users = [];
          users.push(dataToPush);
          const parsed = JSON.stringify(users);
          localStorage.users = parsed;
          this.$router.push({ name: 'loading' })
        }
      }
    },
    logging (e) {
      e.preventDefault();
      if (localStorage.users) {
        let dataToCheckAgainst = JSON.parse(localStorage.users);
        let check = true;
        let checkName = true;
        let checkPassword = true;
        for (var i in dataToCheckAgainst) {
          if (dataToCheckAgainst[i].Name === this.nameInput) {
            checkName = false;
          }
          if (dataToCheckAgainst[i].Password === this.passwordInput) {
            checkPassword = false;
          }
          if (!checkName && !checkPassword) {
            check = false;
            dataToCheckAgainst[i].isLoggedIn = true;
            const parsed = JSON.stringify(dataToCheckAgainst);
            localStorage.users = parsed;
            this.$router.push({ name: 'loading' })
            break;
          }
        }
        if (check && checkName) {
          this.errorMessage = "This username is incorect";
        }
        if (check && checkPassword) {
          this.errorMessage2 = "This password is incorect";
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
