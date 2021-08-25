/*
 * @Description: 
 * @Autor: weiyang
 * @Date: 2021-08-25 15:56:16
 * @LastEditors: weiyang
 * @LastEditTime: 2021-08-25 15:57:20
 */
import { createRouter, createWebHistory } from "vue-router";
import webRouters from "./web";
const routes = [ ...webRouters];
const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;