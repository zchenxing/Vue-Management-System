// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import elementUI from 'element-ui'
import store from './store/index'
import RestfulPlugin from './plugins/RestfuiPlugin'
import CommonPlugin from './plugins/CommonPlugin'
import 'element-ui/lib/theme-default/index.css'

import './less/reset.less'
import './less/style.less'

Vue.use(vueAxios, axios);
Vue.use(elementUI);
Vue.use(RestfulPlugin);
Vue.use(CommonPlugin);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    store,
    router,
    template: '<App/>',
    components: { App }
})