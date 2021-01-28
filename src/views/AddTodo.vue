<template>
  <div>
        

  
    <todo-form />

  </div>
</template>

<script>
import { mapGetters } from "vuex";
import TodoForm from "../components/TodoForm";

export default {
  name: "app",
  components: {
    TodoForm
      },

  computed: {
    ...mapGetters({
      completedTodos: "completedTodos",
      pendingTodos: "pendingTodos"
    })
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
