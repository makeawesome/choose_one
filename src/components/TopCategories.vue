<template>
    <div>
        <span class="title">나는 오늘...</span>
        <div id="categories">
            <template v-for="category in categories">
                <input type="checkbox" :key="category.id" :value="category.id" :id="category.id" />
                <label :for="category.id" :key="category.id">{{category.name}}</label>
            </template>
        </div>

        <div id="buttons">
            <button type="button" @click="init()">초기화</button>
            <button type="button" @click="exclude()">...빼고</button>
            <button type="button" @click="include()">...중에서</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        let categories = [];
        let rootCategories = this.$store.state.rootCategories;

        for(let categoryKey in rootCategories) {
            categories.push({
                id: categoryKey,
                name: rootCategories[categoryKey].name
            })
        }

        return {
            categories
        };
    },
    methods: {
        init() {

        },
        exclude() {

        },
        include() {

        }
    }
}
</script>
<style scoped>

</style>