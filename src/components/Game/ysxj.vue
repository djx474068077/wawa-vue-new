<template>
  <div class="wa-ysxj" v-if="visible">
    <div class="wa-ysxj-cont">
      <div class="wa-ysxj-box" v-for="(item, index) in ysxjListNow" @click="clickBox(item)" :key="index" :style="{'backgroundColor':item.bgc}">
        {{ item.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ysxj',
  props: [
    'allTime', 'scoreStep'
  ],
  data () {
    return {
      visible: false,
      // 剩余时间
      lastTime: this.allTime,
      // 剩余时间计时器
      lastTimeOut: '',
      // 用时
      hasTime: 0,
      // 用时延时器
      hasTimeInterval: '',
      // 当前第几次
      page: 0,
      // 当前游戏个人战斗记录
      log_self: [],
      // 背景色库
      backList: ['#000000', '#ffff00', '#ff0000', '#ADFF2F', '#87CEFF', '#BF3EFF'],
      // 文字库
      textList: ['黑', '黄', '红', '绿', '蓝', '紫'],
      // 本次游戏全部数据
      ysxjList: [],
      // 当前出现的游戏数据
      ysxjListNow: []
    }
  },
  methods: {
    // 初始化定制ysxj游戏数据
    setYsxjList () {
      // 这里写创建游戏数据的函数
      this.ysxjList = [
        [{
          bgc: '#ffff00',
          text: '黄'
        }, {
          bgc: '#ff0000',
          text: '蓝'
        }],
        [{
          bgc: '#ffff00',
          text: '黄'
        }, {
          bgc: '#ff0000',
          text: '蓝'
        }, {
          bgc: '#ff0000',
          text: '蓝'
        }]
      ]
      let _this = this
      setTimeout(function () {
        _this.$vux.loading.hide()
        _this.visible = true
        _this.setYsxjListNow()
        _this.timeRun()
        _this.lastTimeOut = setTimeout(_this.timeOut, _this.allTime * 1000)
      }, 1000)
    },
    // 色块点击事件
    clickBox (item) {
      console.log('time: ' + this.hasTime + ';bgc: ' + item.bgc + ';text: ' + item.text)
      if (this.backList.findIndex(value => value === item.bgc) === this.textList.findIndex(value => value === item.text)) {
        this.log_self.push({time: this.hasTime, is_right: true, score_add: parseInt(this.scoreStep)})
        this.page++
        this.setYsxjListNow()
      } else {
        this.log_self.push({time: this.hasTime, is_right: false, score_add: 0})
      }
    },
    // 计时器
    timeRun () {
      let _this = this
      this.hasTimeInterval = setInterval(function () {
        _this.hasTime += 10
        _this.lastTime = (_this.allTime * 1000 - _this.hasTime) / 1000
      }, 10)
    },
    // 时间结束的事件
    timeOut () {
      console.log('时间到')
      clearTimeout(this.lastTimeOut)
      clearTimeout(this.hasTimeInterval)
    },
    // 设置当前ysxj游戏显示数据
    setYsxjListNow () {
      this.ysxjListNow = this.ysxjList[this.page]
    },
    show () {
      this.setYsxjList()
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus">
  .wa-ysxj
    width: 100%
    height: 100%
    .wa-ysxj-cont
      position: relative
      width: 100%
      left: 0
      top: 50%
      transform translateY(-50%)
      display flex
      .wa-ysxj-box
        width: 90px
        height: 90px
        margin: 10px
        border-radius 6px
        line-height 90px
        text-align center
        font-size: 30px
        color: #ffffff
</style>
