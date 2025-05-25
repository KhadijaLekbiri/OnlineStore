<template> 
    <div>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="item in products" :key="item.id">
                <ProductCard :product="item">didiiiiiiiiii</ProductCard>
            </div>
            <!-- Dans ce DIV on utilise une boucle pour 
                parcourir les différents produits et les afficher dans
                un composant (ProductCard)  
            -->
            <div>
                <!-- we don t need to register a new component since it exist on components 
                     folder, NUXT does it automatically for us 
                -->
                <!-- Chaque ProductCard accept une props qui est le produit actuel-->
                
            </div>
        </div>
    </div>
  
</template>

<script setup>
import {ref} from "vue"

const products = ref(null);


    /**
     * Mettez le code adéquat pour permettre à products/index.vue 
     * d'avoir le layout Product.vue
     */

    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        products.value = json;
    })
    .catch((error) => 
        console.error("NO PRODS"));
    /**
     * Dans cette partie utiliser le code adequat pour 
     * récupérer le données des produits depuis fakestoreapi.com
     */
</script>

<style scoped>
    p {
        margin: 20px 0;
    }

    h2 {
        margin-bottom: 20px;
        font-size: 32px;
    }
</style>