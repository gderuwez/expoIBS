<template lang="html">
  <div class="">
    <div v-if="check" class="">
      <p >Cette application est un outil pour mieux se connaître. Elle ne remplace en aucun cas l'avis d'un professionel. En cas de doute, consultez votre medecin</p>
      <p >Les données collectées par cette application ne sont pas storée en ligne, toute les données son présente uniquement sur votre appareil.</p>
      <button type="button" name="button" v-on:click="checking">Don't remind me</button>
      <hr />
    </div>

    <TimeInput />

  </div>
</template>

<script>
import TimeInput from '@/components/timeInput.vue'

export default {
  components: {
    TimeInput
  },
  data: function () {
    return {
      check: true,
      value: ''
    }
  },
  mounted() {
    if (localStorage.check) {
      var turntoBool = true;
      if (localStorage.check === "false") {
        turntoBool = false;
      }
      this.check = turntoBool;
    }
    if (localStorage.value) {
      this.value = localStorage.value
    }
  },
  methods: {
    checking() {
      this.check = !this.check;
      localStorage.check = this.check;
    }
  }
}
</script>

<style lang="css">
  .test {
    color: red;
  }
</style>
