<template>
  <SinglePost v-if="post" :post="post" />
</template>

<script>
import axios from 'axios'
import SinglePost from '../components/SinglePost.vue'

export default {
  data () {
    return {
      post: null
    }
  },
  props: ['id'],
  components: {
    SinglePost
  },
  created () {
    axios.get('http://localhost:8000/posts/'+this.id)
      .then(res => {
        this.post = res.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style>

</style>