import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        content: "väck mig",
        author: "Khaled",
        time: "20:40:54        ",
        completed: false
      },
      {
        content: "byt blöja",
        author: "Khaled",
        time: "20:40:54        ",
        completed: false
      },
      {
        content: "Tvätta kläder",
        author: "Khaled",
        time: "20:40:54        ",
        completed: false
      }, {
        content: "Laga välling",
        author: "Khaled",
        time: "20:40:54",
        completed: false
      },
    ]
  },


  mutations: {
    addNewTodo(state, todoItem) {
      state.todos.push({
        content: todoItem.content,
        author: todoItem.author,
        time: new Date().toLocaleString(),
        completed: false
      })
    },
    removeTodo(state, todoItem) {
      state.todos = state.todos.filter(todo => todo !== todoItem)
    },
    toggleTodoStatus(state, todoItem) {
      todoItem.completed = !todoItem.completed;

      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    }
  },

});