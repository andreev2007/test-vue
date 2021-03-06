import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from "@/components/Main";
import Favourite from "@/components/Favourite";
import View from "@/components/View";

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'main',
    component: Main
  },
  {
    path: '/favourite',
    name: 'favourite',
    component: Favourite
  },
  {
    path: '/view/:id',
    name: 'view',
    component: View
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
