<template>
  <v-app>
    <dashboard-side-navbar></dashboard-side-navbar>
    <dashboard-top-toolbar></dashboard-top-toolbar>
    <v-content>
      <v-container fluid fill-height>
        <router-view></router-view>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import 'vuetify/dist/vuetify.min.css'
import 'vue-croppa/dist/vue-croppa.css'

import DashboardSideNavbar from './components/DashboardSideNavbar'
import DashboardTopToolbar from './components/DashboardTopToolbar'
export default {
  name: 'Dashboard',
  components: {
    DashboardSideNavbar,
    DashboardTopToolbar
  },
  data () {
    return {
    }
  }
}
</script>
