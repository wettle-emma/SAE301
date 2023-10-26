<script setup>
import Arrow from '../components/icons/arrow.vue';
import download from '../components/icons/download.vue';
import lunettePerso from '../components/img/lunettePerso.vue';

import { ref } from 'vue';
import PocketBase from 'pocketbase';

const pb = new PocketBase("http://tavue.emmawettle.fr");

const colorValues = ref({
  monture: 'om1nygl85ew91gw', // Valeur par défaut pour monture
  verres: 'yfcmpljpo7xtaal', // Valeur par défaut pour verres
  branche: 'om1nygl85ew91gw', // Valeur par défaut pour branche
  materiau: 'm5pk2ldm5ehsnu6', // Valeur par défaut pour matière
  // Ajoutez d'autres éléments ici avec leurs valeurs par défaut
});

let currentUser = ref(null);

const setColorValue = (element, colorId) => {
    colorValues[element] = colorId;
};

const Panier = () => {
  // Ensuite, envoyez les données à PocketBase
  console.log('Valeurs de couleur sélectionnées :', colorValues.value.monture, colorValues.value.branche, colorValues.value.verres, 'valeur de matière :', colorValues.value.materiau);
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    pb.collection('lunettes').create({
    monture: colorValues.value.monture,
    branche: colorValues.value.branche,
    verres: colorValues.value.verres,
    materiau: colorValues.value.materiau,
    cree_par: currentUser.value.id
    
    // Ajoutez d'autres champs Lunettes ici
  });
    }
    else{
        alert("Vous devez être connecté pour commander vos lunettes")
    }
};

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
            <lunettePerso class="w-5/6 mx-auto my-32" />
          </div>
          <div class="ml-48">
            <div class="flex">
                <h2 class="w-1/2 pt-28 font-sunflower font-semibold text-x2l">Lunette personnisable</h2>
                <p class="w-1/2 pt-28 pl-28 font-sunflower font-semibold text-x2l text-Black">89€</p>
            </div>
            <p class="font-sunflower font-light text-xl mt-8 ml-4">Choix des verres</p>
            <div class="grid grid-cols-2 mt-4 ml-8">
                <button @click="setColorValue('verres', 'yfcmpljpo7xtaal')" class="font-sunflower font-light text-lg border border-Black rounded-sm h-16 w-5/6 focus:bg-Primary" onclick="verre1.style.fill = '#F1F9FE', verre2.style.fill = '#F1F9FE'">Verre classique</button>
                <button @click="setColorValue('verres', 'xhshsg0ewz8fimo')" class="font-sunflower font-light text-lg border border-Black rounded-sm h-16 w-5/6 focus:bg-Primary" onclick="verre1.style.fill = '#EBDEFF', verre2.style.fill = '#EBDEFF'">Verre lumière bleue</button>
            </div>
            <p class="font-sunflower font-light text-xl mt-8 ml-4">Matière de la monture</p>
            <div class="grid grid-cols-2 mt-4 ml-8">
                <button @click="setColorValue('materiau', 'm5pk2ldm5ehsnu6')" class="font-sunflower font-light text-lg border border-Black rounded-sm h-16 w-5/6 focus:bg-Primary">
                    Acétate
                </button>
                <button @click="setColorValue('materiau', 'vm81z8byp4afksf')" class="font-sunflower font-light text-lg border border-Black rounded-sm h-16 w-5/6 focus:bg-Primary">
                    Titane
                </button>
            </div>
            <p class="font-sunflower font-light text-xl mt-8 ml-4">Couleur de la monture</p>
            <div class="flex space-x-6 mt-4 ml-8">
                <div @click="setColorValue('monture', 'om1nygl85ew91gw')" class="w-16 h-16 bg-Pgrey rounded-full hover:border hover:border-b-Black" onclick="monture.style.fill = '#A8A8A8'"></div>
                <div @click="setColorValue('monture', 'qa09iezjukum7wq')" class="w-16 h-16 bg-Pgold rounded-full hover:border hover:border-b-Black" onclick="monture.style.fill = '#E8B758'"></div>
                <div @click="setColorValue('monture', 'mvkb5292tz7jbcd')" class="w-16 h-16 bg-grey rounded-full hover:border hover:border-b-Black" onclick="monture.style.fill = '#1E1E1E'"></div>
                <div @click="setColorValue('monture', 'ablyiwh54mgj6k1')" class="w-16 h-16 bg-Primary rounded-full hover:border hover:border-b-Black" onclick="monture.style.fill = '#DBB3AB'"></div>
                <div @click="setColorValue('monture', '6cwe9zm30cty382')" class="w-16 h-16 bg-Pbrown rounded-full hover:border hover:border-b-Black" onclick="monture.style.fill = '#502518'"></div>
            </div>
            <p class="font-sunflower font-light text-xl mt-8 ml-4">Couleur des branches</p>
            <div class="flex space-x-6 mt-4 ml-8">
                <div @click="setColorValue('branche', 'om1nygl85ew91gw')" class="w-16 h-16 bg-Pgrey rounded-full hover:border hover:border-b-Black" onclick="branche1.style.fill = '#A8A8A8', branche2.style.fill = '#A8A8A8'"></div>
                <div @click="setColorValue('branche', 'qa09iezjukum7wq')" class="w-16 h-16 bg-Pgold rounded-full hover:border hover:border-b-Black" onclick="branche1.style.fill = '#E8B758', branche2.style.fill = '#E8B758'"></div>
                <div @click="setColorValue('branche', 'mvkb5292tz7jbcd')" class="w-16 h-16 bg-grey rounded-full hover:border hover:border-b-Black" onclick="branche1.style.fill = '#1E1E1E', branche2.style.fill = '#1E1E1E'"></div>
                <div @click="setColorValue('branche', 'ablyiwh54mgj6k1')" class="w-16 h-16 bg-Primary rounded-full hover:border hover:border-b-Black" onclick="branche1.style.fill = '#DBB3AB', branche2.style.fill = '#DBB3AB'"></div>
                <div @click="setColorValue('branche', '6cwe9zm30cty382')" class="w-16 h-16 bg-Pbrown rounded-full hover:border hover:border-b-Black" onclick="branche1.style.fill = '#502518', branche2.style.fill = '#502518'"></div>
            </div>
            <div class="my-12 flex space-y-2">
                <download />
                <RouterLink to="/panier"><button @click="Panier" class="bg-Primary border border-Secondary rounded-sm flex justify-center items-center w-5/6 font-sunflower text-xl ml-32">Commandez vos lunettes</button></RouterLink>
            </div>

          </div>
        </div>
    </main>
</template>