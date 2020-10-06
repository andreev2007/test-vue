<template>
  <div class="grid-container">
    <div class="grid-item" v-for="image in images" :key="image.id">
      <div>
        <img src="" :style="{'width': image.resolution.width, 'height': image.resolution.height }" alt="">
        <router-link :to="'view/' + image.id">{{ image.name }}</router-link>
        <div>{{ image.favourite }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Favourite",
  data() {
    return {
      images: [],
    }
  },
  mounted() {
    axios
        .get('https://portal-tb.lynxx.co/api-test/image/list')
        .then(response => (this.images = response.data.filter((item) => item.favourite === true)))
  }
}
</script>

<style lang="scss">

.grid-container {
  margin: 0;
  padding: 0;
  display: grid;
  justify-items: center;
  grid-template-columns: 25% 25% 25% 25%;
  grid-template-rows: 25% 25% 25% 25%;
  gap: 15px 10px;

  .grid-item {
    margin: 0;
    display: grid;
    padding: 10px;
    font-size: 20px;
    text-align: center;

  }
}

@media screen and (max-width: 550px) {
  .grid-container {
    grid-template-columns: 50% 50%;
  }
}
</style>
