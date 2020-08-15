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
      width="200"
      label="
    Operations"
    >
      <template slot-scope="scope">
        <div class="wrapper">
          <el-button type="text" @click="downloadHandler(scope.row)"
            >Download</el-button
          >
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
import { mapState, mapActions } from "vuex";
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
    ...mapActions(NAME, ["Download"]),
    editHandler(row: any) {
      this.$router.push(`/main/${NAME}/change/${row.id}`);
    },
    downloadHandler(row: any) {
      this.Download(row).then((data) => {
        if (data) {
          const url = window.URL.createObjectURL(new Blob([data]));
          /** Use <a> to download */
          const link = document.createElement("a");
          link.style.display = "none";
          link.href = url;
          link.setAttribute("download", row.title);

          document.body.appendChild(link);
          link.click();

          /** Clean */
          window.URL.revokeObjectURL(url);
          document.body.removeChild(link);
        } else {
          this.$message.error("Download Error");
        }
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.wrapper {
  text-align: center;
}
</style>
