
<template>
  <v-app id="inspire">
   
    <casa />

    <v-content>
        <mapa />
    </v-content>


    <v-footer
      color="indigo"
      app
    >
         <v-btn
                absolute
                dark
                fab
                top
                right
                color="pink"
                :style="{left: '50%', transform:'translateX(-50%)'}"
              >
                <v-icon></v-icon>
              </v-btn>
      <span class="white--text">&copy; 2020</span>
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

<style lang="sass" scoped>

</style>