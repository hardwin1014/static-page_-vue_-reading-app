<template>
  <div class="classify">
    <van-nav-bar title="分类">
      <i slot="left" class="iconfont icon-arrowLeft-fill" @click="leftBack()"></i>
    </van-nav-bar>
    <div class="serch">
      <form action="/">
        <van-search v-model="value" placeholder="搜索..." @search="onSearch">
          <span slot="left-icon" class="iconfont icon-sousuo"></span>
        </van-search>
      </form>
    </div>
    <!-- 滚动导航栏 -->
    <van-tabs>
      <van-tab v-for="(item, index) in cagegory" :key="index" :title="item.name" background="#21272e">
      </van-tab>
    </van-tabs>
    <div class="cut"></div>
    <!-- 图书列表组件 -->
    <bookLists :bookLists="bookList" :title="title1"></bookLists>
    <bookLists :bookLists="bookList2" :title="title2"></bookLists>
    <div class="back"></div>
  </div>
</template>

<script>
import bookLists from "@/components/content/BookList.vue";
export default {
  // 定义属性
  data () {
    return {
      cagegory: [
        {
          name: "科幻"
        },
        {
          name: "职场"
        },
        {
          name: "言情"
        },
        {
          name: "艺术"
        },
        {
          name: "科学"
        },
        {
          name: "军事"
        }
      ],
      value: '',
      bookList: [
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "乡村教师",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xiangchun.png")
        },
        {
          bookName: "你一生的故事",
          userName: "特德·姜 ",
          bookPic: require("@/assets/img/niyi.png")
        }
      ],
      bookList2: [
        {
          bookName: "软件体的生命期",
          userName: "特德·姜 ",
          bookPic: require("@/assets/img/ruanjian.png")
        },
        {
          bookName: "大师的盛宴",
          userName: "奥森·斯科特·卡德 ",
          bookPic: require("@/assets/img/dashi.png")
        },
        {
          bookName: "计算中的上帝",
          userName: "罗伯特·索耶 ",
          bookPic: require("@/assets/img/jisuan.png")
        }
      ],
      title1: "新上架",
      title2: "热门"
    }
  },
  components: {
    bookLists
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
    leftBack () {
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
.classify {
  .van-nav-bar {
    background-color: #21272e;
  }
  .van-nav-bar__content {
    height: 121px;
    .van-nav-bar__title {
      font-family: PingFang-SC-Bold;
      font-size: 44px;
      color: #ffffff;
    }
    .icon-arrowLeft-fill {
      font-size: 34px;
      color: #fff;
    }
    .van-nav-bar__left {
      padding-left: 48px;
    }
  }
  .serch {
    .van-search {
      width: 650px;
      height: 96px;
      background-color: #21272e;
      margin: 0 auto;
      padding: 0;
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
  .van-tabs__nav {
    background-color: #21272e !important;
    border-bottom: 2px solid #2d353d;

    margin-left: 29px;
    .van-tab__text {
      color: #fff !important;
    }
    .van-tab {
      width: 130px;
    }
  }
  .cut {
    width: 750px;
    height: 2px;
    background-color: #2d353d;
    position: absolute;
    top: 300px;
    left: 0;
    z-index: 999;
  }
  .back {
    width: 270px;
    height: 8px;
    background-color: #71768c;
    border-radius: 20px;
    position: fixed;
    bottom: 16px;
    left: 240px;
  }
}
.newlyItems {
  border-bottom: 4px solid #393d45;
}
</style>
