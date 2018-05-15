<template>
  <router-view v-if="!$store.getters['auth/isAuthorised']" />
</template>
<script>
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
