<script>
    export default {
        name: "MainLayout"
    }
</script>
<template>
    <!-- redéfinir les slots  -->
        <!-- - nommer les slots -->
        <!-- - rendu conditionnel de slots / expliquer : si il y a qqc dedans, je l'affiche, il n'est plus a null-->
        <!-- - injecter dans le slot Header -->
    <div class="container">
        <header
            v-if="$slots.header"
            class="p-3 mb-3 border-bottom"
        >
            <slot name="header"></slot>
        </header>
        <main
            v-if="$slots.default"
        >
            <slot></slot>
        </main>
        <footer
            v-if="$slots.footer"
        >
            <slot
                
                name="footer"
            ></slot>
        </footer>
    </div>
</template>