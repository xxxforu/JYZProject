<template>
  <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
    <el-radio-button :label="false">expand</el-radio-button>
    <el-radio-button :label="true">collapse</el-radio-button>
  </el-radio-group>
  <el-menu
    default-active="4"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
  >
  <!-- 可纵向收缩的导航 暂时没有这个设计 -->
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon><location /></el-icon>
        <span>Navigator One</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="1-1">item one</el-menu-item>
        <el-menu-item index="1-2">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="1-3">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="1-4">
        <template #title><span>item four</span></template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu> -->
    <router-link to="/main/checkViolations">
      <el-menu-item index="1">
      <el-icon><icon-menu /></el-icon>
      <template #title>checkViolations</template>
      </el-menu-item>
    </router-link>
  <router-link to="/main/gasStation">
    <el-menu-item index="2">
      <el-icon><icon-menu /></el-icon>
      <template #title>gasStation</template>
    </el-menu-item>
  </router-link>
  <router-link to="/main/checkSL">
    <el-menu-item index="3">
      <el-icon><icon-menu /></el-icon>
      <template #title>checkSL</template>
    </el-menu-item>
  </router-link>
<router-link to="/main/writeGSI">
    <el-menu-item index="4">
      <el-icon><icon-menu /></el-icon>
      <template #title>writeGSI</template>
    </el-menu-item>
    </router-link>
    <router-link to="/main/writeSL">
    <el-menu-item index="5">
      <el-icon><icon-menu /></el-icon>
      <template #title>writeSL</template>
    </el-menu-item>
  </router-link>
  <router-link to="/">
    <el-menu-item index="6">
      <el-icon><icon-menu /></el-icon>
      <template #title>退出登录</template>
    </el-menu-item>
  </router-link>
    <!-- 如果要禁用 就在el-menu-item 标签里加一个属性disabled 可以考虑在权限分配时加入 -->
    <!-- <el-menu-item index="3" disabled>
      <el-icon><document /></el-icon>
      <template #title>Navigator Three</template>
    </el-menu-item> -->
    <!-- <el-menu-item index="4">
      <el-icon><setting /></el-icon>
      <template #title>Navigator Four</template>
    </el-menu-item> -->
  </el-menu>
  <router-view></router-view>
</template>

<script setup>
import {
Menu as IconMenu
} from '@element-plus/icons-vue';
import { ref } from 'vue';

const isCollapse = ref(true)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>
<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
