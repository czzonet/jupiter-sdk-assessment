<template>
  <div class="view">
    <total-table></total-table>
    <br />
    <pagination-bar></pagination-bar>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import TotalTable from "../TotalTable/index.vue";
import PaginationBar from "../PaginationBar/index.vue";
import { mapState, mapActions } from "vuex";
import { NAME } from "../../define";
export default Vue.extend({
  name: "TotalBar",
  components: { TotalTable, PaginationBar },
  methods: {
    ...mapActions(NAME, ["Total"]),
  },
  mounted() {
    this.Total();
  },
});
</script>

<style lang="scss" scoped>
.view {
  padding: 3rem;
  width: 40rem;
}
</style>
