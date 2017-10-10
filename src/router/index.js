import Vue from 'vue'
import Router from 'vue-router'

import WebApp from '@/components/WebApp'

const LoginPage = resolve => require(['../components/LoginPage.vue'], resolve)
const ArticleList = resolve => require(['../components/pages/ArticleList.vue'], resolve)
const TagManage = resolve => require(['../components/pages/TagManage.vue'], resolve)
const StatisticsMain = resolve => require(['../components/pages/StatisticsMain.vue'], resolve)
const WriteArticle = resolve => require(['../components/pages/WriteArticle.vue'], resolve)
const Memorandum = resolve => require(['../components/pages/Memorandum.vue'], resolve)
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
                    path: '/TagManage',
                    component: TagManage
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