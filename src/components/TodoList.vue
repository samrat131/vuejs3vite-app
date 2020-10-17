<template>
  
  <h1>{{ title }}</h1>
  <ul>
    <li v-for="item, index in items" key="index">
      <p>
        <input type="checkbox" v-model="item.status">
        <span :class="{ done : item.status }"> {{ item.title }} </span>
        <button @click="deleteTodo(index)">x</button>
      </p>
    </li>
  </ul>
  <input type="text" v-model="todo" @keyup.enter="addTodo">
  <p>
    <button @click="addTodo">Add</button>
    <button @click="clearCompleted">Clear Completed</button>
  </p>
  <p>total todos {{ todoCount }}</p>
  <p>completed {{ completed }}</p>
  <p>remaining item {{ remainingItem }}</p>

</template>

<script>

export default {
  name: 'TodoList',
  props : ['title'],
  created () {
    let todoItemsLS = JSON.parse(localStorage.getItem('todos'))
    this.items = todoItemsLS
    // console.log(todoItemsLS)
  },
  computed : {
    todoCount () {
      return this.items.length
    },
    completed () {
      return this.items.filter(value => value.status).length
    },
    remainingItem () {
      return this.todoCount - this.completed
    }
  },
  methods : {
    clearCompleted () {
      this.items = this.items.filter(value => !value.status)
      this.updateLocalStorage()
    },
    updateLocalStorage () {
      localStorage.setItem('todos', JSON.stringify(this.items))
    },
    addTodo () {
      if (this.todo!='') {
        this.items.push(
          {title :this.todo, status : false}
        )
        this.todo = ''
        this.updateLocalStorage()
      }
    },
    deleteTodo (index) {
      this.items.splice(index,1)
      this.updateLocalStorage()
    }
  },
  data() {
    return {
      items: [
        {title : 'go to school', status : false},
        {title : 'learn some thing new', status : false},
        {title : 'enjoy your study', status : false}
      ],
      todo : ''
    }
  }
}
</script>

<style scoped>
ul li{
  list-style-type: none;
}
.done{
  text-decoration: line-through;
}
</style>