import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import 'lib-flexible';

import '@/assets/css/index.scss'

import { vantPlugins } from './plugins/vant'


const app = createApp(App)
app.use(vantPlugins)
app.use(store)
app.use(router)
app.mount('#app')