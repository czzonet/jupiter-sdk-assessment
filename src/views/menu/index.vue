<template>
  <div>
    <el-menu
      router
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <el-menu-item index="/index">Index</el-menu-item>
      <el-submenu index="/main">
        <template slot="title">File</template>
        <el-menu-item index="/main/hello/add">New file</el-menu-item>
        <el-menu-item index="/main/hello/total">View file</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
export default {
  name: "MenuBar",
};
</script>

<style></style>
