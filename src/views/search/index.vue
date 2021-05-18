<template>
  <div class="search-container">
    <form action="/">
      <van-search v-model="value" show-action placeholder="搜索..." @search="onSearch" @cancel="onCancel">
        <span slot="left-icon" class="iconfont icon-sousuo"></span>
      </van-search>
    </form>
    <SearchHot></SearchHot>
    <SearchHistory></SearchHistory>
  </div>
</template>

<script>
import SearchHot from "./components/serch-hot";
import SearchHistory from "./components/search-history";
export default {
  // 定义属性
  data () {
    return {
      value: ""
    }
  },
  components: {
    SearchHot,
    SearchHistory
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onSearch (val) {
      this.toast(val);
    },
    onCancel () {  
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
.search-container {
  .van-search {
    background-color: #21272e;
  }
  .van-search__content {
    width: 544px;
    height: 96px;
    background-color: #2d353d;
    border-radius: 48px;
  }
  .van-field__control {
    color: #fff;
    font-family: PingFang-SC-Regular;
    font-size: 32px;
    line-height: 79px;
    text-indent: 20px;
  }
  .icon-sousuo {
    font-size: 32px;
    color: #9da3b4;
  }
  .van-field__left-icon {
    display: flex;
    align-items: center;
  }
  .van-search__action {
    color: #fff;
    background-color: #27212e !important;
  }
}
</style>
