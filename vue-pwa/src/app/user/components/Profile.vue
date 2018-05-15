<template>
<v-layout>
  <v-flex sm12 md4>
    <v-card v-if="user">
      <v-card-media
          :src="user.profile.avatar"
          height="300px"
        >
        </v-card-media>
      <v-card-title primary-title>
        <div>
          <div class="headline">{{ user.email }}</div>
          <span class="grey--text">{{ user.role }}</span>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
  <v-flex sm12 md8 offset-md1>
      <v-card>
        <v-card-actions>
          <h3 class="card-title">Profile</h3>
          <v-spacer></v-spacer>
          <v-btn flat icon><v-icon>edit</v-icon></v-btn>
        </v-card-actions>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ user.username }}</div>
            <span class="grey--text">{{ user.first_name }} {{ user.last_name }}</span>
          </div>
        </v-card-title>
      </v-card>
    </v-flex>
    
</v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  components: {
  },
  computed: {
    ...mapGetters({
      user: 'auth/getMe'
    })
  },
  data () {
    return {
      busy: false,
      email: '',
      password: ''
    }
  },
  methods: {
  }
}
</script>
