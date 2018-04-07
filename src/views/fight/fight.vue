<template>
  <div class="fight">
    <p>fight</p>
    <!--<i class="fa fa-handshake-o" style="font-size: 30px;color: red;"></i>-->
    <div class="ability" ref="myEchart"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
export default {
  name: 'fight',
  data () {
    return {
      chart: ''
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.initChart()
    })
  },
  methods: {
    initChart () {
      this.chart = echarts.init(this.$refs.myEchart)
      // 把配置和数据放这里
      this.chart.setOption({
        color: ['#3398DB'],
        tooltip: {
          trigger: 'axis'
          // axisPointer: { // 坐标轴指示器，坐标轴触发有效
          //   type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          // }
        },
        // title: {
        //   text: '多雷达图'
        // },
        radar: [
          {
            indicator: [
              { text: '语文', max: 150 },
              { text: '数学', max: 150 },
              { text: '英语', max: 150 },
              { text: '物理', max: 120 },
              { text: '化学', max: 108 },
              { text: '生物', max: 72 }
            ],
            center: ['50%', '50%'],
            radius: 120
          }
        ],
        series: [
          {
            name: '成绩单',
            type: 'radar',
            radarIndex: 1,
            data: [
              {
                value: [120, 118, 130, 100, 99, 70],
                name: '张三',
                label: {
                  normal: {
                    show: true,
                    formatter: function (params) {
                      return params.value
                    }
                  }
                }
              },
              {
                value: [90, 113, 140, 30, 70, 60],
                name: '李四',
                areaStyle: {
                  normal: {
                    opacity: 0.9,
                    color: new echarts.graphic.RadialGradient(0.5, 0.5, 1, [
                      {
                        color: '#B8D3E4',
                        offset: 0
                      },
                      {
                        color: '#72ACD1',
                        offset: 1
                      }
                    ])
                  }
                }
              }
            ]
          }
        ]
      })
    }
  }
}
</script>

<style lang="stylus">
  .fight
    .ability
      margin: 0 auto
      width: 300px
      height: 300px
</style>
