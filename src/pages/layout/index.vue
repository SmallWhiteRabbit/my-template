<template>
  <div class="layout">
    <leftSide class="left" />
    <div class="right">
      <navCom />
      <div class="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import navCom from "@/components/layout/nav.vue";
import leftSide from "@/components/layout/leftSide.vue";
</script>
<style scoped lang="scss">
.layout {
  display: flex;
  height: 100%;
  .left {
    width: 200px;
  }
  .right {
    flex: 1;
  }
}
.main {
  height: calc(100% - 64px);
  padding: 20px;
}
</style>
