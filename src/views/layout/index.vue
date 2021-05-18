<template>
  <div>
    <router-view />
    <van-tabbar class="van-tabbar-a" active-color="#FB6894" route>
      <van-tabbar-item replace to="/home"><van-icon size='1.08rem' name="wap-home-o" /></van-tabbar-item>
      <van-tabbar-item replace to="/explore"><van-icon size='1.08rem' name="tv-o" /></van-tabbar-item>
      <van-tabbar-item replace to="/bookrack"><van-icon size='1.08rem' name="orders-o" /></van-tabbar-item>
      <van-tabbar-item replace to="/my"><van-icon size='1.08rem' name="contact" /></van-tabbar-item>
      <div class="homeind"></div>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {}
}
</script>
<style lang="less" scoped>
.van-tabbar-a{
  height: 2.11rem !important;
  background-color: #2A313A;
  .van-tabbar-item--active{
    background-color: #2A313A;
  }
  .homeind {
    width: 270px;
    height: 8px;
    background-color: #71768c;
    border-radius: 30%;
    position: fixed;
    bottom: 0;
    left: 3.2rem;
    right: 3.2rem; 
    z-index: 999;
  }
} 
</style>
