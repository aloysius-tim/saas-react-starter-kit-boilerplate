<template>
  <v-list dense>
    <drawer-menu-item v-for="item in items" :key="item.title" :item="item" />
  </v-list>
</template>
<script>
import DrawerMenuItem from './DrawerMenuItem'
export default {
  props: ['mUser', 'mModerator', 'mManager', 'mAdmin', 'mSuperAdmin'],
  components: {
    DrawerMenuItem
  },
  data () {
    return {
      items: []
    }
  },
  watch: {
  },
  computed: {
    menuUser () {
      return (this.mUser) ? this.mUser : []
    },
    menuModerator () {
      return (this.mModerator) ? this.mModerator : []
    },
    menuManager () {
      return (this.mManager) ? this.mManager : []
    },
    menuAdmin () {
      return (this.mAdmin) ? this.mAdmin : []
    },
    menuSuperAdmin () {
      return (this.mSuperAdmin) ? this.mSuperAdmin : []
    },
    user () {
      return this.$store.getters['auth/getMe']
    }
  },
  created () {
    let segments = this.getSegments(this.menuUser)
    if (this.user.role === 'moderator') {
      segments = this.getSegments(this.menuUser, this.menuModerator)
    }
    if (this.user.role === 'manager') {
      segments = this.getSegments(this.menuUser, this.menuModerator, this.menuManager)
    }
    if (this.user.role === 'admin') {
      segments = this.getSegments(this.menuUser, this.menuModerator, this.menuManager, this.menuAdmin)
    }
    if (this.user.role === 'superadmin') {
      segments = this.getSegments(this.menuUser, this.menuModerator, this.menuManager, this.menuAdmin, this.menuSuperAdmin)
    }

    this.items = this.getItems(segments)
  },
  methods: {
    getItems (segments) {
      let items = []
      segments.filter(seg => {
        items.push({ heading: seg.heading, action: seg.action, actionTitle: seg.actionTitle })
        items.push(...seg.items)
      })
      return items
    },
    getSegments (...menus) {
      let segments = []
      menus.filter(menu => {
        menu.filter(seg => {
          const hasSegment = segments.find(el => el.heading === seg.heading)
          if (!hasSegment) {
            segments.push(seg)
          } else {
            segments[segments.indexOf(hasSegment)].items.push(...seg.items)
          }
        })
      })
      return segments
    }
  }
}
</script>
