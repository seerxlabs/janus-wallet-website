<template>
  <div style="height: 1020px;">
    <div class="centerMain">
      <h4 style="color: #FFFFFF;">WHAT MAKES OPENSUI</h4>
      <h4 style="color: #4586fe">DIFFERENT</h4>
      <div class="intro">
        <p>Opensui is an open-sourced crypto wallet that does not require mnemonic phrase and private keys, committing to lowering the threshold for crypto wallets users and allowing anyone to manage their crypto easily, safely and efficiently.</p>
        <p style="margin-top: 30px;">There are still billions of people in this world who have no clue of what Web3 is yet, but Web3 has quietly changed our society and life, please don't reject it. Everyone should embrace crypto. Opensui puts Web3 at your fingertips.</p>
      </div>
      <i><img src="@/assets/img/web3.png" alt=""></i>
    </div>
  </div>
</template>

<script>
import i18n from "@/language";
export default {
  name: 'part-web3',
  props: { },
  components: { },
  setup () {
    return { i18n }
  }
}
</script>
<style scoped>
.centerMain{width: 1130px;margin: auto;position: relative;padding-top: 230px;}
.centerMain h4{text-align: right; font-size: 3.75rem;font-family: "MontserratBold"}
.centerMain .intro{position: absolute;z-index: 3;top: 380px;left: 0;width: 694px;}
.centerMain .intro p{line-height: 1.2;color: #FFFFFF;font-size: 2.08rem;font-family: SourceHanSansCNNormal;word-break: normal;text-align: justify}
.centerMain i{position: absolute;z-index: 2;display: block;top:445px;right: -75px; width: 980px; }
.centerMain i img{display: block;width: 100%;}
</style>
