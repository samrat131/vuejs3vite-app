<template>
  <div class="post">
    
    <img width="300" :src="post.img" alt="image">

    <h2>
      <router-link 
        :to="{ name: 'single-post', params: { id: post.id }}"
      > 
        {{ post.title }}
      </router-link>
    </h2>

    <p>{{ post.body }}</p>

    <h3>Stock {{ post.stock }}</h3>

    <button @click="addToCart">Add to cart</button>

    <p>{{ cart.qty }}</p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      required: true,
      type: Object
    }
  },
  data() {
    return {
      
    }
  },
  methods : {
    addToCart () {
      this.post.stock--
      this.cart.qty++
    }
  },
  inject : ['cart']

}
</script>