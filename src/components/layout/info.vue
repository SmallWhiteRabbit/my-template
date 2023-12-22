<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      <el-avatar :size="40" :src="''" />
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="item in list"
          :command="item.path"
          :key="item.path"
        >
          <div>
            <p>{{ item.label }}</p>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script setup lang="ts">
const list = ref([
  { label: "个人信息", path: "/info" },
  { label: "修改密码", path: "/psw" },
]);
function handleCommand(command: any) {
  console.log(command);
}
</script>
<style scoped></style>
