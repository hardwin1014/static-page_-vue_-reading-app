<template>
  <div class="My">
    <van-nav-bar title="我的">
      <template #right>
        <van-icon name="setting-o" size="0.48rem" color="#fff" @click="goSet()" />
      </template>
    </van-nav-bar>
    <div class="userInfo">
      <van-image width="3.2rem" height="3.2rem" round :src='require("@/assets/img/userPic.png")' />
      <div class="info">
        <div class="userName">
          <span class="name">李雪玲</span>
          <span class="adress">中国 • 襄阳</span>
        </div>
        <div class="fenge"></div>
        <button class="share"><i class="iconfont icon-fenxiang"></i>
          分享
        </button>
      </div>
    </div>
    <van-row class="fan" type="flex" justify="center">
      <van-col span="6">
        <span>1286</span>
        <span class="fanItem">关注</span>
      </van-col>
      <van-col span="6" class="middlexian">
        <span>3368</span>
        <span class="fanItem">粉丝</span>
      </van-col>
      <van-col span="6">
        <span>6673</span>
        <span class="fanItem">喜欢</span>
      </van-col>
    </van-row>
    <div class="listFun">
      <van-cell title="个人信息" is-link />
      <van-cell title="我的信息" default>
        <span slot="right-icon" class="num">6</span>
      </van-cell>
      <van-cell title="账户余额" is-link :value="moneyNum.toFixed(2)" @click="Balance()" />
      <van-cell title="我的评论" is-link />
    </div>
  </div>
</template>

<script> 
export default {
  // 定义属性
  data () {
    return {
      moneyNum: 1375
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {},
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    goSet () {
      this.$router.push('/set')
    },
    Balance () {
      this.$router.push('/balance')
    }
  }
}
</script>

<style lang="less">
.My {
  .van-nav-bar {
    background-color: #21272e;
  }
  .van-nav-bar__content {
    height: 1.6rem;
    background-color: #21272e;
    .van-nav-bar__title {
      color: #fff;
      font-size: 0.59rem;
    }
  }
  .userInfo {
    display: flex;
    flex-direction: row;
    padding: 0.29rem 0.67rem 0 0.55rem;
    background-color: #21272e;
    position: relative;
    .info {
      .userName {
        display: flex;
        flex-direction: column;
        font-family: PingFang-SC-Bold;
        font-size: 0.59rem;
        color: #ffffff;
        margin: 0.43rem 0 0 0.45rem;
        .adress {
          font-size: 0.37rem;
          color: #b5b7c5;
        }
      }
      .fenge {
        width: 5.07rem;
        height: 0.05rem;
        border: solid 0.01rem #2a2c33;
        background-color: #2a2c33;
        position: absolute;
        bottom: 1.17rem;
        right: 0.67rem;
      }
      .share {
        width: 2.4rem;
        height: 0.85rem;
        background-color: #21272e;
        border-radius: 0.11rem;
        border: solid 0.03rem #545c66;
        font-family: PingFang-SC-Medium;
        font-size: 0.35rem;
        color: #9497ab;
        position: absolute;
        bottom: 0;
        right: 0.69rem;
      }
    }
  }
  .fan {
    margin: 0.69rem 0.64rem 0.5rem;
    height: 1.68rem;
    background-color: #2b323b;
    box-shadow: 0rem 0.4rem 0.67rem 0rem rgba(33, 39, 46, 0.08);
    border-radius: 0.21rem;
    font-family: PingFang-SC-Heavy;
    color: #ffffff;
    justify-content: space-between;
    .van-col--6 {
      text-align-last: center;
      display: flex;
      flex: 1;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      font-family: PingFang-SC-Heavy;
      font-size: 0.48rem;
      .fanItem {
        font-family: PingFang-SC-Medium;
        font-size: 0.32rem;
        color: #75808d;
      }
    }
    .middlexian {
      border-right: 0.03rem solid #363c45;
      border-left: 0.03rem solid #363c45;
      margin: 0.3rem 0;
    }
  }
  .listFun {
    display: flex;
    align-items: center;
    justify-items: center;
    flex-direction: column;
    .van-cell {
      width: 9.33rem;
      height: 1.9rem;
      display: flex;
      justify-items: center;
      align-items: center;
      background-color: #21272e !important;
      font-family: PingFang-SC-Medium;
      font-size: 0.48rem;
      color: #dcdeea;
      padding: 0;
      border-bottom: 0.02667rem solid #ebedf0;
      .num {
        width: 0.48rem;
        height: 0.48rem;
        background-color: #fb6894;
        font-size: 0.32rem;
        color: #dcdeea;
        border-radius: 0.24rem;
        text-align: center;
        line-height: 0.48rem;
      }
      .van-cell__value {
        font-size: 0.48rem;
        color: #fb6894;
      }
    }
    .van-cell::after {
      border: 0 !important;
    }
  }
}
</style>
