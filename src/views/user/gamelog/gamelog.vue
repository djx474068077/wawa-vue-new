<style lang="stylus">
  .wa-gamelog
    padding-top 10px
    padding-bottom 120px
    height: 100vh
    background: rgb(243, 243, 243)
    &>p
      padding:8px 20px
      font-size: 20px
      font-weight 600
      text-align center
    .wa-gamelog-floor
      padding:8px 20px
      /*border: 1px solid #red*/
      .wa-gamelog-box
        padding: 10px 16px
        background: #ffffff
        border-radius 18px
        box-shadow 4px 4px 6px #c9c9c9
        .wa-gamelog-head
          height: 40px
          line-height 40px
          font-size: 20px
          font-weight 700
          text-align center
          border-bottom 1px solid #c9c9c9
        .wa-gamelog-foot
          border-top 1px solid #c9c9c9
          padding: 10px 10px 0
          box-sizing border-box
          line-height 22px
        .wa-gamelog-body
          display: flex
          width: 100%
          padding: 8px 0
          .gamelog-user-box
            position: relative
            /*width: 30%*/
            flex-grow: 1
            display: inline-block
            padding: 6px
            text-align center
            .gamelog-avatar-box
              width: 40%
              margin: 0 auto
              padding: 10px 0
              img
                width: 100%
                border-radius 50%
                border: 2px solid #ffffff
            .gamelog-user-msg
              display: inline-block
              box-sizing border-box
              p
                line-height 20px
              .gamelog-user-nick
                width: 6em
                font-weight 600
                font-size: 14px
                line-height 20px
                overflow hidden
                text-overflow ellipsis
                white-space nowrap
              .gamelog-user-mid
                height: 22px
                padding: 0px 0px 4px
                .gamelog-user-sex
                  display: inline-block
                  width: 19px
                  height: 19px
                  background: no-repeat 0 0
                  background-size: cover
                  transform translateY(3px)
                .sex-boy
                  background-image url("../../../assets/game/sex-boy.png")
                .sex-girl
                  background-image url("../../../assets/game/sex-girl.png")
                .gamelog-user-age
                  display: inline-block
                  /*width: 24px*/
                  height: 18px
                  box-sizing border-box
                  padding: 0 6px
                  border-radius 3px
                  color: #ffffff
                  background: #09bb07
            .gamelog-score
              line-height 50px
              text-align center
</style>

<template>
  <div class="wa-gamelog">
    <p>历史对战记录</p>
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loadingMore"
        infinite-scroll-distance="4"
        style="overflow: scroll;height: 84vh;padding-bottom: 30px">
      <li class="wa-gamelog-floor" v-for="(item, index) in mateData" v-bind:key="index">
        <div class="wa-gamelog-box">
          <div class="wa-gamelog-head">
            <div>{{ item.game_name }}</div>
          </div>
          <div class="wa-gamelog-body">
            <div class="gamelog-user-box">
              <div class="gamelog-avatar-box">
                <img src="../../../assets/avatar/avatar-boy1.png" alt="">
              </div>
              <div class="gamelog-user-msg">
                <p class="gamelog-user-nick" v-if="item.user_f.nickname">{{ item.user_f.nickname }}</p>
                <p class="gamelog-user-nick" v-else>{{ item.user_f.username }}</p>
                <p class="gamelog-user-mid">
                  <span v-if="item.user_f.sex" :class="['gamelog-user-sex', item.user_f.sex === '男' ? 'sex-boy' : 'sex-girl']"></span>
                  <span class="gamelog-user-age">{{ item.user_f.birthday | birthdayToAge }}</span>
                </p>
              </div>
              <div class="gamelog-score">
                总得分
                <span style="font-size: 30px;color: #ff0000;" v-if="item.user_f.score">{{ item.user_f.score }}</span>
                <span style="font-size: 30px;color: #ff0000;" v-else>0</span>
              </div>
            </div>
            <div class="gamelog-user-box">
              <div class="gamelog-avatar-box">
                <img src="../../../assets/avatar/avatar-boy1.png" alt="">
              </div>
              <div class="gamelog-user-msg">
                <p class="gamelog-user-nick" v-if="item.user_s.nickname">{{ item.user_s.nickname }}</p>
                <p class="gamelog-user-nick" v-else>{{ item.user_s.username }}</p>
                <p class="gamelog-user-mid">
                  <span v-if="item.user_s.sex" :class="['gamelog-user-sex', item.user_s.sex === '男' ? 'sex-boy' : 'sex-girl']"></span>
                  <span class="gamelog-user-age">{{ item.user_s.birthday | birthdayToAge }}</span>
                </p>
              </div>
              <div class="gamelog-score">
                总得分
                <span style="font-size: 30px;color: #ff0000;" v-if="item.user_s.score">{{ item.user_s.score }}</span>
                <span style="font-size: 30px;color: #ff0000;" v-else>0</span>
              </div>
            </div>
          </div>
          <div class="wa-gamelog-foot">
            时间： {{ item.meta.createAt | timefilter }}
          </div>
        </div>
      </li>
      <div style="margin: 5px auto;width: 100%;text-align: center">
        <mt-spinner type="fading-circle" v-if="loadingMore && hasMore" color="#26a2ff" style="display: inline-block"></mt-spinner>
        <divider v-if="hasMore === false">没有更多了</divider>
      </div>
    </ul>
  </div>
</template>

<script>
import moment from 'moment'
import { Divider } from 'vux'
export default {
  name: 'gamelog',
  components: {
    Divider
  },
  data () {
    return {
      loadingMore: false,
      hasMore: true,
      mateDataAll: [],
      mateData: [],
      pracData: []
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    }
  },
  mounted () {
    this.getGameLogs()
  },
  filters: {
    timefilter: function (value) {
      if (!value) return ''
      return value.toString().replace('T', ' ').substr(0, 19)
    },
    birthdayToAge: function (value) {
      if (!value) return '保密'
      return moment(value).fromNow().substr(0, 3)
    }
  },
  methods: {
    getGameLogs () {
      this.$http.get('/game/selfLogs', {params: {username: this.userinfo.username}}).then(response => {
        let res = response.data
        console.log(res)
        if (res.status === 10000) {
          this.mateDataAll = res.data.mateLogs
          this.pracData = res.data.pracLogs
        }
      })
    },
    // 加载更多
    loadMore () {
      console.log('loading....')
      this.hasMore = true
      if (this.mateDataAll.length === this.mateData.length) {
        this.hasMore = false
      }
      this.loadingMore = true
      let _this = this
      setTimeout(() => {
        // let last = _this.list[this.list.length - 1]
        let mateLength = _this.mateData.length
        let step = _this.mateDataAll.length - mateLength
        if (step >= 4) {
          step = 4
        }
        console.log(step)
        for (let i = 0; i < step; i++) {
          _this.mateData.push(_this.mateDataAll[mateLength + i])
        }
        _this.loadingMore = false
      }, 1500)
    }
  }
}
</script>
