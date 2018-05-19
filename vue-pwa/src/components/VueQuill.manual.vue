<template>
<v-layout row wrap>
  <v-flex xs12>
    <v-card>
      <vue-editor :editorOptions="editorSettings" v-model="content" />
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
import { VueEditor, Quill } from 'vue2-editor'
import { ImageDrop } from 'quill-image-drop-module'
import ImageResize from 'quill-image-resize-module'
Quill.register('modules/imageDrop', ImageDrop)
Quill.register('modules/imageResize', ImageResize)
export default {
  components: {
    VueEditor
  },
  data () {
    return {
      content: ''
    }
  },
  computed: {
    editorSettings () {
      return {
        modules: {
          imageDrop: true,
          imageResize: {}
        }
      }
    }
  }
}
</script>
