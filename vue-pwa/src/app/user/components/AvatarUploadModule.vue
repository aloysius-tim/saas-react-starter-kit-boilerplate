<template>
  <v-tooltip bottom>
    <v-btn slot="activator" icon color="secondary" @click="openUpload">
      <v-icon>camera_alt</v-icon>
      <form enctype="multipart/form-data" @submit.prevent="doUpload()">
        <input
          type="file"
          id="file"
          @change="updatePreview"
          style="display:none;" >
      </form>
    </v-btn>
    <span>Update profile photo.</span>
  </v-tooltip>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/getMe'
    })
  },
  data () {
    return {
      showDialog: false,
      imagePreview: null
    }
  },
  methods: {
    ...mapActions({
      updateAvatar: 'user/profileUpdateAvatar'
    }),
    openUpload () {
      document.getElementById('file').click()
    },
    updatePreview (e) {
      var reader
      var files = e.target.files
      if (files.length === 0) {
        console.log('Empty')
      }
      reader = new FileReader()
      reader.onload = (e) => {
        this.imagePreview = e.target.result
      }
      if (files[0]) {
        reader.readAsDataURL(files[0])
        this.doUpload()
      }
    },

    doUpload () {
      var imagefile = document.querySelector('#file')
      this.updateAvatar({ imagefile: imagefile, context: this, findFace: true })
    }
  }
}
</script>
