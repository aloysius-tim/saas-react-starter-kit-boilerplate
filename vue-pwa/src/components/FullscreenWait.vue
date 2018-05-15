<template>
  <v-dialog transition="fade-transition" v-model="showWait" persistent fullscreen>
    <div class="wait-box">
        <v-progress-circular indeterminate v-bind:size="70" v-bind:width="1" ></v-progress-circular>
        <h3 class="sub-title">{{ msg }}</h3>
    </div>
  </v-dialog>
</template>
<script>
import bus from '@/bus'
export default {
  name: 'fullscreen-wait',
  data () {
    return {
      showWait: false,
      msg: 'Please wait...'
    }
  },
  created () {
    bus.$on('hideWait', () => {
      this.showWait = false
    })

    bus.$on('showWait', (msg = false) => {
      this.msg = (msg.length) ? msg : 'Please wait...'
      this.showWait = true
    })
  }
}
</script>

<style scoped>
.wait-box {
    width: 100vw;
    height: 100vh;
    padding-top:35vh;
    text-align: center;
    background: rgba(128, 128, 128, .3);
}
</style>
