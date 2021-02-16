<template>
  <div style="width: 250px; margin: 5px auto">
    <div style="display: flex; justify-content: space-between;     flex-direction: column;    border-color: black;
    border-style: double;">
      <span
        :class="{ completed: todo.completed }"
        @click="toggleTodoStatus(todo)" > 
        {{ todo.content }}
      </span>
      <span
        :class="{ completed: todo.completed }"
        @click="toggleTodoStatus(todo)">
        {{ todo.author }}
      </span>
      <span
        :class="{ completed: todo.completed }"
        @click="toggleTodoStatus(todo)"
        >{{ todo.time }}
        </span>
      <button @click="removeTodo(todo)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],

  methods: {
    removeTodo() {
      this.$store.commit("removeTodo", this.todo);
    },
     toggleTodoStatus() {
      this.$store.commit("toggleTodoStatus", this.todo);
    },

  },
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>