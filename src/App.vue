<template>
  <div id="app">
    <todo-list></todo-list>
  </div>
</template>

<script>

import TodoList from './components/todo-list.vue'

export default {
  components: {
    TodoList,
  }
}
</script>

<style>
body {
  font-family: Helvetica, sans-serif;
}
</style>
