<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">购物车</div>
    </nav-bar>
    <home-swiper :banners="banners"> </home-swiper>
    <recommand-view :recommends="recommends"></recommand-view>
    <feature-view />
    <tab-control :titles="titles" class="tab-control" @tabClick="tabClick" />
    <goods-list :goods="showGoods" />
  </div>
</template>

<script>
import HomeSwiper from "./childrenComps/HomeSwiper";
import RecommandView from "./childrenComps/RecommandView.vue";
import FeatureView from "./childrenComps/FeatureView.vue";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "../../components/content/goods/GoodsList.vue";

import { getHomeMultidada, getHomeGoods } from "network/home.js";

export default {
  name: "Home",
  data() {
    return {
      banners: [],
      recommends: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
    };
  },
  components: {
    HomeSwiper,
    RecommandView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
  },
  created() {
    this.getHomeMultidada();
    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  methods: {
    getHomeMultidada() {
      getHomeMultidada().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
};
</script>

<style lang="less" scoped>
#home {
  margin-top: 44px;
}
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}
.tab-control {
  position: sticky;
  top: 44px;
  z-index: 5;
  background-color: #fff;
}
</style>
