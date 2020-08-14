<template>
  <div class="add-view">
    <editor-bar></editor-bar>
    <p class="submit">
      <el-button type="success" :disabled="isEmpty" @click="submit"
        >Submit new file</el-button
      >
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EditorBar from "../editor/editor.vue";
import { mapState, mapActions } from "vuex";
import { NAME } from "../../define";
export default Vue.extend({
  name: "AddBar",
  components: { EditorBar },
  computed: {
    ...mapState(NAME, ["pipeEditor"]),
    isEmpty() {
      return this.pipeEditor.isEmpty;
    },
  },
  methods: {
    ...mapActions(NAME, ["Add"]),
    submit() {
      (this as any).Add().then((d: any) => {
        d ? this.$message.success("Success") : this.$message.error("Error");
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.add-view {
  padding: 3rem;
  width: 40rem;
}
.submit {
  text-align: right;
}
</style>
