<template>
  <div id="page">
    <div id="navAside">
      <el-menu
    default-active="1"
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    @open="handleOpen"
    @close="handleClose"
    active-text-color="#9f2f2e"
    popper-effect="light"
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
      <template #title>违规行为一览</template>
      </el-menu-item>
    </router-link>
  <router-link to="/main/gasStation">
    <el-menu-item index="2">
      <!-- <el-icon><House /></el-icon> -->
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024" data-v-ea893728=""><path fill="currentColor" d="M192 413.952V896h640V413.952L512 147.328zM139.52 374.4l352-293.312a32 32 0 0 1 40.96 0l352 293.312A32 32 0 0 1 896 398.976V928a32 32 0 0 1-32 32H160a32 32 0 0 1-32-32V398.976a32 32 0 0 1 11.52-24.576"></path></svg>
      <template #title>加油站管理</template>
    </el-menu-item>
  </router-link>
  <router-link to="/main/checkSL">
    <el-menu-item index="3">
      <el-icon><icon-menu /></el-icon>
      <template #title>安全日志查看</template>
    </el-menu-item>
  </router-link>
<router-link to="/main/writeGSI">
    <el-menu-item index="4">
      <el-icon><icon-menu /></el-icon>
      <template #title>站点信息修改</template>
    </el-menu-item>
    </router-link>
    <router-link to="/main/writeSL">
    <el-menu-item index="5">
      <el-icon><icon-menu /></el-icon>
      <template #title>安全日志填报</template>
    </el-menu-item>
  </router-link>
  <router-link to="/main/urgentAsk">
    <el-menu-item index="6">
      <el-icon><icon-menu /></el-icon>
      <template #title>智能紧急问答</template>
    </el-menu-item>
  </router-link>
  <div>
     <el-menu-item index="7" id="exitLogin" @click="open">
      <!-- <el-icon><icon-menu /></el-icon> -->
      <template #title><el-button  type="text" @click="open">退出登录</el-button></template>
    </el-menu-item>
  </div>
   
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
  </div>
  <div id="container">
    <el-radio-group v-model="isCollapse" style="margin-bottom: 20px">
      <el-radio-button :label="false">expand</el-radio-button>
      <el-radio-button :label="true">collapse</el-radio-button>
    </el-radio-group>
    <router-view></router-view>
  </div>
</div>
  
  
</template>

<script setup>
import {
Menu as IconMenu
} from '@element-plus/icons-vue';
import { ref } from 'vue';

const isCollapse = ref(false)
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}

</script>

<script>
  export default {
    methods: {
      open() {
        this.$confirm('是否确定退出登录?', '提示', {
          confirmButtonText: '退出',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          console.log("退出");
          this.$router.push('/')
          this.$message({
            type: 'success',
            message: '退出成功!'
          });
         
        }).catch(() => {
          // this.$message({
          //   type: 'info',
          //   message: '已取消退出'
          // });          
        });
      }
    }
  }
</script>
<style>
.el-radio-button{
  --el-radio-button-checked-bg-color:#9f2f2e!important;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-menu{
  height: 100vh;
  padding-top: 10vh;
  text-decoration: none;
}
.el-menu-item{
  text-decoration: none !important;
}
#page{
  display: flex;
}
#navAside{
  height: 100vh;
  position: relative;
}
#container{
  width: 100%;
  height: 100%;
}
#exitLogin{
  color: #606266;
  width: 100%;
  position: absolute;
  bottom: 10px;
}
svg{
  width: var(--el-menu-icon-width);
}
</style>
