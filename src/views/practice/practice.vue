<style lang="stylus">
  .wa-parctice
    padding-top 30px
    &>div
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
    <div v-for="(item, index) in gameList" v-bind:key="index" class="">
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
  </div>
</template>

<script>
export default {
  name: 'practice',
  data () {
    return {
      gameList: [
        // {
        //   name: '颜色陷阱',
        //   link: ''
        // }
      ]
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
  methods: {
    getGameList () {
      this.$http.get('/game/list', {params: {username: this.userinfo.username}}).then(response => {
        let res = response.data
        if (res.status === 10000) {
          this.gameList = res.data
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
