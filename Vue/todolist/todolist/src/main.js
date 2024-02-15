import './assets/main.css'
// import de bootstrap pour les classes prédéfinis
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import { createApp } from 'vue'
// import de pinia pour le local storage
import { createPinia } from 'pinia'
import App from './App.vue'

const app = createApp(App)
//  ajout de pinia à l'application 
const pinia = createPinia()
app.use(pinia)

app.mount('#app')
