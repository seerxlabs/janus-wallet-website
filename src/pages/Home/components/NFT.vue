<template>
  <div class="forNFT">
    <div class="centerMain">
      <div class="nft">
        <div class="left">
          <h2>YOUR NFT<br>GALLERY</h2>
          <p>Mint your NFT with<br>one click<br>and share with<br>your friends.</p>
          <img src="@/assets/img/phone.png" alt="">
        </div>
        <div class="right">
          <div>
            <h2>SUPER<br>FAST SWAPS</h2>
            <p class="intro">Super low fees<br>Smooth experience.</p>
          </div>
          <div class="exchangeForm">
            <div class="inbox">
              <div class="pay">
                <label>You pay</label>
                <p><img src="@/assets/img/coin-1.png" alt=""><span>SUI</span></p>
              </div>
              <div class="receive">
                <label>You receive</label>
                <p><img src="@/assets/img/coin-2.png" alt=""><span>USDC</span></p>
              </div>
              <a href="javascript:"><img src="@/assets/img/exchange.png" alt=""></a>
            </div>
          </div>
        </div>
      </div>
      <div class="domain">
        <h2>SUI DOMAIN NAME</h2>
        <p>Janus wallet fully support Sui domain names, allowing people to receive and send tokens and NFTs with short names, which expands the adoption of Sui domain name in blockchain payment use case</p>
        <div class="search">
          <input type="text" value="Janus.sui">
          <a href="javascript:"></a>
        </div>
        <img src="@/assets/img/pointer.png" alt="">
      </div>
    </div>
  </div>
</template>

<script>
import i18n from "@/language";
export default {
  name: 'part-nft',
  props: { },
  components: { },
  setup () {
    return { i18n }
  }
}
</script>
<style scoped>

</style>
