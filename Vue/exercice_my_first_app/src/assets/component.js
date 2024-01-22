const { createApp } = Vue
import component from "../component.js"

createApp({
    components: {
        component
    },
    data() {
    return {
        count: 0,
        name: "Thomas",
        message: "Bonjour"
        }
    },
    methods: {
        plus() {
            this.count++
        },
        moins() {
            this.count--
        }  
    },
    computed: {
        now() {
        return Date.now()
        },
        checkNumber() {
            return this.count > 5 ? true : false
        }
    }
}).mount('#app')