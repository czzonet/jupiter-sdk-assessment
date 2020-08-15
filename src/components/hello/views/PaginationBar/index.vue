<template>
  <el-pagination
    @size-change="handleSizeChange"
    @current-change="handleCurrentChange"
    :current-page="page"
    :page-sizes="[10, 20, 30, 40]"
    :page-size="limit"
    layout="total, sizes, prev, pager, next, jumper"
    :total="count"
  >
  </el-pagination>
</template>

<script lang="ts">
import Vue from "vue";
import { mapState, mapMutations, mapActions } from "vuex";
import { NAME } from "../../define";
export default Vue.extend({
  name: "PaginationBar",
  data() {
    return {
      page: 1,
      limit: 10,
      count: 0,
    };
  },
  computed: {
    ...mapState(NAME, ["totalCount"]),
  },
  watch: {
    totalCount: {
      handler() {
        this.count = this.totalCount;
      },
    },
  },
  methods: {
    ...mapMutations(NAME, ["PIPEPAGINATION"]),
    ...mapActions(NAME, ["Total"]),
    handleSizeChange(val: any) {
      this.limit = val;
      this.Total().then();
    },
    handleCurrentChange(val: any) {
      this.page = val;
      this.Total().then();
    },
  },
  mounted() {
    this.PIPEPAGINATION(this);
    this.count = this.totalCount;
  },
});
</script>
