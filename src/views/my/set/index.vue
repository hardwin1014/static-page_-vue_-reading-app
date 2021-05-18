<template>
  <div class="set">
    <van-nav-bar title="设置">
      <i slot="left" class="iconfont icon-arrowLeft-fill" @click="back"></i>
    </van-nav-bar>
    <!-- 列表 -->
    <van-cell-group>
      <van-cell title="查看账号">
        <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
      </van-cell>
      <van-cell title="个人资料">
        <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
      </van-cell>
      <van-cell title="消息提醒">
        <i slot="right-icon">
          <van-switch class="switchBtn" v-model="checked" active-color="#fb6894" inactive-color="#dcdee0" />
        </i>
      </van-cell>
      <van-cell title="清理缓存">
        <p class="huanc">128M</p>
        <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
      </van-cell>
      <van-cell title="帮助中心">
        <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
      </van-cell>
      <van-cell title="关于我们">
        <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
      </van-cell>
    </van-cell-group>
    <!-- 退出登录 -->
    <van-button type="primary" class="exit">退出登录</van-button>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      checked: true
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>

<style lang='less'>
.set {
  .van-nav-bar {
    background-color: #21272e;
  }
  .van-nav-bar__content {
    height: 121px;
    .van-nav-bar__left {
      padding-left: 48px;
      .icon-arrowLeft-fill {
        font-size: 34px;
        color: #fff;
      }
    }
    .van-nav-bar__title {
      font-family: MicrosoftYaHei;
      font-size: 44px;
      color: #ffffff;
    }
  }
  .van-cell-group {
    background-color: #21272e;
    .van-cell {
      width: 702px;
      height: 142px;
      align-items: center;
      padding-left: 0;
      margin-left: 48px;
      background-color: #21272e;
      border-bottom: 2px solid #333c47;
      .van-cell__title {
        font-family: PingFang-SC-Medium;
        font-size: 36px;
        color: #dcdeea;
      }
      .icon-youjiantou01 {
        font-size: 27px;
        color: #a2a8ba;
      }
      .switchBtn {
        width: 102px;
        height: 62px;
      }
      .huanc {
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #dcdeea;
        margin-right: 15px;
      }
    }
  }
  .exit {
    width: 750px;
    height: 142px;
    background-color: #2e363f;
    font-family: PingFang-SC-Medium;
    font-size: 44px;
    color: #dcdeea;
    border: 0;
    position: absolute;
    bottom: 40px;
    left: 0;
  }
  .back {
    width: 270px;
    height: 8px;
    background-color: #71768c;
    position: fixed;
    bottom: 16px;
    left: 240px;
    border-radius: 20px;
  }
}
</style>
