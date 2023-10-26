<script setup>
// import { RouterLink } from 'vue-router';

import facebook from '../components/icons/facebook.vue';
import instagram from '../components/icons/instagram.vue';
import logo from '../components/icons/logo.vue';
</script>

<template>
    <footer class="bg-Secondary  gap-8">
    <nav class="space-y-4 gap-8 grid grid-cols-4 mx-0">
      <div class="space-y-2 ml-5 mt-20">
        <logo />
      </div>

        <div class="space-y-1">
            <h3 class="font-radiocanada text-xl text-White mb-6">Qui sommes-nous</h3>
            <ul class="font-sunflower text-lg text-White">
                <li><RouterLink to="/">La marque</RouterLink></li>
                <li><RouterLink to="/">Nos matériaux</RouterLink></li>
                <li><RouterLink to="/">Nous contacter</RouterLink></li>
            </ul>
        </div>

        <div class="space-y-4">
            <h3 class="font-radiocanada text-xl text-White">Informations</h3>
            <ul class="font-sunflower text-lg text-White">
                <li><RouterLink to="/map">Trouver une boutique</RouterLink></li>
                <li><RouterLink to="/">Livraisons & retours</RouterLink></li>
                <li><RouterLink to="/">Mentions Légales</RouterLink></li>
                <li><RouterLink to="/">CGV</RouterLink></li>
            </ul>
        </div>

        <div class="space-y-8">
            <h3 class="font-radiocanada text-xl text-White">Nous suivre</h3>
            <ul class="flex gap-8">
                <li>
                    <a href="#"><facebook /></a>
                </li>
                <li>
                    <a href="#"><instagram /></a>
                </li>
            </ul>
        </div>
    </nav>
  </footer>
</template>