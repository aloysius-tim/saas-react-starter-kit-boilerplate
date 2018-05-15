<template>
  <v-alert
    :color="$store.getters['root/getAlert'].type"
    :icon="($store.getters['root/getAlert'].icon) ? $store.getters['root/getAlert'].icon : 'info'"
    :value="$store.getters['root/getAlert'].type"
    transition="slide-y-transition"
    class="top-fixed-alert"
    v-if="$store.getters['root/getAlert'] && $store.getters['root/getAlert'].message"
  >
    {{ $store.getters['root/getAlert'].message }}      
  </v-alert>
</template>
<script>
  export default {
    name: 'alert-bar'
  }
</script>
<style scoped>
.top-fixed-alert{
  position:fixed;
  top:-4px;
  z-index:10000;
  width:100%
}
</style>
