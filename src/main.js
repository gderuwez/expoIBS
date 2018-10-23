import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueChartkick from 'vue-chartkick'
import Chart from 'chart.js'
import VueSpinners from 'vue-spinners'

Vue.config.productionTip = false

Vue.use(VueChartkick, {adapter: Chart})
Vue.use(VueSpinners)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
