<template>
  <div id="q-app">
    <router-view />
  </div>
</template>

<script>
import bus from '@/bus'
export default {
  name: 'App',
  created() {
    this.$store.dispatch('auth/initAuth').then(() => {
      bus.$emit('authSync', this.$store.getters['auth/isAuthorised'])
      // do something
    })
  }
}
</script>

<style>
</style>
