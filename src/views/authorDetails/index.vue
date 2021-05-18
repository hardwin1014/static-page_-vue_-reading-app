<template>
  <div class="personMain">
    <van-nav-bar title="我的">
      <template #left>
        <i class="iconfont icon-arrowLeft-fill" @click="onClickLeft"></i>
      </template>
    </van-nav-bar>
    <div class="userInfo">
      <van-image width="3.2rem" height="3.2rem" round :src='require("@/assets/img/tianxiaohua.png")' />
      <div class="info">
        <div class="userName">
          <span class="name">田小花</span>
          <span class="adress">中国 • 洛阳</span>
        </div>
        <div class="fenge"></div>
        <button class="guanzhu">
          + 关注
        </button>
        <button class="share">
          <i class="iconfont icon-fenxiang"></i>
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
    <van-cell title="代表作" value="总共三本书" />
    <!-- 代表作 -->
    <book-item :bookInfo="bookInfo"></book-item>
  </div>
</template>

<script> 
import BookItem from './bookItem'
export default {
  // 定义属性
  data () {
    return {
      bookInfo: [
        {
          img: require("@/assets/img/yuwang.png"),
          bookName: "鱼王",
          value: 2.5,
          desc: "全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...",
          yuedu: "366"
        },
        {
          img: require("@/assets/img/bukesiyi.png"),
          bookName: "不可思议的朋友",
          value: 2.5,
          desc: "全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...",
          yuedu: "366"
        },
        {
          img: require("@/assets/img/bulvbuting.png"),
          bookName: "步履不停",
          value: 2.5,
          desc: "全书由十三个内容相对独立的“叙事短篇小说”组成，全部围绕着人与自然的关系...",
          yuedu: "366"
        }
      ]
    }
  },
  methods: {
    onClickLeft () {
      this.$router.go(-1)
    }
  },
  components: {
    'book-item': BookItem
  }
}
</script>

<style lang="less">
.personMain {
  .van-nav-bar { 
    background-color: #21272e;
    .van-nav-bar__content {
      height: 121px !important;
      .van-nav-bar__title {
        color: #fff;
        font-size: 0.59rem;
      }
      .icon-arrowLeft-fill {
        font-size: 34px;
        color: #fff;
      }
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
      .guanzhu {
        width: 2.4rem;
        height: 0.85rem;
        background-color: #478ce0;
        border-radius: 8px;
        border: solid 0.03rem #545c66;
        font-family: PingFang-SC-Medium;
        font-size: 0.35rem;
        color: #fff;
        position: absolute;
        bottom: 0;
        right: 0.69rem;
      }
      .share {
        width: 180px;
        height: 64px;
        background-color: #21272e;
        border-radius: 8px;
        border: solid 2px #545c66;
        font-family: PingFang-SC-Medium;
        font-size: 26px;
        letter-spacing: 2px;
        color: #9497ab;
        position: absolute;
        bottom: 0;
        right: 251px;
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
  .van-cell {
    padding: 0 49px;
    background-color: #21272e;
    height: 121px;
    .van-cell__title {
      font-family: PingFang-SC-Bold;
      font-size: 36px;
      color: #ffffff;
      line-height: 121px;
    }
    .van-cell__value {
      font-family: PingFang-SC-Medium;
      font-size: 24px;
      letter-spacing: 1px;
      color: #478ce0;
      line-height: 121px;
    }
  }
}
</style>
