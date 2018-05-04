<style lang="stylus">
  .wa-game
    width: 100%
    height: 100vh
    position: fixed
    top: 0
    left: 0
    z-index 10
    background-color: #FFF5EE
    .wa-game-head
      height: 100px
      .wa-game-users
        display: flex
        align-items center
        position: relative
        height: 100px
        background-color: #7A7A7A
        .wa-game-user
          display: inline-block
          width: 50%
          height: 100%
          .wa-game-user-img
            display inline-block
            width: 60px
            padding: 28px 5px
            box-sizing border-box
            img
              width: 44px
              height: 44px
              border-radius 50%
              border: 2px solid #ffffff
          .wa-game-user-msg
            display: inline-block
            box-sizing border-box
            p
              line-height 20px
            .wa-game-user-nick
              width: 6em
              font-weight 600
              font-size: 14px
              line-height 20px
              overflow hidden
              text-overflow ellipsis
              white-space nowrap
            .wa-game-user-mid
              height: 22px
              padding: 0px 0px 4px
              .wa-game-user-sex
                display: inline-block
                width: 18px
                height: 18px
                background: no-repeat 0 0
                background-size: cover
                transform translateY(3px)
              .sex-boy
                background-image url("../../assets/game/sex-boy.png")
              .sex-girl
                background-image url("../../assets/game/sex-girl.png")
              .wa-game-user-age
                display: inline-block
                /*width: 30px*/
                height: 18px
                padding: 0 6px
                border-radius 3px
                color: #ffffff
                background: #09bb07
            .wa-game-user-score
              font-size: 20px
              color: #ff0000
              line-height 20px
              transform translateY(6px)
        .wa-player1
          padding-left: 8px
          text-align left
        .wa-player2
          padding-right: 8px
          text-align right
        .wa-game-clock
          position: absolute
          height: 60px
          width: 60px
          bottom: -30px
          left: 50%
          transform translateX(-50%)
          background: url("../../assets/game/clock.png") no-repeat 50% 50%
          background-size: 70% 70%
          border: 2px solid #ffffff
          border-radius 50%
          box-sizing border-box
          padding: 3px
          font-size: 34px
          font-weight 700
          line-height 50px
          text-align: center
          color: yellow
          z-index 20
    .wa-game-cont
      height: 100vh
      box-sizing border-box
      .wa-modal
        width: 100%
        height: 100%
        position: relative
        .wa-modal-bg
          width: 100%
          height: 100%
          position: absolute
          background: rgba(0, 0, 0, .3)
        .wa-modal-box
          width: 80%
          height: 70%
          position: relative
          top: 8%
          left: 50%
          transform translateX(-50%)
          .wa-modal-title
            color: #fff
            line-height 38px
            font-size: 17px
            text-align center
          .wa-modal-back
            display inline-block
            width: 22%
            height: 55px
            margin: 8% 0 0 6%
            background: #FF6347
            border-radius 14px
            line-height 55px
            text-align center
            font-size: 22px
            color: #ffffff
          .wa-modal-begin
            display inline-block
            width: 60%
            height: 55px
            margin: 8% 0 0 6%
            background: #54FF9F
            border-radius 14px
            line-height 55px
            text-align center
            font-size: 22px
            color: #ffffff
          .wa-modal-cont
            width: 100%
            height: 70%
            background: #ffffff
            border-radius 14px
            .wa-modal-name
              line-height 40px
              text-align center
              font-size: 20px
              color: #CD6839
</style>

<template>
  <div class="wa-game" v-if="visible">
    <div class="wa-game-head">
      <div class="wa-game-users">
        <div class="wa-game-user wa-player1">
          <div class="wa-game-user-img">
            <img src="../../assets/avatar/avatar-boy1.png" alt="">
          </div>
          <div class="wa-game-user-msg">
            <p class="wa-game-user-nick">这里是昵称,如果字很多呢 怎么办？</p>
            <p class="wa-game-user-mid">
              <span class="wa-game-user-sex sex-boy"></span>
              <span class="wa-game-user-age">20</span>
            </p>
            <p class="wa-game-user-score">400</p>
          </div>
        </div>
        <div class="wa-game-user wa-player2">
          <div class="wa-game-user-msg">
            <p class="wa-game-user-nick">这里是昵称</p>
            <p class="wa-game-user-mid">
              <span class="wa-game-user-sex sex-girl"></span>
              <span class="wa-game-user-age">20</span>
            </p>
            <p class="wa-game-user-score">400</p>
          </div>
          <div class="wa-game-user-img">
            <img src="../../assets/avatar/avatar-boy1.png" alt="">
          </div>
        </div>
        <div class="wa-game-clock"><p>20</p></div>
      </div>
      <!--<div class="wa-game-title">-->
        <!--<p>{{ game.name }}</p>-->
      <!--</div>-->
    </div>
    <div class="wa-game-cont">
      <div class="wa-modal" v-if="modalvisible">
        <div class="wa-modal-bg"></div>
        <div class="wa-modal-box">
          <p class="wa-modal-title">游戏规则</p>
          <div class="wa-modal-cont">
            <p class="wa-modal-name">{{ game.name }}</p>
            <div class="wa-modal-img">
              <img src="" alt="">
            </div>
            <p class="wa-modal-intro">{{ game.role }}</p>
          </div>
          <div class="wa-modal-back">BACK</div>
          <div class="wa-modal-begin">开始</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'game',
  props: [
    'game'
  ],
  data () {
    return {
      visible: false,
      modalvisible: true
    }
  },
  methods: {
    showModal () {
      this.modalvisible = true
    },
    hideModal () {
      this.modalvisible = false
    },
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
