import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/regester',
    name: 'regester',
    component: () => import('../views/Regester.vue')
  },
  {
    path: '/oldcarmsg',
    component: () => import('../views/OldcarMsg.vue')
  },
  {
    path: '/carlist',
    component: () => import('../views/carList.vue')
  },
  {
    path: '/yysq',
    component: () => import('../views/Yysq.vue')
  },
  {
    path: '/user',
    component: () => import('../views/User.vue')
  },
  {
    path: '/shopcar',
    component: ()=>import('../views/ShoppingCar.vue')
  },
  {
    path: '/serviceManagent',
    component: () => import('../views/serviceManagent/index.vue'),
    meta: {
      navShow: true,
      title: '服务管理'
    }
  },
  {
    path: '/serviceManagent/insurance',
    component: () => import('../views/serviceManagent/insurance.vue'),
    meta: {
      navShow: true,
      title: '保险模块'
    }
  },
  {
    path: '/serviceManagent/insuranceDetail',
    component: () => import('../views/serviceManagent/insuranceDetail.vue'),
    meta: {
      navShow: true,
      title: '购买保险'
    }
  },
  {
    path: '/serviceManagent/serve',
    component: () => import('../views/serviceManagent/serve.vue'),
    meta: {
      navShow: true,
      title: '服务模块'
    }
  }, {
    path: '/serviceManagent/inform',
    component: () => import('../views/serviceManagent/inform.vue'),
    meta: {
      navShow: true,
      title: '通知管理'
    }
  }, {
    path: '/serviceManagent/bargain',
    component: () => import('../views/serviceManagent/bargain.vue'),
    meta: {
      navShow: true,
      title: '砍价模块'
    }
  },
  
  // {
  //   path: '',
  //   // component: Home,
  //   children: [
  //     {
  //       path: '/serviceManagent',
  //       component: () => import('../views/serviceManagent/index.vue'),
  //       meta: {
  //         navShow: true,
  //         title: '服务管理'
  //       }
  //     },
  //     {
  //       path: '/serviceManagent/insurance',
  //       component: () => import('../views/serviceManagent/insurance.vue'),
  //       meta: {
  //         navShow: true,
  //         title: '保险模块'
  //       }
  //     },
  //     {
  //       path: '/serviceManagent/insuranceDetail',
  //       component: () => import('../views/serviceManagent/insuranceDetail.vue'),
  //       meta: {
  //         navShow: true,
  //         title: '购买保险'
  //       }
  //     },
  //     {
  //       path: '/serviceManagent/serve',
  //       component: () => import('../views/serviceManagent/serve.vue'),
  //       meta: {
  //         navShow: true,
  //         title: '服务模块'
  //       }
  //     }, {
  //       path: '/serviceManagent/inform',
  //       component: () => import('../views/serviceManagent/inform.vue'),
  //       meta: {
  //         navShow: true,
  //         title: '通知管理'
  //       }
  //     }, {
  //       path: '/serviceManagent/bargain',
  //       component: () => import('../views/serviceManagent/bargain.vue'),
  //       meta: {
  //         navShow: true,
  //         title: '砍价模块'
  //       }
  //     }

  //   ]
  // }
  
]

const router = new VueRouter({
  routes
})

export default router
