<template>
  <div id="map-wrap">
    <MglMap
      :accessToken="accessToken"
      :mapStyle="mapStyle"
      :center.sync="center"
      :zoom.sync="zoom"
    >
    </MglMap>
  </div>
</template>

<script>
import { MglMap } from "vue-mapbox";

export default {
  components: {
    MglMap
  },
  data() {
    return {
      accessToken:
        "pk.eyJ1IjoiZXNjb2JhcmNhbml6YWxlc2UiLCJhIjoiY2s5YmJlcTR5MjF0bzNsbGNhM2g4YWRpbCJ9.NwN0TpQhxdheMDEG36hQbQ",
      mapStyle: "mapbox://styles/escobarcanizalese/ck9b36lie2fko1iplg4zevn17",
      coordinates: [-111.549668, 39.014]
    };
  }
};
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#map-wrap {
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;

}

#map-wrap .mgl-map-wrapper {
  height: 100%;
  top: 0;
  left: 0;
  width: 100%;
  
}

#map-wrap .mgl-map-wrapper .mapboxgl-map {
  height: 100%;
  left: 0;
  overflow: visible;
  position: absolute;
  top: 0; /* mapa */
  width: 100%;
}
</style>
