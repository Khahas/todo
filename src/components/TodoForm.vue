<template>
  <div>
    <input type="text" id="fname" v-model="newTodoItem" /><br>
    <input type="text" v-model="newTodoItem" /><br>
    <input type="text" v-model="newTodoItem" /><br>
    <button @click="addNewTodoItem()">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newTodoItem: ""
    };
  },

  methods: {
    addNewTodoItem() {
      this.$store.dispatch("addNewTodo", this.newTodoItem);
      this.newTodoItem = "";
    }
  }
};
</script>

<style>
</style>