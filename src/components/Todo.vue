<template>
    <div class="todocard">
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

.todocard{
display: flex; 
justify-content: space-between;    
flex-direction: column;    
border-color: black;
border-style: double;
 background: url(../assets/logo.png);
  background-repeat: no-repeat;
  background-size: auto;
  width: 250px;
   margin: 5px auto
}
</style>