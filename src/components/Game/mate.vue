<template>
  <div class="wa-mate" v-if="visible">
    <img class="wa-mate-magnifier" src="../../assets/game/magnifier.png" alt="">
    <button class="wa-nomate-btn" @click="nomate">取消</button>
  </div>
</template>

<script>
export default {
  name: 'mate',
  data () {
    return {
      visible: false
    }
  },
  methods: {
    nomate () {
      // 取消匹配，取消计时器，取消向后端访问，并删除把自己放进去的那个准备对战房间的数据，改变自己状态
      this.hide()
    },
    sendSelfMate () {
      // 发送第一次请求，查看后端有没有对手在空闲对战房间等待。
      // 若有，将自己写进去，并获取一个随机游戏，跳转去游戏页面；
      // 若无，将自己写进去，并轮询发送有没有user2的请求
    },
    askSelfMate () {
      // 轮询执行该方法，询问有没有人来匹配
    },
    show () {
      //
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus">
  .wa-mate
    width: 100%
    height: 100vh
    position: fixed
    top: 0
    left: 0
    z-index 10
    background: url("../../assets/game/mate-bg.png") no-repeat 50% 50%
    background-color: #00B2EE
    background-size: 90%
    .wa-mate-magnifier
      width: 90px
      position: absolute
    .wa-nomate-btn
      padding: 4px 30px
      color: #ffffff
      background: transparent
      border: 1px solid #ffffff
      font-size: 18px
      line-height 32px
      border-radius 4px
      position: absolute
      bottom 10%
      left: 50%
      transform translateX(-50%)
</style>
