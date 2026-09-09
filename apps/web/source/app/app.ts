import { createApp } from 'vue'
import App from './App.vue'
import { router } from './app-router.ts'

createApp(App).use(router).mount('#app')
