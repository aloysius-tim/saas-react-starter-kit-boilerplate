<template>
  <v-system-bar
   fixed app status 
   color="outline warning" 
   class="verify-bar"
   v-if="user && !user.verified && $route.name!='verify-email'">
        <v-layout @click="$router.push({name: 'verify-email'})" justify-center align-center>
            <v-icon>info</v-icon> Please verify your email to use our services.
        </v-layout>
    </v-system-bar>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  computed: {
    ...mapGetters({
      user: 'auth/getMe'
    })
  }
}
</script>
<style scoped>
.verify-bar{
  cursor: pointer;
}
</style>
