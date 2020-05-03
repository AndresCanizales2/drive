<template>
  <v-app id="inspire">
    <casa />

    <v-content>
      <mapa />
    </v-content>

    <v-footer color="indigo" class="footer" app>
      <menuabajo />
    </v-footer>
  </v-app>
</template>

<script>
import menuabajo from "../components/menuabajo";
import mapa from "../components/map";
import casa from "../components/menu";

export default {
  components: {
    mapa,
    casa,
    menuabajo
  },
  data() {
    return {
      drawer: null,
      titulo1: "Llevar",
      titulo2: "Aventon",
      switch1: false
    };
  },

  props: {
    source: String
  }
};
</script>

<style scoped>
.footer {
  border-radius: 20px;
}
</style>
