<template>
  <div class="tansuo">
    <van-nav-bar fixed title="探索">
      <template #right>
        <i class="iconfont icon-icon-1" @click="hrf()" :class="flag===true?'active':'noActive'"></i>
        <i class="iconfont icon-icon-2" :class="flag===true?'noActive':'active'"></i>
      </template>
    </van-nav-bar>
    <div class="BooksList" v-if="isShow">
      <div class="ListItem" v-for="(item,index) in booklist" :key="index" @click="details(item,index)">
        <van-image lazy-load :src="item.img" />
        <p class="bookName">{{item.name}}</p>
      </div>
    </div>
    <!-- 书籍详情页面 -->
    <div class="Booksitem" v-else>
      <van-empty class="custom-image" :image="bookpic">
        <template #default>
          <p class="bookName">{{bookname}}</p>
          <p class="athors">{{auhtorName}}</p>
        </template>
      </van-empty>
      <div class="dianzan">
        <div class="perPic">
          <van-image lazy-load round fit="cover" v-for="(item,index) in profilePic" :key="index" :src="item.img" />
        </div>
        <p class="ydNum"><span class="Num">457</span> 人已阅读</p>
      </div>
      <div class="recom">
        <div class="wp">
          <van-image round :src="require('@/assets/img/santi.png')" />
          <div class="recomAuthor">
            <p class="name">陈小东</p>
            <p class="rec">推荐</p>
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
      booklist: [
        {
          img: require('@/assets/img/santi.png'),
          name: "三体：死神永生",
          author: "刘欣慈"
        },
        {
          img: require('@/assets/img/bainian.png'),
          name: "百年孤独",
          author: "刘欣慈"
        },
        {
          img: require('@/assets/img/pingfan.png'),
          name: "平凡世界",
          author: "路遥"
        },
        {
          img: require('@/assets/img/sjian.png'),
          name: "未来简史",
          author: "刘欣慈"
        }
      ],
      profilePic: [
        {
          img: require('@/assets/img/toux1.png')
        },
        {
          img: require('@/assets/img/toux2.png')
        },
        {
          img: require('@/assets/img/toux3.png')
        },
        {
          img: require('@/assets/img/toux4.png')
        }
      ],
      bookpic: "",
      bookname: "",
      auhtorName: "",
      isShow: true, // 点击进入书籍详情
      flag: true, // 控制顶部书架还是书籍详情按钮
      isReload: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  // 计算属性，会监听依赖属性值随之变化
  computed: {
  },
  // 监控data中的数据变化
  watch: {},
  // 方法集合
  methods: {
    details (item) {
      // console.log(item);
      this.isShow = false;
      this.bookpic = item.img;
      this.bookname = item.name
      this.auhtorName = item.author
      // console.log(this.bookname);
      this.flag = false
    },
    reload () {
      this.isReload = false
      this.$nextTick(() => {
        this.isReload = true
      })
    },
    hrf () {
      this.flag = true
      this.isShow = true
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
.tansuo {
  .van-nav-bar {
    height: 121px;
  }
  .van-nav-bar__title {
    font-family: PingFang-SC-Medium;
    font-size: 44px;
    color: #ffffff;
  }
  .active {
    color: #ffffff !important;
  }
  .noActive {
    color: #71768c !important;
  }
  .icon-icon-1 {
    font-size: 32px;
    color: #fff;
  }
  .icon-icon-2 {
    font-size: 32px;
    color: #71768c;
    margin-left: 24px;
  }
  .van-nav-bar {
    background-color: #21272e !important;
  }
  .van-nav-bar__content {
    height: 121px;
    display: flex;
    align-content: center;
    background-color: #21272e;
  }
  .Booksitem {
    margin: 121px 80px 4.11rem;
    .van-empty {
      margin: 58px 82px;
      border-bottom: 2px solid #2e3640;
    }
    .dianzan {
      display: flex;
      flex-direction: column;
    }
    .van-empty__image {
      width: 390px;
      height: 580px;
      border-radius: 36px;
    }
    .van-empty__bottom {
      text-align: center;
      margin-top: 0;
      .bookName {
        font-family: PingFang-SC-Heavy;
        font-size: 44px;
        color: #ffffff;
      }
      .athors {
        font-family: PingFang-SC-Medium;
        font-size: 36px;
        color: #656a7b;
        line-height: 0px;
      }
    }
    .perPic {
      text-align: center;
    }
    .ydNum {
      font-family: MicrosoftYaHei;
      font-size: 24px;
      color: #a2a8ba;
      text-align: center;
    }
    .van-image--round {
      width: 68px;
      height: 68px;
    }
    .recom {
      width: 238px;
      height: 84px;
      background-color: #15191d;
      display: flex;
      align-items: center;
      flex-direction: row;
      border-radius: 40px 0 0 40px;
      box-shadow: 20px 10px 40px 0px #22282d;
      position: absolute;
      right: 0;
      .wp {
        display: flex;
        margin-left: 8px;
      }
      .recomAuthor {
        margin-left: 9px;
        .name {
          font-family: PingFang-SC-Medium;
          font-size: 24px;
          color: #ffffff;
          line-height: 0px;
        }
        .rec {
          font-family: PingFang-SC-Medium;
          font-size: 22px;
          color: #707483;
          line-height: 10px;
          margin-top: 4px;
        }
      }
    }
  }
  //图书列表页面
  .BooksList {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    margin: 121px 80px 4.11rem;
    .ListItem {
      margin-top: 81px;
    }
    .van-image {
      width: 268px;
      height: 400px;
      border-radius: 24px;
      overflow: hidden;
    }
    .bookName {
      font-family: PingFang-SC-Bold;
      font-size: 28px;
      color: #ffffff;
      text-align: center;
      line-height: 0;
    }
  }
}
</style>
