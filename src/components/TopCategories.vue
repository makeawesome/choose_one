<template>
    <div>
        <span class="title">나는 오늘...</span>
        <div id="categories" >
            <template v-for="category in categories">
                <input type="checkbox" :key="category.id + category.name" :value="category.id" :id="category.id" v-model="checkedItems">
                <label :for="category.id" :key="category.id">{{category.name}}</label>
            </template>
        </div>

        <div id="buttons">
            <button type="button" @click="all()">전체</button>
            <button type="button" @click="init()">초기화</button>
            <button type="button" @click="exclude()">...빼고</button>
            <button type="button" @click="include()">...중에서</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        let rootCategories = this.$store.state.rootCategories || [];
        let categories = Object.keys(rootCategories).map(categoryKey => {
            return {
                id: categoryKey,
                name: rootCategories[categoryKey].name
            };
        });

        return {
            categories,
            checkedItems: [],
            uncheckedItems: Object.keys(rootCategories)
        };
    },

    // 아무것도 선택 안했을 때 -> ...중에서, ...빼고 비활성화
    // 모두 선택 했을 때 -> ...빼고 비활성화
    watch: {

    },

    methods: {
        all() {
            this.data.checkedItems = Object.keys(this.data.categories);
        },
        init() {
            this.data.checkedItems = [];
        },
        exclude() {
            if(this.data.checkedItems.length === 0) {
                return;
            }

            console.log(this.data.uncheckedItems);
        },
        include() {
            if(this.data.checkedItems.length === 0) {
                return;
            }

            console.log(this.data.checkedItems);
        }
    }
}
</script>
<style scoped>

</style>