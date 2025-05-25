<template>
    <div>
        <header class="shadow-sm bg-white">
              <div class="welcome">    welcome to my app. </div>
            <nav class="container mx-auto p-4 flex justify-between">
                <!-- AJOUTER UN LIEN VERS LA PAGE D'ACCUEIL DE VOTRE APPLICATION
                    Le lien aura l'attr class=font-bold btn 
                -->
                    <NuxtLink to="/" class="font-bold">
                        <p class="btn my-2">Acceuil</p>
                    </NuxtLink>
                <ul class="flex gap-4">
                    <li>
                        <NuxtLink to="about">
                            <p class="btn my-4">About</p>
                        </NuxtLink>
                    </li>
                    <li>
                        <NuxtLink to="/products">
                            <p class="btn my-4">Products</p>
                        </NuxtLink>
                    </li>
                    
                    <!-- Dans des li, ajouter des lient vers la 
                        1 - Page acceuil du site
                        2 - Page about
                        3 - Page Products 
                    -->
                </ul>
            </nav>
        </header>

        <!-- OUTPUT THE PAGE CONTENT HERE-->
        <div class="container mx-auto p-4">
            <NuxtPage />
            <!-- Ici ajouter du code pour permettre le rendu des pages -->
        </div>
    </div>
</template>

<style scoped>
  .router-link-exact-active {
    color: #12b488;
  }
  .welcome{
    text-align: center;
    align-content: center;
    font-weight: bold;
    font-size: 30px;
    color: white;
    background-color: black;
  }
</style>