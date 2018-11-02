<template lang="html">
  <div v-if="close" class="w3-modal w3-block">
    <div class="w3-modal-content w3-card">
      <header class="w3-conatiner w3-teal">
        <h2>Notice</h2>
        <span class="w3-button w3-display-topright" v-on:click="checking">&times;</span>
      </header>
      <div class="w3-container">
        <p >Cette application est un outil pour mieux se connaître. Elle ne remplace en aucun cas l'avis d'un professionel. En cas de doute, consultez votre medecin</p>
        <p >Les données collectées par cette application ne sont pas storée en ligne, toute les données son présente uniquement sur votre appareil.</p>
        <label for="reminder">Don't remind me</label><input id="reminder" type="checkbox" class="w3-check w3-margin" v-model="check">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Reminder',
  data () {
    return {
      check: false,
      close: true,
    }
  },
  props: {
    loggedName: String
  },
  watch: {
    loggedName () {
      if (localStorage['check'+this.loggedName]) {
        var turntoBool = true;
        if (localStorage['check'+this.loggedName] === "false") {
          turntoBool = false;
        }
        this.close = turntoBool;
      }
    }
  },
  methods: {
    checking() {
      this.close = !this.close;
      localStorage['check'+this.loggedName] = !this.check;
    }
  }
}
</script>

<style lang="css">
</style>
