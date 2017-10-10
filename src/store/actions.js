export default {

    getBlogInfo({commit}, blogInfo) {

        setTimeout(() => {
            commit('BOLG_INFO', blogInfo);            
        }, 2000);
    }
}