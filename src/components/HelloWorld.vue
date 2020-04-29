<template>
  <div class="mapbox">
<MglMap :accessToken="accessToken" :mapStyle="mapStyle" />
  </div>
</template>

<script>

import Mapbox from "mapbox-gl";
import { MglMap } from "vue-mapbox";

export default {
  components:{
    MglMap
  },
    data() {
    return {
      accessToken: "pk.eyJ1IjoiZXNjb2JhcmNhbml6YWxlc2UiLCJhIjoiY2s5YmJlcTR5MjF0bzNsbGNhM2g4YWRpbCJ9.NwN0TpQhxdheMDEG36hQbQ",
      mapStyle: "mapbox://styles/escobarcanizalese/ck9b36lie2fko1iplg4zevn17" // your map style
    };
  },

  created() {
    // We need to set mapbox-gl library here in order to use it in template
    this.mapbox = Mapbox;
  }


};
</script>

<style scoped>

</style>