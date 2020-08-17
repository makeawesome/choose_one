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
            <button type="button" :disabled="isAllUnselected || isAllSelected" @click="exclude()">...빼고</button>
            <button type="button" :disabled="isAllUnselected" @click="include()">...중에서</button>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex';

export default {
    data() {
        return {
            checkedItems: []
        };
    },

    computed: {
        ...mapGetters({
            categories: 'rootCategoriesArray'
        }),

        isAllSelected() {
            return this.checkedItems.length === this.categories.length;
        },

        isAllUnselected() {
            return this.checkedItems.length === 0;
        }
    },

    methods: {
        all() {
            this.checkedItems = this.categories.map(item => item.id);
        },
        init() {
            this.checkedItems = [];
        },
        exclude() {
            if(this.checkedItems.length === 0) {
                return;
            }


        },
        include() {
            if(this.checkedItems.length === 0) {
                return;
            }

            
        }
    }
}
</script>

<style scoped>

</style>