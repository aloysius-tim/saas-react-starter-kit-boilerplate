<template>
  <v-dialog v-model="showDialog" max-width="400px">
    <v-card>
      <v-card-title>
        <h3 class="headline">Upload Avatar</h3>
        <v-spacer></v-spacer>
      </v-card-title>
      <v-card-text>
        <v-layout align-center justify-center>
          <croppa
          v-model="avatarCroppa"
          :width="300"
          :height="300"
          :prevent-white-space="true"
          :initial-image="''+initImage+''"
          ></croppa>
        </v-layout>
      </v-card-text>
      <v-card-actions>
        <v-btn color="primary" block @click.stop="uploadCroppedImage">Upload Avatar</v-btn>
        <v-spacer></v-spacer>
        <v-btn color="secondary" block @click.stop="showDialog = false">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
import { axios } from '@/plugins/axios'
import bus from '@/bus'
export default {
  props: ['show', 'initImage'],
  components: {
  },
  watch: {
    show (val) {
      this.showDialog = val
    },
    showDialog (val) {
      if (!val) this.$emit('closed')
    }
  },
  data () {
    return {
      avatarCroppa: {},
      showDialog: null
    }
  },
  methods: {
    uploadBlob (blob) {
      bus.$emit('showWait', 'uploading...')
      let data = new FormData()
      data.append('avatar', blob)
      axios.post('profile/update/avatar', data, { header: {'Content-Type': 'multipart/form-data'} }).then(response => {
        this.$store.dispatch('auth/fetchMe')
        bus.$emit('hideWait')
        this.showDialog = false
        console.log('response', response)
      }).catch(error => {
        bus.$emit('hideWait')
        console.log('error', error)
      })
    },
    uploadCroppedImage (type = 'image/jpeg', quality = 0.8) {
      this.avatarCroppa.generateBlob(blob => this.uploadBlob(blob), type, quality)
    }
  }
}
</script>
