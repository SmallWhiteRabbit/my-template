<template>
  <menuModule :list="list" @toNext="toNextFn"></menuModule>
</template>
<script setup lang="ts">
import { getMenuList } from "@/api/menu";
import menuModule from "./menu.vue";
import { toNext } from "@/router";
let list = ref();
const getList = () => {
  getMenuList().then((res) => {
    list.value = res.rows;
  });
};

const toNextFn = (path: string) => {
  toNext({ path: path });
};

getList();
</script>
<style scoped></style>
