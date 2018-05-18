<template>
<v-layout row wrap>
  <v-flex  xs12 sm4>
    <v-card dark color="primary">
      <v-card-text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis quod sunt voluptate corporis! Odio culpa assumenda perferendis consequuntur impedit maxime consectetur voluptates voluptatem quod a. Nobis eaque optio sapiente consectetur!</v-card-text>
    </v-card>
  </v-flex>
  <v-flex xs12 sm8>
    <v-card>
      <v-container v-bind="{ [`grid-list-${size}`]: true }" fluid>
          <v-layout row wrap>
            <v-flex
              v-for="n in 27"
              :key="n"
              sm6 md4 lg3
            >
              <v-card flat tile>
                <v-card-media
                  :src="`https://picsum.photos/150/300?image=${Math.floor(Math.random() * 100) + 1}`"
                  height="150px"
                ></v-card-media>
                <v-card-text>
                  <span class="sub-title">Lorem ipsum dolor sit amet consectetur adipisicing.</span>
                </v-card-text>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
    </v-card>
  </v-flex>
</v-layout>
</template>
<script>
export default {
  data () {
    return {
      size: 3
    }
  }
}
</script>
