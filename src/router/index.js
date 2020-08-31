import AppMain from '../components/AppMain.vue';
import Choice from '../components/Choice.vue';
import Result from '../components/Result.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: AppMain },
        { path: '/choice', component: Choice },
        { path: '/result', component: Result }
    ]
});

export default router;