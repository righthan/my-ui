import { createRouter, type RouteRecordRaw, createWebHistory } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    name: 'index',
    component: () => import('../views/index.vue'),
    // redirect: '/messagebox',
    children: [
      // {
      //   path: '/button',
      //   name: 'ElButton',
      //   component: () => import('../views/button/buttton.vue')
      // },
      // {
      //   path: '/tooltip',
      //   name: 'ElTooltip',
      //   component: () => import('../views/tooltip/tooltip.vue')
      // },
      // {
      //   path: '/rate',
      //   name: 'ElRate',
      //   component: () => import('../views/rate/rate.vue')
      // },
      // {
      //   path: '/message',
      //   name: 'ElMessage',
      //   component: () => import('../views/message/message.vue')
      // },
      // {
      //   path: '/input',
      //   name: 'ElInput',
      //   component: () => import('../views/input/input.vue')
      // },
      // {
      //   path: '/switch',
      //   name: 'ElSwitch',
      //   component: () => import('../views/switch/switch.vue')
      // },
      // {
      //   path: '/dialog',
      //   name: 'ElDialog',
      //   component: () => import('../views/dialog/dialog.vue')
      // },
      // {
      //   path: '/select',
      //   name: 'ElSelect',
      //   component: () => import('../views/select/select.vue')
      // },
      // {
      //   path: '/form',
      //   name: 'ElForm',
      //   component: () => import('../views/form/form.vue')
      // },
      // {
      //   path: '/messagebox',
      //   name: 'ElMessageBox',
      //   component: () => import('../views/messagebox/messagebox.vue')
      // }
    ]
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
