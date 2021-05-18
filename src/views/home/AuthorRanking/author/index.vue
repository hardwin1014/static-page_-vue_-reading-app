<template>
  <div class="fenlei">
    <van-cell :title="title" is-link value="查看全部" to="/authorranking" />
    <div class="fenleiItems">
      <div class="fenleiitem" v-for="(item, index) in authorList" :key="index">
        <van-image round :src='item.img' />
        <span class="desc">{{item.name}}</span>
        <van-button type="default" class="addFollw" v-if="item.isFollow===false" @click="isFollw(index)">+关注</van-button>
        <van-button type="default" class="follow" v-else @click="isFollw(index)">已关注</van-button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      title: this.tit,
      authorList: this.authors
    }
  },
  props: ['tit', "authors"],
  // 计算属性，会监听依赖属性值随之变化
  computed: {

  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    isFollw (index) {
      this.authorList[index].isFollow = !this.authorList[index].isFollow
    }
  }
}
</script>

<style lang='less' scoped>
.fenlei {
  .van-cell {
    height: 141px;
    align-items: center;
    justify-content: center;
    background-color: #21272e;
    .van-cell__value {
      font-family: PingFang-SC-Regular;
      font-size: 26px;
      color: #a2a8ba;
    }
    .van-cell__title {
      font-family: PingFang-SC-Medium;
      font-size: 36px;
      color: #ffffff;
    }
  }
  .fenleiItems {
    width: 722px;
    height: 341px;
    display: flex;
    flex-direction: row;
    display: -webkit-box;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-left: 28px;
    box-sizing: border-box;
    border-bottom: solid 2px #2f343c;
    .fenleiitem {
      width: 121px;
      margin: 0 23px;
      .follow {
        width: 120px;
        height: 44px;
        background-image: linear-gradient(#478ce0, #478ce0),
          linear-gradient(#000000, #000000);
        background-blend-mode: normal, normal;
        border-radius: 8px;
      }
      .van-button {
        width: 120px;
        height: 44px;
        background-color: #000000;
        border-radius: 8px;
        border: solid 2px #545c66;
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #ffffff;
        text-align: center;
        line-height: 44px;
      }
      .van-button--normal {
        padding: 0;
      }
      .van-image {
        width: 120px;
        height: 120px;
        overflow: hidden;
      }
      .desc {
        display: block;
        font-family: PingFang-SC-Bold;
        font-size: 28px;
        color: #ffffff;
        text-align: center;
      }
    }
  }
}
</style>
