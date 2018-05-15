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
          margin-top: -13px !important
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
          .badge
            position: absolute
            right: 20px
            top: 50%
            transform translateY(-50%)
            border-radius 50%
            background-color: #ff0000
            height: 8px
            width: 8px
          div
            line-height 21px
            font-size: 15px
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
          <a href="javascript:;" @click="toUserinfo">
            <img v-if="userinfo.avatar" :src="userinfo.avatar" alt="">
            <img v-else src="../../assets/avatar/avatar.jpg" alt="">
            <div>
              <div v-if="userinfo && userinfo.nickname" style="font-size: 17px;">{{ userinfo.nickname }}</div>
              <div v-else-if="!userinfo" style="font-size: 17px;">未登陆</div>
              <div v-else style="font-size: 17px;">游客{{ userinfo.username }}</div>
              <p>蛙蛙号：<span v-if="userinfo && userinfo.username">{{ userinfo.username }}</span></p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="javascript:;" @click="toUserinfo">
            <i class="fa fa-gear" style=""></i>
            <div>
              修改用户信息
            </div>
            <span class="badge" v-if="showUserinfoDot"></span>
          </a>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="javascript:;" @click="toHistory">
            <i class="fa fa-history" style=""></i>
            <div>
              历史对战记录
            </div>
          </a>
        </li>
        <!--<li>-->
          <!--<a href="javascript:;" @click="toAbility">-->
            <!--<i class="fa fa-bookmark" style=""></i>-->
            <!--<div>-->
              <!--我的能力-->
            <!--</div>-->
          <!--</a>-->
        <!--</li>-->
        <li>
          <a href="javascript:;" @click="toRanking">
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
          <a href="javascript:;" @click="logout">
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
import { MessageBox } from 'mint-ui'
import { Cell, Group } from 'vux'
export default {
  name: 'user',
  components: {
    Cell, Group, MessageBox
  },
  data () {
    return {
      is: true
      // userinfo: {}
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    },
    showUserinfoDot: function () {
      if (!this.userinfo) {
        return false
      } else if (this.userinfo.username && this.userinfo.avatar && this.userinfo.sex && this.userinfo.age && this.userinfo.nickname && this.userinfo.city) {
        return false
      } else {
        return true
      }
    }
  },
  mounted () {
    // this.userinfo = JSON.parse(localStorage.getItem('userinfo'))
  },
  methods: {
    toUserinfo () {
      if (this.userinfo === '') {
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
      } else {
        this.$router.push('/userinfo')
      }
    },
    toHistory () {
      if (this.userinfo === '') {
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
      } else {
        this.$router.push('/gamelog')
        // this.$vux.toast.show({
        //   width: '60%',
        //   time: 1000,
        //   type: 'warn',
        //   text: '功能待开发'
        // })
      }
    },
    toAbility () {
      if (this.userinfo === '') {
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
      } else {
        this.$vux.toast.show({
          width: '60%',
          time: 1000,
          type: 'warn',
          text: '功能待开发'
        })
      }
    },
    toRanking () {
      if (this.userinfo === '') {
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
      } else {
        this.$router.push('/ranking')
      }
    },
    logout () {
      if (this.userinfo === '') {
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
      } else {
        MessageBox.confirm('确定退出登录？？').then(action => {
          this.$store.commit('logout', this)
        })
      }
    }
  }
}
</script>
