<template>
<div id="app-page">
    <AppBar></AppBar>
    <v-main class="app-main" id="appMain">
      <v-container>
        <router-view></router-view>
      </v-container>
    </v-main>
    <Footer></Footer>
</div>
</template>

<script>
import AppBar from './AppBar.vue'
import Footer from './Footer.vue'

export default {
  components: { AppBar, Footer },
  data () {
    return {}
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>
<style type='text/less' lang='less'>
#app-page{
  height: 100%;
  overflow: hidden;
}

.app-main{
  height: 94%;
  overflow-y: auto;
}

.app-main .container{
  min-width: 100%;
  height: 100%;
  padding: 0;
}

@media screen and (max-width: 411px){
.app-main .container{
    padding: 0 0;
  }
}
</style>
