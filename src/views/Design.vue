<template>
  <div class="home">
    <div class="carousel-windows" :style="{padding: screenWidth <= 768 ? 0: '0 5.5%'}">
      <span class="carousel_prev" @click="prevCarousel('carousel_wrap1')"></span>
      <span class="carousel_next" @click="nextCarousel('carousel_wrap1')"></span>
      <div class="carousel-wrap">
        <v-carousel class="carousel-items" ref="carousel_wrap1" hide-delimiters :height="carouselHeight">
          <v-carousel-item v-for="item in 4" :key="item"></v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class="carousel-info" :style="{padding: screenWidth <= 768 ? '24px 16px': '24px 5.5%'}">
      <div class="info-item">
        <p>the 6th guangzhou triennial</p>
      </div>
      <div class="info-item">
        <p>Guangdong</p>
        <p>Exhibition Identity</p>
      </div>
      <div class="info-item">
        <p>Studio: another design</p>
        <p>Director: xxxxxx , xxxxx</p>
        <p>Graphic Design: xxxxxxxxxxxxx , xxxxxxxxxxx</p>
      </div>
      <div class="info-item">
        <p>Studio: another design</p>
        <p>Director: xxxxxx , xxxxx</p>
        <p>Graphic Design: xxxxxxxxxxxxx , xxxxxxxxxxx</p>
      </div>
    </div>
    <div class="carousel-windows" :style="{padding: screenWidth <= 768 ? 0: '0 5.5%'}">
      <span class="carousel_prev" @click="prevCarousel('carousel_wrap1')"></span>
      <span class="carousel_next" @click="nextCarousel('carousel_wrap1')"></span>
      <div class="carousel-wrap">
        <v-carousel class="carousel-items" ref="carousel_wrap1" hide-delimiters :height="carouselHeight">
          <v-carousel-item v-for="item in 4" :key="item"></v-carousel-item>
        </v-carousel>
      </div>
    </div>
    <div class="carousel-info" :style="{padding: screenWidth <= 768 ? '24px 16px': '24px 5.5%'}">
      <div class="info-item">
        <p>the 6th guangzhou triennial</p>
      </div>
      <div class="info-item">
        <p>Guangdong</p>
        <p>Exhibition Identity</p>
      </div>
      <div class="info-item">
        <p>Studio: another design</p>
        <p>Director: xxxxxx , xxxxx</p>
        <p>Graphic Design: xxxxxxxxxxxxx , xxxxxxxxxxx</p>
      </div>
      <div class="info-item">
        <p>Studio: another design</p>
        <p>Director: xxxxxx , xxxxx</p>
        <p>Graphic Design: xxxxxxxxxxxxx , xxxxxxxxxxx</p>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'Home',
  data () {
    return {
      screenWidth: document.body.clientWidth,
      items: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  },
  computed: {
    carouselHeight () {
      const { screenWidth } = this
      if (screenWidth < 768) {
        return Math.round(screenWidth / 1.7778)
      }

      if (screenWidth * 0.5 <= 720) {
        return screenWidth * 0.5
      }

      return 720
    }
  },
  methods: {
    prevCarousel (CarouselRef) {
      const carouselChildren = this.$refs[CarouselRef].$children
      carouselChildren[carouselChildren.length - 2].click(event)
    },
    nextCarousel (CarouselRef) {
      const carouselChildren = this.$refs[CarouselRef].$children
      carouselChildren[carouselChildren.length - 1].click(event)
    }
  },
  mounted () {
    const that = this
    window.addEventListener('resize', () => {
      const screenWidth = document.body.clientWidth
      that.screenWidth = screenWidth
    })
  }
}
</script>

<style lang="less">

.home{
  height: 100%;
  padding: 36px 0;
  background-color: white;

  .carousel-windows{
    position: relative;
    width: 100%;
    max-width: 1440px;
    max-height: 720px;
    margin: 0 auto;

    .carousel_prev,.carousel_next{
      width: 26px;
      height: 48px;
      background-size: 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: calc(50% - 20px);
      z-index: 1;
    }

    .carousel_prev{
      left: 3%;
      background-image: url('../assets/left.png');
      &:hover{
        background-image: url('../assets/left_red.png');
      }
    }

    .carousel_next{
      right: 3%;
      background-image: url('../assets/right.png');
      &:hover{
        background-image: url('../assets/right_red.png');
      }
    }

  }

  .carousel-wrap{
    width: 100%;
    max-width: 1280px;
    max-height: 720px;
    // padding: 0 41px;
    // position: relative;
    .carousel-items{
      width: 100%;
      height: 56.25% !important;
      max-width: 1280px;
      max-height: 720px;
      margin: 0 auto;
    }
  }
  .v-window-item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .v-window-item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

  .v-window__prev, .v-window__next{
    opacity: 0;
  }
}

.carousel-info{
  display: flex;
  // padding: 24px 46px;
  width: 100%;
  max-width: 1440px;
  max-height: 720px;
  margin: 0 auto;

  .info-item{
    width: 25%;
    display: flex;
    flex-direction: column;
    font-size: 12px;
    color: #000000;
    line-height:20px;

    p{
      margin-bottom:0;
    }
  }
}

@media screen and (max-width: 768px){
  .home{
    padding: 36px 0 0;

    .carousel_prev{
      left: 14px;
    }
    .carousel_next{
      right: 14px;
    }

    .carousel-info{
      display: flex;
      flex-direction: column;
      padding: 24px 16px;

      .info-item{
        width: 100%;
        margin-bottom: 18px;
      }
    }
  }
}
</style>
