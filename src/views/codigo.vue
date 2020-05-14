<template>
  <v-app>
    <v-card elevation="2" class="ma-auto">
      <v-content>
        <v-img
          class="imagen ma-auto"
          alt="Driver"
          src="https://res.cloudinary.com/dtnqknltg/image/upload/v1588892401/Imagenesdeapp/Grupo_18_n2uiqa.svg"
        />
      </v-content>

      <v-row justify="center" align="center">
        <v-form>
          <p class="mt-3">Ingresa el codigo enviado a tu celular :</p>
          <v-text-field label="Codigo" solo></v-text-field>
          <v-btn to="/" color="pink" class="mb-3" dark>Siguiente</v-btn>
        </v-form>
      </v-row>
    </v-card>
  </v-app>
</template>

<script>
export default {
  data() {
    const srcs = {
      1: "https://res.cloudinary.com/dtnqknltg/image/upload/v1588630469/Imagenesdeapp/27125_ckhp2r.jpg",
      2: "https://res.cloudinary.com/dtnqknltg/image/upload/v1588635076/paises/argentinaRecurso_2_znnllg.svg",
      3: "https://res.cloudinary.com/dtnqknltg/image/upload/v1588635276/paises/brasilRecurso_3_ljv869.svg",
      4: "https://res.cloudinary.com/dtnqknltg/image/upload/v1588634576/paises/spa%C3%B1aRecurso_2_mtu9k3.png",
      5: "https://res.cloudinary.com/dtnqknltg/image/upload/v1588635434/paises/Estados_unidosRecurso_4_q099rj.svg"
    };

    return {
      friends: ["Sandra Adams", "Britta Holt"],
      people: [
        { header: "Elige Pais" },
        { name: "Colombia", prefijo: "+57", avatar: srcs[1] },
        { name: "Argentina", prefijo: "+54", avatar: srcs[2] },
        { name: "Brasil", prefijo: "+55", avatar: srcs[3] },
        { name: "España", prefijo: "+34", avatar: srcs[4] },
        { name: "Estados Unidos", prefijo: "+1", avatar: srcs[5] }
      ]
    };
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Fira+Sans:700,800&display=swap");
@import url("https://fonts.googleapis.com/css?family=Gotu|Open+Sans&display=swap");

* {
  font-family: "Open Sans", sans-serif;
}
</style>> 