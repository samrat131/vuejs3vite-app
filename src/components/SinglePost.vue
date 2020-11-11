<template>
  <div class="post">
    
    <img 
      width="150" 
      :src="post.img || 'http://localhost:3000/no-image.png'" 
      :alt="post.title"
    >

    <h2>
      <router-link 
        :to="{ name: 'single-post', params: { id: post.id }}"
      > 
        {{ post.title }}
      </router-link>
    </h2>

    <p v-if="! post.stock">Out of stock</p>

    <h4>TK {{ post.price }}</h4>

    <p>{{ post.body }}</p>

    <h3>Stock {{ post.stock }}</h3>

    <button v-if="post.stock" @click="addToCart">Add to cart</button>

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
      
      let item = {
        "id": this.post.id,
        "title": this.post.title,
        "price": this.post.price,
        "qty": 1
      }
      
      let result = this.cart.items.find( ({ id }) => id === this.post.id )
      if (result != undefined) {
        let index = this.cart.items.indexOf(result)
        this.cart.items[index].qty += 1
      } else {
        // console.table(item)
        this.cart.items.push(item)
      }

    }
  },
  inject : ['cart']

}
</script>