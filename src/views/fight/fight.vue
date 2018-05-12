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
                value: [80, 60, 70, 40, 46, 76]
              }
            ]
          }
        ]
      }
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
      // this.init()
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
      this.$http.get('/users/getSelfAbility').then(res => {
        console.log(res)
      }).catch(err => {
        console.log(err)
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
