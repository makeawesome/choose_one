<template>
    <div id="top-categories">
        <span class="title">나는 오늘...</span>
        <div id="categories">
            <template v-for="category in categories">
                <input type="checkbox"
                    :key="`input_${category.id}`"
                    :value="category.id"
                    :id="category.id"
                    v-model="checkedCategories"
                    @change="onChange">
                <label :for="category.id" :key="`label_${category.id}`">{{category.name}}</label>
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
import { mapGetters, mapActions } from 'vuex';

export default {
    data() {
        return {
            checkedCategories: [],
            uncheckedCategories: this.$store.getters.getTopCategories.map(cat => cat.id),
        };
    },
    computed: {
        ...mapGetters({
            categories: 'getTopCategories',
        }),

        isAllSelected() {
            return this.checkedCategories.length === this.categories.length;
        },
        isAllUnselected() {
            return this.checkedCategories.length === 0;
        }
    },
    methods: {
        ...mapActions([
            'setToChosenTopCategories'
        ]),
        all() {
            this.checkedCategories = this.categories.map(cat => cat.id);
            this.uncheckedCategories = [];
        },
        init() {
            this.checkedCategories = [];
            this.uncheckedCategories = this.categories.map(cat => cat.id);
        },
        exclude() {
            if(this.checkedCategories.length === 0) {
                return;
            }
            // 선택된 카테고리 => 체크 안 된 목록
            let chosenCategories = this.uncheckedCategories;
            this.moveToNextWith(chosenCategories);
        },
        include() {
            if(this.checkedCategories.length === 0) {
                return;
            }
            // 선택된 카테고리 => 체크된 목록
            let chosenCategories = this.checkedCategories;
            this.moveToNextWith(chosenCategories);
        },
        moveToNextWith(chosenCategories) {
            this.$store.dispatch('setToChosenTopCategories', chosenCategories)
                .then(() => this.$router.push('/child-categories'));
        },
        onChange(event) {
            let {checked, value: id} = event.target;

            if(checked) {
                this.removeFromUncheckedCategories(id);
            } else {
                this.addToUncheckedCategories(id);
            }
        },
        removeFromUncheckedCategories(targetId) {
            if(this.hasItem(this.uncheckedCategories, targetId)) {
                this.uncheckedCategories = this.uncheckedCategories.filter(id => id !== targetId);
            }
        },
        addToUncheckedCategories(targetId) {
            if(!this.hasItem(this.uncheckedCategories, targetId)) {
                this.uncheckedCategories.push(targetId);
            }
        },
        hasItem(categories, targetId) {
            return categories.find(id => id === targetId);
        }
    }
}
</script>

<style scoped>
#top-categories {
  width: 90%;
  margin: auto;
}

#categories {
    margin-bottom: 20px;
}

input[type="checkbox"], label {
    text-align: center;
}

#buttons > button {
  width: 50%;
  display: block;
  margin: auto;
  margin-bottom: 10px;
  padding: 0.5em;
}
</style>