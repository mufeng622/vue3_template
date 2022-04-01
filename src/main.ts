import { createApp } from "vue";
import App from "./App.vue";
import VueCookie from 'vue-cookie'
import router from '@/router/index'
import { createPinia } from 'pinia'
import http from '@/serive/http'

let app = createApp(App)
app.use(router)
app.use(createPinia())
app.config.globalProperties.$cookie = VueCookie
app.config.globalProperties.$http = http

app.mount("#app");
