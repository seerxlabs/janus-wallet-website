<template>
  <div class="pageMain">
    <div class="initLoading" v-if="pageLoading"><Loading vertical size=60></Loading></div>
    <router-view v-else></router-view>
  </div>
</template>

<script>
import {onMounted, ref} from 'vue'
import {router} from "@/route";
import {Loading} from "vant";
export default {
  name: 'App',
  components: { Loading },
  setup () {
    const pageLoading = ref(true)
    const targetPath = ref()
    function resetClient () {
      pageLoading.value = true
      // // 判断终端类型
      // const android = navigator.userAgent.toLowerCase().indexOf('android')
      // const iphone = navigator.userAgent.toLowerCase().indexOf('iphone')
      // const pageName = window.location.hash.split('/')[window.location.hash.split('/').length - 1]
      // if(android > -1 || iphone > -1){
      //   targetPath.value = '/H5/' + (pageName ? pageName : 'Home')
      // }else{
      //   targetPath.value  = '/PC/' + (pageName ? pageName : 'Home')
      // }
      targetPath.value = '/Index'
      pageLoading.value = false
      router.push(targetPath.value)
    }

    onMounted(()=>{ resetClient(); window.onresize = resetClient; })
    return { pageLoading }
  }
}
</script>

<style>
@import "./assets/css/Normalize.css";
@import "./assets/css/style.css";
@import "./assets/css/style@1200.css";
@import "./assets/css/style@1080.css";
@import "./assets/css/style@960.css";
@import "./assets/css/style@720.css";
@font-face {font-display: auto;font-family: "MontserratBold";src: url("./assets/fonts/Montserrat-Bold-3.otf");  }
@font-face {font-display: auto;font-family: "MontserratMedium";src: url("./assets/fonts/Montserrat-Medium-7.otf");  }
@font-face {font-display: auto;font-family: "MontserratRegular";src: url("./assets/fonts/Montserrat-Regular-8.otf");  }
@font-face {font-display: auto;font-family: "SourceHanSansCNBold";src: url("./assets/fonts/SourceHanSansCN-Bold.otf");  }
@font-face {font-display: auto;font-family: "SourceHanSansCNLight";src: url("./assets/fonts/SourceHanSansCN-Light.otf");  }
@font-face {font-display: auto;font-family: "SourceHanSansCNMedium";src: url("./assets/fonts/SourceHanSansCN-Medium.otf");  }
@font-face {font-display: auto;font-family: "SourceHanSansCNNormal";src: url("./assets/fonts/SourceHanSansCN-Normal.otf");  }
html,body{font-size: 12px;}
@media screen and (max-width:1200px) {  html {font-size: 70%}  }
@media screen and (max-width:1080px) {  html {font-size: 60%}  }
@media screen and (max-width:960px) {  html {font-size: 50%}  }
@media screen and (max-width:720px) {  html {font-size: 40%}  }
a{-webkit-tap-highlight-color: rgba(255, 255, 255, 0);-webkit-user-select: none;}
p,h1,h2,h3,h4,h5,h6{margin: 0;}
ul{padding: 0;margin: 0;}
#app{position: relative;overflow: hidden;font-family: Arial,monospace;background: #000000;}
.initLoading{width: 100%;height: 100vh;align-items: center;flex-direction: column;display: flex;justify-content: center}
</style>
