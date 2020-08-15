<template>
  <el-form class="editor" label-position="top">
    <el-form-item label="Title">
      <el-input placeholder="Title" v-model="title"></el-input>
    </el-form-item>
    <el-form-item label="Content">
      <el-input
        type="textarea"
        placeholder="Content"
        v-model="content"
        :autosize="{ minRows: 8, maxRows: 8 }"
      ></el-input>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import Vue from "vue";
import { mapMutations, mapState } from "vuex";
import { NAME } from "../../define";
export default Vue.extend({
  name: "EditorBar",
  data() {
    return {
      title: "",
      content: "",
    };
  },
  computed: {
    ...mapState(NAME, ["editorTitle", "editorContent"]),
    isEmpty() {
      return (this as any).title === "" && (this as any).content === "";
    },
  },
  watch: {
    editorTitle: {
      handler() {
        (this as any).title = this.editorTitle;
      },
    },
    editorContent: {
      handler() {
        (this as any).content = this.editorContent;
      },
    },
  },
  methods: {
    ...mapMutations(NAME, ["PIPEEDITOR"]),
  },
  mounted() {
    this.PIPEEDITOR(this);
    (this as any).content = this.editorContent;
    (this as any).title = this.editorTitle;
  },
});
</script>

<style lang="scss" scoped>
.editor {
  text-align: left;
}
</style>
