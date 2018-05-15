<style lang="stylus">
//stylus 运算
  all_height(a,b)
    a = unit(a,px)
    b = unit(b,vh)
    return b-a
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
      height: 88vh
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
            font-size: 18px
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
            .wa-modal-img
              width: 80%
              height: 62%
              text-align center
              margin: 20px auto 10px
              img
                max-height: 100%
                max-width: 100%
            .wa-modal-intro
              line-height 34px
              text-align center
              font-size: 15px
              color: #c9c9c9
      .time-out-box
        width: 90%
        position: relative
        left: 5%
        top: 50%
        transform translateY(-50%)
        img
          width: 100%
      .wa-banlbox-p
        height: 70%
        position: relative
        z-index: 20
        top: 10%
        text-align center
        .banl-p-floor
          /*height: 120px*/
          padding: 10px 0
          .banl-p-title
            font-size: 18px
            line-height 36px
          .banl-p-score
            color: #ff0000
            font-size: 28px
            line-height 50px
          .banl-p-bili
            color: #000000
            font-size: 24px
            line-height: 38px
          .banl-p-flex>p
            width: 32.3%
            display inline-block
          .banl-p-shuzi
            font-size: 20px
            line-height 34px
          .banl-p-back
            padding: 8px 20px
            margin-right: 14px
            border-radius 10px
            background: #FF6347
            border: none
            outline none
            border-radius 8px
            line-height 40px
            text-align center
            font-size: 18px
            color: #ffffff
          .banl-p-again
            padding: 8px 50px
            border-radius 10px
            background: #54FF9F
            border: none
            outline none
            border-radius 8px
            line-height 40px
            text-align center
            font-size: 22px
            color: #ffffff
      .wa-banlbox-m
        height: 70%
        position: relative
        z-index: 20
        top: 10%
        /*text-align center*/
        .banl-m-floor
          padding: 6px
          box-sizing border-box
          .banl-m-f-box
            left: 5%
          .banl-m-s-box
            right: 5%
            float: right
          .banl-m-user-box
            position: relative
            width: 30%
            display: inline-block
            padding: 6px
            text-align center
            .banl-m-avatar-box
              width: 70%
              height: 70%
              img
                width: 100%
                border-radius 50%
                border: 2px solid #ffffff
            .banl-m-user-msg
              display: inline-block
              box-sizing border-box
              p
                line-height 20px
              .banl-m-user-nick
                width: 6em
                font-weight 600
                font-size: 14px
                line-height 20px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
              .banl-m-user-mid
                height: 22px
                padding: 0px 0px 4px
                .banl-m-user-sex
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
                .banl-m-user-age
                  display: inline-block
                  /*width: 30px*/
                  height: 18px
                  padding: 0 6px
                  border-radius 3px
                  color: #ffffff
                  background: #09bb07
          .banl-m-f-item
            margin-left: 5%
            text-align center
            width: 25%
            display inline-block
            height: 30px
            line-height 30px
            color: #09bb07
            font-size: 18px
          .banl-m-s-item
            width: 25%
            text-align center
            display inline-block
            height: 30px
            line-height 30px
            color: #f74c31
            font-size: 18px
          .banl-m-compare-box
            width: 40%
            display inline-block
            height: 30px
            text-align center
            p
              width: 100%
              height: 15px
              line-height 15px
              font-size: 13px
            .banl-m-compare-bg
              position: relative
              width: 100%
              height: 15px
              background: #f74c31
              .banl-m-compare
                position: absolute
                height: 100%
                top: 0
                left: 0
                background: #09bb07
        .banl-m-back-box
          text-align center
          .banl-m-back
            padding: 4px 30px
            margin: 10px
            border-radius 10px
            background: #FF6347
            border: none
            outline none
            border-radius 8px
            line-height 40px
            text-align center
            font-size: 18px
            color: #ffffff
        .banl-m-allscore
          .banl-m-f-item
            height: 48px
            line-height 48px
            font-size: 24px
          .banl-m-s-item
            height: 48px
            line-height 48px
            font-size 24px
          .banl-m-compare-box
            height: 48px
            p
              height: 20px
              line-height: 20px
              font-size 17px
            .banl-m-compare-bg
              height: 22px
</style>

