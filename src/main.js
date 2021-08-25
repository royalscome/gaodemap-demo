/*
 * @Description: 
 * @Autor: weiyang
 * @Date: 2021-08-25 15:50:10
 * @LastEditors: weiyang
 * @LastEditTime: 2021-08-25 16:14:55
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
const app = createApp(App);
app
.use(router)
.mount('#app')
