<template>
  <div class="cart">
    <h1 @click="show = !show">{{ title }}</h1>
    
    <div v-if="show" class="cart_inner">
      <h3>Item(s): {{ totalItems }}</h3>
      <span>Total: {{ totalAmount }} TK</span>

      <ul>
        <li v-for="item in cart.items" key="item.id">
          <button @click="removeItem(item.id)"> x </button>
          {{ item.title }}, {{ item.price }}TK 
          Qty:
          <button @click="increaseItem(item.id)"> + </button>
          {{ item.qty }} 
          <button @click="decreaseItem(item.id)"> - </button>
          {{ item.price*item.qty }}TK
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'cart',
  data() {
    return {
      total: 0,
      show: false,
      ids: []
    }
  },
  methods: {
    removeItem(id) {
      this.cart.items.splice(this.cartItemIndex(id), 1);
    },
    increaseItem (id) {
      this.cart.items[this.cartItemIndex(id)].qty += 1;
    },
    decreaseItem (id) {
      this.cart.items[this.cartItemIndex(id)].qty -= 1;
      if(!this.cart.items[this.cartItemIndex(id)].qty) {
        this.removeItem(id)
        return
      }
    },
    cartItemIndex (id) {
      return this.cart.items.findIndex(function(item) {
        return item.id === id
      })
    }
    
  },
  props: ['title'],
  inject: ['cart'],
  computed: {
    totalItems () {
      return this.cart.items.length
    },
    totalAmount () {
      this.total = 0
      
      this.cart.items.forEach(item => {
        this.total += item.price * item.qty
      })

      return this.total // this.cart.items.length
    }
  }
}
</script>

<style scoped>
  div.cart{
    position: fixed;
    right: 0;
    top: 0;
    background-color: #222;
  }
</style>