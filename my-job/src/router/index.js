import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Scroll from '@/components/Scroll'
import Date from '@/components/date'
import NotFoundComponent from '@/components/404'
import IndexButton from '@/components/child/index'
import Bar from '@/components/bar'
import Game from '@/components/game/2048'
import VueWechatTitle from 'vue-wechat-title'
import 'mint-ui/lib/style.css'

Vue.use(Router)

//content routers = [
//  {path: '/info', name: 'HelloWorld', alias: ['/'], meta:{ title:'首页'}, component: HelloWorld, 
//  				children: [{path:'/info/bar', name:'bar', component: Bar}]
//  },
//  {path: '/hello', name: 'Scroll', meta:{ title:'滚动'}, component: Scroll},
//  { path: '/date', meta:{ title:'日期'}, component: Date },
//  {path: '/indexbutton', name: 'IndexButton', meta:{ title:'父子机',requierAuth:true}, component: IndexButton},
//  { path: '/*', meta:{ title:'404'}, component: NotFoundComponent }
//];

export default new Router({
  routes: [
    {path: '/info', name: 'HelloWorld', alias: ['/'], meta:{ title:'首页'}, component: HelloWorld, 
    				children: [{path:'/info/bar', name:'bar', component: Bar}]
    },
    {path: '/hello', name: 'Scroll', meta:{ title:'滚动'}, component: Scroll},
    { path: '/date', meta:{ title:'日期'}, component: Date },
    {path: '/indexbutton', name: 'IndexButton', meta:{ title:'父子机',requierAuth:true}, component: IndexButton},
    {path: '/game' , name:'game' ,component: Game},
    { path: '/*', meta:{ title:'404'}, component: NotFoundComponent }
  ],
  mode: 'history'
})

//export default router;