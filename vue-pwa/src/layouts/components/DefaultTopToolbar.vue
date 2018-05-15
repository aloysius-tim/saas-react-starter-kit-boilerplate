<template>
  <v-toolbar
    :clipped-left="$vuetify.breakpoint.lgAndUp"
    color="blue darken-3"
    dark
    app
    fixed
    v-if="user"
  >
    <v-toolbar-title style="width: 300px" class="ml-0 pl-3">
      <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
      <span class="hidden-sm-and-down">Adonify</span>
    </v-toolbar-title>
    <v-text-field
      flat
      solo-inverted
      prepend-icon="search"
      label="Search"
      class="hidden-sm-and-down"
    ></v-text-field>
    <v-spacer></v-spacer>
    <v-btn icon>
      <v-icon>apps</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>notifications</v-icon>
    </v-btn>
    <v-menu offset-y>
      <v-btn icon flat slot="activator" large>
        <v-avatar size="32px" tile>
          <img
            :src="user.profile.remote_avatar"
            :alt="user.username"
          >
        </v-avatar>
      </v-btn>
      <v-list>
        <v-list-tile v-for="item in userMenu" :key="item.title" @click="item.action">
          <v-list-tile-title> <v-icon>{{ item.icon }}</v-icon> {{ item.title }}</v-list-tile-title>
        </v-list-tile>
      </v-list>
    </v-menu>
  </v-toolbar>
</template>
<script>
import bus from '@/bus'
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters({
      user: 'auth/getMe'
    })
  },
  created () {
    bus.$on('openDrawer', (status) => {
      if (this.drawer !== status) this.drawer = status
    })
  },
  watch: {
    drawer (val) {
      bus.$emit('openDrawer', val)
    }
  },
  data () {
    return {
      drawer: this.$vuetify.breakpoint.lgAndUp,
      userMenu: [
        { title: 'Profile', icon: 'person', action: () => {} },
        {
          title: 'Update Password',
          icon: 'lock',
          action: () => {
            this.$router.push({ name: 'update-password' })
          }
        },
        {
          title: 'Update Email',
          icon: 'email',
          action: () => {
            this.$router.push({ name: 'update-email' })
          }
        },
        {
          title: 'Logout',
          icon: 'exit_to_app',
          action: () => {
            bus.$emit('showWait', 'Logging you out...')
            this.$store.dispatch('auth/clearAuth').then(() => {
              bus.$emit('hideWait')
              this.$router.push({ name: 'login' })
            })
          }
        }
      ]
    }
  },
  name: 'App'
}
</script>
