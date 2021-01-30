<template>
  <div>
    <input type="text" placeholder="content" v-model="content" /><br />
    <input type="text" placeholder="author" v-model="author" /><br />

    <button @click="addNewTodoItem()">Submit</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      author: "",
      content: "",
    };
  },
  methods: {
    addNewTodoItem() {
      var todoObject = {
        content: this.content,
        author: this.author,
      };
      this.$store.commit("addNewTodo", todoObject);
      this.$router.push({'path': '/'})

    },
  },
};
</script>

<style>
</style>
}