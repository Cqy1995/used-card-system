import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/homeIndex',
        component: () => import('../views/home/index.vue'),
        meta: {
          navShow: true,
          title: '首页'
        }
      },
      {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
        meta: {
          navShow: true,
          title: '关于'
        }
      },
      {
        path: '/oldcarmsg',
        component: () => import('../views/OldcarMsg.vue'),
        meta: {
          navShow: true,
          title: '二手车'
        }
      },
      {
        path: '/carlist',
        component: () => import('../views/carList.vue'),
        meta: {
          navShow: true,
          title: '车列表'
        }
      },
      {
        path: '/yysq',
        component: () => import('../views/Yysq.vue'),
        meta: {
          navShow: true,
          title: ''
        }
      },
      {
        path: '/regester',
        name: 'regester',
        component: () => import('../views/Regester.vue'),
        meta: {
          navShow: true,
          title: ''
        }
      },
    ]
  },
  {
    path: '',
    component: Home,
    children: [
      {
        path: '/serviceManagent',
        component: () => import('../views/serviceManagent/index'),
        meta: {
          navShow: true,
          title: '服务管理'
        }
      },
      {
        path: '/serviceManagent/insurance',
        component: () => import('../views/serviceManagent/insurance'),
        meta: {
          navShow: true,
          title: '保险模块'
        }
      },
      {
        path: '/serviceManagent/serve',
        component: () => import('../views/serviceManagent/serve'),
        meta: {
          navShow: true,
          title: '服务模块'
        }
      }, {
        path: '/serviceManagent/inform',
        component: () => import('../views/serviceManagent/inform'),
        meta: {
          navShow: true,
          title: '通知管理'
        }
      }, {
        path: '/serviceManagent/bargain',
        component: () => import('../views/serviceManagent/bargain'),
        meta: {
          navShow: true,
          title: '砍价模块'
        }
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router
