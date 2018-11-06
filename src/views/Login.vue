<template lang="html">
  <div :style="'height:'+window.height+'px'">
    <Header />
    <form class="w3-container posBod" action="" method="post">
      <div class="w3-section">
        <div class="w3-row w3-section">
          <div class="w3-col" style="width:50px"><i class="w3-xxlarge fas fa-lock"></i></div>
          <div class="w3-rest">
            <input class="w3-input w3-border" type="text" placeholder="Username" v-model="nameInput">
          </div>
          <p v-if="errorMessage">{{errorMessage}}</p>
        </div>

        <div class="w3-row w3-section">
          <div class="w3-col" style="width:50px"><i class="w3-xxlarge fas fa-user"></i></div>
          <div class="w3-rest">
            <input class="w3-input w3-border" type="password" placeholder="Password" v-model="passwordInput">
          </div>
          <p v-if="errorMessage2">{{errorMessage2}}</p>
        </div>
      </div>
      <div class="w3-container w3-center w3-indigo" name="login" v-on:click="logging">Login</div>
      <div class="w3-container w3-indigo w3-center w3-margin-top" name="register" v-on:click="registering">Register</div>
    </form>
    <Footer />
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'

export default {
  components: {
    Header,
    Footer
  },
  data () {
    return {
      nameInput: '',
      passwordInput: '',
      errorMessage: '',
      errorMessage2: '',
      window: {
        height: 0
      }
    }
  },
  created() {
    window.addEventListener('resize', this.handleResize)
    this.handleResize();
  },
  destroyed() {
    window.removeEventListener('resize', this.handleResize)
  },
  methods: {
    handleResize() {
      this.window.height = window.innerHeight;
    },
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
.posBod {
  padding-bottom: 100px;
}
</style>
