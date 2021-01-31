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
.v-app {
  height: 100%;
  overflow: hidden;

  .v-application--wrap{
    height: 100%;
    overflow: hidden;
  }
}
</style>
