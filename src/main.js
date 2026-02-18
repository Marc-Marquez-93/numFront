import { createApp } from 'vue'
import { createPinia } from 'pinia'
// import router from "./routes/routes.js"
import { Quasar, Dialog, Notify, Screen, LocalStorage, SessionStorage } from 'quasar'

import '@quasar/extras/material-icons/material-icons.css'

import 'quasar/src/css/index.sass'

import App from './App.vue'

const pinia = createPinia()

const myApp = createApp(App)

myApp.use(Quasar, {
  plugins: {
    Dialog,
    Notify,
    Screen,
    LocalStorage,
    SessionStorage
  }, 
})

// myApp.use(router)

myApp.use(pinia)

myApp.mount('#app')
