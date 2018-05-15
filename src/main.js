// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import store from './store'
import apiConfig from '../config/api.config'
import iView from 'iview'
import 'iview/dist/styles/iview.css'
import MintUi from 'mint-ui'
import 'mint-ui/lib/style.css'
import moment from 'moment'
import VueTouch from 'vue-touch'
import {LoadingPlugin, ToastPlugin, WechatPlugin, DatetimePlugin, ConfirmPlugin} from 'vux'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Axios.defaults.baseURL = apiConfig.baseUrl
Vue.use(MintUi)
Vue.use(iView)
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(moment)
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(WechatPlugin)
Vue.use(DatetimePlugin)
Vue.use(ConfirmPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: store,
  components: { App },
  template: '<App/>'
})
