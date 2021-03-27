<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners"> </home-swiper>
    <recommand-view :recommends="recommends"></recommand-view>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommandView from "./childrenComps/RecommandView.vue";

import { getHomeMultidada } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
    };
  },
  components: {
    NavBar,
    HomeSwiper,
    RecommandView,
  },
  created() {
    getHomeMultidada().then((res) => {
      this.banners = res.data.banner.list;
      this.recommends = res.data.recommend.list;
    });
  },
};
</script>

<style lang="less" scoped>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;
}
</style>
