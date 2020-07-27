<template>
    <div>
        <span>Choice Component</span>
        <ul>
            <li v-for="(item, index) in selectedItems" :key="index">
                {{item.name}}
            </li>
        </ul>
        <button type="button" @click="chooseOne()" value="GET">GET</button>
        <button type="button" @click="init()" value="INIT">INIT</button>
    </div>
</template>

<script>
import Chooser from '../lib/Chooser.mjs';
import Data from '../lib/SampleData.mjs';

var chooser = new Chooser();

export default {
    data() {
        return {
            selectedItems: [],
            candidates: chooser.initChoice(Data),
        };
    },
    methods: {
        init() {
            this.selectedItems = [];
            this.candidates = chooser.initChoice(Data);
        },

        chooseOne() {
            let selected = chooser.chooseOneRandomly(this.candidates);

            this.selectedItems.push(selected);
            
            if(this.isFinished(selected)) {
                this.goResultPage();
            } else {
                this.candidates = selected.shops;
            }
        },

        isFinished(selected) {
            return !selected.hasOwnProperty('shops');
        },

        goResultPage() {
            let selectedNames = this.selectedItems.map(item => item.name);
            alert(`Result : ${selectedNames.join(' - ')}`);
            // this.$router.push('/result');
        }
    },
}
</script>

<style scoped>

</style>