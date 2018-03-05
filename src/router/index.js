import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Message from '@/pages/Message'
import Favorite from '@/pages/Favorite'
import Calender from '@/pages/Calender'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/Home'
    },
    {
      path: '/Home',
      name: 'home',
      component: Home
    },
    {
      path: '/Message',
      name: 'message',
      component: Message
    },
    {
      path: '/Favorite',
      name: 'favorite',
      component: Favorite
    },
    {
      path: '/Calender',
      name: 'calender',
      component: Calender
    },

  ]
})
