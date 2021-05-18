<template>
  <div class="shujia">
    <van-nav-bar class="comments" title="书架" fixed>
      <span slot="right" class="iconfont icon-shujia"></span>
    </van-nav-bar>
    <div class="list">
      <BookList :title="title" :bookLists="bookList"></BookList>
      <BookList :title="title2" :bookLists="bookList2"></BookList>
    </div>
  </div>
</template>

<script>
import BookList from '@/components/content/BookList'
export default {
  // 定义属性
  data () {
    return {
      title: "正在阅读",
      title2: "未读",
      bookList: [
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        }
      ],
      bookList2: [
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        },
        {
          bookName: "三体：死神永生",
          userName: "刘慈心",
          bookPic: require("@/assets/img/xinfabu1.png")
        }
      ]
    }
  },
  components: {
    BookList
  }
}
</script>

<style lang='less'>
.shujia {
  .list {
    margin: 121px 0 159px 0;
  }
  .van-nav-bar {
    background-color: #21272e;
  }
  .van-nav-bar__content {
    height: 121px;
    display: flex;
    align-items: center;
    background-color: #21272e;
    .van-nav-bar__title {
      font-family: MicrosoftYaHei;
      font-size: 45px;
      color: #ffffff;
    }
    .icon-shujia {
      font-size: 34px;
      color: #fff;
      padding-right: 48px;
    }
    .van-nav-bar__right {
      padding: 0;
    }
  }
}
</style>
