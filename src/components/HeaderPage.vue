<script setup>
  import { ref, onMounted } from 'vue';
  
  import { RouterLink } from 'vue-router';

  import logo from '../components/icons/logo.vue';
  import shoppingbag from '../components/icons/shoppingbag.vue';
  import userr from '../components/icons/userr.vue';  
  import log from '../components/icons/log.vue'; 
  import login from '../components/icons/login.vue'; 


  import Pocketbase from 'pocketbase';
  const pb = new Pocketbase("http://193.168.146.228");

  let isConnected = ref(false);

  let user = ref('');
  let psw = ref('');

  let currentUser = ref(null);
  let avatar = ref(null);

onMounted(async() => {
  // Vérifier que le user est déjà connecté
  refresh()
})

const refresh = ()=>{
  if(pb.authStore.isValid){
    currentUser.value = pb.authStore.model
    isConnected.value = true

    avatar.value =
      "http://193.168.146.228:80/api/files/"  // Adresse serveur et repertoire des fichiers image
      +currentUser.value.collectionId     // Id ou name de la collection concernée
      +"/"
      +currentUser.value.id               // Id de l'utilisateur connecté
      +"/"
      +currentUser.value.avatar           // Nom fichier image pocketbase
      +"?thumb=100x100"                   // Taille par défaut     

//      console.log("image avatar utilisateur", avatar)
  }
}

const connect = async()=>{
  try{
    const authData = await pb.collection('users')
    .authWithPassword(user.value, psw.value)
//    console.log("connecté : ",authData)
    refresh()    
  }catch(error){
//    console.log("erreur de connexion : ",error.message)
    alert("Erreur d'identification : mauvais login et/ou mot de passe")
    user.value = ""
    psw.value = ""
  }
}

const deconnect = ()=>{
  // Suppression utilisateur connecté
  pb.authStore.clear()
  isConnected.value=false
  avatar.value = null
  // Retour à la page d'accueil -> Redirection
  router.push({name:"Homepage"})
}
</script>

<template>
  <nav class="fixed z-10 grid grid-cols-3 bg-White w-full translate-y-0 items-center">
        <div class="flex mx-8">
            <li class="nav-item"><RouterLink class="nav-link" to="/personnalisation"><p class="flex font-sunflower text-lg ml-8">Personnalisation</p></RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/map"><p class="flex font-sunflower text-lg ml-8 mr-0">Trouver une boutique</p></RouterLink></li>
        </div>
    
        <div class="flex mx-auto items-center justify-center py-1">
            <li class="nav-item"><RouterLink class="nav-link" to="/"><logo /></RouterLink></li>
        </div>

        <div class="flex mx-auto items-center justify-between">
            <li class="nav-item"><RouterLink class="nav-link" to="/panier"><shoppingbag /></RouterLink></li>
            <li class="nav-item"><RouterLink class="nav-link" to="/compte"><userr /></RouterLink></li>
        

            <div class="flex ml-6">              
                <span class="grid grid-cols-3" v-if="isConnected"> 
                    <img :src="avatar" class="img-fluid pt-1 rounded-xs" style="max-width:50px;" />
                    <button class="border border-Secondary rounded-xs flex justify-center items-center w-full h-2/3 font-sunflower text-lg ml-2 mt-4">
                        {{ currentUser.prenom }}
                    </button>              
                    <button class="bg-Primary border border-Secondary rounded-xs w-2/3 h-2/3 mt-4 ml-6" type="button" @click="deconnect">
                        <log />
                    </button>
                </span>

                <form v-else class="form-inline  input-group-sm ml-auto" >
                    <input class="border border-Secondary rounded-xs form-control mr-2" placeholder="Login" v-model="user">
                    <input class="border border-Secondary rounded-xs form-control mr-2" placeholder="Password" v-model="psw">
                    <button class="border border-Secondary rounded-xs ml-auto" type="button" @click.prevent="connect">
                        <login />
                    </button>
                </form>
            </div>
        </div>
   

            </nav>

</template>
