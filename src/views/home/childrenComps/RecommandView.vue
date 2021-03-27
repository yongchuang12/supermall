<template>
  <div class="recommend">
    <div v-for="item in recommends" :key="item.acm" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt="" />
        <div>{{ item.title }}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommends: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>

<style lang="less" scoped>
.recommend {
  display: flex;
  text-align: center;
  padding: 10px 0 10px;
  border-bottom: 8px solid #eee;
}
.recommend-item {
  flex: 1;
  img {
    margin-bottom: 8px;
    width: 80px;
    height: 80px;
  }
  div {
    font-size: 13px;
  }
}
</style>
