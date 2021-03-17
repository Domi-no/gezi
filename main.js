import Vue from 'vue'
import App from './App'
import cage from '@/pages/cage/cage.vue'
import home from '@/pages/home/home.vue'
import wait from '@/pages/wait/wait.vue'
import my from '@/pages/my/my.vue'
import uView from 'uview-ui';
import http from '@/utils/http.js'
import store from './store'


Vue.config.productionTip = false
Vue.component('cage',cage)
Vue.component('home',home)
Vue.component('wait',wait)
Vue.component('my',my)
Vue.use(uView);
App.mpType = 'app'

Vue.prototype.$http = http
Vue.prototype.$store = store

const app = new Vue({
    ...App
})
app.$mount()
