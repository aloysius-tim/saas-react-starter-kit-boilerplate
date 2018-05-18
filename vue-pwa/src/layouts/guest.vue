<template>
  <v-app>
    <v-content>
      <v-container fluid fill-height>
        <router-view v-if="!$store.getters['auth/isAuthorised']" />
      </v-container>
    </v-content>
  </v-app>
</template>
<script>
import 'vuetify/dist/vuetify.min.css'
import bus from '@/bus'
import { redirectIntended } from '@/plugins/helpers'
export default {
  data () {
    return {
    }
  },
  mounted () {
    bus.$on('authReady', () => {
      if (this.$store.getters['auth/isAuthorised']) {
        redirectIntended()
      }
    })
  }
}
</script>
