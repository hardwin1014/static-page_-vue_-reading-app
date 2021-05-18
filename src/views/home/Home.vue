<template>
  <div class="home">
    <div class="header">
      <i class="iconfont icon-Leaderboard"></i>
      <i class="iconfont icon-shujia"></i>
    </div>
    <div class="serch">
      <van-button round to="/search" class="searchBtn" text="搜索...">
        <i slots="default" class="iconfont icon-sousuo">搜索...</i>
      </van-button>
    </div>
    <div class="fenlei">
      <van-cell title="分类排行" is-link value="查看全部" to="/classify" />
      <div class="fenleiItems">
        <div class="fenleiitem" @click="scienDesc">
          <van-image :src='require("@/assets/img/fenlei1.png")' />
          <span class="desc">科幻</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/fenlei2.png")' />
          <span class="desc">生活</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/fenlei3.png")' />
          <span class="desc">露营</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/fenlei4.png")' />
          <span class="desc">职场</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/fenlei1.png")' />
          <span class="desc">科幻</span>
        </div>
      </div>
    </div>
    <div class="fenlei">
      <van-cell title="作者排行" is-link value="查看全部" to="authorranking" />
      <div class="fenleiItems">
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/zuozhe1.png")' />
          <span class="desc">刘欣慈</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/zuozhe2.png")' />
          <span class="desc">田小花</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/zuozhe3.png")' />
          <span class="desc">马尔克斯</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/zuozhe4.png")' />
          <span class="desc">余秋雨</span>
        </div>
        <div class="fenleiitem">
          <van-image :src='require("@/assets/img/fenlei1.png")' />
          <span class="desc">鲁迅</span>
        </div>
      </div>
    </div>
    <div class="newly">
      <van-cell title="新发布" is-link value="查看全部" />
      <div class="newlyItems">
        <div class="newlyItem" @click="bookDesc()">
          <van-image class="newPic" :src='require("@/assets/img/xinfabu1.png")' />
          <div class="info">
            <span class="newDesc">三体：死神永生</span>
            <span class="newAuthor">刘慈心</span>
          </div>
        </div>
        <div class="newlyItem">
          <van-image class="newPic" :src='require("@/assets/img/xinfabu2.png")' />
          <div class="info">
            <span class="newDesc">人类简史</span>
            <span class="newAuthor">尤瓦尔• 郝拉利</span>
          </div>
        </div>
        <div class="newlyItem">
          <van-image class="newPic" :src='require("@/assets/img/xinfabu3.png")' />
          <div class="info">
            <span class="newDesc">徐三观卖血记</span>
            <span class="newAuthor">余华</span>
          </div>
        </div>
        <div class="newlyItem">
          <van-image class="newPic" :src='require("@/assets/img/xinfabu4.png")' />
          <div class="info">
            <span class="newDesc">未来简史</span>
            <span class="newAuthor">尤瓦尔• 郝拉利</span>
          </div>
        </div>
        <div class="newlyItem">
          <van-image class="newPic" :src='require("@/assets/img/xinfabu5.png")' />
          <div class="info">
            <span class="newDesc">自私的基因</span>
            <span class="newAuthor">理查德·道金斯</span>
          </div>
        </div>
        <div class="newlyItem">
          <van-image class="newPic" :src='require("@/assets/img/xinfabu6.png")' />
          <div class="info">
            <span class="newDesc">百年孤独</span>
            <span class="newAuthor">马尔克斯</span>
          </div>
        </div>
      </div>
    </div>
    <div class="hotSearch">
      <van-cell title="热门搜索" />
      <div class="hotLabel">
        <van-button class="btnLabel" round>2018排行榜</van-button>
        <van-button class="btnLabel" round>职场热门</van-button>
        <van-button class="btnLabel" round>都市言情</van-button>
        <van-button class="btnLabel" round>哈弗大学经济管理类</van-button>
        <van-button class="btnLabel" round>领导才能</van-button>
      </div>
    </div>
    <!-- 书籍详情滑动 -->
    <BookBarSlide></BookBarSlide>
  </div>
</template>

<script>
import BookBarSlide from "@/components/content/BookBarSlide.vue";
export default {
  // 定义属性
  data () {
    return {
      value: ""
    }
  },
  components: {
    BookBarSlide
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    scienDesc () {
      this.$router.push("/Science")
      // this.$router.go(0) 
    },
    bookDesc () {
      this.$router.push('/bookdetails')
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
.home {
  margin-bottom: 2rem;
}
.header {
  height: 121px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  padding: 0 48px;
  .icon-Leaderboard {
    font-size: 34px;
  }
  .icon-shujia {
    font-size: 34px;
  }
}
.serch {
  display: flex;
  justify-content: center;
  align-content: center;
  .searchBtn {
    width: 650px;
    height: 96px;
    background-color: #2d353d;
    border: 0;
    .icon-sousuo {
      text-align: left;
      color: #9da3b4;
      &::before {
        margin-right: 17px;
      }
    }
    .van-button__content {
      justify-content: flex-start;
    }
  }
}
.fenlei {
  .van-cell {
    height: 141px;
    align-items: center;
    justify-content: center;
    background-color: #21272e;
    .van-cell__value {
      font-family: PingFang-SC-Regular;
      font-size: 26px;
      color: #a2a8ba;
    }
    .van-cell__title {
      font-family: PingFang-SC-Medium;
      font-size: 36px;
      color: #ffffff;
    }
  }
  .fenleiItems {
    width: 722px;
    height: 266px;
    display: flex;
    flex-direction: row;
    display: -webkit-box;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch;
    margin-left: 28px;
    box-sizing: border-box;
    border-bottom: solid 2px #2f343c;
    .fenleiitem {
      margin: 0 15px;
      .van-image {
        width: 160px;
        height: 160px;
        border-radius: 20px;
        overflow: hidden;
      }
      .desc {
        display: block;
        font-family: PingFang-SC-Bold;
        font-size: 28px;
        color: #ffffff;
      }
    }
  }
}
.newly {
  .van-cell {
    height: 141px;
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
  .newlyItems {
    padding-right: 48px;
    margin-left: 48px;
    border-bottom: solid 4px #393d45;
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
.hotSearch {
  .van-cell {
    height: 141px;
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
      border: solid 2px #6da4ff;
      background-color: #27212e;
      color: #6da4ff;
      font-family: PingFang-SC-Medium;
      font-size: 24px;
      margin: 25px 30px 0 0;
    }
    .van-button--normal {
      padding: 15px 25px !important;
    }
  }
}
</style>
