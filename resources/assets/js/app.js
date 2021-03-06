import Vue from 'vue';
import App from './components/App.vue';
import router from './router.js';
import store from './store.js';

var app = new Vue({
        el: '#app',
        render: h => h(App),
        router,
        store
    })
;
