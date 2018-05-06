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
      // 这个创建的数组是二维数组，
      for (var i = 0; i <= 60; i++) {
        let page = []
        let flag = false
        let size = i > 20 ? 6 : i > 12 ? 5 : i > 7 ? 4 : i > 2 ? 3 : 2
        for (var j = 0; j < size; j++) {
          if (j + 1 === size && flag === false) {
            // 如果循环到最后一个，还没有找出不一样的背景和字，进行此步骤
            let index = this.getDiffIndex()
            page.push({bgc: this.backList[index[0]], text: this.textList[index[1]]})
          } else if (flag === true) {
            // 如果flag为true，表示已经找到了不一样的背景和字，进行此步骤
            let k = parseInt(Math.random() * this.backList.length)
            page.push({bgc: this.backList[k], text: this.textList[k]})
          } else {
            // 如果flag不为true，表示还没找到不一样的背景和字，进行此步骤，正常走
            let k1 = parseInt(Math.random() * this.backList.length)
            let k2 = parseInt(Math.random() * this.textList.length)
            page.push({bgc: this.backList[k1], text: this.textList[k2]})
            if (k1 !== k2) {
              flag = true
            }
          }
        }
        this.shuffle(page)
        this.ysxjList.push(page)
      }
      let _this = this
      setTimeout(function () {
        _this.$vux.loading.hide()
        _this.visible = true
        _this.setYsxjListNow()
        _this.$emit('startTime')
        _this.timeRun()
        _this.lastTimeOut = setTimeout(_this.timeOut, _this.allTime * 1000)
      }, 1000)
    },
    // 取两个随机索引值，并且这两个不能相同
    getDiffIndex () {
      let i1 = parseInt(Math.random() * this.backList.length)
      let i2 = parseInt(Math.random() * this.textList.length)
      if (i1 === i2) {
        return this.getDiffIndex()
      }
      return [i1, i2]
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
    // 色块点击事件
    clickBox (item) {
      console.log('time: ' + this.hasTime + ';bgc: ' + item.bgc + ';text: ' + item.text)
      if (this.backList.findIndex(value => value === item.bgc) === this.textList.findIndex(value => value === item.text)) {
        this.log_self.push({time: this.hasTime, is_right: false, score_add: 0})
        this.$emit('boxClick', {time: this.hasTime, is_right: false, score_add: 0})
      } else {
        this.log_self.push({time: this.hasTime, is_right: true, score_add: parseInt(this.scoreStep)})
        this.page++
        this.setYsxjListNow()
        this.$emit('boxClick', {time: this.hasTime, is_right: true, score_add: parseInt(this.scoreStep)})
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
      this.$emit('endTime', this.log_self)
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
      justify-content center
      flex-wrap wrap
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
