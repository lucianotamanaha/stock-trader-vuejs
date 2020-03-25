import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router'
import store from './store'
import VueResoruce from 'vue-resource'

Vue.config.productionTip = false
Vue.use(VueResoruce)

Vue.http.options.root = 'https://vuejs-simple-stock-trader.firebaseio.com/'

Vue.filter('currency', (value) =>{
  return '$' + value.toLocaleString();
})

new Vue({
  vuetify,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
