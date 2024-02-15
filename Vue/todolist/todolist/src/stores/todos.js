import { defineStore } from 'pinia'
import todos from "../data/todoList.json"

// création du store pour le localstorage comportant également l'édition, le reset et la suppression "
const STORE_NAME = 'todos'
const STORE_LOCALE_STORAGE_KEY = 'todos'

// création d'une constante utilisant les données par défault de TodoList.json
const getDefaultState = () => todos
// création d'une constante utilisant les données actuelles
const getCurrentState = () => {
const localeData = localStorage.getItem(STORE_LOCALE_STORAGE_KEY)
   return localeData ? JSON.parse(localeData) : getDefaultState()
}

// Exportation de useTodosStore qui est le store en lien avec ToDo.vue
export const useTodosStore = defineStore(STORE_NAME, {
    state: () => {
      return {
        todos: getCurrentState(),
        editTodoMode: false,
        todoToEditId: null
      }
    },
    getters: {
      getTodos : (state) => state.todos,
      getEditTodoMode : (state) => state.editTodoMode,
      getTodoToEditId: (state) => state.todoToEditId,
      getTodoById: (state) => (id) => {
        return state.todos.find(todo => todo.id == id)
      }
    },
    actions: {
      updateLocaleStorage() {
        localStorage.setItem(STORE_LOCALE_STORAGE_KEY, JSON.stringify(this.todos))
      },
      addTodo(todo) {
        this.todos.push(todo)
        this.updateLocaleStorage()
      },
      updateTodo(todo) {
        const index = this.todos.findIndex(el => {
            return el.id === todo.id
        })
        this.todos[index] = todo
        this.updateLocaleStorage()
        this.resetEditionMode()
      },
      deleteTodo(todoId) {
        this.todos = this.todos.filter(el => el.id != todoId)
        this.updateLocaleStorage()
      },
      setEditTodoMode(mode) {
        this.editTodoMode = mode
      },
      setTodoToEditId(id) {
        this.todoToEditId = id
      },
      resetEditionMode() {
        this.todoToEditId = null
        this.editTodoMode = false 
      }
    }
  })