<template>
  <div>
    <div class="newly">
      <van-cell :title="titleMoudel" is-link value="查看全部" />
      <div class="newlyItems">
        <div class="newlyItem" to="/bookdetails" v-for="(item, index) in bookLists" :key="index" @click="bookdesc(index)">
          <van-image class="newPic" :src='item.bookPic' />
          <div class="info">
            <span class="newDesc">{{item.bookName}}</span>
            <span class="newAuthor">{{item.userName}}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {
      titleMoudel: this.title
    }
  },
  // props: ["bookLists"],
  props: {
    bookLists: {
      type: Array
    },
    title: {
      type: String
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: { 
    bookdesc (index) {
      console.log(index)
      this.$router.push('/bookArt')
    }
  },
  // 生命周期 - 创建完成（可以访问当前this实例）
  created () {
    console.log(this.title);
  },
  // 生命周期 - 挂载完成（可以访问DOM元素）
  mounted () {
  }
}
</script>

<style lang='less' scoped>
.newly { 
  .van-cell {
    height: 141px;
    align-items: center;
    justify-content: center;
    background-color: #21272e;
    padding-left: 49px;
    padding-right: 49px;
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
  .newlyItems {
    padding-right: 48px;
    margin-left: 48px;
    display: flex;
    justify-content: space-between;
    align-content: center;
    flex-wrap: wrap;
    .newlyItem {
      width: 192px;
      height: 492px;
      overflow: hidden;
      .newPic {
        width: 192px;
        height: 296px;
        border-radius: 16px;
        overflow: hidden;
      }
      .info {
        display: flex;
        flex-direction: column;
      }
      .newDesc {
        font-family: PingFang-SC-Bold;
        font-size: 28px;
        letter-spacing: -1px;
        color: #ffffff;
        display: -webkit-box;
        text-overflow: ellipsis; /*小数点显示*/
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 溢出隐藏 */
        word-wrap: normal;
      }
      .newAuthor {
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #5d637c;
        text-overflow: ellipsis; /*小数点显示*/
        white-space: nowrap; /* 不换行 */
        overflow: hidden; /* 溢出隐藏 */
        margin-top: 14px;
      }
    }
  }
}
</style>
