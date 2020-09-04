<template>
  <div id="child-categories">
    <div id="result-view">
      <p class="text">결과</p>
      <img :src="result.img">
      <p class="text">{{result.name}}</p>
    </div>
    <button type=button class="block" @click="findOnMap">지도에서 찾기</button>
    <button type=button class="block" @click="retry">다시↩︎</button>
    <button type=button class="block" @click="goHome">🏠</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      result: {
        name: '',
        img: '/dist/giphy.gif?f49537d85dcdf225e9047a833d2b3e7f'
      },
      chosen: {
        id: '',
        name: '',
        img: ''
      },
      remainedCategories: this.$store.state.childCategories,
      excludedCategories: []
    };
  },
  mounted() {
    // 초기 랜덤 선택값 넣기
    this.chooseRandomly();
  },
  methods: {
    retry() {
      this.chooseRandomly();
    },
    chooseRandomly() {
      let length = this.remainedCategories.length;
      if(!length) {
        this.result = {
          name: '더 고를 수 있는 메뉴가 없어요😢',
          img: '/dist/giphy.gif?f49537d85dcdf225e9047a833d2b3e7f'
        }

        this.chosen = null;
        return;
      }

      let randomIndex = Math.floor(Math.random() * length);
      this.chosen = this.remainedCategories[randomIndex];
      this.exclude(this.chosen);
      this.result = {
        name: this.chosen.name,
        img: this.chosen.img
      }
    },
    exclude(targetCategory) {
      if(!targetCategory) {
        return;
      }

      this.remainedCategories = this.remainedCategories.filter(category => category.id !== targetCategory.id);
      this.excludedCategories.push(targetCategory);
    },
    goHome() {
      this.$router.push('/')
    },
    findOnMap() {
      alert('아직 안돼요 😅');
    }
  }
}
</script>

<style scoped>
#child-categories {
  width: 90%;
  margin: auto;
}

#result-view > .text {
  text-align: center;
}

#result-view > img {
  display: block;
  margin: auto;
  max-width: 50%;
}

button.block {
  width: 50%;
  display: block;
  margin: auto;
  margin-bottom: 10px;
  padding: 1em;
}
</style>