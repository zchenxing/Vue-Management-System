import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex);

import actions from './actions'
import mutations from './mutations'
import getters from './getters'


// 定义状态state
const state = {
    blogInfo:{
        title: 'vuex'
    },
    people : [
        {name : 'ziksang1',age:21},
        {name : 'ziksang2',age:10},
        {name : 'ziksang3',age:30},
        {name : 'ziksang4',age:40},
        {name : 'ziksang5',age:50},
        {name : 'ziksang6',age:30},
        {name : 'ziksang7',age:80}
    ]

}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})