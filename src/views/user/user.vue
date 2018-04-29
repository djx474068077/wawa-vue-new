<style lang="stylus">
  .wa-user
    .user-box>div
      height: 15px
    ul
      background #ffffff
      /*border-top: 1px solid #c8c7cc*/
      /*border-bottom: 1px solid #c8c7cc*/
      li
        position: relative
        padding: 11px 15px
        &::after
          content ''
          position: absolute
          left: 15px
          right: 0
          bottom: 0
          background-color #c8c7cc
          transform scaleY(.5)
          height: 1px
        &:last-child:after
          height: 0
        a
          position: relative
          display: flex
          align-items center
          margin: -11px -15px
          padding: inherit
          color: inherit
          overflow: hidden
          white-space normal
          text-overflow ellipsis
          i
            font-size: 20px;
            width: 20px
            height: 20px
            margin-left: 3px
            margin-right: 8px
          img
            margin-right: 10px
            width: 56px
            height: 56px
            line-height 56px
            /*border-radius 50%*/
            float: left
          div
            line-height 21px
            font-size: 17px
            p
              font-size: 14px
              color: #8f8f94
              overflow: hidden
              white-space normal
              text-overflow ellipsis
</style>

<template>
  <div class="wa-user">
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="">
            <img src="../../assets/logo.png" alt="">
            <div>
              用户名
              <p>蛙蛙号：dadao9dsaddasdasda</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="">
            <i class="fa fa-history" style=""></i>
            <div>
              我的历史战绩
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-bookmark" style=""></i>
            <div>
              我的能力
            </div>
          </a>
        </li>
        <li>
          <a href="">
            <i class="fa fa-bar-chart" style=""></i>
            <div>
              我的排名
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="">
            <i class="fa fa-sign-out" style=""></i>
            <div>
              退出登陆
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Cell, Group } from 'vux'
export default {
  name: 'user',
  components: {
    Cell, Group
  },
  data () {
    return {
      is: true,
      userinfo: {}
    }
  },
  mounted () {
    this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
    console.log(this.userinfo)
  },
  methods: {
  }
}
</script>
