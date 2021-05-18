<template>
  <div class="firstPage">
    <van-swipe @change="onChange" :loop="false" :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" class="swiperItem" />
      </van-swipe-item>
    </van-swipe>
    <div class="enter" v-if="current===images.length-1">
      <van-button class="enterBtn" type="primary" to="">进入</van-button>
      <div class="back"></div>
    </div>
  </div>
</template>

<script> 
export default {
  // 定义属性
  data () {
    return {
      images: [
        require('@/assets/img/content1.png'),
        require('@/assets/img/content2.png'),
        require('@/assets/img/content3.png')
      ],
      current: 0
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onChange (index) {
      this.current = index;
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

<style lang='less' scoped>
.firstPage {
  width: 10rem;
  height: 21.65rem;
  box-sizing: border-box;
  position: relative;
}
.van-swipe {
  padding-bottom: 1.8rem;
  margin-top: 2.56rem;
}
.swiperItem {
  width: 100%;
  height: 100%;
}
.van-swipe__indicators {
  position: absolute;
  bottom: 0;
  .van-swipe__indicator {
    width: 0.48rem;
    height: 0.16rem;
    background: #ffffff;
    border-radius: 0.08rem;
  }
}
.enterBtn {
  width: 10rem;
  height: 1.89rem;
  background: #2e363f;
  font-size: 0.59rem;
  font-family: PingFang;
  font-weight: 500;
  color: #dcdeea;
  border: none;
  margin-top: 1.09rem;
}
.back {
  width: 3.6rem;
  height: 0.11rem;
  background: rgba(113, 118, 140, 0.5);
  border-radius: 0.05rem;
  position: absolute;
  bottom: 0.21rem;
  left: 3.2rem;
}
</style>
