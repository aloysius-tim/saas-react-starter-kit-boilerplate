<template>
  <v-app>
    <default-side-navbar></default-side-navbar>
    <default-top-toolbar></default-top-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import DefaultSideNavbar from './components/DefaultSideNavbar'
import DefaultTopToolbar from './components/DefaultTopToolbar'
export default {
  name: 'Default',
  components: {
    DefaultSideNavbar,
    DefaultTopToolbar
  },
  data () {
    return {
    }
  }
}
</script>
