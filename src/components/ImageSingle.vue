<template>
  <div>
    <img :src="targetSrc" alt :style="imageStyle" />
  </div>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  name: "ImageSingle",
  props: ["imagePath", "imageHeight", "imageWidth"],
  computed: {
    targetSrc() {
      // 必须直接拼接
      return require("../assets/static/" + this.imagePath);
    },
    imageStyle() {
      return {
        width: this.imageWidth || "100%",
        height: this.imageHeight || "100%",
      };
    },
  },
});
</script>

<style lang="scss" scoped>
.img {
  width: 100%;
  height: 100%;
}
</style>
