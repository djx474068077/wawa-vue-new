<template>
  <div class="fight">
    <!--<i class="fa fa-handshake-o" style="font-size: 30px;color: red;"></i>-->
    <div style="height: 20%;"></div>
    <div class="ability" id="ability-box" ref="myEchart"></div>
    <div class="wa-fight-box">
      <button class="wa-fight-btn" @click="mate()">匹配对手</button>
    </div>
    <VueMate ref="mate"></VueMate>
  </div>
</template>

<script>
import VueMate from '@/components/Game/mate.vue'
import echarts from 'echarts'
export default {
  name: 'fight',
  components: {
    VueMate
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    },
    LogsList: function () {
      let logList = []
      if (this.mateDataAll) {
        for (let log of this.mateDataAll) {
          if (log.user_f.username === this.userinfo.username) {
            logList.push(log.user_f.log)
          } else if (log.user_s.username === this.userinfo.username) {
            logList.push(log.user_s.log)
          } else {
            console.log('数据有点问题')
          }
        }
      }
      if (this.pracDataAll) {
        for (let log of this.pracDataAll) {
          logList.push(log.user_f.log)
        }
      }
      if (this.mateDataAll || this.pracDataAll) {
        return logList
      } else {
        return []
      }
    },
    selfAbility: function () {
      let speed = 20
      let accuracy = 20
      if (this.LogsList) {
        let length = 0
        let trueNum = 0
        let time = 0
        for (let log of this.LogsList) {
          length += log.length
          for (let logitem of log) {
            if (logitem.is_right === true) {
              trueNum++
            }
          }
        }
        time = length * 30
        speed = length / time * 1000
        if (speed > 90) {
          speed = Math.random() * 15 + 90
        }
        accuracy = trueNum / length * 100
        console.log('length' + length)
        console.log('trueNum' + trueNum)
        console.log('time' + time)
      }
      return [speed, Math.random() * 50, Math.random() * 50, accuracy, Math.random() * 50, Math.random() * 50]
    }
  },
  watch: {
    selfAbility: function (n, o) {
      console.log(n)
      this.abilityOption.series[0].data[0].value = n
      this.initChart()
    }
  },
  data () {
    return {
      // 图表配置和数据
      abilityOption: {
        tooltip: {
          trigger: 'axis'
        },
        radar: [
          {
            indicator: [
              {text: '速度', max: 100},
              {text: '判断力', max: 100},
              {text: '计算力', max: 100},
              {text: '精确度', max: 100},
              {text: '观察力', max: 100},
              {text: '记忆力', max: 100}
            ],
            itemStyle: {
              color: '#ff0000'
            },
            radius: 100,
            center: ['50%', '50%']
          }
        ],
        series: [
          {
            type: 'radar',
            radarIndex: 0,
            itemStyle: {normal: {areaStyle: {type: 'default'}}},
            data: [
              {
                name: 'user',
                value: [90, 90, 90, 90, 90, 90]
              }
            ]
          }
        ]
      },
      mateDataAll: [],
      pracDataAll: []
      // mateLogsList: [],
      // pracLogsList: []
    }
  },
  mounted () {
    let _this = this
    setTimeout(function () {
      _this.init()
    }, 300)
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    mate () {
      if (this.userinfo) {
        this.$refs.mate.show()
      } else {
        this.$vux.toast.show({
          width: '60%',
          time: 1000,
          type: 'warn',
          text: '请先登陆'
        })
        let _this = this
        setTimeout(function () {
          _this.$router.push('/login')
        }, 1000)
      }
    },
    initChart () {
      let chart = echarts.init(document.getElementById('ability-box'))
      chart.setOption(this.abilityOption)
    },
    init () {
      this.$http.get('/game/selfLogs', {params: {username: this.userinfo.username}}).then(response => {
        let res = response.data
        console.log(res)
        if (res.status === 10000) {
          this.mateDataAll = res.data.mateLogs
          this.pracDataAll = res.data.pracLogs
        }
      })
    }
  }
}
</script>

<style lang="stylus">
  .fight
    height: 100%
    .ability
      position: relative
      margin: 0 auto
      width: 100%
      height: 60%
    .wa-fight-box
      width: 100%
      text-align center
      height: 10%
      .wa-fight-btn
        padding: 6px 25px
        background: #09bb07
        color: #ffffff
        font-size 18px
        line-height 32px
        border-radius 4px
        border: none
        outline none
</style>
