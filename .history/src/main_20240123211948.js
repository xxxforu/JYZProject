import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/element/index.scss'

createApp(App).use(store).use(ElementPlus).use(router).mount('#app')
