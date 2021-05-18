<template>
  <div class="bookItem" >
    <van-card :title="item.bookName" v-for="(item, index) in bookDesc" :key="index">
      <template #thumb>
        <van-image :src="item.img" />
      </template>
      <template #desc>
        <van-rate v-model="item.value" allow-half void-icon="star" void-color="#eee" />
        <span class="pfennum">{{item.value}}</span>
      </template>
      <template #tags>
        <p class="bookDesc">{{item.desc}}</p>
      </template>
      <template #price>
        <span class="readNum">{{item.yuedu}}人阅读</span>
      </template>
    </van-card>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      bookDesc: this.bookInfo
    }
  },
  props: ["bookInfo"]
}
</script>

<style lang='less'>
.bookItem {
  .van-card {
    width: 700px;
    height: 309px;
    background-color: #21272e;
    padding: 0;
    margin-top: 45px;
    margin-left: 50px;
    border-bottom: 2px solid #2b323b;
    .van-image {
      width: 168px;
      height: 250px;
      background-color: #ffffff;
      border-radius: 20px;
      border: 0;
      outline: 0;
      margin-top: 8px;
    }
    .van-card__title {
      font-family: PingFang-SC-Bold;
      font-size: 36px;
      line-height: 43px;
      color: #ffffff;
      margin-top: 10px;
      margin-bottom: 19px;
    }
    .pfennum {
      font-family: PingFang-SC-Heavy;
      font-size: 40px;
      color: #ffce44;
      vertical-align: text-bottom;
      line-height: 52px;
      margin-left: 24px;
    }
    .bookDesc {
      width: 446px;
      font-family: PingFang-SC-Bold;
      font-size: 24px;
      line-height: 29px;
      color: #999fb0;
      margin: 22px 0;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      text-overflow: ellipsis;
      overflow: hidden;
      -webkit-box-orient: vertical;
    }
    .readNum {
      font-family: PingFang-SC-Bold;
      font-size: 24px;
      line-height: 43px;
      color: #478ce0;
    }
  }
}
</style>