<template>
  <div class="wa-game" v-if="visible">
    <div class="wa-game-head">
      <div class="wa-game-users">
        <div class="wa-game-user wa-player1">
          <div class="wa-game-user-img">
            <img src="../../assets/avatar/avatar-boy1.png" style="border-color: #09bb07;" alt="">
          </div>
          <div class="wa-game-user-msg">
            <p class="wa-game-user-nick" v-if="home.user_f.nickname">{{ home.user_f.nickname }}</p>
            <p class="wa-game-user-nick" v-else>{{ home.user_f.username }}</p>
            <p class="wa-game-user-mid">
              <span v-if="home.user_f.sex" :class="['wa-game-user-sex', home.user_f.sex === '男' ? 'sex-boy' : 'sex-girl']"></span>
              <span class="wa-game-user-age">{{ home.user_f.age }}</span>
            </p>
            <p class="wa-game-user-score" v-if="isPractice">{{ selfScore }}</p>
            <p class="wa-game-user-score" v-else-if="!isPractice && home.user_f.username === userinfo.username">{{ selfScore }}</p>
            <p class="wa-game-user-score" v-else>0</p>
          </div>
        </div>
        <div class="wa-game-user wa-player2">
          <div class="wa-game-user-msg">
            <p class="wa-game-user-nick" v-if="home.user_s.nickname">{{ home.user_s.nickname }}</p>
            <p class="wa-game-user-nick" v-else>{{ home.user_s.username }}</p>
            <p class="wa-game-user-mid">
              <span v-if="home.user_s.sex" :class="['wa-game-user-sex', home.user_s.sex === '男' ? 'sex-boy' : 'sex-girl']"></span>
              <span class="wa-game-user-age">{{ home.user_s.age }}</span>
            </p>
            <p class="wa-game-user-score" v-if="isPractice && home.user_s.score">{{ home.user_s.score }}</p>
            <p class="wa-game-user-score" v-else-if="!isPractice && home.user_s.username === userinfo.username">{{ selfScore }}</p>
            <p class="wa-game-user-score" v-else>0</p>
          </div>
          <div class="wa-game-user-img">
            <img src="../../assets/avatar/avatar-boy1.png" style="border-color: #ff0000;" alt="">
          </div>
        </div>
        <div class="wa-game-clock"><p>{{ lastTime }}</p></div>
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
              <img :src="'/static/game/' + game.intro_img" alt="">
            </div>
            <p class="wa-modal-intro">{{ game.role }}</p>
          </div>
          <div class="wa-modal-back" @click="back()" v-if="isPractice">BACK</div>
          <div class="wa-modal-begin" @click="begin()" v-if="isPractice">开始</div>
        </div>
      </div>
      <transition name="slide-fade">
        <div class="time-out-box" v-if="visibleTimeOut">
          <img src="../../assets/game/time-out.png" alt="">
        </div>
      </transition>
      <div class="wa-banlbox-p" v-if="banlanceBoxP">
        <div class="banl-p-floor">
          <p class="banl-p-title">本次得分</p>
          <p class="banl-p-score">{{ banlance.user_f.score }}</p>
        </div>
        <div class="banl-p-floor">
          <p class="banl-p-title">正确率</p>
          <p class="banl-p-bili">{{ banlance.user_f.accuracy }} %</p>
        </div>
        <div class="banl-p-floor">
          <div class="banl-p-flex">
            <p class="banl-p-title">正确答案</p>
            <p class="banl-p-title">错误答案</p>
            <p class="banl-p-title">平均时间</p>
          </div>
          <div class="banl-p-flex">
            <p class="banl-p-shuzi" style="color: #09bb07;">{{ banlance.user_f.trueNum }}</p>
            <p class="banl-p-shuzi" style="color: #ff0000;">{{ banlance.user_f.falseNum }}</p>
            <p class="banl-p-shuzi" style="color: #ffbe00;">{{ banlance.user_f.averageTime }} s</p>
          </div>
        </div>
        <div class="banl-p-floor">
          <button class="banl-p-back" @click="overback">back</button>
          <button class="banl-p-again" @click="again">再来一次</button>
        </div>
      </div>
      <div class="wa-banlbox-m" v-if="banlanceBoxM">
        <div class="banl-m-floor">
          <div class="banl-m-user-box banl-m-f-box">
            <div class="ban1-m-avatar-box">
              <img src="../../assets/avatar/avatar-boy1.png" alt="">
            </div>
            <div class="banl-m-user-msg">
              <p class="banl-m-user-nick" v-if="home.user_f.nickname">{{ home.user_f.nickname }}</p>
              <p class="banl-m-user-nick" v-else>{{ home.user_f.username }}</p>
              <p class="banl-m-user-mid">
                <span v-if="home.user_f.sex" :class="['banl-m-user-sex', home.user_f.sex === '男' ? 'sex-boy' : 'sex-girl']"></span>
                <span class="banl-m-user-age">{{ home.user_f.age }}</span>
              </p>
            </div>
          </div>
          <p style="display: inline-block;font-size: 20px;font-weight: 600;margin: 10px auto;text-align: center;width: 38%;">{{ home.game_name }}</p>
          <div class="banl-m-user-box banl-m-s-box">
            <div class="ban1-m-avatar-box">
              <img src="../../assets/avatar/avatar-boy1.png" alt="">
            </div>
            <div class="banl-m-user-msg">
              <p class="banl-m-user-nick" v-if="home.user_s.nickname">{{ home.user_s.nickname }}</p>
              <p class="banl-m-user-nick" v-else>{{ home.user_s.username }}</p>
              <p class="banl-m-user-mid">
                <span v-if="home.user_s.sex" :class="['banl-m-user-sex', home.user_s.sex === '男' ? 'sex-boy' : 'sex-girl']"></span>
                <span class="banl-m-user-age">{{ home.user_s.age }}</span>
              </p>
            </div>
          </div>
        </div>
        <div class="banl-m-floor">
          <div class="banl-m-f-item" v-if="banlance.user_f.trueNum">{{ banlance.user_f.trueNum }}</div>
          <div class="banl-m-f-item" v-else>0</div>
          <div class="banl-m-compare-box">
            <p>正确数</p>
            <div class="banl-m-compare-bg">
              <div class="banl-m-compare" :style="{width: banlance.trueNumW}"></div>
            </div>
          </div>
          <div class="banl-m-s-item" v-if="banlance.user_s.trueNum">{{ banlance.user_s.trueNum }}</div>
          <div class="banl-m-s-item" v-else>0</div>
        </div>
        <div class="banl-m-floor">
          <div class="banl-m-f-item" v-if="banlance.user_f.averageTime">{{ banlance.user_f.averageTime}}s</div>
          <div class="banl-m-f-item" v-else>0s</div>
          <div class="banl-m-compare-box">
            <p>平均用时</p>
            <div class="banl-m-compare-bg">
              <div class="banl-m-compare" :style="{width: banlance.averageTimeW}"></div>
            </div>
          </div>
          <div class="banl-m-s-item" v-if="banlance.user_s.averageTime">{{ banlance.user_s.averageTime}}s</div>
          <div class="banl-m-s-item" v-else>0s</div>
        </div>
        <div class="banl-m-floor">
          <div class="banl-m-f-item" v-if="banlance.user_f.accuracy">{{ banlance.user_f.accuracy }}%</div>
          <div class="banl-m-f-item" v-else>0</div>
          <div class="banl-m-compare-box">
            <p>正确率</p>
            <div class="banl-m-compare-bg">
              <div class="banl-m-compare" :style="{width: banlance.accuracyW}"></div>
            </div>
          </div>
          <div class="banl-m-s-item" v-if="banlance.user_s.accuracy">{{ banlance.user_s.accuracy }}%</div>
          <div class="banl-m-s-item" v-else>0%</div>
        </div>
        <div class="banl-m-floor banl-m-allscore">
          <div class="banl-m-f-item" v-if="banlance.user_f.score">{{ banlance.user_f.score }}</div>
          <div class="banl-m-f-item" v-else>0</div>
          <div class="banl-m-compare-box">
            <p>总分</p>
            <div class="banl-m-compare-bg">
              <div class="banl-m-compare" :style="{width: banlance.scoreW}"></div>
            </div>
          </div>
          <div class="banl-m-s-item" v-if="banlance.user_s.score">{{ banlance.user_s.score }}</div>
          <div class="banl-m-s-item" v-else>0</div>
        </div>
        <div class="banl-m-floor banl-m-back-box">
          <button class="banl-m-back" @click="overback">返回</button>
        </div>
      </div>
      <VueYsxj ref="ysxj" :allTime="this.allTime" :scoreStep="scoreStep" @boxClick="boxClick" @startTime="startTime" @endTime="endTime"></VueYsxj>
      <VueKdkx ref="kdkx" :allTime="this.allTime" :scoreStep="scoreStep" @boxClick="boxClick" @startTime="startTime" @endTime="endTime"></VueKdkx>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import moment from 'moment'
