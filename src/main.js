import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { MotionPlugin } from '@vueuse/motion'
import { GesturePlugin } from '@vueuse/gesture'

const app = createApp(App)

app.use(MotionPlugin)
app.use(GesturePlugin)
app.mount('#app');
