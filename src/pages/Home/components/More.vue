<template>
  <div style="height: 1490px;">
    <div class="centerMain">
      <h2>MORE SECURE <span>MORE EFFICIENT</span></h2>
      <h6>Your crypto, in your hands.</h6>
      <div class="itemBox">
        <div class="item color1">
          <img src="@/assets/img/i1.png" alt="">
          <div>
            <b>Open source</b>
            <p>Opensui is a free, open-source software. </p>
            <p>Anyone can see, verify and even contribute to the code.</p>
          </div>
        </div>
        <div class="item color2">
          <img src="@/assets/img/i2.png" alt="">
          <div>
            <b>End-to-end encryption</b>
            <p>Opensui uses advanced encryption technology to store your data on</p>
            <p>your device, and you are the only one who can decrypt these information.</p>
          </div>
        </div>
        <div class="item color1">
          <img src="@/assets/img/i3.png" alt="">
          <div>
            <b>Trustless by design</b>
            <p>Opensui software is designed in the way </p>
            <p>that neither the public nor developers can invade your privacy.</p>
          </div>
        </div>
        <div class="item color2">
          <img src="@/assets/img/i4.png" alt="">
          <div>
            <b>Non-custodial</b>
            <p>Your crypto are truly in your hands,</p>
            <p> we never have access to any of your data or funds.</p>
          </div>
        </div>
        <div class="item color1">
          <img src="@/assets/img/i5.png" alt="">
          <div>
            <b>Privacy</b>
            <p>Everyone's privacy should be respected. We will not track any individual's</p>
            <p>identity information, account address and asset balance. </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "@/language";
export default {
  name: 'part-more',
  props: { },
  components: { },
  setup () {
    return { i18n }
  }
}
</script>
<style scoped>
.centerMain{width: 1130px;margin: auto;position: relative;padding-top: 200px;}
.centerMain h2{text-align: center; font-size: 3.75rem;font-family: "MontserratBold";color: white}
.centerMain h2 span{color: #297bff;}
.centerMain h6{text-align: center;margin-top: 20px; font-size: 2.08rem;font-family: "SourceHanSansCNNormal";color: white;font-weight: normal;}
.itemBox{ margin-top: 120px; display: flex;align-items:normal;gap: 25px;flex-direction: column}
.itemBox .item{gap: 50px; padding: 15px 55px; border-radius: 50px;display: flex;align-items: center;}
.itemBox .item img{display: block;width: 80px;height: 80px;}
.itemBox .item div{}
.itemBox .item div b{font-size: 2.5rem;color: #4586fe;font-family: "SourceHanSansCNBold";display: block;margin-bottom: 10px;}
.itemBox .item div p{ line-height: 1.2; font-size: 2.08rem;color: #ffffff;font-family: "SourceHanSansCNNormal";}
.color1{background: #222e33;}
.color2{background: #32424a;}
</style>
