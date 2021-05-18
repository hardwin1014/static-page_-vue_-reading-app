<template>
  <div class="science">
    <van-nav-bar title="科幻">
      <template #left>
        <i class="iconfont icon-xiangzuo-jiantou"></i>
      </template>
      <template #right>
        <i class="iconfont icon-shujia"></i>
      </template>
    </van-nav-bar>
    <BookBar></BookBar>
  </div>
</template>

<script>
import BookBar from "@/components/content/BookBar.vue";
export default {
  // 定义属性
  data () {
    return {

    }
  },
  components: {
    BookBar
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

<style lang='less'>
.icon-xiangzuo-jiantou,
.icon-shujia {
  font-size: 34px;
  color: #fff;
}
.van-nav-bar {
  background-color: #27212e;
}
.van-nav-bar__title {
  font-family: PingFang-SC-Bold;
  font-size: 44px;
  color: #ffffff;
}
.van-nav-bar__content {
  height: 121px;
  display: flex;
  justify-content: space-between;
  background-color: #21272e;
}
</style>
