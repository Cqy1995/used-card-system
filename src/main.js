import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import { Lazyload,Dialog } from 'vant';
import 'vant/lib/index.css';
import './assets/css/reset.css'
Vue.use(Vant);
Vue.use(Lazyload);
Vue.use(Dialog);

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')