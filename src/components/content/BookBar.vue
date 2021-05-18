<template>
  <div class="hot-sale">
    <div class="cards">
      <van-card v-for="(item,index) in bookList" :key="index">
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
          <p class="desc">{{item.desc}}</p>
        </template>
      </van-card>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      bookList: [
        {
          bookName: '三体：死神永生',
          bookPic: require('@/assets/img/rexiao1.png'),
          author: '刘慈心',
          desc: '刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品'
        },
        {
          bookName: '平凡世界',
          bookPic: require('@/assets/img/pingfan.png'),
          author: '路遥',
          desc: '刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品'
        },
        {
          bookName: '时间简史',
          bookPic: require('@/assets/img/sjian.png'),
          author: '刘慈心',
          desc: '刘慈欣创作的系列长篇科幻小说地球往事三部曲的第三部作品'
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

  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {

  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {

  }
}
</script>

<style lang='less' scoped>
.hot-sale {
  .van-cell {
    align-items: center;
    justify-content: center;
    background-color: #21272e;
    .van-cell__value {
      font-family: PingFang-SC-Regular;
      font-size: 24px;
      color: #a2a8ba;
    }
    .van-cell__title {
      font-family: PingFang-SC-Medium;
      font-size: 36px;
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
      .desc {
        width: 388px;
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        line-height: 36px;
        color: #868dab;
        margin: 0 !important;
        padding-top: 14px;
      }
    }
  }
}
</style>
