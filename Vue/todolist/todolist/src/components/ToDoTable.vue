<script>
// import des stores et fonctionnalités natives
import { mapState, mapActions } from 'pinia'
import { useTodosStore } from '../stores/todos'

// export du composant
export default {
    name: 'ToDoTable',
    data() {
        return {
            nothing: null
        }
    },
    // tableau comportant les éléments de la props todos importée
    props: {
        todos: {
            type: Array,
            default: () => []
        }
    },
    // Méthode pour utiliser l'édition
    methods: {
        editTodo(todoId) {
            this.setEditTodoMode(true)
            this.setTodoToEditId(todoId)
        },
        ...mapActions(useTodosStore, ["deleteTodo", "setEditTodoMode", "setTodoToEditId"])
    },
    // comput pour importer les states venants du store
    computed: {
        ...mapState(useTodosStore, ["getTodos"])
        
    }
}
</script>

<template>
    <section id="todos-table" class="container">
        <h2 class="text-center">Liste des activités</h2>
        
    <!-- Mise en place de de la table  -->
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Nom</th>
                    <th scope="col">Etat</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr 
                    v-for="item in getTodos"
                    :key="item.id"
                >
                    <td>
                            {{ item.name }}
                    </td>
                    <td>
                            {{ item.etat }}
                    </td>
                    <td>
                        <button 
                            class="btn btn-primary"
                            @click="editTodo(item.id)"
                        >
                            Éditer
                        </button>
                        <!-- Ajouter un bouton de suppression d'un produit -->
                        <!-- au clic, appel de la fonction emitDeleteProduct(product) -->
                        <button 
                            class="btn btn-danger"
                            @click="deleteTodo(item.id)"
                        >
                            Supprimer
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>