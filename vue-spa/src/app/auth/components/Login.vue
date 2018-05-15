<template>
<form class="form-signin" @submit.prevent="doSubmit">
  <h1 class="h3 mb-3 font-weight-normal">Please sign in</h1>
  <label for="inputEmail" class="sr-only">Email address</label>
  <input type="email" id="inputEmail" v-model="email" class="form-control" placeholder="Email address" required autofocus>
  <label for="inputPassword" class="sr-only">Password</label>
  <input type="password" id="inputPassword" v-model="password" class="form-control" placeholder="Password" required>
  <div class="checkbox mb-3">
    <label>
      <input type="checkbox" value="remember-me"> Remember me
    </label>
  </div>
  <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
  <p class="mt-5 mb-3 text-muted">&copy; 2017-2018</p>
</form>
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
        this.$router.push({ name: 'home' })
      }
    })
    if (this.$store.getters['auth/isAuthorised']) {
      this.$router.push({ name: 'home' })
    }
  },
  methods: {
    doSubmit () {
      this.$store.dispatch('auth/authorise', { email: this.email, password: this.password }).then(() => {
        this.ready = true
        this.$router.push({ name: 'home' })
      })
    }
  }
}
</script>
