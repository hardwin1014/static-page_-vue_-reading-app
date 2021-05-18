<template>
  <div class="yuedu">
    <div class="tit">
      <span>章节 10 详情</span>
    </div>
    <div class="content">
      <p class="neirong">1931年的5月，纽约市民亲眼目睹了一场恐怖围捕！凶手叫克劳雷，外号“双枪将”，他滴酒不沾估计走在大街上谁也不会把他和凶恶的罪犯联系在一起。

        他被包围了，正在西端大街他情人的公寓里与警方做困兽之斗。

        一百五十名警员把克劳雷逼到了公寓的顶层。他们在屋顶凿了个洞，试图用催泪瓦斯把克劳雷熏出来特警队也把机枪安置在公寓四周的建筑物上，和他对战了一个多小时。这个纽约市里原本清静高档的住宅区，已被一阵阵让人心惊肉跳的刺耳枪声淹没。克劳雷藏在一把堆满杂物的椅子后面，手持短枪，不时地向警方还击。而成千上万的市民，则站在这座公寓附近，“欣赏”着这部“警匪大片”——这样的场面在纽约绝对是前所未有的。

        当克劳雷被捕后，警察总监马罗尼强调说：“这家伙是纽约治安史上，最危险的罪犯，没有之一。”接着这位警察总监又形象地说，“克劳雷杀人的手法就像切葱一样纯熟……他一定会被判处死刑！” 可是，“双枪将”克劳雷可不这么想，当警方人员围击他藏身的公寓时，克劳雷还写了一封公开信，写信时他已经中弹，所以那张纸上沾有他的血迹！克劳雷在信中这样写道：“在我衣服里面藏着一颗疲惫的心——那是仁慈的，一颗不愿意伤害任何人的心。”
        就在围捕发生前不久，克劳雷和女友还驾驶着汽车奔驰在长岛公路上，他们将车停在一条乡村小路旁，开始寻欢。突然有一个警察来到他的汽车旁说：“请出示您的驾照！”
        克劳雷先是沉默不语，然后突然拔出手枪，朝警察连开数枪，警察当场身亡。接着克劳雷从汽车里跳了出来，捡起警察的手枪，又朝地上的尸体放了一枪。这就是克劳雷所说的“在我衣服里面藏着一颗疲惫的心——那是仁慈的，一颗不愿意伤害任何人的心”吗？
      </p>
    </div>
    <div class="introduce">
      个人介绍：内幕（542）
    </div>
    <span class="back"></span>
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

<style lang='less'>
.yuedu {
  color: #fff;
  .tit {
    width: 750px;
    height: 121px;
    line-height: 121px;
    font-family: PingFang-SC-Bold;
    font-size: 28px;
    color: #ffffff;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #21272e;
    padding-left: 49px;
  }
  .content {
    .neirong {
      font-family: PingFang-SC-Medium;
      font-size: 28px;
      line-height: 58px;
      letter-spacing: -1px;
      color: #d1d1d6;
      margin: 121px 0;
      padding: 0 48px;
    }
  }
  .introduce {
    width: 750px;
    height: 158px;
    line-height: 158px;
    font-family: PingFang-SC-Bold;
    font-size: 32px;
    line-height: 60px;
    color: #eee;  
    position:fixed;
    bottom: 0;
    background-color: #21272e;
    padding: 43px 0 0 49px;
  }
  .back{
    width: 270px;
    height: 8px;
    background-color: #71768c;
    border-radius: 20%;
    position:fixed;
    bottom: 0;
    left: 240px;
  }
}
</style>
