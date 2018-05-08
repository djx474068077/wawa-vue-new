<template>
  <div class="wa-userinfo">
    <!--<input type="file" accept="video/*;capture=camcorder">-->
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="javascript:;">
            <div>
              头像
            </div>
            <!--<img :src="params.avatar" alt="">-->
            <img v-if="params.avatar" class="previewer-demo-img" :src="params.avatar" @click="$refs.previewer.show(index)">
            <img v-else src="../../../assets/avatar/avatar.jpg" alt="">
            <!--<div v-transfer-dom>-->
              <!--<previewer :list="avatarList" ref="previewer" :options="options"></previewer>-->
            <!--</div>-->
            <!--<div class="wa-avatar-large"></div>-->
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="setText('昵称', params.nickname)">
            <div>
              昵称<p class="userinfo-value">{{ params.nickname }}</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div>
              蛙蛙号<p class="userinfo-value">{{ params.username }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="javascript:;" @click="setBirthday">
            <div>
              出生日期
              <p class="userinfo-value" v-if="params.birthday">{{ params.birthday }}</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="sexPopup = true">
            <div>
              性别<p class="userinfo-value">{{ params.sex }}</p>
            </div>
          </a>
        </li>
        <mt-popup v-model="sexPopup" position="bottom" style="width: 100%;">
          <mt-picker :slots="sexData" @change="setSex"
          :visible-item-count="5" :show-toolbar="false" valueKey="label"></mt-picker>
        </mt-popup>
        <li>
          <!--<a href="javascript:;" @click="setAddress">-->
            <!--<div>-->
              <!--地区<p class="userinfo-value">{{ params.county }} {{ params.province }} {{ params.city }}</p>-->
            <!--</div>-->
          <!--</a>-->
          <x-address title="地区" raw-value v-model="address" :list="addressData" placeholder="请选择地址" @on-shadow-change="onShadowChange" style="font-size: 15px;"></x-address>
        </li>
        <li>
          <a href="javascript:;" @click="setText('个性签名', params.describe)">
            <div>
              个性签名<p class="userinfo-value">{{ params.describe }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="wa-userinfo-btns">
      <x-button type="primary" @click.native="selfSubmit">保存</x-button>
      <x-button @click.native="$router.back()">不保存修改</x-button>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
import moment from 'moment'
import { MessageBox } from 'mint-ui'
import { Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from 'vux'
export default {
  name: 'userinfo',
  components: {
    MessageBox,
    Group,
    XAddress,
    XButton,
    Cell
  },
  data () {
    return {
      sexPopup: false,
      sexData: [
        {
          flex: 1,
          values: ['我傲娇，我不说', '男', '女'],
          className: 'sex-list'
        }
      ],
      address: [], // 地区绑定值
      nowAddressName: [], // 现在选择的地区的中文
      addressData: ChinaAddressV4Data, // 中国所有地区表
      params: {
        username: '',
        avatar: '',
        nickname: '',
        birthday: '',
        sex: '',
        city: '',
        province: '',
        county: '',
        describe: ''
      }
      // 头像点击放大的配置
      // options: {
      //   getThumbBoundsFn (index) {
      //     // find thumbnail element
      //     let thumbnail = document.querySelectorAll('.previewer-demo-img')[index]
      //     // get window scroll Y
      //     let pageYScroll = window.pageYOffset || document.documentElement.scrollTop
      //     // optionally get horizontal scroll
      //     // get position of element relative to viewport
      //     let rect = thumbnail.getBoundingClientRect()
      //     // w = width
      //     return {x: rect.left, y: rect.top + pageYScroll, w: rect.width}
      //     // Good guide on how to get element coordinates:
      //     // http://javascript.info/tutorial/coordinates
      //   }
      // }
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    }
  },
  watch: {
    userinfo: (n, o) => {
      this.params.username = this.userinfo.username
      this.params.avatar = this.userinfo.avatar
      this.params.nickname = this.userinfo.nickname
      this.params.birthday = this.userinfo.birthday ? moment(this.userinfo.birthday).format('YYYY-DD-MM') : ''
      this.params.sex = this.userinfo.sex
      this.params.city = this.userinfo.city
      this.params.province = this.userinfo.province
      this.params.county = this.userinfo.county
      this.params.describe = this.userinfo.describe
      this.address = []
      this.address.push(this.userinfo.province)
      this.address.push(this.userinfo.city)
      this.address.push(this.userinfo.county)
    }
  },
  mounted () {
    this.params.username = this.userinfo.username
    this.params.avatar = this.userinfo.avatar
    this.params.nickname = this.userinfo.nickname
    this.params.birthday = this.userinfo.birthday ? moment(this.userinfo.birthday).format('YYYY-DD-MM') : ''
    this.params.sex = this.userinfo.sex
    this.params.city = this.userinfo.city
    this.params.province = this.userinfo.province
    this.params.county = this.userinfo.county
    this.params.describe = this.userinfo.describe
    this.address = []
    this.address.push(this.userinfo.province)
    this.address.push(this.userinfo.city)
    this.address.push(this.userinfo.county)
  },
  methods: {
    setBirthday () {
      let _this = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD',
        startDate: '1970-01-01',
        value: _this.params.birthday,
        onConfirm (val) {
          console.log(val)
          _this.params.birthday = val
        }
      })
    },
    onShadowChange (ids, names) {
      this.nowAddressName = names
      this.params.province = names[0]
      this.params.city = names[1]
      this.params.county = names[2]
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    setText (type, text) {
      MessageBox.prompt(type, {
        inputValue: text
      }).then(({ value, action }) => {
        if (type === '昵称') {
          this.params.nickname = value
        } else if (type === '个性签名') {
          this.params.describe = value
        }
      })
    },
    setSex (picker, values) {
      // console.log(values[0])
      if (values[0] === '我傲娇，我不说') {
        this.params.sex = ''
      } else {
        this.params.sex = values[0]
      }
    },
    selfSubmit () {
      this.$http.post('/users/changeSelf', qs.stringify(this.params)).then(response => {
        let res = response.data
        if (res.status === 10000) {
          this.$store.commit('refreshUser', this)
          this.$vux.toast.show({
            width: '60%',
            time: 1000,
            type: 'success',
            text: res.msg
          })
        } else {
          this.$vux.toast.show({
            width: '60%',
            time: 1000,
            type: 'warn',
            text: res.msg
          })
        }
        let _this = this
        setTimeout(function () {
          _this.$router.back()
        }, 1000)
      }).catch(err => {
        console.log(err)
        this.$vux.toast.show({
          width: '60%',
          time: 1000,
          type: 'warn',
          text: '通讯错误，请重试'
        })
      })
    }
  }
}
</script>

<style lang="stylus">
  .wa-userinfo
    padding-bottom: 40px
    .user-box>div
      height: 15px
    & ul
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
            font-size: 13px
            color: #8f8f94
            float: right
            overflow: hidden
            white-space normal
            text-overflow ellipsis
          .sex-list
            width: 100%
        & .vux-popup-picker-select-box
          position: absolute
          right: 0px
          top: 0px
          line-height 21px
          font-size: 13px
          color: #8f8f94
    .wa-userinfo-btns
      margin-top: 40px
</style>
