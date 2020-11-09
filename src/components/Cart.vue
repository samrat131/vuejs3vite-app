<template>
  <div class="cart">
    <h1 @click="show = !show">{{ title }}</h1>
    
    <div v-if="show" class="cart_inner">
      <h3>Cart: {{ totalItems }}</h3>
      <span>Total: {{ totalAmount }} TK</span>

      <ul>
        <li v-for="item in cart.items" key="item.id">
          <button @click="removeItem(item.id)">X</button>
          {{ item.title }}, {{ item.price }}TK 
          Qty:{{ item.qty }} = {{ item.price*item.qty }}TK
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
      alert(id)
      cart.items.splice(cart.items.findIndex(function(i){
        return i.id === id;
      }), 1);
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