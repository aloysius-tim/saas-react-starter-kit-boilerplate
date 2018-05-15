<template>
  <nav class="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
    <a class="navbar-brand col-sm-3 col-md-2 mr-0" href="#">Adonis JWT</a>
    <input class="form-control form-control-dark w-100" type="text" placeholder="Search" aria-label="Search">
    <ul class="navbar-nav px-3">
      <li class="nav-item text-nowrap">
        <a class="nav-link" @click="doLogout()" href="#">Sign out</a>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
    doLogout () {
      this.$store.dispatch('auth/clearToken').then(() => {
        this.$router.push({ name: 'login' })
      }).catch(() => {
        this.$router.push({ name: 'login' })
      })
    }
  }
}
</script>
<style scoped>
</style>
