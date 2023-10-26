<script setup>
import Arrow from '../components/icons/arrow.vue';                                            
</script>

<template>
    <main class="pt-6">
        <div>
            <a class="pt-12 flex ml-4" href="javascript:history.back()">
                 <Arrow />
                 <p class="font-radiocanada font-sm ml-2">Retour</p>
            </a>
        </div>
        
        <h2 class="pt-12 ml-4 mx-auto font-sunflower font-semibold text-x2l mb-6">Bienvenue</h2>
        
        <div class="grid grid-cols-2">
            <div class="mb-4">
                <h2 class="w-3/4 pt- pb-10 pl-56 font-sunflower font-semibold text-x2l">Historique de commande</h2>
                <div class="flex space-x-10 px-8 ml-10 mt-48">
                    <p class="font-sunflower text-lg">N° de commande</p>
                    <p class="pl-12 font-sunflower text-lg">Date</p>
                    <p class="pl-12 font-sunflower text-lg">Statut</p>
                    <p class="pl-12 font-sunflower text-lg">Total de la commande</p>
                </div>
                <div class="bg-Secondary h-px w-5/6 ml-16 my-5"></div>
                <p class="pl-64 font-sunflower text-lg">Aucune commande en cours</p>
                <div class="bg-Secondary h-px w-5/6 ml-16 my-5"></div>

                <p class="font-sunflower text-lg font-semibold ml-12 mt-10">Commandez votre première paire de lunettes personnalisés dès maintenant !</p>
                <RouterLink to="/personnalisation"><button class="bg-Primary border border-Secondary rounded-sm flex justify-center items-center w-3/5 font-sunflower text-xl ml-24 my-12">Commander vos lunettes</button></RouterLink>

            </div>

            <div>
                <h2 class="w-3/4 pt- pb-10 pl-56 font-sunflower font-semibold text-x2l">Informations du compte</h2>
                <div class="bg-Accent w-4/5 ml-8 h-auto rounded-xs pb-1 mb-20">
                    <p class="ml-8 pt-6 font-sunflower text-xl">Mes informations</p>
                    <p class="font-sunflower font-light text-lg mt-6 ml-10">Prénom</p>
                    <div class="font-sunflower font-light border border-Secondary rounded-xs h-12 w-5/6 ml-12"><p class="font-sunflower font-light text-grey text-base ml-4 pt-3">prénom</p></div>

                    <p class="font-sunflower font-light text-lg mt-4 ml-10">Nom</p>
                    <div class="font-sunflower font-light border border-Secondary rounded-xs h-12 w-5/6 ml-12"><p class="font-sunflower font-light text-grey text-base ml-4 pt-3">nom</p></div>

                    <p class="font-sunflower font-light text-lg mt-4 ml-10">Date de naissance</p>
                    <div class="font-sunflower font-light border border-Secondary rounded-xs h-12 w-5/6 ml-12"><p class="font-sunflower font-light text-grey text-base ml-4 pt-3">JJ/MM/AAAA</p></div>
                    
                    <p class="font-sunflower font-light text-lg mt-4 ml-10">Email</p>
                    <div class="font-sunflower font-light border border-Secondary rounded-xs h-12 w-5/6 ml-12"><p class="font-sunflower font-light text-grey text-base ml-4 pt-3">adresse mail</p></div>

                    <p class="font-sunflower font-light text-lg mt-4 ml-10">Mot de passe</p>
                    <div class="font-sunflower font-light border border-Secondary rounded-xs h-12 w-5/6 ml-12"><p class="font-sunflower font-light text-grey text-base ml-4 pt-3">mot de passe</p></div>

                    <button class="bg-Primary border border-Secondary rounded-sm flex justify-center items-center w-3/5 font-sunflower text-xl ml-24 my-12">Modifier les informations</button>
            
                </div>
            </div>
        </div>            
    </main>
</template>
