<template>
    <div @click="startGame()">
        <h1 style="display:block;">HUNGRY MONKEY</h1>
        <img src="../assets/giphy.gif" alt="logo">
    </div>
</template>

<script>
export default {
    methods: {
        startGame() {
            console.log('startGame');
            this.$router.push('/choice');
        }
    },
}
</script>

<style scoped>

</style>