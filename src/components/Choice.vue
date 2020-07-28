<template>
    <div id="choice">
        <span class="title">FEED THE MONKEY</span>
        <ul class="result">
            <li v-for="(item, index) in selectedItems" :key="index">
                {{item.name}}
            </li>
        </ul>
        <div class="buttons">
            <button type="button" class="left" @click="chooseOne()">뽑기</button>
            <button type="button" class="right" @click="init()">처음부터</button>
        </div>
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
#choice {
    max-width: 600px;
    margin: 80px auto;
    margin-bottom: 120px;
}

.title {
    text-align: center;
    display: block;
    font-size: 50px;
    font-weight: bold;
}

.result {
    display: block;
    margin: 20px auto;
}

#choice > .buttons {
    position: fixed;
    text-align: center;
    bottom: 0;
    left: 0;
    height: 90px;
    width: 100%;
    padding: 1em 0;
}

.buttons > button {
    padding: .2em 0;
    width: 30%;
    margin: 0 1.0em;
}

button.left {
    margin-left: 0;
}

button.right {
    margin-right: 0;
}
</style>