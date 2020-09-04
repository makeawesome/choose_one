import AppMain from '../components/AppMain.vue';
import TopCategories from '../components/TopCategories.vue';
import ChildCategories from '../components/ChildCategories.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
    mode: 'history',
    routes: [
        { path: '/', component: AppMain },
        { path: '/top-categories', component: TopCategories },
        { path: '/child-categories', component: ChildCategories },
    ]
});

export default router;