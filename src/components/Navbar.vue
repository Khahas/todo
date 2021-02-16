<template>
  <div id="nav">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/addtodo">AddTodo</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
ul {
  display: flex;
  justify-content: center;
  list-style: none;
  background: rgb(66, 66, 66);
}

li {
  padding: 1rem 2rem;
  font-size: 1.2rem;
}
a {
  text-decoration: none;
  color: #fff;
}
</style>