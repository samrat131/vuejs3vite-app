<template>
  <h1>Add Post</h1>

  <form @submit.prevent="savePost" method="post">
    <p><input placeholder="title" type="text" v-model="post.title"></p>
    <p><input placeholder="body" type="text" v-model="post.body"></p>
    <p><input placeholder="stock" type="number" v-model="post.stock"></p>
    <p><input placeholder="price" type="number" v-model="post.price"></p>
    <button type="submit">Save</button>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      post: {
        'title': '',
        'body': '',
        'stock': '',
        'price': '',
      }
    }
  },
  methods: {
    savePost() {
      console.log(this.post.title)
      axios.post('http://localhost:8000/posts/', this.post)
        .then(res => {
          console.log(res.data)
        })
        .catch(err => console.log(err))
    }
  },
}
</script>

<style>

</style>