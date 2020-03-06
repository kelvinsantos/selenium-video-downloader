import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import SleekVideoDownloader from '@/components/SleekVideoDownloader'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/',
      name: 'SleekVideoDownloader',
      component: SleekVideoDownloader
    }
  ]
})
