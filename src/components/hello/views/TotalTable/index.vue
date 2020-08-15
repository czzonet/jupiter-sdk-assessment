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
      <template slot-scope="scope">
        <div class="wrapper">
          <el-button type="text" @click="editHandler(scope.row)"
            >Edit</el-button
          >
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
  methods: {
    editHandler(row: any) {
      this.$router.push(`/main/${NAME}/change/${row.id}`);
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
}
</style>
