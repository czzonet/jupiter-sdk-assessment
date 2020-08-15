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
    id() {
      return parseInt(this.$route.params.id);
    },
  },
  watch: {
    id: {
      handler() {
        (this as any).pullHandler();
      },
    },
  },
  methods: {
    ...mapActions(NAME, ["Change", "Show"]),
    submit() {
      (this as any).Change({ id: this.id }).then((d: any) => {
        d ? this.$message.success("Success") : this.$message.error("Error");
        this.$router.push("/main/hello/total");
      });
    },
    cancle() {
      this.$router.back();
    },
    pullHandler() {
      const handler = async () => {
        const resData = await (this as any).Show({
          id: this.id,
        });

        if (resData === false) {
          console.log("");
        } else {
          const { isExist, isLocked } = resData;

          if (isExist) {
            if (isLocked) {
              this.$confirm("File is locked", "Tip", {
                confirmButtonText: "Done",
                type: "warning",
              })
                .then(() => {
                  this.$router.push("/main/hello/total");
                })

                .catch(() => {
                  this.$router.push("/main/hello/total");
                });
            } else {
              console.log("");
            }
          } else {
            this.$confirm("File not exist", "Tip", {
              confirmButtonText: "Done",
              type: "warning",
            })
              .then(() => {
                this.$router.push("/main/hello/total");
              })
              .catch(() => {
                this.$router.push("/main/hello/total");
              });
          }
        }
      };

      handler().then();
    },
  },
  mounted() {
    (this as any).pullHandler();
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
