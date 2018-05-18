<template>
<div class="main-warp">
  <b-container>
    <div class="row">
      <ul class="nav">
      <li class="nav-item">
        <a class="nav-link disabled" href="#">20 July, 2021 10:10 AM</a>
      </li>
    </ul>
    <ul class="nav ml-auto">
      <li class="nav-item">
        <a class="nav-link" href="#">Link</a>
      </li>
      <li class="nav-item">
        <a class="nav-link disabled" href="#">DCMA</a>
      </li>
    </ul>
    </div>
  </b-container>
  <div class="container">
    <header class="pb-3">
      <b-card>Welcome</b-card>
    </header>
  </div>
  <main role="main" class="container">
    <b-navbar toggleable="md" type="dark" class="mb-3" sticky variant="primary">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand href="#">NavBar</b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">
        <b-navbar-nav>
          <b-nav-item href="#">Link</b-nav-item>
        </b-navbar-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item-dropdown text="Lang" right>
            <b-dropdown-item href="#">EN</b-dropdown-item>
            <b-dropdown-item href="#">ES</b-dropdown-item>
            <b-dropdown-item href="#">RU</b-dropdown-item>
            <b-dropdown-item href="#">FA</b-dropdown-item>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right>
            <!-- Using button-content slot -->
            <template slot="button-content">
              <em>User</em>
            </template>
            <b-dropdown-item href="#">Profile</b-dropdown-item>
            <b-dropdown-item href="#">Signout</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view></router-view>
  </main><!-- /.container -->
  <footer class="container">
    <p>Blog template built for.</p>
    <p>
      <a href="#">Back to top</a>
    </p>
  </footer>
</div>
</template>
<script>
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'Default',
  components: {
  },
  data: () => ({
    offsetTop: 0,
    stick: false
  }),

  methods: {
    onScroll (e) {
      this.offsetTop = window.pageYOffset || document.documentElement.scrollTop
      this.stick = (this.offsetTop > 70)
    }
  }
}
</script>
<style>

</style>
