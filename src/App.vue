<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue';
import Choice from './components/Choice.vue';
import Result from './components/Result.vue';
import VueRouter from 'vue-router';

const router = new VueRouter({
  mode: 'history',
  routes: [
    {path: '/', component: AppMain},
    {path: '/choice', component: Choice},
    {path: '/result', component: Result}
  ]
});

export default {
  name: 'app',
  router
}
</script>

<style>
* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
</style>