<script setup>
    // import éléments de vue
    import { onMounted, ref } from 'vue'
    // Import Leaflet
    import * as Leaflet from 'leaflet'
    // css leaflet
    import 'leaflet/dist/leaflet.css'

    // Canevas pour la carte
    let tileLayer = Leaflet.tileLayer
    // Initialisation de la carte sous forme d'une ref
    let map = ref()
    
    // Coordonnées de l'utilisateur
    let coordMe = ref({
        latitude : 0,
        longitude : 0
    })

    // Lorsque le composant est monté dans la vue
    onMounted( async ()=> {
        // Caractérisitques de la carte
        tileLayer = Leaflet.tileLayer('https://{s}.tile.osm.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        }
      );

      // Création de la carte sur la div ayant l'id = 'map'
      map = Leaflet.map('map',
        {
            zoomControl: true, // Contrôle de Zoom
            layers: [tileLayer], // Canevas pour dessiner la carte
            maxZoom: 18,        // Zoom maxi autorisé
            minZoom: 6          // Zoom mini autorisé
        })
        // projetction de la carte avec centrage aux coordonnées indiquées, avec facteur d'agrandissement
        .setView([47.510356, 6.798466], 17)

        // Création d'un icone
        let myIcon = Leaflet.icon({
            iconUrl:    '/marker-icon.png',       // Image de l'icone
            shadowUrl:  '/marker-shadow.png',     // Ombre de l'icone
            iconSize:   [25, 41],                       // Taille de l'icone
            shadowSize: [25, 41],                       // Taille de l'ombre de l'icone
            iconAnchor: [-10,-10],                      // Ancrage de l'icone
            shadowAnchor: [-10,-10],                    // Ancrage de l'ombre de l'icone
            popupAnchor: [0, 0]                         // Point de position de la popup si elle existe
        })

        // Ajout d'un marqueur
        let marker = Leaflet.marker([47.50988884648749, 6.799353398300791], {icon: myIcon}).addTo(map)

        // Ajouter une popup / infobulle
        marker.bindPopup('Magasin Tavue')


        // ajout nouveau marker
        let marker2 = Leaflet.marker([47.509378206410496, 6.796681613594198], {icon: myIcon}).addTo(map)

        // Ajouter une popup / infobulle
        marker2.bindPopup('Magasin Tavue')

        // ajout nouveau marker
        let marker3 = Leaflet.marker([47.51121266034272, 6.797322007166329], {icon: myIcon}).addTo(map)

        // Ajouter une popup / infobulle
        marker3.bindPopup('Magasin Tavue')

    }) // Fin onMounted

    // Fonction appelée par locMe pour charger les valeurs de géolocalisation
    const showLocation = (position) => {
console.log("postion", position)        
        // Recuperation latitue longitude
        coordMe.value.latitude = position.coords.latitude
        coordMe.value.longitude = position.coords.longitude
        // Recentrage de la carte sur position utilisateur
        map.panTo([coordMe.value.latitude, coordMe.value.longitude])
        // Créer un marker
        let markerMe = Leaflet.marker([coordMe.value.latitude, coordMe.value.longitude]).addTo(map) 
        // Ajouter une popup / infobulle
        markerMe.bindPopup('Je suis là')
    }

</script>


<template>
    <div class="container-fluid">
        <div class="w-4/5 mx-auto mb-12">
            <div id="map">
            </div>
        </div>
    </div>
</template>

<style scoped>
#map{
    width:100%;
    height: 70vh;
    z-index: 1;
}
</style>