<template>
  <div class="wa-ranking">
    <checker class="wa-checkbox" v-model="active" radio-required default-item-class="checkbox-item" selected-item-class="checkbox-item-selected">
      <checker-item value="颜色陷阱">颜色陷阱</checker-item>
      <checker-item value="开大开小">开大开小</checker-item>
    </checker>
    <div class="wa-self-ranking">
      <div>我的分数  <span> 200</span></div>
      <div>我的排名  <span> 2</span></div>
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
      active: '颜色陷阱'
    }
  },
  mounted () {
    this.getMaxScores()
  },
  methods: {
    getMaxScores () {
      this.$http.get('/game/getmaxscore').then(response => {
        let res = response.data
        console.log(res)
        if (res.status === 10000) {
          this.maxScoreAll = res.data.gameScore
          this.users = res.data.users
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .wa-ranking
    padding: 15px 0
    .wa-checkbox
      border-bottom: 1px solid #cccccc
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
      border-top: 1px solid #cccccc
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
</style>
