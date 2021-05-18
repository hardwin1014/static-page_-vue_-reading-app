<template>
  <div class="authors">
    <van-nav-bar title="作者" @click-left="onClickLeft" @click-right="onClickRight">
      <template #left>
        <i class="iconfont icon-arrowLeft-fill"></i>
      </template>
      <template #right>
        <i class="iconfont icon-shujia"></i>
      </template>
    </van-nav-bar>
    <!--作者排行区 -->
    <van-row class="paihang" align="center">
      <van-col>
        <div>
          <van-image class="userPic2" round :src="require('@/assets/img/yuqiuyu.png')" />
          <p class="userName2">余秋雨</p>
          <p class="fans">5869粉丝</p>
          <i class="iconfont icon-huangguan hg2"></i>
          <span class="second num">2</span>
        </div>
      </van-col>
      <van-col class="num1">
        <div>
          <van-image class="userPic1" round :src="require('@/assets/img/liucixin.png')" />
          <p class="userName1">刘慈欣</p>
          <p class="fans">5869粉丝</p>
          <i class="iconfont icon-huangguan hg1"></i>
          <span class="first num">1</span>
        </div>
      </van-col>
      <van-col>
        <div @click="authorDetails">
          <van-image class="userPic3" round :src="require('@/assets/img/tianxiaohua.png')" />
          <p class="userName3">田小花</p>
          <p class="fans">5869粉丝</p>
          <i class="iconfont icon-huangguan hg3"></i>
          <span class="three num">3</span>
        </div>
      </van-col>
    </van-row>
    <!-- 热门作者 -->
    <author :tit="title" :authors="authors"></author>
    <!-- 新晋作者 -->
    <author :tit="title2" :authors="authors2"></author>
    <!-- 其他作者 -->
    <van-cell class="qita" title="其他作者" is-link value="查看全部" />
    <span class="bottomline"></span>
  </div>
</template>

<script>
import Author from './author'
export default {
  // 定义属性
  data () {
    return {
      title: "热门作者",
      title2: "新晋作者",
      authors: [
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: true
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: false
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: true
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: false
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: true
        }
      ],
      authors2: [
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: true
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: false
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: true
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: false
        },
        {
          img: require("@/assets/img/wangyuanyuan.png"),
          name: '王源源',
          isFollow: true
        }
      ]
    }
  },
  components: {
    author: Author
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    onClickLeft () {
      this.$router.go(-1);  
    },
    onClickRight () {
      this.toast('按钮');
    },
    authorDetails () {
      this.$router.push('/authorDetails')
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
.authors {
  .van-nav-bar {
    background-color: #21272e;
    .van-nav-bar__content{
      height: 121px; 
      line-height: 121px;
    }
    .van-nav-bar__title {
      font-family: MicrosoftYaHei;
      font-size: 44px;
      color: #ffffff;
    }
    .icon-arrowLeft-fill,
    .icon-shujia {
      font-size: 34px;
      color: #fff;
    }
  }
  .paihang {
    height: 446px;
    margin-left: 67px;
    margin-top: 30px;
    padding-right: 67px;
    display: flex;
    align-items: center;
    border-bottom: 2px solid #343946;
    .van-col--8 {
      margin: 0 48px;
    }
    .num1 {
      width: 203px;
      margin: 0 48px;
    }
    .van-col {
      position: relative;
      .userPic2,
      .userPic3 {
        width: 160px;
        height: 160px;
        text-align: center;
      }
      .userPic1 {
        width: 200px;
        height: 200px;
        text-align: center;
        display: contents;
      }
      .userName2 {
        font-family: PingFang-SC-Bold;
        font-size: 36px;
        color: #f44380;
        text-align: center;
        margin: 0;
        margin-top: 21px;
      }
      .userName1 {
        font-family: PingFang-SC-Bold;
        font-size: 40px;
        color: #fdaf01;
        text-align: center;
        margin: 0;
        margin-top: 21px;
      }
      .userName3 {
        font-family: PingFang-SC-Bold;
        font-size: 36px;
        color: #00a2ff;
        text-align: center;
        margin: 0;
        margin-top: 21px;
      }
      .fans {
        font-family: PingFang-SC-Medium;
        font-size: 28px;
        color: #a2a8ba;
        text-align: center;
        margin: 0;
      }
      .icon-huangguan {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
      }
      .hg1 {
        font-size: 100px;
        color: #fdaf01;
        top: -90px;
      }
      .hg2 {
        font-size: 59px;
        top: -45px;
        color: #f44380;
      }
      .hg3 {
        font-size: 59px;
        top: -45px;
        color: #00a2ff;
      }
      .num {
        width: 34px;
        height: 34px;
        border: solid 3px #ffffff;
        border-radius: 50%;
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        color: #ffffff;
        text-align: center;
        line-height: 34px;
        position: absolute;
        bottom: 101px;
        left: 50%;
        transform: translateX(-50%);
        z-index: 999;
      }
      .three {
        background-color: #00a2ff;
      }
      .second {
        border-radius: 50%;
        background-color: #f44380;
      }
      .first {
        background-color: #fdaf01;
        bottom: 95px;
      }
    }
  }
  .van-cell {
    display: flex;
    align-items: center;
    padding: 0 49px;
    background-color: #21272e;
    .van-cell__title {
      font-family: PingFang-SC-Bold;
      font-size: 36px;
      color: #ffffff;
    }
    .van-cell__value {
      font-family: PingFang-SC-Regular;
      font-size: 24px;
      color: #a2a8ba;
    }
  }
  .qita {
    height: 105px;
  }
  .bottomline {
    width: 270px;
    height: 8px;
    border-radius: 80px;
    background-color: #71768c;
    position: absolute;
    bottom: 0;
    z-index: 9999;
    left: 240px;
    right: 240px;
  }
}
</style>
