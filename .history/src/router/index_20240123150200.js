import login from '../views/login.vue'
import main from '../views/main.vue'
const routes = [
  {
    path: '/',
    name: 'login',
    component: login
  },
  {
    path: '/main',
    name: 'main',
    component:main,
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    children:[
      {
        path:'/main/checkViolations',
        component:() => import('../views/checkViolations.vue')
      },{
        path:'/main/gasStation',
        component:() => import('../views/gasStation.vue')
      },{
        path:'/main/checkSL',
        component:() => import('../views/checkSL.vue')
      },{
        path:'/main/writeGSI',
        component:() => import('../views/writeGSI.vue')
      },{
        path:'/main/writeSL',
        component:() => import('../views/writeSL.vue')
      },{
        path:'/main/urgentAsk',
        component:() => import('../views/urgentAsk.vue')
      }
    ]
  }
]

const router =  VueRouter.createRouter({
  history:  VueRouter.createWebHistory(process.env.BASE_URL),
  routes
})

export default router
