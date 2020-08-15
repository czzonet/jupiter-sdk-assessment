<template>
  <div class="add-view">
    <editor-bar></editor-bar>
    <p class="submit">
      <el-button type="success" :disabled="isEmpty" @click="submit"
        >Update file</el-button
      >
      <el-button @click="cancle">Cancle</el-button>
    </p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import EditorBar from "../editor/editor.vue";
import { mapState, mapActions } from "vuex";
import { NAME } from "../../define";
export default Vue.extend({
  name: "ChangeBar",
  components: { EditorBar },
  computed: {
    ...mapState(NAME, ["pipeEditor"]),
    isEmpty() {
      return this.pipeEditor.isEmpty;
    },
  },
  methods: {
    ...mapActions(NAME, ["Change", "Show"]),
    submit() {
      (this as any)
        .Change({ id: parseInt(this.$route.params.id) })
        .then((d: any) => {
          d ? this.$message.success("Success") : this.$message.error("Error");
          this.$router.push("/main/hello/total");
        });
    },
    cancle() {
      this.$router.back();
    },
  },
  mounted() {
    (this as any).Show({ id: parseInt(this.$route.params.id) });
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
