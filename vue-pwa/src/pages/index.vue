<template>
<b-row>
  <b-col>
    <b-card v-for="i in 20" :key="i" title="Card Title"
            :img-src="'https://picsum.photos/600/300/?image=4' + i"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2">
      <p class="card-text">
        <b-btn @click="$router.push({ name: 'login' })">login</b-btn>
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-col>
  <b-col>
    <b-card v-for="i in 20" :key="i" title="Card Title"
            :img-src="'https://picsum.photos/600/300/?image=1' + i"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-col>
  <b-col>
    <b-card v-for="i in 20" :key="i" title="Card Title"
            :img-src="'https://picsum.photos/600/300/?image=4' + i"
            img-alt="Image"
            img-top
            tag="article"
            class="mb-2">
      <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
      </p>
      <b-button href="#" variant="primary">Go somewhere</b-button>
    </b-card>
  </b-col>
</b-row>
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
