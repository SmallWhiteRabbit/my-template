<template>
  <header>
    <div></div>
    <div class="left">
      <changeLang />
      <info />
    </div>
  </header>
</template>
<script setup lang="ts">
import changeLang from "./changeLang.vue";
import info from "./info.vue";
</script>
<style scoped lang="scss">
header {
  height: 64px;
  line-height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  align-content: center;
  box-shadow: 0 1px 4px #00152914;
}
.left {
  display: flex;
  align-items: center;
  justify-content: center;
  > div {
    margin-left: 8px;
  }
}
</style>