import VueYsxj from '@/components/Game/ysxj.vue'
import VueKdkx from '@/components/Game/kdkx.vue'
export default {
  name: 'game',
  components: {
    VueYsxj, VueKdkx
  },
  props: [
    'game'
  ],
  data () {
    return {
      visible: false, // 游戏主体是否显示
      banlanceBoxP: false, // 训练结算模态框是否显示
      banlanceBoxM: false, // 对战模态框是否显示
      banlance: '', // 结算数据
      visibleTimeOut: false,
      modalvisible: true,
      isPractice: true, // 是否是训练
      home: '', // 房间信息
      allTime: 10,
      selfScore: 0,
      scoreStep: 20,
      // 剩余时间计时器
      lastTimeOut: '',
      // 已经用了的时间
      hasTime: 0,
      lastTime: 0
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    }
  },
  mounted () {
    this.lastTime = this.allTime
  },
  watch: {
    home: function (n, o) {
      if (n.user_f.birthday) {
        n.user_f.age = moment(n.user_f.birthday).fromNow().substr(0, 3)
      } else {
        n.user_f.age = '保密'
      }
      if (n.user_s.birthday) {
        n.user_s.age = moment(n.user_s.birthday).fromNow().substr(0, 3)
      } else {
        n.user_s.age = '保密'
      }
    },
    banlance: function (n, o) {
      if (n.user_f && n.user_f.log) {
        let trueNum = 0
        let falseNum = 0
        for (let item of n.user_f.log) {
          if (item.is_right) {
            trueNum++
          } else {
            falseNum++
          }
        }
        let accuracy = 0
        accuracy = trueNum / n.user_f.log.length
        n.user_f.averageTime = (this.allTime / n.user_f.log.length).toString().substr(0, 3)
        n.user_f.accuracy = (accuracy * 100).toString().substr(0, 4)
        n.user_f.trueNum = trueNum
        n.user_f.falseNum = falseNum
      }
      if (n.user_s && n.user_s.log) {
        let trueNum = 0
        let falseNum = 0
        for (let item of n.user_s.log) {
          if (item.is_right) {
            trueNum++
          } else {
            falseNum++
          }
        }
        let accuracy = 0
        accuracy = trueNum / n.user_s.log.length
        n.user_s.averageTime = (this.allTime / n.user_s.log.length).toString().substr(0, 3)
        n.user_s.accuracy = (accuracy * 100).toString().substr(0, 4)
        n.user_s.trueNum = trueNum
        n.user_s.falseNum = falseNum
      }
      if (!this.isPractice) {
        if (n.user_f.accuracy && n.user_s.accuracy) {
          n.accuracyW = (parseInt(n.user_f.accuracy) / (parseInt(n.user_f.accuracy) + parseInt(n.user_s.accuracy)) * 100) + '%'
        }
        if (n.user_f.trueNum && n.user_s.trueNum) {
          n.trueNumW = (n.user_f.trueNum / (n.user_f.trueNum + n.user_s.trueNum) * 100) + '%'
        }
        if (n.user_f.falseNum && n.user_s.falseNum) {
          n.falseNumW = (n.user_f.falseNum / (n.user_f.falseNum + n.user_s.falseNum) * 100) + '%'
        }
        if (n.user_f.averageTime && n.user_s.averageTime) {
          n.averageTimeW = (parseInt(n.user_f.averageTime) / (parseInt(n.user_f.averageTime) + parseInt(n.user_s.averageTime)) * 100) + '%'
        }
        if (n.user_f.score && n.user_s.score) {
          n.scoreW = (parseInt(n.user_f.score) / (parseInt(n.user_f.score) + parseInt(n.user_s.score)) * 100) + '%'
        }
      }
    }
  },
  methods: {
    // 游戏组件答对一小点，加分
    boxClick (value) {
      if (value.is_right) {
        this.selfScore += value.score_add
      } else {
        // 出现点击错误的动画效果
      }
    },
    begin () {
      this.$vux.loading.show({
        text: '加载中...'
      })
      switch (this.game.name) {
        case '颜色陷阱':
          this.$refs.ysxj.show()
          break
        case '开大开小':
          this.$refs.kdkx.show()
          break
        default:
          break
      }
      this.hideModal()
    },
    startTime () {
      let _this = this
      clearInterval(this.lastTimeOut)
      this.lastTimeOut = setInterval(function () {
        _this.hasTime += 10
        _this.lastTime = parseInt((_this.allTime * 1000 - _this.hasTime) / 1000)
      }, 10)
    },
    endTime (log) {
      clearTimeout(this.lastTimeOut)
      this.visibleTimeOut = true
      if (this.isPractice) {
        // 训练模式，提交数据
        console.log(log)
        // console.log(typeof(log))
        this.$http.post('/game/practice/upSelfLogs', qs.stringify({
          game_id: this.game._id,
          home_id: this.home._id,
          username: this.userinfo.username,
          log: log,
          score: this.selfScore
        })).then(response => {
          let res = response.data
          if (res.status === 10000) {
            this.$http.get('/game/gameData', {params: {home_id: this.home._id}}).then(response => {
              let res = response.data
              if (res.status === 10000) {
                this.banlance = res.data
                this.$vux.loading.show({
                  time: 1200,
                  width: '60%',
                  text: '结算中...'
                })
                let _this = this
                setTimeout(function () {
                  _this.$vux.loading.hide()
                  _this.banlanceBoxP = true
                  _this.visibleTimeOut = false
                }, 1200)
              } else {
                this.$vux.toast.show({
                  type: 'warn',
                  time: 1000,
                  width: '60%',
                  text: res.msg
                })
              }
            }).catch(err => {
              console.log(err)
            })
          } else {
            this.$vux.toast.show({
              type: 'warn',
              time: 1000,
              width: '60%',
              text: res.msg
            })
            let _this = this
            setTimeout(function () {
              _this.router.push('/practice')
            }, 1000)
          }
        }).catch(err => {
          console.log(err)
          this.$vux.toast.show({
            type: 'warn',
            time: 1000,
            width: '60%',
            text: '通讯错误'
          })
        })
      } else {
        // 对战模式，提交数据
        this.$http.post('/game/mate/upSelfLogs', qs.stringify({
          game_id: this.game._id,
          home: this.home,
          username: this.userinfo.username,
          log: log,
          score: this.selfScore
        })).then(response => {
          let res = response.data
          if (res.status === 10000) {
            this.$vux.loading.show({
              width: '60%',
              text: '结算中。。。'
            })
            let _this = this
            setTimeout(function () {
              _this.$vux.loading.hide()
              _this.$http.get('/game/gameData', {params: {home_id: _this.home._id}}).then(response => {
                let res = response.data
                if (res.status === 10000) {
                  _this.banlance = res.data
                  _this.banlanceBoxM = true
                  _this.visibleTimeOut = false
                }
                console.log(res)
              }).catch(err => {
                console.log(err)
              })
            }, 3000)
          } else {
            this.$vux.toast.show({
              type: 'warn',
              time: 1000,
              width: '60%',
              text: res.msg
            })
            let _this = this
            setTimeout(function () {
              _this.router.push('/practice')
            }, 1000)
          }
        }).catch(err => {
          console.log(err)
        })
      }

      // this.$vux.loading.show({
      //   text: '结算中...'
      // })
      console.log(log)
    },
    overback () {
      this.hide()
      this.banlanceBoxP = false
      this.banlanceBoxM = false
      this.$emit('back')
    },
    again () {
      this.$emit('again', this.game)
    },
    init () {
      this.visible = false
      this.banlanceBoxP = false
      this.banlanceBoxM = false
      this.banlance = ''
      this.visibleTimeOut = false
      this.modalvisible = true
      this.isPractice = true
      this.home = ''
      this.allTime = this.game.time_all
      this.selfScore = 0
      this.scoreStep = this.game.score_step
      this.lastTimeOut = ''
      this.hasTime = 0
      this.lastTime = this.allTime
    },
    // 查看规则时 返回
    back () {
      this.$http.get('/game/deleteHome', {params: {home_id: this.home._id}}).then(response => {
        let res = response.data
        if (res.status === 10000) {
          this.hideModal()
          this.hide()
          this.$emit('back')
        } else {
          this.$vux.toast.show({
            type: 'warn',
            time: 1000,
            width: '60%',
            text: res.msg
          })
        }
      }).catch(err => {
        console.log(err)
      })
    },
    showModal () {
      this.modalvisible = true
    },
    hideModal () {
      this.modalvisible = false
    },
    show (key, home) {
      this.init()
      this.home = home
      if (key === 'p') {
        this.isPractice = true
      } else {
        this.isPractice = false
        let daojishi = ''
        let _this = this
        clearTimeout(daojishi)
        daojishi = setTimeout(function () {
          _this.begin()
        }, 3000)
      }
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>
