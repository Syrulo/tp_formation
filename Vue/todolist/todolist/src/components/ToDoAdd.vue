<script>
// import des stores et fonctionnalités natives
import { mapState, mapActions } from 'pinia'
import { useTodosStore } from '../stores/todos'

// export du composant
    export default {
        name: "ToDoAdd",
        emits: ["updateTodo"],
        // Watcher pour  réagir à l'ajout d'un élément dans la todoList
  watch: {
    getTodoToEditId(newValue) {
      console.log(this.getEditTodoMode && newValue != null && !this.confirmEditMode)
      if (
        this.getEditTodoMode && newValue != null && !this.confirmEditMode ||
        this.getEditTodoMode && newValue != this.currentTodoId
      ) {
        const todo = this.getTodoById(this.getTodoToEditId)
        this.name = todo.name;
        this.etat = todo.etat;
        this.confirmEditMode = true;
        this.currentTodoId = this.todoToEditId;
      }
    }
  },
  // les données du formulaires
  data() {
    return {
      name: "",
      etat: "",    
      confirmEditMode: false,
      currentTodoId: null
    };
  },
  // Props pour l'édition 
  props: {
    editMode: {
      type: Boolean,
      default: false,
    },
    todoToEdit: {
      type: Object,
      default: null,
    },
  },
  // création du formulaire à soumettre via méthode
  methods: {
    submitForm() {
      if (this.getEditTodoMode && this.getTodoToEditId != null) {
        const todo = {
          id: this.getTodoToEditId,
          name: this.name,
          etat: this.etat,   
        };
        console.log("todo", this.todo)
        this.updateTodo(todo)
        this.confirmEditMode = false
        this.currentTodoId = null
      } else {
        const todo = {
          id: Math.floor(Math.random() * Date.now()),
            name: this.name,
            etat: this.etat,
        };
        this.addTodo(todo)
      }
      this.resetForm()
    },
    resetForm() {
      this.name = null
      this.etat = null
    },
    cancel() {
      this.resetForm()
      this.confirmEditMode = false
      this.currentTodoId = null
      this.resetEditionMode()
    },
    /* version avec Alias */
    ...mapActions(useTodosStore, {
      addTodo: "addTodo",
      updateTodo: "updateTodo",
      resetEditionMode: "resetEditionMode"
    })
    /* version sans Alias */
    /* ...mapActions(useProductsStore, ["addProduct", "updateProduct"]) */
  },
  computed: {
    ...mapState(useTodosStore, [
      "getEditTodoMode",
      "getTodoToEditId" ,
      "getTodoById"
    ]),
  }
};
</script>


<template>
<section>
<h1> Création d'une activité </h1>
    <!-- création des paramétres des zones à remplir du formulaire -->
<form @submit.prevent="submitForm">
      <div class="mb-3">
        <label for="name" class="form-label"> Nom </label>
        <input
          type="text"
          class="form-control"
          id="name"
          name="name"
          aria-describedby="name-help"
          v-model="name"
          required
        />       
      </div>
      <!-- création du menu déroulant permettant de chosir l'état d'avancement d'une tâche -->
      <div class="mb-3">
        <label for="etat" class="form-label">Etat</label>
        <select id="etat" class="form-select" v-model="etat" required>
          <option value="" selected disabled hidden>Choisir un etat d'avancement</option>
          <option> A faire </option>
          <option> En cours </option>
          <option> Fait </option>
        </select>
      </div>
      <!-- Bouton de création de la tache avec des ternaires en cas d'envoi ou d'édition -->
      <button
        class="btn"
        type="submit"
        :class="getEditTodoMode ? 'btn-primary' : 'btn-success'"
      >
        {{ getEditTodoMode ? "Mettre à Jour" : "Enregistrer" }}
      </button>
      <button
        v-if="getEditTodoMode"
        class="btn btn-danger"
        type="button"
        @click="cancel"
      >
        Annuler
      </button>
      <button
        v-else
        class="btn btn-danger"
        type="button"
        @click="resetForm"
      >
        Reset
      </button>
    </form>
  </section>
</template>