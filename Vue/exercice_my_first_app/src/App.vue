<script setup>
import MyComponent from './assets/MyComponent.vue';
/*  
CE COMPOSANT RACINE APP RESTE EN MODE COMPOSITION API
IMPORTER LES COMPOSANTS ICI 
*/

</script>

<template>
  <h1>Ok</h1>
  <h2>{{ count }}</h2>
  <MyComponent count='50'/>
</template>

<style scoped>


</style>
