import '@/assets/scss/styles.scss'
import * as bootstrap from 'bootstrap'

import { createApp } from 'vue'
import App from './App.vue'

import VueGtag from "vue-gtag";

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faGithub, faTelegram, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

// @ts-expect-error
library.add(faGithub)
library.add(faTelegram)
library.add(faInstagram)
library.add(faLinkedin)

const app = createApp(App).component('font-awesome-icon', FontAwesomeIcon)

// Google Analitics
app.use(VueGtag, {
        config: { id: "G-BW1NYGS63B" }
    })
app.mount('#app')
