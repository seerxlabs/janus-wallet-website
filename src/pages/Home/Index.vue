<template>
  <div id="pageMain">
    <transition name="slide-fade">
      <div v-show="loaded">
        <Nav />
        <Banner />
        <Web3 />
        <Wallet />
        <NFT />
        <More id="Security" />
        <Download />
        <Footer/>
      </div>
    </transition>
  </div>
</template>
<script>
import Nav from "@/pages/components/Nav"
import Footer from "@/pages/components/Footer"
import Banner from "./components/Banner"
import Web3 from "./components/Web3"
import Wallet from "./components/Wallet"
import NFT from "./components/NFT"
import More from "./components/More"
import Download from "./components/Download"
import {onMounted, ref } from "vue";
export default {
  name: 'home-page',
  components: { Nav, Banner, Web3, Wallet, NFT, More, Download, Footer },
  setup () {
    const loaded = ref(false)
    onMounted(() => {
      loaded.value = true
    })
    return {
      loaded,
    }
  }
}
</script>

<style scoped>
#pageMain{ position: relative;overflow: hidden;}
.scrollBox{padding: 0; }
.slide-fade-enter-from{ transform: translateX(-50px); opacity: 0; }
.slide-fade-enter-to { transition: all 0.5s ease-out; }
</style>
