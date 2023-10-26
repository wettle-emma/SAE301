<script setup>
import Arrow from '../components/icons/arrow.vue'; 
import lunettePerso from '../components/img/lunettePerso.vue';  

</script>

<template>
    <main class="pt-6">
    
        <div class="grid grid-cols-2">
          <div class="bg-lightgrey w-[50rem] h-auto">
            <div>
                <a class="pt-12 flex ml-4" href="javascript:history.back()">
                    <Arrow />
                    <p class="font-radiocanada font-sm ml-2">Retour</p>
                </a>
            </div>
            <lunettePerso class="w-5/6 mx-auto my-52" />
          </div>
          <div class="ml-48">
            <h2 class="w-1/2 pt-28 font-sunflower font-semibold text-x2l">Lunette personnisable</h2>
            
            <div class="flex mb-10">
                <h2 class="w-1/2 pt-6 font-sunflower font-semibold text-xl">Quantité</h2>
                <p class="w-1/2 pt-6 pl-28 font-sunflower font-semibold text-xl text-Black">1 paire</p>
            </div>

            <div class="flex">
              <p class="w-1/2 font-sunflower font-medium text-lg">Prix des lunettes</p>
              <p class="w-1/2 pl-28 font-sunflower font-medium text-lg text-Black">89€</p>
            </div>
            <div class="bg-Secondary h-px w-4/5"></div>
            <div class="flex">
              <p class="w-1/2 pt-2 font-sunflower font-medium text-base pl-6">Réduction</p>
              <p class="w-1/2 pl-28 font-sunflower font-medium text-base pt-1 text-Black">-20%</p>
            </div>
            <div class="bg-Secondary h-px w-4/5"></div>
            <div class="flex">
              <p class="w-1/2 font-sunflower font-semibold text-lg pt-2">Prix des lunettes</p>
              <p class="w-1/2 pl-28 font-sunflower font-semibold text-lg text-Black">70,20€</p>
            </div>

            <h2 class="w-1/2 pt-20 font-sunflower font-semibold text-lg">Passer commande</h2>

            <div></div>
            <p class="font-sunflower font-light text-base mt-8">Nom du titulaire de la carte</p>
            <input class="font-sunflower font-light text-lg border border-Primary rounded-xs h-12 w-11/12" type="text" name="nom" placeholder="Nom titulaire" required>

            <p class="font-sunflower font-light text-base mt-8">N° de carte</p>
            <input class="font-sunflower font-light text-lg border border-Primary rounded-xs h-12 w-11/12" type="text" name="numero" placeholder="N° carte" required>

            <div class="grid grid-cols-2">
              <div>
                <p class="font-sunflower font-light text-base mt-8">Date d'expiration</p>
                <input class="font-sunflower font-light text-lg border border-Primary rounded-xs h-12 w-3/4" type="text" name="Date d'exp" placeholder="Date d'exp" required>
              </div>
              <div>
                <p class="font-sunflower font-light text-base mt-8">CVV</p>
                <input class="font-sunflower font-light text-lg border border-Primary rounded-xs h-12 w-3/4" type="text" name="CVV" placeholder="CVV" required>
              </div>
            </div>

            <button class="bg-Primary border border-Secondary rounded-sm flex justify-center items-center w-3/5 font-sunflower text-xl ml-24 my-12">Payer</button>
        

          </div>
        </div>
    </main>
</template>
