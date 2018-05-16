<template>
  <v-list dense v-if="user">
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
      menuSegments: []
    }
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
    },
    items () {
      this.sortMenuItems(this.menuUser)

      if (this.user.role === 'moderator') {
        this.sortMenuItems(this.menuModerator)
      }
      if (this.user.role === 'manager') {
        this.sortMenuItems(this.menuModerator)
        this.sortMenuItems(this.menuManager)
      }
      if (this.user.role === 'admin') {
        this.sortMenuItems(this.menuModerator)
        this.sortMenuItems(this.menuManager)
        this.sortMenuItems(this.menuAdmin)
      }
      if (this.user.role === 'superadmin') {
        this.sortMenuItems(this.menuModerator)
        this.sortMenuItems(this.menuManager)
        this.sortMenuItems(this.menuAdmin)
        this.sortMenuItems(this.menuSuperAdmin)
      }
      return this.getSortedMenu()
    }
  },
  methods: {
    getSortedMenu () {
      let items = []
      this.menuSegments.filter(seg => {
        items.push({ heading: seg.heading, action: seg.action })

        seg.items.filter(itm => {
          items.push(itm)
        })
      })
      console.log(items.length)
      return items
    },
    sortMenuItems (menu) {
      menu.filter(seg => {
        const hasSegment = this.menuSegments.find(el => el.heading === seg.heading)
        if (!hasSegment) {
          this.menuSegments.push(seg)
        } else {
          this.menuSegments.map(el => {
            if (el.heading === seg.heading) {
              el.items.push(...seg.items)
            }
            return el
          })
        }
      })
      return this.menuSegments
    }
  }
}
</script>
