import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Haha from '@/pages/Haha.vue'
import Login from "@/pages/Login.vue"
import User from "@/pages/user/User.vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path:'/haha',
      name:'Haha',
      component:Haha
    },
    {
      path:'/login',
      name:'Login',
      component: Login,
      children:[
        {
          path:'user',
          name:'User',
          component: User
        }
      ]
    }
  ]
})
