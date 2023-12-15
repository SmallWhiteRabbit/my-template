<template>
  <el-dropdown @command="handleCommand">
    <span class="el-dropdown-link">
      {{ currentLan }} <el-icon class="el-icon--right"><arrow-down /></el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item v-for="lang in langs" :command="lang" :key="lang">
          <div>
            <p>{{ lang.title }} <br /></p>
            <p v-if="lang.desc">{{ lang.desc }}</p>
          </div>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { langs } from '@/locales'
import { useLocaleStore, ILang } from '@/store/locale'
import { ArrowDown } from '@element-plus/icons-vue'
const useLocale = useLocaleStore()
const curLocale = useLocale.locale
const currentLan = ref(
  langs.find((cur: { key: string }) => cur.key === curLocale)?.title || ''
)

function handleCommand(command: { title: string; key: ILang }) {
  currentLan.value = command.title
  useLocale.setLocale(command.key)
}
</script>
<style lang="less" scoped>
.el-dropdown {
  vertical-align: middle;
}
.el-dropdown-link {
  font-size: 20px;
  &:focus-visible {
    outline: none;
  }
}
</style>
