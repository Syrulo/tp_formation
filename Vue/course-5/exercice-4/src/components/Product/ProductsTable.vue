<script>
/* 
Ajouter un événement deleteProduct
Transmettre les données au composant parent 
*/

export default {
    name: 'ProductsTable',
    emits: ['deleteProduct'],
    data() {
        return {
            nothing: null
        }
    },
    props: {
        products: {
            type: Array,
            default: () => []
        },
        price: {
            type: Number,
            default: 10
        },
        vta: {
            type: Number,
            default: 20
        }
    },
    methods: {
        emitDeleteProduct(product) {
            /* 
            ici vous emettrez l'événement et le payload
            qui permettra au composant parent de supprimer
            le produit de la liste
            */
            this.$emit('deleteProduct', product);
        }
    },
    computed: {
        vtaCalculation: () => (price, vta) => {
            if (typeof price != "number" ) {
                /* throw new Error('Parameter is not a number!') */
                return "Error price is not a number"
            }
            let tax = (price / 100) * vta
            return price + tax
        },
        vtaCalculationLocal() {
            let tax = (this.price / 100) * this.vta
            return this.price + tax
        }
    }
}
</script>

<template>
    <section id="products-table" class="container">
        <h2 class="text-center">Products Table</h2>
        <p>Exemple de Computed Local</p>
        <p>{{ vtaCalculationLocal }}</p>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col">Description</th>
                    <th scope="col">Price HT</th>
                    <th scope="col">TVA</th>
                    <th scope="col">Prix TTC</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody class="table-group-divider">
                <tr 
                    v-for="(item, index) in products"
                    :key="item.id"
                >
                    <td>{{ item.name }}</td>
                    <td>{{ item.category }}</td>
                    <td>
                        <p>
                            {{item.description}}
                        </p>
                    </td>
                    <td>{{ item.price }} €</td>
                    <td>{{ item.vta }} %</td>
                    <!-- Appel à une fonction computed -->
                    <td>{{ vtaCalculation(item.price, item.vta) }} €</td>
                    <td>
                        <button 
                            class="btn btn-primary"
                        >
                            Éditer
                        </button>
                        <button 
                            @click="emitDeleteProduct(item)"
                            class="btn btn-danger"                            
                        >
                            Supprimer
                        </button>
                        <!-- Ajouter un bouton de suppression d'un produit -->
                        <!-- au clic, appel de la fonction emitDeleteProduct(product) -->
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>