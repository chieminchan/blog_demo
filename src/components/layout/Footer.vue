<template>
  <v-footer class="app-footer" :fixed="true" color="#ECECEC">
    <p class="lience">© 2020 zlx All rights reserved.</p>
    <p class="concat">
      <img class="email-icon" src="@/assets/mail.png"/>
      <span class="email">zlx@nite.design</span>
    </p>
  </v-footer>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  },
  computed: {},
  methods: {},
  mounted () {}
}
</script>
<style type='text/less' lang='less'>
.app-footer.v-footer {
  display:flex;
  align-items: center;
  padding: 12px 16px;

  .email-icon{
    width:24px;
    height: 16px;
    margin-right: 7px;
  }

  p{
    font-size: 18px;
  }

  .lience, .concat{
    display:flex;
    align-items: center;
    margin: 0;
  }

  .lience{
    margin-right:113px;
    // min-width: 254px;
    // text-align: center
  }
}

@media screen and(max-width: 420px){
  .app-footer.v-footer {

    .lience{
      margin: 0 0 5px 0;
    }
  }
}
</style>
