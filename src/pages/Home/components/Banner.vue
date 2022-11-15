<template>
  <div class="pageBanner">
    <div class="roadBg">
      <div class="bannerCenter">
        <h1>Open the gate to <span>Sui</span><br>Explore <span>Web3</span> freely</h1>
        <h5>Janus wallet is a secure and open-sourced crypto wallet<br>that does not require a seed phrase</h5>
        <a href="javascript:"><img src="@/assets/img/coming.png" alt=""></a>
        <i><img src="@/assets/img/ball.png" alt=""></i>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "@/language";
export default {
  name: 'part-banner',
  props: { },
  components: { },
  setup () {
    return { i18n }
  }
}
</script>
<style scoped>
.pageBanner{padding: 86px 0 0;height: 1045px;min-width: 1200px;  overflow: hidden; width: 100%;background: url("@/assets/img/banner-bg.jpg") no-repeat center top / 100% auto;}
.roadBg{display: block;height: 100%;margin: auto; background: url("@/assets/img/road.png") no-repeat center bottom / 100% auto;}
.bannerCenter{margin: auto;width: 1130px;padding-top: 250px;position: relative;}
.bannerCenter h1{ font-size: 5.42rem;color: #FFFFFF;font-family: "MontserratBold"}
.bannerCenter h1 span{color: #4586fe}
.bannerCenter h5{ margin: 50px 0 95px; line-height: 1.3; font-size: 2.08rem;color: #FFFFFF;font-family: "SourceHanSansCNNormal";font-weight: normal}
.bannerCenter a{display: block;width: 224px;}
.bannerCenter a img{width: 100%;display: block;}
.bannerCenter i{display: block;width: 750px;position: absolute;z-index: 2;right: -260px; top: 340px;}
.bannerCenter i img{width: 100%;display: block;}
</style>
