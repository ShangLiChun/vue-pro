import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/views/layout/Layout'

import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

// import {Recommend,TopMuisc} from '../components/page/miusc/components'

export const RouterMap = [
  {
    path:'/',
    redirect: '/home'
  },
  {
    path: '/home',
    redirect: '/home/index',
    component: Layout,
    meta: {
      title: '首页',
      icon: 'icon-home',
      path: 'home'
    },
    children: [{
      path: 'index',
      name: '首页',
      component: () =>
        import ('../components/page/home/index'),
      meta: {
        title: '首页',
        icon: 'icon-home',
        path: 'home'
      }
    }]
  },
  {
    path: '/miusc',
    redirect: '/miusc/index',
    component: Layout,
    meta: {
      title: '音乐',
      icon: 'icon-duanxin',
      path: 'miusc'
    },
    children: [{
      path: 'index',
      name: '音乐',
      redirect: '/miusc/index/recomm',
      component: () =>import ('../components/page/miusc/index'),
      meta: {
        title: '音乐-推荐',
        icon: 'icon-duanxin',
        path: 'miusc'
      },
      children:[{
        path: 'recomm',
        name: '音乐-推荐',
        meta: {
          title: '音乐-推荐',
          icon: 'icon-duanxin',
          path: 'miusc'
        },
        component: () => import ('../components/page/miusc/components/Recommend')
      },{
        path: 'toplist',
        name: '音乐-排行榜',
        meta: {
          title: '音乐-排行榜',
          icon: 'icon-duanxin',
          path: 'miusc'
        },
        component: () => import ('../components/page/miusc/components/TopMiusc')
      }, {
        path: 'hotkey',
        name: '音乐-搜索',
        meta: {
          title: '音乐-搜索',
          icon: 'icon-duanxin',
          path: 'miusc'
        },
        component: () => import ('../components/page/miusc/components/SearchMiusc')
      }]
    }]
  },
  {
    path: '/find',
    redirect: '/find/index',
    component: Layout,
    meta: {
      title: '发现',
      icon: 'icon-faxian',
      path: 'find'
    },
    children: [{
      path: 'index',
      name: '发现',
      component: () =>
        import ('../components/page/find/index'),
      meta: {
        title: '发现',
        icon: 'icon-faxian',
        path: 'find'
      }
    }]
  },
  {
    path: '/mine',
    redirect: '/mine/index',
    component: Layout,
     meta: {
       title: '我的',
       icon: 'icon-wode',
       path: 'mine'
     },
    children: [{
      path: 'index',
      name: '我的',
      component: () => import ('../components/page/mine/index'),
      meta: {
        title: '我的',
        icon: 'icon-wode',
        path: 'mine'
      }
    }]
  },

]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: RouterMap
})


// export default new Router({
//   routes: [
//     {
//       path: '/',
//       name: 'HelloWorld',
//       component: HelloWorld
//     }
//   ]
// })
