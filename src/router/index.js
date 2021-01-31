import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/components/layout/Index.vue'

Vue.use(VueRouter)

const routes = [{
  path: '/',
  component: Layout,
  children: [{
    path: '',
    name: 'design',
    component: () => import('../views/Design.vue')
  }]
},
{
  path: '/info',
  component: Layout,
  children: [{
    path: '',
    name: 'info',
    component: () => import('../views/Info.vue')
  }]
}

]

const router = new VueRouter({
  routes
})

export default router
