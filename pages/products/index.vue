<template> 
    <div>
        <div class="all">
            <input type="text" v-model="in_name">
            <select v-model="in_catego">
                <option value="all">All</option>            
                <option value="men's clothing">Men's clothing</option>            
                <option value="electronics">Electronics</option>
                <option value="jewelery">Jewelery</option>
            </select>
        </div>

        <div class="grid grid-cols-4 gap-5">
            
            <div v-for="item in filteredprods" :key="item.id">
                <ProductCard :product="item">iiiiiiiii</ProductCard>
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

<script>
export default {
    layout: 'product',
    data() {
        return {
            products: [],
            in_catego: "",
            in_name: "",
        }
    },
    computed: {
        filteredprods() {
            return this.products.filter((prod) => {
                const match_name = prod.title.toLowerCase().includes(this.in_name.toLowerCase());
                const match_cat = !this.in_catego || prod.category === this.in_catego;
                if (this.in_catego === "all"){
                    return match_name;
                }
                return match_cat && match_name;
            });
        }
    },
    async mounted() {
        try {
            const res = await fetch("https://fakestoreapi.com/products"); 
            this.products = await res.json();
        }
        catch{ 
            console.log("NO PRODS")};
        
            // fetch("https://fakestoreapi.com/products")
            //     .then((res) => res.json())
            //     .then((json) => {
            //         console.log(json);
            //         this.products.value = json;
            //     })
            //     .catch((error) => 
            //         console.error("NO PRODS"));
    },
};
// import {ref} from "vue"

// const products = ref(null);


    /**
     * Mettez le code adéquat pour permettre à products/index.vue 
     * d'avoir le layout Product.vue
     */
    
    
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
    .all {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
    }
</style>