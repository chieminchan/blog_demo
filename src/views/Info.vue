<template>
  <div class="info-page">
    <div class="profile">
      <div class="profile-avatar">
        <img class="avatar-img" src="@/assets/avatar.png">
      </div>
      <div class="profile-text">
        <p class="name">周禮賢</p>
        <p class="job">
          <span class="job-ch">平面设计师 / 动态设计师</span>
          <span class="job-en">Graphic designer / Motion designer</span>
        </p>
        <p class="email">E.zlx@nite.com</p>
      </div>
    </div>
    <div class="detail">
      <div class="detail-ch">
        <p class="detail-ch-text">Lorem Ipsum，也称乱数假文或者哑元文本， 是印刷及排版领域所常用的虚拟文字。由于曾经一台匿名的打印机刻意打乱了一盒印刷字体从而造出一本字体样品书，Lorem Ipsum从西元15世纪起就被作为此领域的标准文本使用。它不仅延续了五个世纪，还通过了电子排版的挑战，其雏形却依然保存至今。</p>
      </div>
      <div class="detail-eng">
        <p class="detail-eng-text">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
      </div>
    </div>
  </div>
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
.info-page{
  width: 100%;
  padding: 36px 78px;
  display: flex;
  background-color: rgb(236, 236, 236);

  .avatar-img{
    width: 338px;
    margin-bottom: 29px;
  }

  .profile-text{
    width: 338px;
    font-size: 18px;
    color: #000000;

    p {
      line-height: 25px;
    }

    .name{
      font-weight: 600;
      margin-bottom: 20px;
    }

    .job{
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
  }

  .detail{
    width: 33.7%;
    min-width: 480px;
    margin-left: 32px;
    font-family: PingFangSC-Regular;
    font-size: 18px;
    color: #000000;
    line-height: 36px;
    font-weight: 400;

    .detail-ch{
      margin-bottom: 20px;
    }
  }
}

  @media screen and (max-width: 1024px){
    .info-page{
      flex-direction: column;
      justify-content: center;
      padding: 36px 0;

      .profile {
        width: 80%;
        margin: 0 auto;
        display: flex;
        flex-direction: column;
      }

      .avatar-img{
        max-width:360px;
        min-width: 320px;
      }

      .detail{
        width: 80%;
        min-width: 288px;
        margin: 36px auto;
      }
    }
  }

    @media screen and (max-width: 767px){
      .info-page{
        width: 100%;
        padding: 36px 0;

        .profile {
          width: 90%;
          min-width: 320px;
        }

        .detail{
          width: 90%;
          min-width: 320px;
        }
      }
    }
</style>
