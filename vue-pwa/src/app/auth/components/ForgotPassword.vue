<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md4>
    <form @submit.prevent="doSubmit">
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Forgot password</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <v-btn
              slot="activator"
              @click="$router.push({ name: 'signup' })"
              icon
              large
              target="_blank"
            >
              <v-icon large>person</v-icon>
            </v-btn>
            <span>Create an account</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="email" name="email" v-model="email" label="Email" type="email"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" :loading="busy" color="primary">Send instructions</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="secondery" :disabled="busy" @click="$router.push({ name: 'login' })">Login</v-btn>
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
      busy: false,
      email: ''
    }
  },
  created () {
  },
  methods: {
    doSubmit () {
      this.busy = true
      this.$store.dispatch('auth/forgotPassword', { email: this.email }).then(() => {
        this.busy = false
        redirectIntended()
      }).catch(() => {
        this.busy = false
      })
    }
  }
}
</script>
