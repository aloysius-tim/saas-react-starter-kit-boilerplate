<template>
<q-card>
  <q-card-title>
    Welcome guest
  </q-card-title>
  <q-card-separator />
  <q-card-main>
    <q-field icon="email" label="Your Email">
      <q-input type="email" v-model="email" />
    </q-field>
    <q-field icon="lock" label="Password">
      <q-input type="password" v-model="password" />
    </q-field>
  </q-card-main>
  <q-card-separator />
  <q-card-actions>
    <q-field>
      <q-btn label="Login" @click="doSubmit" />
    </q-field>
  </q-card-actions>
</q-card>
</template>
<script>
import bus from '@/bus'
export default {
  data () {
    return {
      email: '',
      password: '',
      ready: false
    }
  },
  created () {
    bus.$on('authSync', (status) => {
      if (status) {
        this.$router.push({ name: 'showlist' })
      }
    })
    if (this.$store.getters['auth/isAuthorised']) {
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    doSubmit () {
      this.$store.dispatch('auth/authorise', { email: this.email, password: this.password })
      .then(() => {
        this.ready = true
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>
