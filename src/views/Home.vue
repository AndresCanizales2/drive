
<template>
  <v-app id="inspire">
   
    <casa />

    <v-content>
        <mapa />
    </v-content>


    <v-footer color="indigo" class="footer" app>
         <v-btn class="flotante"
                absolute
                dark
                fab
                top 
                large
                right
                color="pink"
                :style="{left: '50%',transform:'translateX(-50%)', width: '75px',height: '75px'}" > 
          </v-btn>
      <span class=""></span>
     
    </v-footer>
  </v-app>

</template>

<script>

import mapa from "../components/map"
import casa from "../components/menu"

  export default {
     components:{
      mapa, casa 
    },
      data () {
    return {
           drawer: null,
           titulo1: "Llevar",
           titulo2 : "Aventon",
           switch1:false
    }
  },
   
    
    props: {
      source: String,
    },
 
    
  }
</script>

<style >
.flotante{

    position: absolute;
    margin: -3rem 0 0 0;
    background-image: url("../imagenes/svg/Grupo16.svg");
    background-size: 3.5rem;
    background-position: center;
}
.footer{

  border-radius: 20px;
}
</style>