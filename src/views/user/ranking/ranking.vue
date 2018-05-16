<template>
  <div class="wa-ranking">
    <checker class="wa-checkbox" v-model="active" radio-required default-item-class="checkbox-item" selected-item-class="checkbox-item-selected">
      <checker-item value="颜色陷阱">颜色陷阱</checker-item>
      <!--<checker-item value="开大开小">开大开小</checker-item>-->
    </checker>
    <div class="wa-self-ranking">
      <div>我的分数  <span> {{ selfScore }}</span></div>
      <div>我的排名  <span> {{ selfRanking }}</span></div>
    </div>
    <div class="wa-ranking-list">
      <div class="wa-list-head">
        <p>排名</p>
        <p>用户名</p>
        <p>昵称</p>
        <p style="border-right: none;">分数</p>
      </div>
      <div style="height: 56vh;overflow: scroll">
        <div :class="['wa-list-item', {'wa-self-item': item.username === userinfo.username}]" v-for="(item, index) in rankList" :key="index">
          <p>{{ index + 1 }}</p>
          <p>{{ item.user.username }}</p>
          <p>{{ item.user.nickname | nickfilter }}</p>
          <p>{{ item.max_score | scorefilter }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Checker, CheckerItem } from 'vux'
export default {
  name: 'ranking',
  components: {
    Checker, CheckerItem
  },
  data () {
    return {
      maxScoreAll: [],
      users: [],
      games: [],
      active: '颜色陷阱'
    }
  },
  mounted () {
    this.getMaxScores()
  },
  filters: {
    nickfilter: function (value) {
      if (!value) return '/'
      return value
    },
    scorefilter: function (value) {
      if (!value) return '0'
      return value
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    },
    rankList: function () {
      let maxScoreList = this.maxScoreAll
      for (let maxScore of maxScoreList) {
        maxScore.user = this.users.find(item => item.username === maxScore.username)
      }
      let maxScort = maxScoreList.filter(s => this.games.find(item => item._id === s.game_id).name === this.active).sort(this.compareDown('max_score'))
      return maxScort
    },
    selfRanking: function () {
      if (this.rankList.findIndex(item => item.username === this.userinfo.username) + 1) {
        return this.rankList.findIndex(item => item.username === this.userinfo.username) + 1
      } else {
        return '0'
      }
    },
    selfScore: function () {
      if (this.rankList.find(item => item.username === this.userinfo.username)) {
        return this.rankList.find(item => item.username === this.userinfo.username).max_score
      } else {
        return '0'
      }
    }
  },
  methods: {
    getMaxScores () {
      this.$http.get('/game/getmaxscore').then(response => {
        let res = response.data
        console.log(res)
        if (res.status === 10000) {
          this.maxScoreAll = res.data.gameScore
          this.users = res.data.users
          this.games = res.data.games
        }
      })
    },
    // 降序排序
    compareDown (propertyName) {
      return function (object1, object2) { // 属性值为数字
        var value1 = object1[propertyName]
        var value2 = object2[propertyName]
        return value2 - value1
      }
    }
  }
}
</script>

<style lang="stylus">
  .wa-ranking
    padding: 15px 0
    .wa-checkbox
      border-bottom: 1px solid #cccccc
      border-top: 1px solid #cccccc
      padding: 15px
      font-size: 16px
      .checkbox-item
        border: 1px solid #ececec
        padding: 5px 15px
      .checkbox-item-selected
        border: 1px solid green
    .wa-self-ranking
      width: 100%
      padding: 15px
      border-bottom: 1px solid #cccccc
      &>div
        display inline-block
        width: 49%
        font-size: 15px
        line-height: 30px
        &>span
          display inline-block
          margin-left: 8px
          font-size: 22px
          color: #ff0000
    .wa-ranking-list
      margin: 15px auto 0px
      width: 94%
      .wa-list-head,.wa-list-item
        height: 42px
        line-height 40px
        border: 1px solid #ffffff
        p
          width: 23.9%
          margin: 0
          text-align center
          border-right: 1px solid #ffffff
          display inline-block
          &:last-child
            border-right: none
      .wa-self-item
        background: #FFFFE0
      .wa-list-head
        /*width: 100%*/
        background: #f76260
        font-size: 15px
        font-weight 600
</style>
