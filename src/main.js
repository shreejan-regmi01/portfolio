import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseContainer from './components/base/BaseContainer.vue'
import BaseHighlight from './components/base/BaseHighlight.vue'
import router from './router'

const app = createApp(App)
app.component('BaseContainer', BaseContainer)
app.component('BaseHighlight', BaseHighlight)
app.use(router)

app.mount('#app')
