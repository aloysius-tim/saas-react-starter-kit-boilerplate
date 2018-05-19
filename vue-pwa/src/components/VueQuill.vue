<template>
<v-layout row wrap>
  <v-flex xs12>
    <v-card>
      <vue-editor
        useCustomImageHandler
        @imageAdded="handleImageAdded"
        :editorOptions="editorSettings" v-model="content" />
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
import { VueEditor, Quill } from 'vue2-editor'
import ImageResize from 'quill-image-resize-module'
import { axios } from '@/plugins/axios'
Quill.register('modules/imageResize', ImageResize)
export default {
  components: {
    VueEditor
  },
  watch: {
    content (val) {
      this.$emit('content', val)
    }
  },
  data () {
    return {
      content: ''
    }
  },
  methods: {
    handleImageAdded (file, Editor, cursorLocation, resetUploader) {
      // An example of using FormData
      // NOTE: Your key could be different such as:
      // formData.append('file', file)

      var formData = new FormData()
      formData.append('avatar', file)
      formData.append('findFace', true)
      axios({
        // output will be '/profile/update/avatar' square pixel, set on server
        url: '/profile/update/avatar',
        method: 'POST',
        data: formData
      }).then((result) => {
        let url = result.data.url // Get url from response
        Editor.insertEmbed(cursorLocation, 'image', url)
        resetUploader()
      }).catch((err) => {
        console.log(err)
      })
    }
  },
  computed: {
    editorSettings () {
      return {
        modules: {
          imageResize: {}
        }
      }
    }
  }
}
</script>
