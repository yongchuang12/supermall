<template>
  <nav-bar>
    <div slot="left" class="back" @click="backClick">
      <img src="~assets/img/common/back.svg" alt="" />
    </div>
    <div slot="center" class="title">
      <div
        v-for="(item, i) in titles"
        :key="i"
        class="title-item"
        :class="{ active: i == currentIndex }"
        @click="titleClick(i)"
      >
        {{ item }}
      </div>
    </div>
  </nav-bar>
</template>

<script>
import NavBar from "components/common/navbar/NavBar.vue";
export default {
  name: "DetailNavBar",
  components: {
    NavBar,
  },
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(i) {
      this.currentIndex = i;
    },
    backClick() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="less" scoped>
.back {
  img {
    margin-top: 12px;
    margin-left: 20px;
  }
}
.title {
  display: flex;
  font-size: 13px;
}
.title-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}
</style>
