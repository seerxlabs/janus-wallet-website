<template>
  <div class="downloadBox">
    <div class="content">
      <div class="center">
        <h1>JANUS WALLET<br>OPEN THE GATEWAY TO <span>FREEDOM</span></h1>
        <img class="ball" src="@/assets/img/small.png" alt="">
        <img class="c1" src="@/assets/img/c1.png" alt="">
        <img class="c2" src="@/assets/img/c2.png" alt="">
        <img class="c3" src="@/assets/img/c3.png" alt="">
        <a href="javascript:"><img src="@/assets/img/coming.png" alt=""></a>
      </div>
    </div>
    <img class="bg" src="@/assets/img/download-bg.jpg" alt="">
  </div>
</template>

<script>
import i18n from "@/language";
export default {
  name: 'part-download',
  props: { },
  components: { },
  setup () {
    return { i18n }
  }
}
</script>
<style scoped>
.downloadBox{min-width: 1130px;position: relative;}
.downloadBox .bg{display: block;width: 100%;}
.downloadBox .content{width: 100%;height: 100%; position: absolute;top:0;left: 0;}
.downloadBox .content .center{margin: auto;position: relative;width: 1130px;height: 100%;}
.downloadBox .content .center h1{width: 100%; font-size: 3.75rem;font-family: "MontserratBold";color: #fff;text-align: center;padding: 120px 0;}
.downloadBox .content .center h1 span{color: #297bff;}
.downloadBox .content .center .ball{position: absolute;width: 230px; top: 326px;left: 330px;}
.downloadBox .content .center .c1{position: absolute;width: 100px; top: 326px;left: 499px;}
.downloadBox .content .center .c2{position: absolute;width: 120px; top: 346px;left: 680px;}
.downloadBox .content .center .c3{position: absolute;width: 130px; top: 386px;left: 950px;}
.downloadBox .content .center a{position: absolute;bottom: 140px;display: block;width: 224px;left: 453px;}
.downloadBox .content .center a img{display: block;width: 100%;}
</style>
