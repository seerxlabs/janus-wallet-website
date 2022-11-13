<template>
  <div style="height: 1673px;">
    <div class="centerMain">
      <div class="nft">
        <div class="left">
          <h2>YOUR NFT<br>GALLERY</h2>
          <p>Mint your NFT with<br>one click<br>and share with<br>your friends.</p>
          <img src="@/assets/img/phone.png" alt="">
        </div>
        <div class="right">
          <h2>SUPER<br>FAST SWAPS</h2>
          <p class="intro">Super low fees<br>Smooth experience.</p>
          <div class="exchangeForm">
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
      <div class="domain">
        <h2>SUI DOMAIN NAME</h2>
        <p>Opensui fully support Sui domain names, allowing people to receive and send tokens and NFTs with short names, which expands the adoption of Sui domain name in blockchain payment use case</p>
        <div class="search">
          <input type="text" value="Opensui.sui">
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
.centerMain{width: 1130px;margin: auto;position: relative;padding-top: 100px;}
.nft{display: flex;align-items: center;justify-content: space-between;margin-bottom: 120px;}
.nft .left{ overflow: hidden; background: #ffe027;height: 478px;width: 653px;border-radius: 50px;position: relative;}
.nft .left h2{color: #6d5300;font-size: 3.75rem;font-family: "MontserratBold";padding-left: 45px;padding-top: 45px;}
.nft .left p{ margin-top: 20px; line-height: 1.2; color: #6d5300;font-size: 2.08rem;font-family: "SourceHanSansCNNormal";padding-left: 45px;}
.nft .left img{display: block;position: absolute;right: -30px;bottom: -250px;width: 530px;}
.nft .right{background: #32424a;height: 478px;width: 446px;border-radius: 50px;}
.nft .right h2{color: #FFFFFF;font-size: 3.75rem;font-family: "MontserratBold";padding-left: 45px;padding-top: 45px;}
.nft .right .intro{ margin-top: 20px; line-height: 1.2; color: #FFFFFF;font-size: 2.08rem;font-family: "SourceHanSansCNNormal";padding-left: 45px;}
.nft .right .exchangeForm{position: relative; width: 390px;  background: #222e33;border-radius: 50px;margin: 50px auto 0;}
.nft .right .exchangeForm label{text-align: center;width: 40%;font-size: 1.5rem;color: #ffffff;font-family: "SourceHanSansCNNormal";}
.nft .right .exchangeForm p{ width: 110px; background: #141c1e;border-radius: 50px; padding: 10px; display: flex;align-items: center;gap:15px}
.nft .right .exchangeForm p img{width: 33px;height: 33px;}
.nft .right .exchangeForm p span{font-size: 1.5rem;color: #ffffff;font-family: "SourceHanSansCNNormal";}
.nft .right .exchangeForm .pay{padding:15px 20px; border-bottom: #32424a 1px solid; display: flex;align-items: center;justify-content: space-between;}
.nft .right .exchangeForm .receive{padding:15px 20px; display: flex;align-items: center;justify-content: space-between;}
.nft .right .exchangeForm a{display: block;width: 40px;position: absolute; left: 160px;top: 62px;}
.nft .right .exchangeForm a img{width: 100%;display: block;}

.domain{margin-top: 120px;border-radius: 50px;background: #297bff;height: 730px;position: relative;}
.domain h2{z-index: 3; top: 200px; color: #FFFFFF;font-size: 3.75rem;font-family: "MontserratBold";position: absolute;width: 100%;text-align: center;}
.domain p{ line-height: 1.2;width: 490px; text-align: justify; right: 70px; z-index: 3; top: 380px;  color: #FFFFFF;font-size: 2.08rem;font-family: "SourceHanSansCNNormal";position: absolute;}
.domain .search{display: flex;align-items: center;justify-content: space-between; overflow: hidden; width: 410px;position: absolute;top: 400px;left: 100px;background: url("@/assets/img/search.png") no-repeat center center / 100% 100%;height: 75px;}
.domain .search input{ background: none; text-align: center;font-size: 2.9rem;color: #fff;border: none;width: 323px;height: 75px;line-height: 75px;font-family: "MontserratBold";font-weight: normal}
.domain .search a{width: 80px;height: 75px;background: none;}
.domain img{position: absolute;display: block;width: 380px;top: 107px;right: 115px;z-index: 1;}
</style>
