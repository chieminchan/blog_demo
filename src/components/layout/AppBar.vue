<template>
    <v-app-bar app class="app-bar" height="72" :class="{'app-bar-is-unfold': unfold, 'app-bar-action-show': hideMenu}" flat color="rgb(236, 236, 236)" elevate-on-scroll scroll-target="#appMain">
      <v-toolbar-title>
        <span class="bar-icon">
          <img src="@/assets/logo.png" />
        </span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <div class="menu-action" @click="toggleMenu">
        <label class="ac-gn-menuicon-label">
          <span class="ac-gn-menuicon-bread ac-gn-menuicon-bread-top">
            <span class="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-top"></span>
          </span>
          <span class="ac-gn-menuicon-bread ac-gn-menuicon-bread-bottom">
            <span class="ac-gn-menuicon-bread-crust ac-gn-menuicon-bread-crust-bottom"></span>
          </span>
        </label>
      </div>

      <ul class="menu-list" :class="{'menu-list-unfold' :unfold}" @click="toggleMenu">
        <li class="menu-list-item">
          <router-link class="menu-link" to="/" :class="{'is-active': activePage === 'design'}">design</router-link>
        </li>
         <li class="menu-list-item">
           <router-link class="menu-link" to="/info" :class="{'is-active': activePage === 'info'}">info</router-link>
         </li>
      </ul>
    </v-app-bar>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      items: [
        { title: 'design' },
        { title: 'info' }
      ],
      activePage: this.$route.name,

      screenWidth: document.body.clientWidth,

      unfold: false
    }
  },
  computed: {
    hideMenu () {
      return this.screenWidth < 768
    }
  },
  methods: {
    toggleMenu () {
      if (this.hideMenu) {
        this.unfold = !this.unfold
      }
    }
  },
  mounted () {
    const that = this
    window.onresize = () => {
      return (() => {
        const screenWidth = document.body.clientWidth
        that.screenWidth = screenWidth
      })()
    }
  },
  watch: {
    $route (to, from) {
      this.activePage = to.name
    }
  }
}
</script>
<style type='text/less' lang='less'>
.app-bar{
  padding: 0 62px;
  transition: height .56s cubic-bezier(0.52, 0.16, 0.24, 1) !important;
  z-index:2 !important;

  .v-toolbar__content, .v-toolbar__extension{
    padding: 0
  }

  .menu-list{
    list-style: none;
    display: flex;
    padding-left: 0;
  }

  .menu-link{
    text-decoration: none;
    font-family: PingFangSC-Regular;
    font-size: 21px;
    color: #000000;
    font-weight: 600;
    padding-right: 40px;

    &:hover{
      color: rgba(244, 86,86);
    }
  }

  .is-active{
    color: gray;
    cursor: pointer;

    &:hover{
      color: gray;
    }
  }

  .menu-action{
    position: relative;
    width:40px;
    height: 36px;
    display: none;

    .ac-gn-menuicon-bread{
      position: absolute;
      top: 0;
      left: 0;
      width: 30px;
      height: 30px;
      transform: none;
      transition:transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
    }

    .ac-gn-menuicon-bread-crust {
        display: block;
        width: 21px;
        height: 1px;
        background: black;
        border-radius: 1px;
        position: absolute;
        left: 4px;
        transition: transform .1596s cubic-bezier(0.52, 0.16, 0.52, 0.84) .1008s;

        &-top {
          top: 14px;
          transform: translateY(-3px);
        }

        &-bottom{
          bottom: 14px;
          transform: translateY(3px);
        }
    }
  }

  &-action-show {
    padding: 0;
    .v-toolbar__content, .v-toolbar__extension{
      flex-wrap: wrap;
    }
    .menu-action {
      display: inline-block;
    }

    .menu-list{
      width: 100%;
      padding: 18px 14px 0;
      flex-direction: column;
      transition: visibility 0.3s linear;
      visibility: hidden;

      &-item{
        opacity: 0;
        transform: translateY(-44px);
        transition:
          opacity 0.522s cubic-bezier(0.25, 0.1, 0.25, 1),
          transform .3455s cubic-bezier(0.32, 0.08, 0.24, 1) .03s
      }
    }
    .menu-list-item{
      padding: 10px 15px;
      border-bottom: 1px solid #ccc;
    }

    .menu-link{
      font-size: 18px;
      font-weight: 500;
    }
  }

  &-is-unfold {
    height: 100% !important;
    .menu-action{
      .ac-gn-menuicon-bread{
        transition: transform .3192s cubic-bezier(0.04, 0.04, 0.12, 0.96) .1008s;
        &-top{
          transform: rotate(-45deg);
        }
        &-bottom{
          transform: rotate(45deg);
        }
      }

      .ac-gn-menuicon-bread-crust{
        transition: transform .1806s cubic-bezier(0.04, 0.04, 0.12, 0.96);
        &-top{
          transform: none;
        }
        &-bottom{
          transform: none;
        }
      }
    }

    .menu-list{
      visibility: visible;
      &-item{
        opacity: 1;
        transform: none;
      }
    }
  }
}
.bar-icon{
  width: 96px;
  height: 72px;
  display: inline-block;
  img{
    width: 100%;
  }
}

</style>
