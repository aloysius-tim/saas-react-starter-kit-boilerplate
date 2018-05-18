<template>
  <v-system-bar
   fixed app status
   color="outline warning"
   class="verify-bar"
   v-if="user && !user.verified && $route.name!='verify-email'">
        <v-layout @click="$router.push({name: 'resend-email-verification-code'})" justify-center align-center>
            <v-icon>info</v-icon>Email not verified, click hare to resend code.
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
