<style lang="stylus">
  .wa-parctice
    padding-top 30px
    .wa-parctice-body
      padding:8px 20px
      /*border: 1px solid #red*/
      .wa-game-box
        padding: 10px 16px
        background: #ffffff
        border-radius 18px
        box-shadow 4px 4px 6px #c9c9c9
        .wa-game-head
          height: 40px
          line-height 40px
          font-size: 20px
          font-weight 700
          text-align center
          border-bottom 1px solid #c9c9c9
        .wa-game-body
          display: flex
          width: 100%
          padding: 8px 0
          height: 120px
          .wa-game-img
            display inline-block
            width: 49%
            height: 100%
            text-align: center
            img
              height: 100%
          .wa-game-scorebox
            height: 100%
            width: 49%
            padding: 0 20px
            box-sizing border-box
            display: inline-block
            text-align center
            .wa-game-scoretext
              font-size: 18px
              height: 60px
              line-height 75px
            .wa-game-score
              font-size: 22px
              font-weight 600
              line-height: 45px
              color: #ff0000
              border-top: 1px solid #c9c9c9
        .wa-game-foot
          border-top 1px solid #c9c9c9
          padding: 10px 10px 0
          box-sizing border-box
          line-height 22px
</style>

<template>
  <div class="wa-parctice">
    <div class="wa-parctice-body" v-for="(item, index) in gameList" v-bind:key="index" @click="toParctice(item)">
      <div class="wa-game-box">
        <div class="wa-game-head">{{ item.name }}</div>
        <div class="wa-game-body">
          <div class="wa-game-img">
            <img src="../../assets/avatar/avatar.jpg" alt="">
          </div>
          <div class="wa-game-scorebox">
            <p class="wa-game-scoretext">最高分</p>
            <p v-if="item.max_score" class="wa-game-score">{{ item.max_score }}</p>
            <p v-else class="wa-game-score">0</p>
          </div>
        </div>
        <div class="wa-game-foot">
          玩法介绍：{{ item.role }}
        </div>
      </div>
    </div>
    <VueGame ref="game" :game="gameChecked"></VueGame>
  </div>
</template>

<script>
import VueGame from '@/components/Game/Game.vue'
export default {
  name: 'practice',
  components: {
    VueGame
  },
  data () {
    return {
      gameChecked: {}, // 选择中的游戏
      gameList: [
        // {
        //   name: '颜色陷阱',
        //   link: ''
        // }
      ],
      scoreList: []
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    }
  },
  mounted () {
    this.getGameList()
  },
  watch: {
    scoreList: function (n, o) {
      console.log(this.gameList)
      if (this.gameList) {
        for (var score of n) {
          console.log(score)
          console.log(this)
          this.gameList.find(item => item.id === score.game_id).max_score = score.max_score
        }
      }
    }
  },
  methods: {
    toParctice (game) {
      this.gameChecked = game
      this.$refs.game.show()
      this.$refs.game.showModal()
    },
    getGameList () {
      console.log(this)
      this.$http.get('/game/list', {params: {username: this.userinfo.username}}).then(response => {
        let res = response.data
        if (res.status === 10000) {
          this.gameList = res.data.gameList
          this.scoreList = res.data.scoreList
        } else {
          this.$vux.toast.show({
            width: '60%',
            time: 1000,
            type: 'warn',
            text: res.msg
          })
        }
      }).catch(err => {
        console.log(err)
        this.$vux.toast.show({
          width: '60%',
          time: 1000,
          type: 'warn',
          text: '通讯错误，请重试'
        })
      })
    }
  }
}
</script>
