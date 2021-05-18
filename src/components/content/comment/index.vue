<template>
  <div class="remark">
    <van-nav-bar class="comments" title="评论" fixed :border='false'>
        <span slot="left" class="iconfont icon-arrowLeft-fill"></span>
        <span slot="right" class="iconfont icon-pinglun"></span>
    </van-nav-bar>
    <div class="container">
      <div class="userPL" v-for="(item, index) in commentList" :key="index">
        <div class="userSpeak">
          <van-image lazy-load round :src='item.userPic' />
          <div class="plContent">
            <p class="userName">{{item.name}}</p>
            <p class="contents">{{item.content}}</p>
          </div>
        </div>
        <div class="operation">
          <div class="tiem">{{item.time}}</div>
          <div class="dzpl">
            <p class="iconfont icon-pinglunxihuan">{{item.zanNum}}</p>
            <p class="iconfont icon-pinglunfabiao">{{item.plNum}}</p>
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
      commentList: [
        {
          name: '你个废物',
          userPic: require("@/assets/img/userpicfei.png"),
          content: "大刘塑造的女性都具有明显的圣母特质，但是本质上弱爆了。叶是文革的毒瘤，庄是定制禁脔，程最经典——站在圣母和傻逼的微笑曲线上。大刘塑造的男性都带有明显的缺陷但本质上极端人性化。一身痞气的小人物大史，最高情商让他活得最明白；罗辑的荒唐和不羁让他成了救世主，但也决定了他必不能善终；软弱怯懦固执的云天明，也并无理由因为慷慨和运气就得到爱啊。但我真心理解这样的人，这样的性格，这样的命运。",
          time: "12-04 21:20",
          zanNum: 139,
          plNum: 89
        },
        {
          name: '猪是糖缺死的 ',
          userPic: require("@/assets/img/userpicfei.png"),
          content: "鉴于这年头写书评是一种费力不讨好一不小心就被客观被装逼被代表全亚洲的行为艺术，楼主在读完《三体3》（以下省略书名号，以下所有提及的书刊杂志一律省略书名号，因为太麻烦）后，用了五秒钟做出重要决定：老子只写读后感。 所谓读后感的意思就是，这是一个完全个人完全主观。",
          time: "12-04 21:20",
          zanNum: 139,
          plNum: 89
        },
        {
          name: '四肢发达头脑复杂',
          userPic: require("@/assets/img/userpicfei.png"),
          content: "刘慈欣：写这个人就没想过让读者喜欢，这不是读者会喜欢的人。她其实很自私，但这种自私和普通的自私不一样，因为她自己觉察不到。遵循道德的人其实很自私，因为他们除了道德和良心什么都不管，程心恰恰就是一个这样的人。她会认为自己很崇高，认为自己不自私，认为自己的价值观和道德准则是普世的、正确的。",
          time: "12-04 21:20",
          zanNum: 139,
          plNum: 89
        }
      ]
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
.remark { 
  .van-nav-bar{
    background-color: #21272e;
  }
  .van-nav-bar__content { 
    height: 121px;
    display: flex;
    align-items: center;  
    background-color: #21272e; 
    .van-nav-bar__title {
      font-family: MicrosoftYaHei;
      font-size: 36px;
      color: #ffffff;
    }
    .van-nav-bar__right {
      font-size: 34px;
      color: #fff;
      padding-right: 48px;
    } 
    .van-nav-bar__left{
      font-size: 34px;
      color: #fff;
      padding-left: 48px;
    }
  }
  .container{
    margin: 134px 0 57px 46px; 
  }
  .userPL {  
    margin-top: 40px;
    .userSpeak {
      display: flex;
    }
    .van-image {
      width: 60px;
      height: 60px;
      margin-right: 25px;
    }
    .plContent {
      width: 553px;
      .userName {
        font-family: PingFang-SC-Medium;
        font-size: 28px;
        color: #ffffff;
        margin: 11px 0 0 0;
      }
      .contents {
        font-family: PingFang-SC-Medium;
        font-size: 24px;
        line-height: 36px;
        color: #868dab;
        margin: 33px 0 38px;
      }
    }
    .operation {
      height: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-left: 90px;
      padding-right: 48px;
      padding-bottom: 45px;
      border-bottom: 2px solid #45485b;
      .tiem {
        font-family: PingFang-SC-Regular;
        font-size: 22px;
        color: #656a7b;
      }
      .dzpl {
        display: flex;
        font-family: PingFang-SC-Regular;
        font-size: 22px;
        color: #656a7b;
        .icon-pinglunxihuan {
          margin-right: 32px;
          &::before {
            font-size: 20px;
            color: #71768c;
            margin-right: 14px;
          }
        }
        .icon-pinglunfabiao {
          &::before {
            margin-right: 14px;
          }
        }
      }
    }
  }
}
</style>
