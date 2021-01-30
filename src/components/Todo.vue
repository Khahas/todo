<template>
  <div style="width:250px; margin:5px auto;">
    <div style="display:flex; justify-content:space-between">
      <span :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{ todo.title }}</span>
      <span :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{ todo.author }}</span>
      <span :class="{completed: todo.completed}" @click="toggleTodoStatus(todo)">{{ todo.time }}</span>
      <button @click="removeTodo(todo)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["todo"],

  methods: {
    
      removeTodo(){
      // To access a mutation we use commit() and send in a mutatation name as string
      // followed by the payload - something to manipulate our base students list with.
      this.$store.commit('removeTodo', this.todo)
    }
    }
  
};
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>