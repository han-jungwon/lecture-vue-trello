import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from "../components/Home";
import Login from "../components/Login";
import Board from "../components/Board";
import NotFound from "../components/NotFound";
import Card from "../components/Card";

Vue.use(VueRouter)


const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: Home},
    { path: '/Login', component: Login},
    { path: '/b/:bid', component: Board, children: [
        { path: 'c/:cid', component: Card }
      ]},
    { path: '*', component: NotFound}
  ]
})

export default router
