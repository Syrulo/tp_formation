<script>
// import des composants a utiliser dans app.vue
import ToDo from './components/ToDo.vue';
import ToDoTable from './components/ToDoTable.vue'

// export des composants vers index.html (balise #app)
export default {
  name: 'App',
  components: {
    ToDo,
    ToDoTable
  }
}
</script>

<template>

  <ToDo/> 


  <ToDoTable/>

</template>
