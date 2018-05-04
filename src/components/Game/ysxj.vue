<template>
  <div class="wa-ysxj" v-if="visible">
    <div class="wa-ysxj-cont">
      <p>如果我是dj</p>
      <p>如果我是dj</p>
      <p>如果我是dj</p>
      <p>如果我是dj</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ysxj',
  data () {
    return {
      visible: false,
      backList: ['#ffffff', '#000000', '#ffff00', '#ff0000', '#ADFF2F', '#87CEFF', '#BF3EFF'],
      textList: ['白', '黑', '黄', '红', '绿', '蓝', '紫'],
      ysxjList: [
        {}
      ]
    }
  },
  methods: {
    show () {
      this.visible = true
    },
    hide () {
      this.visible = false
    }
  }
}
</script>

<style lang="stylus">
  .wa-ysxj
    width: 100%
    height: 100%
    .wa-ysxj-cont
      position: relative
      width: 100%
      left: 0
      top: 50%
      transform translateY(-50%)
      display flex
</style>
