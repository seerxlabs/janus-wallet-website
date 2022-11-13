<template>
  <div style="height: 1020px;">
    <div class="centerMain">
      <h4 style="color: #FFFFFF;">NO SEED PHRASE REQUIRED</h4>
      <h4 style="color: #FFFFFF;">CREATE A WALLET</h4>
      <h4 style="color: #FFFFFF;">BY USING <span style="color: #4586fe">A MAILBOX</span></h4>
      <div class="intro">
        <p>Getting billions of beginner users into Web3 requires a decentralized wallet with very low barriers to use.</p>
        <p style="margin-top: 30px;">By getting rid of the mnemonics phrase while keeping it decentralized, we make it easy for beginners to create and use the blockchain wallets, this user- friendly design empowers people to seamlessly connect to web3.</p>
      </div>
      <i><img src="@/assets/img/mind.png" alt=""></i>
    </div>
  </div>
</template>

<script>
import i18n from "@/language";
export default {
  name: 'part-wallet',
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
.centerMain .intro{position: absolute;z-index: 3;top: 500px;RIGHT: 0;width: 502px;}
.centerMain .intro p{line-height: 1.2; color: #FFFFFF;font-size: 2.08rem;font-family: SourceHanSansCNNormal;word-break: normal;text-align: justify}
.centerMain i{position: absolute;z-index: 2;display: block;top:338px;left: 0; width: 522px; }
.centerMain i img{display: block;width: 100%;}
</style>
