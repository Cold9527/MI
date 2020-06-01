import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../pages/home'
import Index from '../pages/index'
import Product from '../pages/product'
import Detail from '../pages/detail'
import Cart from '../pages/cart'
import Order from '../pages/order'
import OrderConfirm from '../pages/orderConfirm'
import OrderList from '../pages/orderList'
import OrderPay from '../pages/orderPay'
import AliPay from '../pages/aliPay'
import Login from '../pages/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    redirect:'/index',
    children:[
      {
        path: '/index',
        name: 'Index',
        component: Index,        
      },{
        path: '/product/:id',
        name: 'Product',
        component: Product,        
      },{
        path: '/detail/:id',
        name: 'Detail',
        component: Detail,        
      }
    ]
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },  
  {
    path: '/cart',
    name: 'Cart',
    component: Cart,
  },
  {
    path: '/order',
    name: 'Order',
    component: Order,
    children:[
      {
        path: 'confirm',
        name: 'OrderConfirm',
        component: OrderConfirm,        
      },{
        path: 'list',
        name: 'OrderList',
        component: OrderList,        
      },{
        path: 'pay',
        name: 'OrderPay',
        component: OrderPay,        
      },{
        path: 'alipay',
        name: 'AliPay',
        component: AliPay,        
      }
    ]
  },  
]

const router = new VueRouter({
  mode: 'hash',
  base: process.env.BASE_URL,
  routes
})

export default router
