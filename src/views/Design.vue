<template>
  <div class="home">
    <div class="carousel-wrap">
      <span class="carousel_prev" @click="prevCarousel('carousel_wrap1')"></span>
      <span class="carousel_next" @click="nextCarousel('carousel_wrap1')"></span>
      <v-carousel ref="carousel_wrap1" hide-delimiters height="720">
        <v-carousel-item
          v-for="item in 4"
          :key="item"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="carousel-info">
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
    <div class="carousel-wrap">
      <span class="carousel_prev" @click="prevCarousel('carousel_wrap2')"></span>
      <span class="carousel_next" @click="nextCarousel('carousel_wrap2')"></span>
      <v-carousel ref="carousel_wrap2" hide-delimiters height="720">
        <v-carousel-item
          v-for="item in 4"
          :key="item"
        ></v-carousel-item>
      </v-carousel>
    </div>
    <div class="carousel-info">
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
  methods: {
    prevCarousel (CarouselRef) {
      const carouselChildren = this.$refs[CarouselRef].$children
      carouselChildren[carouselChildren.length - 2].click(event)
    },
    nextCarousel (CarouselRef) {
      const carouselChildren = this.$refs[CarouselRef].$children
      carouselChildren[carouselChildren.length - 1].click(event)
    }
  }
}
</script>

<style lang="less">

.home{
  padding: 106px 40px 0;

  .carousel-wrap{
    // height: 720px;
    padding: 0 46px;
    position: relative;

    .carousel_prev,.carousel_next{
      width: 26px;
      height: 48px;
      background-size: 100%;
      background-repeat: no-repeat;
      position: absolute;
      top: calc(50% - 20px);
    }

     .carousel_prev{
       left: 0;
       background-image: url('../assets/left.png');
        &:hover{
          background-image: url('../assets/left_red.png');
        }
    }

    .carousel_next{
       right: 0;
       background-image: url('../assets/right.png');
        &:hover{
          background-image: url('../assets/right_red.png');
        }
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
  padding: 24px 41px;

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
    padding: 106px 0 0;

    .carousel-wrap{
      padding:0;

      .carousel_prev,.carousel_next{
        z-index:1;
      }

      .carousel_prev{
       left: 14px;
      }

      .carousel_next{
       right: 14px;
      }

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
