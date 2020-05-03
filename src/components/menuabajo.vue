<template>
  <div class="text-center">
    <v-bottom-sheet v-model="sheet" hide-overlay>
      <template v-slot:activator="{ on }">
        <v-btn
          class="flotante"
          absolute
          fab
          top
          large
          right
          color="pink"
          :style="{
            left: '50%',
            transform: 'translateX(-50%)',
            width: '75px',
            height: '75px'
          }"
          v-on="on"
        >
        </v-btn>
      </template>
      <v-sheet class="text-center" height="200px">
        <v-btn class="mt-6" flat color="error" @click="sheet = !sheet"
          >close</v-btn
        >
        <div class="py-3">Trabajo</div>
      </v-sheet>
    </v-bottom-sheet>
  </div>
</template>
<script>
export default {
  data: () => ({
    sheet: false
  })
};
</script>

<style>
.flotante {
  position: absolute;
  margin: -3rem 0 0 0;
  background-image: url("../imagenes/svg/Grupo16.svg");
  background-size: 3.5rem;
  background-position: center;
}
</style>
