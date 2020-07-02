import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const Home = () => import('../views/home/Home')
const Category = () => import('../views/category/Category')
const Cart = () => import('../views/cart/Cart')
const Profile = () => import('../views/profile/Profile')

// 创建路由对象
const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/category',
    component: Category
  },
  {
    path: '/profile',
    component: Profile
  },
  {
    path: '/cart',
    component: Cart
  }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})


// 导出router
export default router
