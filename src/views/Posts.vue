<template>
  <div>
    <h1>Posts</h1>
    <SinglePost v-for="post in posts" :key="post.id" :post="post" />
  </div>

</template>

<script>
import axios from 'axios'
import SinglePost from '../components/SinglePost.vue'

export default {
  data () {
    return {
      "posts" : []
    }
  },
  components: {
    SinglePost
  },
  created () {
    // fetch('http://localhost:8000/posts')
    //   .then(res => res.json())
    //   .then(json => this.posts = json)

    axios.get('http://localhost:8000/posts')
      .then(res => this.posts = res.data)
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>