<template>
  <div id="datail">
    <detail-nav-bar></detail-nav-bar>
  </div>
</template>

<script>
import DetailNavBar from "./childComps/DetailNavBar.vue";
export default {
  name: "Detail",
  data() {
    return {
      iid: null,
    };
  },
  created() {
    this.iid = this.$route.params.id;
  },
  components: { DetailNavBar },
};
</script>

<style lang="less" scoped></style>
