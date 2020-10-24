<template>
  <h1>Counter {{ msg }}</h1>
  <button @click="count++">count is: {{ count }}</button>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  data() {
    return {
      count: 0
    }
  }
}
</script>
