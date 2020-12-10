import Vue from 'vue'
import App from './App'


import home from './pages/home/home.vue'
import my from './pages/my/my.vue'
import wait from './pages/wait/wait.vue'
import cage from './pages/cage/cage.vue'
import uView from 'uview-ui';

Vue.component('home',home)
Vue.component('my',my)
Vue.component('wait',wait)
Vue.component('cage',cage)
Vue.use(uView);

Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
