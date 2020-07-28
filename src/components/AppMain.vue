<template>
    <div id="app-main" @click="startGame()">
        <span class="title">HUNGRY MONKEY</span>
        <br>
        <img class="title-image" src="../assets/giphy.gif" alt="logo">
    </div>
</template>

<script>
export default {
    methods: {
        startGame() {
            this.$router.push('/choice');
        }
    }
}
</script>

<style scoped>
#app-main {
    max-width: 600px;
    margin: 80px auto;
}

.title {
    text-align: center;
    display: block;
    font-size: 50px;
    font-weight: bold;
}

.title-image {
    margin: 0 auto;
    display: block;
    width: 70%;
}
</style>