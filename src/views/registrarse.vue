<template>
  <v-app>
    <v-card elevation="1" class="ma-auto">
      <v-content>
        <v-img
          class="imagen"
          alt="Driver"
          src="https://res.cloudinary.com/dtnqknltg/image/upload/v1588290597/Imagenesdeapp/Grupo_17_qlvid5.svg"
        />
      </v-content>

      <v-row justify="center" align="center">
        <v-form>
          <span>Inicia sesion</span>
          con tu numero de telefono
          <v-autocomplete
            v-model="friends"
            :items="people"
            chips
            :rules="[v => !!v || 'Seleccione Pais Para continuar']"
            color="blue-grey lighten-2"
            label="Elige Pais"
            item-text="name"
            item-color="blue"
            item-value="name"
            background-color="white"
            style="width:290px"
          >
            <!--  esto va dentro -->
            <template v-slot:selection="data">
              <v-chip v-bind="data.attrs" :input-value="data.selected" @click="data.select">
                <v-avatar left>
                  <v-img :src="data.item.avatar"></v-img>
                </v-avatar>
                {{ data.item.prefijo }}
                {{ data.item.name }}
              </v-chip>
            </template>

            <template v-slot:item="data">
              <template v-if="typeof data.item !== 'object'">
                <v-list-item-content v-text="data.item"></v-list-item-content>
              </template>
              <template v-else>
                <v-list-item-avatar>
                  <img :src="data.item.avatar" />
                </v-list-item-avatar>
                <v-list-item-content>
                  <v-list-item-title v-html="data.item.name"></v-list-item-title>
                </v-list-item-content>
                <v-list-item-content>
                  <v-list-item-title v-html="data.item.prefijo"></v-list-item-title>
                </v-list-item-content>
              </template>
            </template>

            <!-- a -->
          </v-autocomplete>

          <v-text-field label="Ingresa tu Telefono" color="blue" type="number"></v-text-field>

          <v-btn color="blue" class="mb-3" dark>Siguiente</v-btn>
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

<style>
</style>