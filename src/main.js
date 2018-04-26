// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import VueAxios from 'vue-axios'
import apiConfig from '../config/api.config'
import {LoadingPlugin, ToastPlugin, WechatPlugin} from 'vux'
import './assets/font-awesome-4.7.0/css/font-awesome.min.css'

Vue.config.productionTip = false
Vue.use(VueAxios, Axios)
Axios.defaults.baseURL = apiConfig.baseUrl
Vue.use(LoadingPlugin)
Vue.use(ToastPlugin)
Vue.use(WechatPlugin)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
