import { createApp } from 'vue'
import App from './App.vue'
import router from '@/router/router'
import UI from '@/components/UI'
import store from '@/store'

const app = createApp(App)
app.use(store).use(router).mount('#app')
UI.forEach(element => {
	app.component(element.name, element)
})
