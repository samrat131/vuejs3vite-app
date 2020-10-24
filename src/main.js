import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './routes'
import './index.css'

const cart = reactive({
  qty : 0
})

createApp(App)
  .use(router)
  .provide('cart', cart)
  .mount('#app')

