<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <hello-world></hello-world>
    <todo-list></todo-list>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TodoList from "./components/todo/TodoList";

export default {
  name: 'App',
  components: {
    HelloWorld,
    TodoList
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.mr-4 {
  margin-right: 1rem;
}
</style>
