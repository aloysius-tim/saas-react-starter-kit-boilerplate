<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md4>
    <form @submit.prevent="doSubmit">
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Resend Verification Code</v-toolbar-title>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field disabled prepend-icon="email" name="email" :value="user.email" label="Email" type="email"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn type="submit" :loading="busy" color="primary">Send Email</v-btn>
          <v-spacer></v-spacer>
        </v-card-actions>
      </v-card>
    </form>
  </v-flex>
</v-layout>
</template>
<script>
// import bus from '@/bus'
import { redirectIntended } from '@/plugins/helpers'
export default {
  data () {
    return {
      busy: false
    }
  },
  computed: {
    user () {
      return this.$store.getters['auth/getMe']
    }
  },
  created () {
  },
  methods: {
    doSubmit () {
      this.busy = true
      this.$store.dispatch('auth/resendEmailVerificationCode', { email: this.user.email }).then(() => {
        this.busy = false
        redirectIntended()
      }).catch(() => {
        this.busy = false
      })
    }
  }
}
</script>
