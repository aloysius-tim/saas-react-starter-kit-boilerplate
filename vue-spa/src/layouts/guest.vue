<template>
  <div class="main">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'LayoutDefault',
  components: {
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
.main {
  text-align: center;
  height:100%;
  width: 400px;
  max-width: 90%;
  padding: 15px;
  margin: 0 auto;
}

.form-signin {
  margin: 50% auto
}

.form-signin .checkbox {
  font-weight: 400;
}

.form-signin .form-control {
  position: relative;
  box-sizing: border-box;
  height: auto;
  padding: 10px;
  font-size: 16px;
}

.form-signin .form-control:focus {
  z-index: 2;
}

.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}

.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}

</style>
