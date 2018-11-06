import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueSpinners from 'vue-spinners'

// var VueScrollTo = require('vue-scrollto');
import VueScrollTo from 'vue-scrollto';

import './registerServiceWorker'

Vue.config.productionTip = false

Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueSpinners)
Vue.use(VueScrollTo, {
     container: "body",
     duration: 500,
     easing: "ease",
     offset: 0,
     force: true,
     cancelable: true,
     onStart: false,
     onDone: false,
     onCancel: false,
     x: false,
     y: true
 })

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
