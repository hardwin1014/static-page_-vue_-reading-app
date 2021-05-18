<template>
  <div class="buyBook">
    <van-nav-bar title="购物车">
      <i slot="left" class="iconfont icon-arrowLeft-fill" @click="backgo()"></i>
    </van-nav-bar>
    <div class="cards">
      <van-card v-for="(item,index) in bookLists" :key="index">
        <template #thumb>
          <van-image lazy-load :src="item.bookPic" />
        </template>
        <template #title>
          <div class="name">
            <span class="tit">{{item.bookName}}</span>
            <div class="more"><img src="@/assets/img/more.png" alt=""></div>
          </div>
          <p class="athor">作者：{{item.author}}</p>
        </template>
        <template #desc>
          <p class="price">￥{{item.price.toFixed(2)}}</p>
        </template>
      </van-card>
    </div>
    <div class="totalPrice">
      <p class="total">总计(元): <span class="sum">241.00</span></p>
      <p class="total">余额(元): <span class="sum">1375.00</span></p>
    </div>
    <van-button type="primary" class="goumai">购买</van-button>
    <div class="back"></div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      bookLists: [
        {
          bookPic: require('@/assets/img/sjian.png'),
          bookName: '未来简史',
          author: '尤瓦尔• 郝拉利',
          price: 56
        },
        {
          bookPic: require('@/assets/img/yinhe.png'),
          bookName: '银河帝国',
          author: '艾萨克·阿西莫夫',
          price: 86
        },
        {
          bookPic: require('@/assets/img/haidi.png'),
          bookName: '海底两万里',
          author: '儒勒·凡尔纳',
          price: 99
        }
      ]
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    backgo () {
      this.$router.go(-1)
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>

<style lang='less'>
.buyBook {
  .van-nav-bar {
    background-color: #21272e;
  }
  .van-nav-bar__content {
    height: 121px;
    background-color: #21272e;
    .icon-arrowLeft-fill {
      font-size: 34px;
      color: #fff;
    }
    .van-nav-bar__title {
      font-family: PingFang-SC-Medium;
      font-size: 44px;
      line-height: 53px;
      color: #ffffff;
    }
  }
  .cards {
    width: 10rem !important;
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    .van-card__header {
      width: 654px;
      height: 250px;
      background-color: #2b323b;
      box-shadow: 0px 30px 60px 0px rgba(17, 21, 26, 0.1);
      border-radius: 20px;
    }
    .van-card {
      margin-top: 92px;
      background-color: #21272e;
      .van-card__content {
        margin-left: 30px;
      }
      .van-image {
        width: 168px;
        height: 250px;
        background-color: #d8d8d8;
        border-radius: 16px;
        overflow: hidden;
        outline: 0;
        position: absolute;
        top: -32px;
        left: 32px;
        border: solid 1px #27212e;
      }
      .name {
        display: flex;
        justify-content: space-between;
        margin: 28px 23px 0 0;
        .tit {
          font-family: PingFang-SC-Bold;
          font-size: 36px;
          color: #ffffff;
        }
      }
      .athor {
        width: 334px;
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #5d637c;
        border-bottom: solid 4px #969baf;
        padding-bottom: 23px;
        margin: 0 !important;
        padding-top: 14px;
      }
      .price {
        font-family: PingFang-SC-Heavy;
        font-size: 48px;
        color: #ff1d8d;
        margin: 26px 0;
      }
    }
  }
  .totalPrice {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    .total {
      display: flex;
      font-family: PingFang-SC-Medium;
      font-size: 32px;
      color: #ffffff;
      padding: 0 48px;
      .sum {
        font-family: PingFang-SC-Heavy;
        font-size: 32px;
        color: #ff1d8d;
      }
    }
  }
  .goumai {
    width: 750px;
    height: 142px;
    background-color: #fb6894;
    font-family: PingFang-SC-Medium;
    font-size: 44px;
    color: #ffffff;
    border: 0;
    outline: 0;
    position: absolute;
    bottom: 40px;
    left: 0;
  }
  .totalPrice {
    position: absolute;
    bottom: 228px;
    left: 0;
    right: 0;
  }
  .back {
    width: 270px;
    height: 8px;
    background-color: #71768c;
    border-radius: 20px;
    position: fixed;
    bottom: 16px;
    left: 240px;
  }
}
</style>
