/*
 * @Author: your name
 * @Date: 2021-03-31 16:54:54
 * @LastEditTime: 2021-04-02 14:56:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \my_project\src\router\index.js
 */
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'layout',
      component: () => import('@/views/layout/index'),
      redirect: '/design',
      children: [{
        path: 'design',
        name: 'design',
        component: () => import('@/views/design/index'),
        redirect: '/design/design_principle',
        children: [{
            path: 'design_principle',
            name: 'design_principle',
            component: () => import('@/views/design/design_principle/index')
          },
          {
            path: 'design_nav',
            name: 'design_nav',
            component: () => import('@/views/design/design_nav/index')
        }]
      },{
        path: 'elemcompon',
        name: 'elemcompon',
        component: () => import('@/views/elemcompon/index'),
        children: [{
            path: 'updatelog',
            name: 'updatelog',
            component: () => import('@/views/elemcompon/updatelog/index')
            },
            {
            path: 'install',
            name: 'install',
            component: () => import('@/views/elemcompon/install/index')
            },{
            path: 'buttoncompon',
            name: 'buttoncompon',
            component: () => import('@/views/elemcompon/buttoncompon/index')
          }]
      }]
    }
  ]
})
