/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import ControlPanel from "@/components/ControlPanel.vue"
import WifisetupPanel from '@/components/WifisetupPanel.vue'

const router = createRouter({
  history: createWebHashHistory(),  //路由器工作模式
  routes:[
    {
      path: "/",
      component: ControlPanel
    },
    {
      path: "/control",
      component: ControlPanel
    },
    {
      path: "/wifisetup",
      component: WifisetupPanel
    },
  ]
  
})

export default router
