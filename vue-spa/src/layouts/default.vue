<template>
<div>
  <top-nav-bar />
  <router-view/>
</div>
</template>

<script>
import TopNavBar from '@/components/TopNavBar'
import SideNavBar from '@/components/SideNavBar'
export default {
  name: 'LayoutDefault',
  components: {
    TopNavBar,
    SideNavBar
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
</style>
