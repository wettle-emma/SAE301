<script setup>
import star from '../components/icons/star.vue';
import mail from '../components/icons/mail.vue';
</script>

<template>
  <main class="py-16">
    <table>
      <tbody>
        <tr>
          <td><img src="../components/img/rose.webp"></td>
          <td><img src="../components/img/violet.webp"></td>
        </tr>
      </tbody>
    </table>
    <div class="text-x4l font-radiocanada text-center mt-6">L'art de vous voir différemment</div>
    <div class="">
      <div class="pt-16 grid grid-cols-2">
        <div class="col-span-1">
          <ul class="w-2/3 mx-auto font-sunflower text-lg">
            <li>Chez TaVue, nous croyons en l'union de l'artisanat français et de l'innovation pour créer des lunettes uniques qui reflètent votre style personnel.</li>
            <br />
            <li>Notre engagement envers la fabrication française et notre quête de raffinement sont au cœur de tout ce que nous faisons.</li>
            <br />
            <li>Notre philosophie est simple :</li>
            <br />
            <li>Chaque paire de lunettes doit être une œuvre d'art.</li>
            <br />
            <li>C'est pourquoi nous combinons des matériaux de qualité, un design élégant et des détails soignés pour donner naissance à des lunettes exceptionnelles. Nous sommes fiers de vous accompagner dans la création de lunettes qui racontent votre histoire.</li>
          </ul>
        </div>

        <div>
          <img class="w-3/4 mx-10 grid-cols-2 my-auto" src="../components/img/telephone.webp" /></div>
        </div>
        <div class="pt-36 grid grid-cols-2">
          <img class="w-2/3 ml-24 grid-cols-2 my-auto" src="../components/img/svg lunette.webp" >
          <ul class="w-5/6 mx-auto grid-cols-1 font-radiocanada text-xl font-medium">
            <li>Rendez le monde plus clair et plus beau avec des lunettes à votre image.</li>
            <li>Commencez à créer vos plus belles lunettes.</li>
            <br />
            <RouterLink to="/personnalisation"><button class="bg-Primary border border-Secondary rounded-sm flex justify-center items-center w-full font-sunflower text-xl">Personnalisez vos lunettes</button></RouterLink>
          </ul>
        </div>
        <div class="px-16 mt-28 grid grid-cols-4">
          <div class="bg-Accent border border-Secondary w-11/12 rounded-sm px-4 pt-6">
            <star />
            <br />
            <p>"J'ai récemment personnalisé mes lunettes de vue chez TaVue, et je suis plus que ravie du résultat ! Le configurateur est simple à utiliser, et j'ai pu choisir chaque détail pour qu'il corresponde à mon style. La qualité est exceptionnelle, et je reçois des compliments à chaque fois que je les porte."</p>
            <p class="pt-6 pb-4">Claire Moulin</p>
          </div>
          <div class="bg-Accent border border-Secondary w-11/12 rounded-sm px-4 pt-6">
            <star />  
            <br />
            <p>"Des lunettes de vue élégantes et personnalisées ? TaVue a relevé le défi avec brio ! J'ai commandé une paire de lunettes de lecture sur mesure et elles sont non seulement confortables, mais elles ajoutent une touche de classe à ma tenue. Je recommande vivement."</p>
            <p class="pt-16 pb-4">Thomas Wargner</p>
          </div>
          <div class="bg-Accent border border-Secondary w-11/12 rounded-sm px-4 pt-6">
            <star />  
            <br />
            <p>"L'expérience d'achat sur le site TaVue est incroyablement agréable. J'ai pu jouer avec les options de personnalisation jusqu'à ce que je trouve la combinaison parfaite pour mes lunettes de vue. La livraison a été rapide, et le résultat est magnifique. Je suis devenue une cliente fidèle !"</p>
            <p class="pt-12 pb-4">Tania Bansept</p>
          </div>
          <div class="bg-Accent border border-Secondary w-11/12 rounded-sm px-4 pt-6">
            <star />  
            <br />
            <p> "Je cherchais des lunettes de vue qui se démarquent, et TaVue m'a offert exactement cela. La personnalisation est amusante, les options sont variées, et le résultat final est à couper le souffle. Je suis conquise !"</p>
            <p class="pt-24 pb-4">Charlotte Duprès</p>
          </div>
      </div>

      <div class="mt-12">
        <p class="font-radiocanada text-xl ml-8 font-medium">Souscrivez à notre newsletter et bénéficiez d'un cadeau offert en bonus</p>
        <div class="flex mt-4">
          <p class="font-radiocanada text-base text-grey ml-16">Votre email</p>
          <mail class="ml-[30rem]"/>
        </div>
          <div class="bg-Secondary h-px w-2/5 ml-12"></div>
      </div>
    </div>
  </main>
</template>

