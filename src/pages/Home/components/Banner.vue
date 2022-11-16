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
