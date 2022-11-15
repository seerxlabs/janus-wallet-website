<template>
  <div id="topNav">
    <div class="navMain">
      <router-link class="logo" to="/Index"><img src="@/assets/img/nav-logo.png" alt=""></router-link>
      <ul class="menu">
        <li :class="currentNav === 'Security'?'on':''" @click="scrollPage('Security')"><a href="javascript:">{{$t(`Nav.Security`)}}</a></li>
<!--        <li :class="currentNav === 'Docs'?'on':''"><a href="https://www.google.com" target="_blank">{{$t(`Nav.Docs`)}}</a></li>-->
<!--        <li :class="currentNav === 'Developer'?'on':''"><a href="https://www.google.com" target="_blank">{{$t(`Nav.Developer`)}}</a></li>-->
        <li :class="currentNav === 'Github'?'on':''"><a href="https://github.com/seerxlabs/janus-wallet-website" target="_blank">{{$t(`Nav.Github`)}}</a></li>
        <li :class="currentNav === 'Discord'?'on':''"><a href="https://discord.com/invite/RnShbvKjU4" target="_blank">{{$t(`Nav.Discord`)}}</a></li>
<!--        <li class="download"><a href="https://www.google.com"><img src="@/assets/img/download-off.png" alt=""></a></li>-->
      </ul>
    </div>
  </div>

</template>

<script>
import {onMounted, ref} from 'vue'
export default {
  name: 'part-nav',
  props: { },
  components: { },
  setup () {
    const currentLanguage = ref()
    const currentNav = ref('Home')
    function scrollPage(id){
      window.scrollTo(0, document.getElementById(id).offsetTop + 50)
    }
    onMounted(()=>{
      if(localStorage.getItem('user_lng')){
        currentLanguage.value = localStorage.getItem('user_lng')
      }else{
        currentLanguage.value = 'en_US'
      }
    })
    return {
      currentLanguage,
      currentNav,
      scrollPage
    }
  }
}
</script>
<style scoped>
#topNav{ position: fixed;top: 0;left: 0;width: 100%; z-index: 1000; background:#000000;}
.navMain{ min-width: 1300px;margin: auto; padding: 13px 50px; display: flex;align-items: center;justify-content: space-between;}
.navMain .logo{display: block;}
.navMain .logo img{display: block;height: 60px}
.navMain .menu{display: flex;align-items: center;gap: 50px;}
.navMain .menu li{display: block;}
.navMain .menu li a{color: #FFFFFF;font-size: 1.67rem;display: block;font-family: "MontserratMedium"}
.navMain .menu li.on a{color: #4586fe;}
.navMain .menu li.download{margin-left: 133px;}
.navMain .menu li.download a{}
.navMain .menu li.download a img{display: block;height: 30px;}
</style>
