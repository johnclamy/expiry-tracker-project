import './assets/css/main.css'
import { createApp } from 'vue'
import App from './App.vue'
import router from './routes/router.ts'
import { OhVueIcon, addIcons } from 'oh-vue-icons'
import { 
      IoDocumentTextOutline, 
      IoCalendarOutline, 
      IoTrashOutline, 
      IoAddCircleOutline, 
      IoHomeOutline,
      IoTimeOutline,
      IoCardOutline,
      IoPersonOutline
    } from 'oh-vue-icons/icons'


// --- register icons ---
addIcons(
    IoDocumentTextOutline,
    IoCalendarOutline,
    IoTrashOutline,
    IoAddCircleOutline,
    IoHomeOutline,
    IoTimeOutline,
    IoCardOutline,
    IoPersonOutline)


const app = createApp(App)

app.use(router)
app.component('oh-vue-icon', OhVueIcon)
app.mount('#app')
