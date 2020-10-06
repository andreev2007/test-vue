<template>
  <div id="nav">
    <router-link to="/">Main</router-link>
    <router-link to="/favourite">Favourite</router-link>
  </div>
</template>

<script>
export default {
  name: "Navbar"
}
</script>

<style lang="scss" scoped>

#nav {
  padding: 30px;
  display: flex;
  justify-content: space-evenly;
  background: #fcf8f8;
  margin: 0;
  margin-top: 20px;
  bottom: 0;
  position: fixed;
  width: 100%;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #2c3e50;
    }
  }
}
</style>
