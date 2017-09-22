import Vue from 'vue'
import Router from 'vue-router'

import WebApp from '@/components/WebApp'

const LoginPage = resolve => require(['../components/LoginPage.vue'], resolve)
const ArticleList = resolve => require(['../components/article/ArticleList.vue'], resolve)
const StatisticsMain = resolve => require(['../components/statistics/StatisticsMain.vue'], resolve)
const WriteArticle = resolve => require(['../components/write-article/WriteArticle.vue'], resolve)
const Memorandum = resolve => require(['../components/memo/Memorandum.vue'], resolve)
    // qwdqwd
Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            component: LoginPage
        },
        {
            path: '/WebApp',
            component: WebApp,
            children: [

                {
                    path: '/',
                    component: StatisticsMain
                }, {
                    path: '/ArticleList',
                    component: ArticleList
                }, {
                    path: '/StatisticsMain',
                    component: StatisticsMain
                }, {
                    path: '/WriteArticle',
                    component: WriteArticle
                }, {
                    path: '/Memorandum',
                    component: Memorandum
                }

            ]
        },

    ]
})