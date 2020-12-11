import Vue from 'vue'
import App from './App'


import home from './pages/home/home.vue'
import cage from './pages/cage/cage.vue'
import wait from './pages/wait/wait.vue'
import my from './pages/my/my.vue'
import uView from 'uview-ui';

Vue.use(uView);

Vue.component('home',home)
Vue.component('cage',cage)
Vue.component('wait',wait)
Vue.component('my',my)





Vue.config.productionTip = false

App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
