<template>
  <div class="wa-userinfo">
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="javascript:;">
            <!--<i class="fa fa-history" style=""></i>-->
            <div>
              头像
            </div>
            <img src="../../../assets/logo.png" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <!--<i class="fa fa-bookmark" style=""></i>-->
            <div>
              昵称<p class="userinfo-value">董肥肥</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <!--<i class="fa fa-bar-chart" style=""></i>-->
            <div>
              蛙蛙号<p class="userinfo-value">dadao1</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="javascript:;">
            <!--<i class="fa fa-bar-chart" style=""></i>-->
            <div>
              出生日期<p class="userinfo-value">1995-12-12</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <!--<i class="fa fa-bar-chart" style=""></i>-->
            <div>
              性别<p class="userinfo-value">男</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <!--<i class="fa fa-bar-chart" style=""></i>-->
            <div>
              地区<p class="userinfo-value">安徽 合肥</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <!--<i class="fa fa-bar-chart" style=""></i>-->
            <div>
              个性签名<p class="userinfo-value">我最牛逼</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'userinfo'
}
</script>

<style lang="stylus">
  .wa-userinfo
    .user-box>div
      height: 15px
    ul
      background #ffffff
      /*border-top: 1px solid #c8c7cc*/
      /*border-bottom: 1px solid #c8c7cc*/
      li
        position: relative
        padding: 13px 15px
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
          margin: -13px -15px
          font-size: 15px
          padding: inherit
          color: inherit
          overflow: hidden
          white-space normal
          text-overflow ellipsis
          img
            /*margin-right: 10px*/
            width: 56px
            height: 56px
            line-height 56px
            /*border-radius 50%*/
            float: right
          div
            width: 100%
          .userinfo-value
            line-height 21px
            font-size: 14px
            color: #8f8f94
            float: right
            overflow: hidden
            white-space normal
            text-overflow ellipsis
</style>
