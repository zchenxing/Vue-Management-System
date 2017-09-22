import Vue from 'vue'
import Router from 'vue-router'

import WebApp from '@/components/WebApp'

const LoginPage = resolve => require(['../components/LoginPage.vue'], resolve)
const HomePage = resolve => require(['../components/Home/HomePage.vue'], resolve)

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: LoginPage
        },
        {
            path: '/WebApp',
            component: WebApp,
            children: [{
                path: '/',
                component: HomePage
            }, {
                path: '/HomePage',
                component: HomePage
            }]
        },

    ]
})