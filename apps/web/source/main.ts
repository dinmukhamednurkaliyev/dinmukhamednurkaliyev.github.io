import { createApp } from 'vue'
import App from './app/App.vue'
import { router } from './app/app-router.ts'

createApp(App).use(router).mount('#app')
