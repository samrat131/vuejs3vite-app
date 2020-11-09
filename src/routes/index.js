import { createWebHistory, createRouter } from "vue-router";

import HelloWorld from '../components/HelloWorld.vue'
import TodoList from '../components/TodoList.vue'
import Posts from '../views/Posts.vue'
import Post from '../views/Post.vue'
import AddPost from '../views/AddPost.vue'

const routes = [
  { path: '/', component: HelloWorld },
  { path: '/todo', component: TodoList },
  { path: '/posts', component: Posts },
  { path: '/add-post', component: AddPost },
  { 
    path: '/post/:id', 
    name: 'single-post', 
    props: true,
    component: Post
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router