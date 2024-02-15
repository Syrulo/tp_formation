<script>
// import des composants a utiliser dans app.vue
import ToDoAdd from './components/ToDoAdd.vue';
import ToDoTable from './components/ToDoTable.vue'

// export des composants vers index.html (balise #app)
export default {
  name: 'App',
  components: {
    ToDoAdd,
    ToDoTable,
  }
}
</script>

<template>
  <ToDoAdd/> 
  <ToDoTable/>
</template>
