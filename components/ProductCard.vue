<template>
    <div class="card text-center">
        <!-- IMG Tag that show the product images 
                CSS Class is "thumb"
        -->
        <img :src="product.image" :alt="product.name" class="thumb">
        <!-- P Tag that show the product title 
                CSS Class is "font-bold text-gray-500 m-4 truncate"
        -->
        <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
        
        <!-- A NuxtLink to /products/product ID (ex /products/2)
             Inside  
        -->
        <NuxtLink :to="`/products/${product.id}`">
            <p class="btn my-4">View details</p>
        </NuxtLink>  
    </div>
</template>

<script setup>
    // DEFINEPROPS IS A FUNCTION IN NUXT WHICH TAKE AS AN ARGUMENT AN ARRAY OF DIFFERENT
    // PROPS THAT WE WANT TO ACCEPT
    const {product} = defineProps(['product'])
</script>

<style scoped>
    .thumb{
        max-height: 120px;
        max-width: 70px;
        margin: 0 auto;
    }
</style>