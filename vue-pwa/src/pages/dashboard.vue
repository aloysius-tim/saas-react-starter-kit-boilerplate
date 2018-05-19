<template>
<v-layout row wrap>
  <v-flex xs12 md6>
    <v-card>
      <vue-quill @content="(c) => content = c" />
    </v-card>
  </v-flex>
  <v-flex xs12 md6>
    <v-card>
      <v-card-text v-html="content"></v-card-text>
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
import VueQuill from '../components/VueQuill'
export default {
  components: {
    VueQuill
  },
  data () {
    return {
      content: null
    }
  }
}
</script>
