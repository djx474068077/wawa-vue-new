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
              {text: '外观', max: 100},
              {text: '拍照', max: 100},
              {text: '系统', max: 100},
              {text: '性能', max: 100},
              {text: '屏幕', max: 100},
              {text: '屏幕', max: 100}
            ],
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
