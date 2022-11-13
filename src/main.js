import { createApp } from 'vue'
import App from './App.vue'
import i18n from './language/index'
import {router} from './route/index'
import "vant/lib/index.css"

const app = createApp(App)

app.use(router)
app.use(i18n)

app.mount('#app')
