<template>
<v-layout align-center justify-center>
  <v-flex xs12 sm8 md4>
    <form @submit.prevent="doSubmit">
      <v-card class="elevation-12">
        <v-toolbar dark color="primary">
          <v-toolbar-title>Update Email</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-tooltip bottom>
            <v-btn
              slot="activator"
              @click="$router.push({ name: 'user-profile' })"
              icon
              large
              target="_blank"
            >
              <v-icon large>person</v-icon>
            </v-btn>
            <span>Profile</span>
          </v-tooltip>
        </v-toolbar>
        <v-card-text>
          <v-form>
            <v-text-field prepend-icon="email" name="email" v-model="email" label="New Email" type="email"></v-text-field>
            <v-text-field prepend-icon="lock" name="password" v-model="password" label="Current Password" type="password"></v-text-field>
          </v-form>
        </v-card-text>
        <v-card-actions>
          <v-btn type="submit" :loading="busy" color="primary">Update Email</v-btn>
          <v-spacer></v-spacer>
          <v-btn color="secondery" :disabled="busy" @click="$router.push({ name: 'user-profile' })">Cancel</v-btn>
        </v-card-actions>
      </v-card>
    </form>
  </v-flex>
</v-layout>
</template>
<script>
import { redirectIntended } from '@/plugins/helpers'
export default {
  data () {
    return {
      busy: false,
      password: '',
      email: ''
    }
  },
  created () {
  },
  methods: {
    doSubmit () {
      this.busy = true
      this.$store.dispatch('auth/updateEmail', { password: this.password, email: this.email }).then(() => {
        this.busy = false
        redirectIntended()
      }).catch(() => {
        this.busy = false
      })
    }
  }
}
</script>
