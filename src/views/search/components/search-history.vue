<template>
  <div class="hotSearch">
    <van-cell title="搜索历史">
      <span slot="right-icon" class="iconfont icon-shanchu"></span>
    </van-cell>
    <div class="hotLabel">
      <van-button class="btnLabel" round>艺术设计</van-button>
      <van-button class="btnLabel" round>自由人像雕塑</van-button>
      <van-button class="btnLabel" round>人文环境</van-button>
      <van-button class="btnLabel" round>社交及职场</van-button>
      <van-button class="btnLabel" round>科学研究</van-button>
    </div>
  </div>
</template>

<script>
export default {
  // 定义属性
  data () {
    return {

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
.icon-shanchu {
  color: #71768c;
  font-size: 36px;
}
.hotSearch {
  .van-cell {
    height: 141px;
    align-items: center;
    justify-content: center;
    background-color: #21272e;
    padding: 0 49px;
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
  height: 338px;
  .hotLabel {
    padding-right: 48px;
    margin-left: 48px;
    display: flex;
    align-content: center;
    flex-wrap: wrap;
    padding-bottom: 47px;
    border-bottom: solid 4px #33373f;
    .btnLabel {
      height: 54px;
      border-radius: 27px;
      border:0;
      background-color: #45485b;
      color: #6da4ff;
      font-family: PingFang-SC-Medium;
      font-size: 22px;
      margin: 25px 30px 0 0;
      color: #ffffff;
    }
    .van-button--normal {
      padding: 15px 25px !important;
    }
  }
}
</style>
