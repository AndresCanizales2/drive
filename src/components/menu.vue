<template>
  <v-appp id="">
      <v-navigation-drawer
      v-model="drawer"
      app
    >
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-home</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Home</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link>
          <v-list-item-action>
            <v-icon>mdi-contact-mail</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>Contact</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      app
      color="#4AA5FA"
      dark
    >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer" />
      <v-spacer></v-spacer>
      <v-toolbar-title v-if="switch1 === false">{{titulo1}}</v-toolbar-title>
      <v-toolbar-title v-else >{{titulo2}}</v-toolbar-title>
      <v-spacer></v-spacer>
         <v-switch
         
                v-model="switch1"
                inset 
                color="#FFFFFF"
                hide-details  
               
              ></v-switch>
    </v-app-bar>
    </v-appp>
</template>

<script>
  export default {
      data () {
    return {
           drawer: null,
           titulo1: "Llevar",
           titulo2 : "Aventon",
           switch1:false
    }
  },
    components:{
      
    },
    
    props: {
      source: String,
    },
 
    
  }
</script>

<style>

</style>