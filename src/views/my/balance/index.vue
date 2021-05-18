<template>
  <div class="balance">
    <van-nav-bar title="账户余额">
      <i slot="left" class="iconfont icon-arrowLeft-fill" @click="back"></i>
    </van-nav-bar>
    <div class="yuer" v-if="isCZ">
      <p class="my">我的余额(元)</p>
      <p class="moneyNum">1375.00</p>
    </div>
    <div class="yuer" v-else>
      <p class="my">充值余额(元)</p>
      <div class="Num">
        <span class="rmb">￥</span>
        <input class="moneyNum-cz" type="number" v-model="value" />
      </div>
    </div>
    <!-- 充值 -->
    <van-button type="primary" class="recharge" @click="isCZ=false" v-if="isCZ">充值</van-button>
    <van-button type="primary" class="recharge recharge2" @click="nextStep()" v-else>下一步</van-button>

    <van-popup class="payPopup" v-model="show" position="bottom" closeable close-icon="close">
      <div class="content">
        <p class="pay">确认付款(元)</p>
        <p class="payNum">{{value}}</p>
        <van-cell title="订单信息" value="充值" />
        <van-cell title="付款方式" value="中国银行(0288)">
          <i slot="right-icon" class="iconfont icon-youjiantou01"></i>
        </van-cell>
        <div class="payway">
          <van-image class="zhiwen" :src="require('@/assets/img/zhiwen.png')" />
          <p class="ways">指纹验证或 <span class="password">输入密码</span></p>
        </div>
      </div>
    </van-popup>

    <div class="back"></div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      isCZ: true,
      pay: false,
      show: false,
      value: ''
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    back () {
      this.$router.go(-1)
    },
    nextStep () {
      this.isCZ = false
      this.show = true
    }
  }
}
</script>

<style lang='less'>
.balance {
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
  .yuer {
    width: 654px;
    height: 320px;
    background-color: #2b323b;
    box-shadow: 0px 30px 50px 0px rgba(33, 39, 46, 0.08);
    border-radius: 16px;
    margin: 24px auto;
    .my {
      font-family: PingFang-SC-Medium;
      font-size: 48px;
      color: #75808d;
      margin: 0;
      padding: 59px 0 0 50px;
    }
    .moneyNum {
      font-family: PingFang-SC-Medium;
      font-size: 128px;
      color: #ffffff;
      margin: 0;
      padding: 10px 0 0 50px;
    }
    .moneyNum-cz {
      width: 470px;
      border-bottom: 2px solid #434e5c;
      background-color: #2b323b;
      border: 0;
      outline: 0;
      color: #fff;
      font-size: 92px;
      margin-top: 10px;
    }
    .Num {
      display: flex;
      align-items: center;
      border-bottom: 2px solid #434e5c;
      margin-left: 46px;
      .rmb {
        font-family: PingFang-SC-Medium;
        font-size: 128px;
        color: #ffffff;
      }
    }
  }
  .recharge {
    width: 750px;
    height: 142px;
    background-color: #fb6894;
    font-family: PingFang-SC-Medium;
    font-size: 44px;
    color: #dcdeea;
    border: 0;
    position: absolute;
    bottom: 40px;
    left: 0;
  }
  .recharge2 {
    background-color: #2e363f;
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
  .van-popup {
    background-color: #2d353f;
  }
  .payPopup {
    width: 699px;
    height: 803px;
    padding-left: 59px;
    .van-popup__close-icon--top-right {
      top: 45px;
      right: 39px;
    }
    .pay {
      font-family: PingFang-SC-Medium;
      font-size: 48px;
      color: #75808d;
      margin: 97px 0 0 0px;
    }
    .payNum {
      font-family: PingFang-SC-Medium;
      font-size: 128px;
      color: #ffffff;
      margin: 0;
    }
    .van-cell {
      width: 702px;
      height: 89px;
      padding: 0 46px 0 0;
      margin-top: 52px;
      background-color: #2d353f;
      align-items: center;
      .van-cell__title {
        font-family: PingFang-SC-Medium;
        font-size: 36px;
        color: #dcdeea;
      }
      .icon-youjiantou01{
        font-size: 27px;
        color: #a2a8ba;
        line-height: normal;
        margin-left: 11px;
      }
    }
    .payway {
      display: flex;
      align-items: center;
      margin:62px 0 0 124px;
      .van-image {
        width: 77px;
        height: 77px;
        margin-right: 9px;
      }
      .ways {
        color: 545f6c;
        font-size: 77px;
        font-family: PingFang-SC-Medium;
        font-size: 36px;
        color: #636c77;
        .password {
          color: #fb6894;
        }
      }
    }
  }
}
</style>
