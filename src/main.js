import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import BaseContainer from './components/base/BaseContainer.vue'
import BaseHighlight from './components/base/BaseHighlight.vue'
import BaseButton from './components/base/BaseButton.vue'
import BaseCard from './components/base/BaseCard.vue'
import CopyrightText from './components/layout/CopyrightText.vue'
import MainTitle from './components/MainTitle.vue'
import BaseTag from './components/base/BaseTag.vue'
import BaseInput from './components/base/BaseInput.vue'
import BaseTextArea from './components/base/BaseTextArea.vue'
import router from './router'

const app = createApp(App)
app.component('BaseContainer', BaseContainer)
app.component('BaseHighlight', BaseHighlight)
app.component('BaseButton', BaseButton)
app.component('BaseCard', BaseCard)
app.component('CopyrightText', CopyrightText)
app.component('MainTitle', MainTitle)
app.component('BaseTag', BaseTag)
app.component('BaseInput', BaseInput)
app.component('BaseTextArea', BaseTextArea)
app.use(router)

app.mount('#app')
