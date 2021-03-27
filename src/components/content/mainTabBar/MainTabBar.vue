<template>
  <div>
    <tar-bar>
      <tar-bar-item path="/home" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/home.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/home_active.svg"
          alt=""
        />
        <div slot="item-text">首页</div>
      </tar-bar-item>
      <tar-bar-item path="/category" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/category.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/category_active.svg"
          alt=""
        />
        <div slot="item-text">分类</div>
      </tar-bar-item>
      <tar-bar-item path="/cart" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/shopcart.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/shopcart_active.svg"
          alt=""
        />
        <div slot="item-text">购物车</div>
      </tar-bar-item>
      <tar-bar-item path="/profile" activeColor="pink">
        <img slot="item-icon" src="~assets/img/tabbar/profile.svg" alt="" />
        <img
          slot="item-icon-active"
          src="~assets/img/tabbar/profile_active.svg"
          alt=""
        />
        <div slot="item-text">我的</div>
      </tar-bar-item>
    </tar-bar>
  </div>
</template>

<script>
import TarBar from "components/common/tarbar/TarBar";
import TarBarItem from "components/common/tarbar/TarBarItem.vue";
export default {
  name: "MainTabBar",
  components: {
    TarBar,
    TarBarItem,
  },
};
</script>

<style scoped></style>
