import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from '../components/HelloWorld.vue'
import TodoList from '../components/TodoList.vue'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/todo', component: TodoList },
  { path: '/posts', component: Posts },
  { 
    path: '/post/:id', 
    name: 'single-post', 
    component: Post 
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router