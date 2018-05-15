<template>
  <v-touch class="wa-kdkx" @swipeup="onSwipeUp" @swipedown="onSwipeDown" v-if="visible">
    <div class="wa-kdkx-cont">
      <div class="wa-kdkx-box" style="background: #f76260;">
        {{ kdkxNow }}
      </div>
    </div>
  </v-touch>
</template>

<script>
// import VueTouch from 'vue-touch'
export default {
  name: 'kdkx',
  // components: {
  //   VueTouch
  // },
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
      // 初始化计时器
      initTimeOut: '',
      // 用时
      hasTime: 0,
      // 用时延时器
      hasTimeInterval: '',
      // 开始第一个块的延时器
      firstTimeOut: '',
      // 当前第几次
      page: 0,
      // 当前游戏个人战斗记录
      log_self: [],
      // 本次游戏全部数据
      kdkxList: [],
      // 当前出现的游戏数据
      kdkxNow: 0
    }
  },
  methods: {
    // 初始化定制ysxj游戏数据
    setKdkxList () {
      // 这里写创建游戏数据的函数
      // 这个创建的数组是二维数组，
      for (var i = 0; i <= 100; i++) {
        let rand = parseInt(Math.random() * 99) + 1
        this.kdkxList.push(rand)
      }
      let _this = this
      clearTimeout(_this.initTimeOut)
      _this.initTimeOut = setTimeout(function () {
        _this.$vux.loading.hide()
        _this.visible = true
        _this.setKdkxNow()
        _this.$emit('startTime')
        _this.timeRun()
        clearTimeout(_this.lastTimeOut)
        _this.lastTimeOut = setTimeout(_this.timeOut, _this.allTime * 1000)
      }, 1000)
      clearTimeout(_this.firstTimeOut)
      _this.firstTimeOut = setTimeout(function () {
        _this.page++
        _this.setKdkxNow()
      }, 1500)
    },
    // 随机数组顺序
    shuffle (a) {
      var len = a.length
      for (var i = 0; i < len - 1; i++) {
        var index = parseInt(Math.random() * (len - i))
        var temp = a[index]
        a[index] = a[len - i - 1]
        a[len - i - 1] = temp
      }
    },
    // 向上滑
    onSwipeUp () {
      console.log('向上滑')
      if (this.page > 0) {
        if (this.kdkxNow >= this.kdkxList[this.page - 1]) {
          // 正确
          this.log_self.push({time: this.hasTime, is_right: true, score_add: parseInt(this.scoreStep)})
          this.page++
          this.setKdkxNow()
          this.$emit('boxClick', {time: this.hasTime, is_right: true, score_add: parseInt(this.scoreStep)})
        } else {
          this.log_self.push({time: this.hasTime, is_right: false, score_add: 0})
          this.$emit('boxClick', {time: this.hasTime, is_right: false, score_add: 0})
        }
      }
    },
    // 向下滑
    onSwipeDown () {
      console.log('向下滑')
      if (this.page > 0) {
        if (this.kdkxNow <= this.kdkxList[this.page - 1]) {
          // 正确
          this.log_self.push({time: this.hasTime, is_right: true, score_add: parseInt(this.scoreStep)})
          this.page++
          this.setKdkxNow()
          this.$emit('boxClick', {time: this.hasTime, is_right: true, score_add: parseInt(this.scoreStep)})
        } else {
          this.log_self.push({time: this.hasTime, is_right: false, score_add: 0})
          this.$emit('boxClick', {time: this.hasTime, is_right: false, score_add: 0})
        }
      }
    },
    // 计时器
    timeRun () {
      let _this = this
      clearInterval(this.hasTimeInterval)
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
      this.hide()
      this.$emit('endTime', this.log_self)
    },
    // 设置当前kdkx游戏显示数据
    setKdkxNow () {
      this.kdkxNow = this.kdkxList[this.page]
    },
    init () {
      this.visible = false
      this.lastTime = this.allTime
      this.lastTimeOut = ''
      this.hasTime = 0
      this.hasTimeInterval = ''
      this.page = 0
      this.log_self = []
      this.kdkxList = []
      this.kdkxNow = []
    },
    show () {
      this.init()
      this.setKdkxList()
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus">
  .wa-kdkx
    width: 100%
    height: 100%
    .wa-kdkx-cont
      position: relative
      width: 100%
      left: 0
      top: 50%
      transform translateY(-50%)
      display flex
      justify-content center
      flex-wrap wrap
      .wa-kdkx-box
        width: 90px
        height: 90px
        margin: 10px
        border-radius 6px
        line-height 90px
        text-align center
        font-size: 30px
        color: #ffffff
</style>
