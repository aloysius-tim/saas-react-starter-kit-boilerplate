<template>
<v-app>
  <alert-bar></alert-bar>
  <fullscreen-wait></fullscreen-wait>
  <verify-status-bar></verify-status-bar>
  <router-view></router-view>
</v-app>
</template>
<script>
import FullscreenWait from '@/components/FullscreenWait'
import AlertBar from '@/components/AlertBar'
import VerifyStatusBar from '@/components/VerifyStatusBar'
export default {
  components: {
    VerifyStatusBar,
    AlertBar,
    FullscreenWait
  },
  data () {
    return {
    }
  }
}
</script>
