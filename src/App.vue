<template>

    <cart title="Cart" />

    <router-link to="/">Home</router-link>
    | <router-link to="/todo">Todo</router-link>
    | <router-link to="/posts">Posts</router-link>
    | <router-link to="/add-post">Add Post</router-link>

    <router-view></router-view>
</template>

<script>

import cart from './components/Cart.vue'

export default {
  name: 'App',
  components: {
    cart
  },
}
</script>
