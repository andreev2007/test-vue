<template>
  <div>
    <img :src="src" style="width: 100%; height: 100%">
  </div>
</template>

<script>
export default {
  name: "View",
  data() {
    return {
      image: null,
      src: '',
    }
  },
  mounted() {
    this.src = 'https://portal-tb.lynxx.co/api-test/image/' + this.$route.params.id;
  },
  methods: {}
}
</script>

<style scoped>

</style>
