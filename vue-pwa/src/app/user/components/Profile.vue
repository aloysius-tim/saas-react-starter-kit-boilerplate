<template>
<v-layout row wrap>
  <v-flex xs12 mb-2>
    <v-card v-if="user">
      <v-card-actions>
        <v-card-title primary-title>
          <div class="headline">Profile</div>
        </v-card-title> 
        <v-spacer></v-spacer>
        <v-btn flat icon><v-icon>edit</v-icon></v-btn>
      </v-card-actions>
      <v-card-media
          :src="user.profile.avatar"
          height="300px"
        >
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="headline">{{ user.email }}</div>
            <span class="grey--text">{{ user.username }} ({{ user.role }})</span>
            <span class="grey--text">{{ user.first_name }} {{ user.last_name }}</span>
          </div>
        </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12>
    <v-card v-if="user">
        <v-card-title>
          <span class="headline">User Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal first name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Legal middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Legal last name"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Email" required></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="Password" type="password" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['0-17', '18-29', '30-54', '54+']"
                  label="Age"
                  required
                ></v-select>
              </v-flex>
              <v-flex xs12 sm6>
                <v-select
                  :items="['Skiing', 'Ice hockey', 'Soccer', 'Basketball', 'Hockey', 'Reading', 'Writing', 'Coding', 'Basejump']"
                  label="Interests"
                  multiple
                  autocomplete
                  chips
                ></v-select>
              </v-flex>
            </v-layout>
          </v-container>
          <small>*indicates required field</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Close</v-btn>
          <v-btn color="blue darken-1" flat @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
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
