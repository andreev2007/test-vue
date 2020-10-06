<template>
  <div id="app">
    <Navbar/>
      <router-view/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";

export default {
  components: {Footer, Navbar}
}
</script>

<style>
body {
  margin: 0;
}
</style>
