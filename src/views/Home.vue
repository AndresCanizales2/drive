<template>
  <v-app class="contenedortodo">
    <v-container class="pt-12">
      <v-content>
        <img
          class="imagen"
          alt="Driver"
          src="https://res.cloudinary.com/dtnqknltg/image/upload/v1588495446/Imagenesdeapp/logo_qlf1nx.svg"
        />
      </v-content>
      <v-content>
        <div id="driver">Driver</div>
      </v-content>

      <v-content>
        <p id="nicho">
          Un viaje se mide mejor
          <v-spacer />en amigos, que en millas
        </p>
      </v-content>
    </v-container>
    <v-container fill-height>
      <v-row justify="center" align="center"></v-row>

      <v-row justify="center" align="center">
        <v-col class="pa-12">
          <v-btn block to="/iniciosesion" color="blue" dark>Inicia sesion</v-btn>
          <v-btn class="mt-2 mb-3" block dark color="green">Registrate</v-btn>
          <p class="olvidaste">Olvidaste tu contraseña?</p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },

  props: {}
};
</script>


<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:700,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Gotu|Open+Sans&display=swap");
.contenedortodo {
}

#driver {
  font-family: "Fira Sans", sans-serif;
  font-size: 70px;
  padding-top: 40px;
  /*   background-image: linear-gradient(
    to bottom,
    #02d3e8,
    #02d6ec,
    #01daf0,
    #01ddf4,
    #00e1f8
  );

  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
  color: #2aa8f2;
}

#nicho {
  font-family: "Gotu", sans-serif;
  line-height: 1;
}

.imagen {
  width: 50%;
  height: auto;
}
.olvidaste {
  font-family: "Open Sans", sans-serif;
  font-size: 16px;
}
</style>
