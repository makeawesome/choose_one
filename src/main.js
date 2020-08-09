import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';
import VueRouter from 'vue-router';
import store from './store/index';

Vue.use(VueRouter);
Vue.use(Vuex);

new Vue({
    el: '#app',
    render: h => h(App),
    store: new Vuex.Store(store)
})