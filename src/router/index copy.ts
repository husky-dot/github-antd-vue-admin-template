import { RouteRecordRaw, RouterView, createWebHistory } from 'vue-router'
import { RouteRecordMenu } from '@ztjy/antd-vue/es/components/AdminLayout'
import { AdminLayout, Login, routeGuard } from '@ztjy/antd-vue-admin'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css' // nprogress样式文件
import Menu2 from '../pages/Menu2'
import createRouter from './createRoute'

export const routes: RouteRecordMenu[] = [
  {
    path: '/menu',
    name: 'Menu',
    component: RouterView,
    redirect: '/menu/list',
    meta: {
      icon: 'fas fa-ad',
      title: '菜单一',
    },
    children: [
      {
        path: '/menu/list',
        component: () => import('@/pages/Menu1'),
        meta: {
          title: '列表',
        },
      },
    ],
  },
  {
    path: '/menu2',
    name: 'Menu2',
    component: RouterView,
    redirect: '/menu2/list',
    meta: {
      icon: 'fas fa-ad',
      title: '菜单二',
    },
    children: [
      {
        path: '/menu2/list',
        component: () => import('@/pages/Menu2'),
        // component: Menu2,
        meta: {
          title: '列表',
        },
      },
    ],
  },
  {
    path: '/menu3',
    name: 'Menu3',
    component: RouterView,
    redirect: '/menu3/list',
    meta: {
      icon: 'fas fa-ad',
      title: '菜单三',
    },
    children: [
      {
        path: '/menu3/list',
        component: () => import('@/pages/Menu3'),
        // component: Menu2,
        meta: {
          title: '列表',
        },
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory('/'),
  routes: [
    {
      path: '/login',
      component: Login,
      props: {
        title: '商化前端后台登录',
      },
    },
    {
      path: '/',
      redirect: '/menu',
      component: AdminLayout,
      props: {
        title: '商化前端 后台 模板',
        routes,
      },
      meta: {
        title: '首页',
      },
      children: routes as RouteRecordRaw[],
    },
  ],
})

// router.beforeEach((to, from, next) => {
//   // 开启进度条
//   NProgress.start()
//   // 这个一定要加，没有next()页面不会跳转的。这部分还不清楚的去翻一下官网就明白了
//   next()
// })

// //当路由跳转结束后
// router.afterEach(() => {
//   // 关闭进度条
//   NProgress.done()
// })

export default router
