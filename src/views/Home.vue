<template>
  <div >
    <h1>Todos</h1>
    <todos-list />
  </div>
</template>
<script>

import TodosList from "../components/TodosList";

export default {
  name: "home",
  components: {
    TodosList,
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
