<template>
  <v-navigation-drawer
    :clipped="$vuetify.breakpoint.lgAndUp"
    v-model="drawer"
    fixed
    app >
    <drawer-menu-list :mUser="menuUser" :mModerator="menuModerator" :mManager="menuManager" :mAdmin="menuAdmin" :mSuperAdmin="menuSuperAdmin"/>
  </v-navigation-drawer>
</template>
<script>
import bus from '@/bus'
import DrawerMenuList from './partials/DrawerMenuList'
export default {
  components: {
    DrawerMenuList
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
      drawer: null,
      menuUser: [
        {
          heading: 'General',
          action: () => {},
          items: [
            { icon: 'person', text: 'Profile', action: () => this.$router.push({ name: 'user-profile' }) }
          ]
        }
      ],
      menuModerator: [
        {
          heading: 'Manage',
          action: () => {},
          items: [
            { icon: 'person', text: 'Settings', action: () => this.$router.push({ name: 'user-profile' }) },
            {
              icon: 'keyboard_arrow_up',
              'icon-alt': 'keyboard_arrow_down',
              text: 'Website',
              opened: false,
              children: [
                { icon: 'group', text: 'Manage users', action: () => {} },
                { icon: 'add', text: 'Create user', action: () => {} }
              ]
            }
          ]
        }
      ],
      menuManager: [],
      menuAdmin: [],
      menuSuperAdmin: [
        {
          heading: 'General',
          action: () => {},
          items: [
            { icon: 'people', text: 'Customers', action: () => this.$router.push({ name: 'user-profile' }) }
          ]
        },
        {
          heading: 'Manage',
          action: () => {},
          items: [
            { icon: 'person', text: 'Extra 1', action: () => this.$router.push({ name: 'user-profile' }) }
          ]
        }
      ]
    }
  }
}
</script>