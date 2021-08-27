<template>
  <div class="todo-container">
    <ul>
      <li class="todo" v-for="todo in todoList" :key="todo.no">
        <input class="mr-4" type="checkbox" v-model="todo.do">
        <p class="mr-4">{{ todo.data }}</p>
        <p class="mr-4">{{ todo.date }}</p>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'TodoList',
  data () {
    return {
      todoList: [
        {
          no: 1,
          date: Date(),
          data: '커피마시기',
          do: false
        },
        {
          no: 2,
          date: Date(),
          data: '과자먹기',
          do: false
        },
        {
          no: 3,
          date: Date(),
          data: '소세지먹기',
          do: false
        }
      ]
    }
  }
}

</script>

<style scoped>

.todo-container {
  display: flex;
  justify-content: center;
}

.todo {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.todo li {
  list-style: none;
}

</style>
