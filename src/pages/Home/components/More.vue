<template>
  <div class="forMore">
    <div class="centerMain">
      <h2>MORE SECURE, <span>MORE EFFICIENT</span></h2>
      <h6>Your crypto, in your hands.</h6>
      <div class="itemBox">
        <div class="item color1">
          <img src="@/assets/img/i1.png" alt="">
          <div>
            <b>Open source</b>
            <p>Janus wallet is a free, open-source software. </p>
            <p>Anyone can check, verify and even contribute to the code.</p>
          </div>
        </div>
        <div class="item color2">
          <img src="@/assets/img/i2.png" alt="">
          <div>
            <b>End-to-end encryption</b>
            <p>Janus wallet uses advanced encryption technology to store your data on your device, and you are the only one who can decrypt these information.</p>
          </div>
        </div>
        <div class="item color1">
          <img src="@/assets/img/i3.png" alt="">
          <div>
            <b>Trustless by design</b>
            <p>Janus wallet software is designed in the way that neither the public nor developers can invade your privacy.</p>
          </div>
        </div>
        <div class="item color2">
          <img src="@/assets/img/i4.png" alt="">
          <div>
            <b>Non-custodial</b>
            <p>Your crypto are truly in your hands, we never have access to any of your data or funds.</p>
          </div>
        </div>
        <div class="item color1">
          <img src="@/assets/img/i5.png" alt="">
          <div>
            <b>Privacy</b>
            <p>Everyone's privacy should be respected. We will not track any individual's identity information, account address and asset balance. </p>
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
