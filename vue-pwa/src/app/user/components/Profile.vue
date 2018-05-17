<template>
<v-layout row wrap>
  <v-flex xs12 md4 mb-2>
    <v-card v-if="user">
      <v-card-media
          class="white--text"
          height="300px"
          :src="user.profile.avatar + '?size=300'"
        >
        <v-layout align-end justify-start>
          <avatar-upload-module></avatar-upload-module>
        </v-layout>
        <v-layout align-end justify-end>
          <v-btn icon color="secondary" @click.stop="showAvatarCropDialog = true"><v-icon>crop</v-icon></v-btn>
        </v-layout>
      </v-card-media>
        <v-card-title primary-title>
          <div>
            <div class="title">
              <v-tooltip bottom v-if="user.verified">
                <v-icon slot="activator" dark color="green">verified_user</v-icon>
                <span>Email Verified.</span>
              </v-tooltip>
              <v-tooltip bottom v-else>
                <v-icon slot="activator" dark color="secondary">verified_user</v-icon>
                <span>Email not verified</span>
              </v-tooltip>
              {{ user.email }}
            </div>
            <span class="grey--text">{{ user.username }} ({{ user.role }})</span>
            <span class="grey--text">{{ user.first_name }} {{ user.last_name }}</span>
          </div>
        </v-card-title>
    </v-card>
  </v-flex>
  <v-flex xs12 md7 offset-md1>
    <v-card v-if="user">
        <v-card-title>
          <span class="headline">User Profile</span>
          <v-spacer></v-spacer>
          <v-menu bottom left>
            <v-btn slot="activator" icon>
              <v-icon>more_vert</v-icon>
            </v-btn>
            <v-list>
              <v-list-tile @click="$router.push({ name: 'update-email'})">
                <v-list-tile-title>Update Email</v-list-tile-title>
              </v-list-tile>
              <v-list-tile @click="$router.push({ name: 'update-password'})">
                <v-list-tile-title>Update Password</v-list-tile-title>
              </v-list-tile>
            </v-list>
          </v-menu>
        </v-card-title>
        <v-card-text>
          <v-container grid-list-md>
            <v-layout wrap>
              <v-flex xs12 sm6 md4>
                <v-text-field label="First name" required></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field label="Middle name" hint="example of helper text only on focus"></v-text-field>
              </v-flex>
              <v-flex xs12 sm6 md4>
                <v-text-field
                  label="Last name"
                  hint="example of persistent helper text"
                  persistent-hint
                  required
                ></v-text-field>
              </v-flex>
              <v-flex xs12>
                <v-text-field label="About Me"></v-text-field>
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
          <v-btn color="primary" @click.native="dialog = false">Save</v-btn>
        </v-card-actions>
      </v-card>
  </v-flex>
  <avatar-uplaod-dialog :initImage="user.profile.avatar" :show="showAvatarCropDialog" @closed="showAvatarCropDialog = false" />
</v-layout>
</template>
<script>
import { mapGetters } from 'vuex'
import AvatarUploadModule from './AvatarUploadModule'
import AvatarUplaodDialog from './AvatarUplaodDialog'
export default {
  components: {
    AvatarUploadModule,
    AvatarUplaodDialog
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
      e1: null,
      password: '',
      showAvatarCropDialog: null
    }
  },
  methods: {
  }
}
</script>
