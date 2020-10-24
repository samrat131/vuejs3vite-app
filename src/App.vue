<template>
    <router-link to="/">Home</router-link>
    | <router-link to="/todo">Todo</router-link>
    | <router-link to="/posts">Posts</router-link>

    <router-view></router-view>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
      
    }
  }

}
</script>
