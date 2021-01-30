<template>
  <div>
    <input type="text"  v-model="newTodoItem" /><br>
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
      this.$store.commit("addNewTodo", this.newTodoItem);
    }
  },
 
};
</script>

<style>
</style>
}