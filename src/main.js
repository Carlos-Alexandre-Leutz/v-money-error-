import { createApp } from 'vue'
import App from './App.vue'
import VueTheMask from 'vue-the-mask'
// import money from 'v-money'



createApp(App)
    .use(VueTheMask)
    // .use(money, {precision: 4})
    .mount('#app')
