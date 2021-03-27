<template>
  <div id="tar-bar-item" @click="itemClick">
    <div v-if="!isActive"><slot name="item-icon" /></div>
    <div v-else><slot name="item-icon-active" /></div>
    <div :style="activeStyle"><slot name="item-text" /></div>
  </div>
</template>

<script>
export default {
  name: "TarBarItem",
  props: {
    path: String,
    activeColor: {
      type: String,
      default: "red",
    },
  },
  data() {
    return {};
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style lang="less" scoped>
#tar-bar-item {
  flex: 1;
  text-align: center;
  font-size: 14px;
  height: 49px;
  img {
    width: 24px;
    height: 24px;
    margin-top: 2px;
    margin-bottom: -2px;
    vertical-align: middle;
  }
}
</style>
