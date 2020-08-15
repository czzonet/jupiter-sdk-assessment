<template>
  <div class="index-page" :style="indexStyle">
    <image-single :image-path="images[0]" id="left"></image-single>
    <image-single :image-path="images[1]" id="right"></image-single>
    <nav>
      <a href="#" id="logo">Jupiter</a>

      <ul>
        <li><a href="#">about</a></li>
        <li><a href="#">services</a></li>
        <li><a href="#">contact</a></li>
      </ul>
    </nav>

    <div class="container">
      <h1>Jupiter-SDK Assessment</h1>
      <p>
        Stack: vue+ElementUI,express,sqlite
        <br />
        Email: czzonet@gmail.com
        <br />
        Author: Jiang Shuai
      </p>
      <p>
        <el-button type="primary" @click="$router.push('/main')"
          >Start</el-button
        >
      </p>
    </div>
  </div>
</template>

<script lang="ts">
import ImageSingle from "@/components/ImageSingle.vue";
import Vue from "vue";
export default Vue.extend({
  name: "IndexPage",
  components: { ImageSingle },
  data() {
    return {
      images: ["left.svg", "right.svg"],
      bg: require("../../assets/static/bg.svg"),
    };
  },
  computed: {
    indexStyle() {
      return {
        background: `url("${(this as any).bg}") no-repeat`,
        "background-size": "cover",
      };
    },
  },
});
</script>

<style lang="scss">
.index-page {
  height: 100%;
  text-align: left;
}

#left {
  position: absolute;
  top: 50%;
  height: 40%;
}

#right {
  position: absolute;
  top: 10%;
  height: 40%;
  right: 0;
  z-index: 1;
}
a {
  color: #fff;
  text-decoration: none;
}
nav {
  padding: 50px;
  ul {
    list-style-type: none;
    float: right;
    li {
      float: left;

      a {
        color: black;
        padding: 0 30px;
      }
    }
  }
}

#logo {
  font-size: 2rem;
}

.container {
  text-align: center;
  width: 60%;
  margin: 110px auto;
  p {
    font-size: 1.2rem;
    line-height: 1.2rem;
  }
}

h1 {
  font-size: 3.2rem;
}
</style>
