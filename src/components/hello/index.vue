<template>
  <div v-loading="loading">
    <router-view></router-view>
  </div>
</template>

<script>
/** define */
import { NAME } from "./define.ts";
import { mapState } from "vuex";

export default {
  name: `${NAME}`,
  computed: {
    ...mapState(NAME, ["loading"]),
  },
};
</script>
