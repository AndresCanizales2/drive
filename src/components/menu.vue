<template>
  <div id="">
      <v-navigation-drawer
      v-model="drawer"
      app
    >

     <v-avatar class="avatar-person" size="120">
      <img
        src="https://cdn.vuetifyjs.com/images/john.jpg"
        alt="John"
      >
    </v-avatar>
      <v-list dense>
        <v-list-item link>
          <v-list-item-action><v-icon>fas fa-home</v-icon></v-list-item-action>
          <v-list-item-content><v-list-item-title>Home</v-list-item-title></v-list-item-content>
        </v-list-item>
        
        <v-list-item link> 
          <v-list-item-action><v-icon>far fa-user</v-icon></v-list-item-action>
          <v-list-item-content> <v-list-item-title>Perfil</v-list-item-title></v-list-item-content>
        </v-list-item>

         <v-list-item link> 
          <v-list-item-action><v-icon>fas fa-car</v-icon></v-list-item-action>
          <v-list-item-content> <v-list-item-title>Registrar Vehiculos</v-list-item-title></v-list-item-content>
        </v-list-item>
          <v-list-item link> 
          <v-list-item-action><v-icon>fas fa-sign-out-alt</v-icon></v-list-item-action>
          <v-list-item-content> <v-list-item-title>Cerrar Sesión</v-list-item-title></v-list-item-content>
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
    </div>
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
.avatar-person{
  margin: 40px 0 40px 0 ;
  border: solid 2px #4AA5FA;
}
</style>