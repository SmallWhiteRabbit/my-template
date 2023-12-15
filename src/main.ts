import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import pinia from '@/store'
import i18n from '@/locales'
createApp(App).use(pinia).use(i18n).use(router).mount('#app')
