import Vue from 'vue'
import App from './App'

import store from './store'
import util from './common/util.js'
import config from './config'

Vue.config.productionTip = false

Vue.prototype.$store = store
Vue.prototype.$util = util
Vue.prototype.$config = config

App.mpType = 'app'

const app = new Vue({
  store,
  ...App,
})
app.$mount()
