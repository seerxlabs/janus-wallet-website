<template>
  <div class="footer">
    <div class="follow">
      <h1>FOLLOW US</h1>
      <div>
        <a href="https://discord.com/invite/RnShbvKjU4" target="_blank"><img src="@/assets/img/p1.png" alt=""></a>
        <a href="https://medium.com/@opensui" target="_blank"><img src="@/assets/img/p2.png" alt=""></a>
        <a href="https://github.com/seerxlabs/janus-wallet-website" target="_blank"><img src="@/assets/img/p3.png" alt=""></a>
        <a href="https://twitter.com/opensui" target="_blank"><img src="@/assets/img/p4.png" alt=""></a>
      </div>
    </div>
    <div class="links">
      <div class="left">
        <img src="@/assets/img/nav-logo.png" alt="">
        <p>© 2022 JANUSWALLET.XYZ</p>
      </div>
      <div class="right">
        <ul>
          <li><b>Resources</b></li>
          <li><a href="https://github.com/seerxlabs/janus-wallet-website" target="_blank">Github</a></li>
        </ul>
        <ul>
          <li><b>Community</b></li>
          <li><a href="https://twitter.com/opensui" target="_blank">Twitter</a></li>
          <li><a href="https://discord.com/invite/RnShbvKjU4" target="_blank">Discord</a></li>
          <li><a href="https://medium.com/@opensui" target="_blank">Medium</a></li>
        </ul>
      </div>
    </div>
    <div class="copy">
      <p>Powered by </p><img src="@/assets/img/by.png" alt="">
    </div>
  </div>
</template>

<script>
export default {
  name: 'part-footer',
  props: { },
  components: { },
  setup () {
  }
}
</script>
<style scoped>
.footer{width: 1130px;margin: auto;position: relative;padding-top: 160px;padding-bottom: 80px;}
.follow{height: 340px;background: url("@/assets/img/follow.png") no-repeat center center / 100% 100%;}
.follow h1{font-size: 3.75rem;text-align: center;font-family: "MontserratBold";color: #ffffff;padding-top: 50px;}
.follow div{gap:45px; display: flex;align-items: center;justify-content: center;margin-top: 20px;margin-bottom: 100px;}
.follow div a{display: block;width: 80px;}
.follow div a img{display: block;width: 100%;}
.links{padding: 120px 100px 0;display: flex;align-items: normal;justify-content: space-between;}
.links .left{text-align: center;}
.links .left img{display: block;width: 190px;margin-bottom: 20px;}
.links .left p{color: #727171;font-size: 1.25rem;font-family: "SourceHanSansCNLight";}
.links .right{display: flex;align-items: normal;justify-content: flex-end;gap: 80px;}
.links .right ul{list-style: none;padding: 0;}
.links .right ul li{display: block;padding: 10px 0;}
.links .right ul li b{font-size: 1.5rem;font-family: "SourceHanSansCNMedium";color: #ffffff;}
.links .right ul li a{font-size: 1.25rem;font-family: "SourceHanSansCNLight";color: #727171;}
.copy{display: flex;align-items: center;justify-content: center;gap: 10px;padding-top: 130px;}
.copy p{font-size: 1.25rem;color: #fff;padding-top: 10px;}
.copy img{display: block;height: 30px;}
</style>
