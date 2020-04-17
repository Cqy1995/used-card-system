import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [{
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../views/Home.vue')
    },
    {
        path: '/login',
        name: 'login',
        component: () =>
            import ('../views/Login.vue')
    },
    {
        path: '/',
        name: 'regester',
        component: () =>
            import ('../views/Regester.vue')
    },
    {
        path: '/oldcarmsg/:id',
        name: 'oldcar',
        component: () =>
            import ('../views/OldcarMsg.vue')
    },
    {
        path: '/carlist',
        component: () =>
            import ('../views/carList.vue')
    },
    {
        path: '/newcarlist',
        component: () =>
            import ('../views/NewCarList.vue')
    },
    {
        path: '/yysq',
        component: () =>
            import ('../views/Yysq.vue')
    },
    {
        path: '/carsonsoult',
        component: () =>
            import ('../views/Carconsoult.vue')
    },
    {
        path: '/toconmsg',
        component: () =>
            import ('../views/ToConMsg.vue')
    },
    {
        path: '/sqjy',
        component: () =>
            import ('../views/Sqjy.vue')
    },
    {
        path: '/user',
        name: 'user',
        component: () =>
            import ('../views/User.vue')
    },
    {
        path: '/edituser',
        component: () =>
            import ('../views/editUser.vue')
    },
    {
        path: '/usermsg',
        component: () =>
            import ('../views/UserMsg.vue')
    },
    {
        path: '/shopcar',
        component: () =>
            import ('../views/ShoppingCar.vue')
    },
    {
        path: '/userlist/:id',
        name: 'userlist',
        component: () =>
            import ('../views/userList.vue')
    },
    {
        path: '/serviceManagent',
        component: () =>
            import ('../views/serviceManagent/index.vue'),
        meta: {
            navShow: true,
            title: '服务管理'
        }
    },
    {
        path: '/serviceManagent/insurance',
        component: () =>
            import ('../views/serviceManagent/insurance.vue'),
        meta: {
            navShow: true,
            title: '保险模块'
        }
    },
    {
        path: '/serviceManagent/insuranceDetail',
        component: () =>
            import ('../views/serviceManagent/insuranceDetail.vue'),
        meta: {
            navShow: true,
            title: '购买保险'
        }
    },
    {
        path: '/serviceManagent/serve',
        component: () =>
            import ('../views/serviceManagent/serve.vue'),
        meta: {
            navShow: true,
            title: '服务模块'
        }
    }, {
        path: '/serviceManagent/inform',
        component: () =>
            import ('../views/serviceManagent/inform.vue'),
        meta: {
            navShow: true,
            title: '通知管理'
        }
    }, {
        path: '/serviceManagent/bargainlist',
        component: () =>
            import ('../views/serviceManagent/bargainList.vue'),
        meta: {
            navShow: true,
            title: '砍价模块'
        }
    },
    {
        path: '/serviceManagent/bargainone',
        component: () =>
            import ('../views/serviceManagent/bargain.vue'),
        meta: {
            navShow: true,
            title: '砍价详情'
        }
    },
    {
        path: '/serviceManagent/bargaintwo',
        component: () =>
            import ('../views/serviceManagent/bargaintwo.vue'),
        meta: {
            navShow: true,
            title: '砍价详情'
        }
    },
    {
        path: '/adminstration/insuranceClass',
        component: () =>
            import ('../views/adminstration/insuranceClass.vue'),
        name: "adminInsuranceClass",
        meta: {
            navShow: false,
            title: '保险管理'
        }
    },
    {
        path: '/adminstration/tousu',
        component: () =>
            import ('../views/adminstration/tousu.vue'),
        name: "admintousu",
        meta: {
            navShow: false,
            title: '投诉管理'
        }
    },
    {
        path: '/adminstration/tongzhi',
        component: () =>
            import ('../views/adminstration/tongzhi.vue'),
        name: "admintongzhi",
        meta: {
            navShow: false,
            title: '通知管理'
        }
    },
    {
        path: '/adminstration/kanjia',
        component: () =>
            import ('../views/adminstration/kanjia.vue'),
        name: "adminkanjia",
        meta: {
            navShow: false,
            title: '砍价管理'
        }
    },
    {
        path: '/addcar',
        component: () =>
            import ('../views/addCar.vue'),
        name: "addcar",
        meta: {
            navShow: false,
            title: '砍价管理'
        }
    }
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