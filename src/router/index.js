import Vue from 'vue'
import Router from 'vue-router'
import main from '@/components/main'
import mainpage from '@/barItem/views/mainpage'
import productList from '@/barItem/views/productList'
import shopping from '@/barItem/views/shopping'
import usercenter from '@/barItem/views/usercenter'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'main',
      component: main,
      children:[
        {
          path:'/',
          name:'精选',
          component:mainpage
        },
        {
          path:'/productList',
          name:'逛逛',
          component:productList
        },
        {
          path:'/shopping',
          name:'购物车',
          meta: { auth: false },
          component:shopping
        },
        {
          path:'/usercenter',
          name:'我的',
          component:usercenter
        },
      ]
    }
  ]
})
