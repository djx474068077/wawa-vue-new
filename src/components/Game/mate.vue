<template>
  <div class="wa-mate" v-if="visible">
    <img class="wa-mate-magnifier" src="../../assets/game/magnifier.png" alt="">
    <button class="wa-nomate-btn" @click="nomate">取消</button>
    <VueGame ref="game" :game="gameChecked" @again="toMateAgain" @back="back"></VueGame>
  </div>
</template>

<script>
// import qs from 'qs'
import VueGame from './Game'
export default {
  name: 'mate',
  components: {
    VueGame
  },
  data () {
    return {
      visible: false,
      home: '',
      gameChecked: {},
      askInterval: '',
      mateTimeOut: ''
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    }
  },
  methods: {
    nomate () {
      // 取消匹配，取消计时器，取消向后端访问，并删除把自己放进去的那个准备对战房间的数据，改变自己状态
      if (this.home) {
        this.$http.get('/game/deleteHome', {params: {home_id: this.home._id}}).then(response => {
          let res = response.data
          if (res.status === 10000) {
            this.hide()
            clearInterval(this.askInterval)
            clearTimeout(this.mateTimeOut)
          } else {
            this.$vux.toast.show({
              type: 'warn',
              time: 1000,
              width: '60%',
              text: '请重试'
            })
          }
        }).catch(err => {
          console.log(err)
        })
      }
    },
    sendSelfMate () {
      this.$http.get('/game/mate/findOther', {params: {username: this.userinfo.username}}).then(response => {
        let res = response.data
        console.log(res)
        if (res.status === 10000) {
          this.gameChecked = res.data.game
          this.home = res.data.home
          this.$refs.game.show('m', res.data.home)
          clearTimeout(this.mateTimeOut)
          // 找到对手，返回了本次游戏的数据，准备开始
        } else if (res.status === 10001) {
          this.gameChecked = res.data.game
          this.home = res.data.home
          this.askSelfMate()
          // 创建对战房间成功，但是没有找到对手，轮询发送请求
        } else {
          this.$vux.toast.show({
            type: 'warn',
            time: 1000,
            width: '60%',
            text: res.msg
          })
          let _this = this
          setTimeout(function () {
            _this.nomate()
          }, 1000)
        }
      }).catch(err => {
        console.log(err)
      })
      // 发送第一次请求，查看后端有没有对手在空闲对战房间等待。
      // 若有，将自己写进去，并获取一个随机游戏，跳转去游戏页面；
      // 若无，将自己写进去，并轮询发送有没有user2的请求
    },
    askSelfMate () {
      // 轮询执行该方法，询问有没有人来匹配
      let _this = this
      clearInterval(this.askInterval)
      this.askInterval = setInterval(function () {
        _this.$http.get('/game/askMate', {params: {username: _this.userinfo.username}}).then(response => {
          let res = response.data
          if (res.status === 10000) {
            clearInterval(_this.askInterval)
            clearTimeout(_this.mateTimeOut)
            _this.home = res.data
            _this.$refs.game.show('m', res.data)
          } else if (res.status === 10001) {
            console.log('没找到，继续找')
          } else {
            clearInterval(_this.askInterval)
            _this.$vux.toast.show({
              type: 'warn',
              time: 1000,
              width: '60%',
              text: res.msg
            })
            setTimeout(function () {
              _this.nomate()
            }, 1000)
          }
        }).catch(err => {
          clearInterval(_this.askInterval)
          console.log(err)
        })
      }, 500)
    },
    // 点击在来一次
    toMateAgain () {
    },
    back () {
      this.hide()
    },
    show () {
      //
      this.visible = true
      this.sendSelfMate()
      let _this = this
      clearTimeout(this.mateTimeOut)
      this.mateTimeOut = setTimeout(function () {
        clearInterval(_this.askInterval)
        _this.nomate()
        _this.$vux.toast.show({
          type: 'warn',
          time: 1000,
          width: '80%',
          text: '你已经找不到对手了，请等会再寻找'
        })
      }, 20000)
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
      width: 120px
      position: absolute
      top: 43%
      left: 37%
      animation action 2s linear infinite
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
  @keyframes action
    from
      transform: rotate(0deg) translate(70px,70px) rotate(0deg)
    to
      transform: rotate(360deg) translate(70px,70px) rotate(-360deg)
</style>
