<template>
  <div class="fight">
    <p>fight</p>
    <!--<i class="fa fa-handshake-o" style="font-size: 30px;color: red;"></i>-->
    <div class="ability" id="ability-box" ref="myEchart"></div>

  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'fight',
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
            center: ['50%', '40%']
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
    })
  },
  methods: {
    initChart () {
      let chart = echarts.init(document.getElementById('ability-box'))
      chart.setOption(this.abilityOption)
    }
  }
}
</script>

<style lang="stylus">
  .fight
    height: 100%
    .ability
      margin: 0 auto
      width: 100%
      height: 100%
</style>
