<template>
  <el-table
    :data="totalTable"
    border=""
    size="mini"
    :header-cell-style="{
      'background-color': '#f7fafc',
    }"
  >
    <el-table-column type="index"></el-table-column>
    <el-table-column prop="title" label="Title"></el-table-column>
    <el-table-column
      width="100"
      label="
    Operations"
    >
      <template>
        <div class="wrapper">
          <el-button type="text">Edit</el-button>
        </div>
      </template>
    </el-table-column>
  </el-table>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState } from "vuex";
import { NAME } from "../../define";
export default Vue.extend({
  name: "TotalTable",
  data() {
    return {};
  },
  computed: {
    ...mapState(NAME, ["totalTable"]),
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
}
</style>
