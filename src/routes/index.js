import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from '../components/HelloWorld.vue'
import TodoList from '../components/TodoList.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/todo', component: TodoList },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router