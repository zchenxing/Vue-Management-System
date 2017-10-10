import * as types from './mutation-types'

export default {
    [types.BOLG_INFO](state, blogInfo) {
        state.blogInfo = blogInfo;            
    }
}