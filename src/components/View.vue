<template>
  <div class="block">
    <img :src="src" style="width: 100%; height: 100%;">
    <div v-for="image in imageParameters" :key="image.id">
      <div>
        <div>{{ image.id }} - {{ image.name }}</div>
        <div v-if="image.favourite === true">Favourite</div>
        <div v-else-if="image.favourite !== true">Not favourite</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "View",
  data() {
    return {
      imageParameters: null,
      src: '',
    }
  },
  mounted() {
    this.src = 'https://portal-tb.lynxx.co/api-test/image/' + this.$route.params.id;
    axios
        .get('https://portal-tb.lynxx.co/api-test/image/list')
        .then(response => (this.imageParameters = response.data.filter((item) => item.id === this.$route.params.id)))
  },
  methods: {}
}
</script>

<style lang="scss">
.block {
  margin: auto;
  width: 50%;
}
</style>
