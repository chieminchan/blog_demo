<template>
  <v-app class="v-app">
    <router-view></router-view>
  </v-app>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style lang="less">
.v-app{
  height: 100%;

  .v-application--wrap{
    height: 100vh;
  }
}
</style>
