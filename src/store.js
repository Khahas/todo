import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        title: "väck mig",
        author: "Khaled",
        time: "10:10",
        completed: false
      },
      {
        title: "byt blöja",
        author: "ahmad",
        time: "10:10",
        completed: false
      },
    ]
  },


  mutations: {
    addNewTodo(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },

    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      state.todos.splice(index, 1);
    },

    TOGGLE_TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    },
    removeTodo(state, todoItem){
    
      state.todos = state.todos.filter(todo => todo !== todoItem)
    },
  
      addNewTodoItem (state, message) {
        state.obj.message = message
      } 
  },
  
});