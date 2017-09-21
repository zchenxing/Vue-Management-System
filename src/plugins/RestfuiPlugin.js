import vue from 'vue';

let RestfulPlugin = {};

const apiBasseUrl = 'http://localhost:8092/api/v1';


let RestfulClient = {

    get: function(url, success, failed) {
        // console.log('')
        vue.axios.get(apiBasseUrl + url).then((response) => {
            success(response.data.data);
        }).catch((error) => {
            failed(error);
        });
    },
    post: function(url, params, success, failed) {
        vue.axios.post(apiBasseUrl + url, params).then((response) => {
            console.log(response);
            success(response);
        }).catch((error) => {
            console.log(error);
            failed(error);
        })
    }

}

RestfulPlugin.install = (Vue, options) => {
    Vue.prototype.$rsAxios = RestfulClient;
}

export default RestfulPlugin;