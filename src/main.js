// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import vueAxios from 'vue-axios'
import vuex from 'vuex'
import elementUI from 'element-ui'
import RestfulPlugin from './plugins/RestfuiPlugin'
import 'element-ui/lib/theme-default/index.css'

import './less/reset.less'
import './less/style.less'

Vue.use(vuex);
Vue.use(vueAxios, axios);
Vue.use(elementUI);
Vue.use(RestfulPlugin);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})