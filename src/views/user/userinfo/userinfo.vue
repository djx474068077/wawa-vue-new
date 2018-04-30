<template>
  <div class="wa-userinfo">
    <div class="user-box">
      <div></div>
      <ul>
        <li>
          <a href="javascript:;">
            <div>
              头像
            </div>
            <img v-if="params.avatar" :src="params.avatar" alt="">
            <img v-else src="../../../assets/avatar.jpg" alt="">
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div>
              昵称<p class="userinfo-value">{{ params.nickname }}</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;">
            <div>
              蛙蛙号<p class="userinfo-value">{{ userinfo.username }}</p>
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
          <a href="javascript:;">
            <div>
              性别<p class="userinfo-value">{{ params.sex }}</p>
            </div>
          </a>
        </li>
        <li>
          <a href="javascript:;" @click="setAddress">
            <div>
              地区<p class="userinfo-value">{{ params.country }} {{ params.province }} {{ params.city }}</p>
            </div>
          </a>
          <!--<group>-->
            <!--<x-address title="地区" v-model="address" :list="addressData" placeholder="请选择地址"></x-address>-->
            <!--<cell title="上面value值" :value="value"></cell>-->
          <!--</group>-->
        </li>
        <li>
          <a href="javascript:;">
            <div>
              个性签名<p class="userinfo-value">{{ params.describe }}</p>
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { XAddress, ChinaAddressV4Data, Group, Value2nameFilter as value2name } from 'vux'
export default {
  name: 'userinfo',
  components: {
    XAddress, ChinaAddressV4Data, Group
  },
  data () {
    return {
      address: '',
      addressData: ChinaAddressV4Data,
      params: {
        avatar: '',
        nickname: '',
        birthday: '',
        sex: '',
        city: '',
        province: '',
        country: '',
        describe: ''
      }
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    }
  },
  watch: {
    userinfo: (n, o) => {
      this.params.avatar = this.userinfo.avatar
      this.params.nickname = this.userinfo.nickname
      this.params.birthday = this.userinfo.birthday ? moment(this.userinfo.birthday).format('YYYY-DD-MM') : ''
      this.params.sex = this.userinfo.sex
      this.params.city = this.userinfo.city
      this.params.province = this.userinfo.province
      this.params.country = this.userinfo.country
      this.params.describe = this.userinfo.describe
    }
  },
  mounted () {
    this.params.avatar = this.userinfo.avatar
    this.params.nickname = this.userinfo.nickname
    this.params.birthday = this.userinfo.birthday ? moment(this.userinfo.birthday).format('YYYY-DD-MM') : ''
    this.params.sex = this.userinfo.sex
    this.params.city = this.userinfo.city
    this.params.province = this.userinfo.province
    this.params.country = this.userinfo.country
    this.params.describe = this.userinfo.describe
  },
  methods: {
    setBirthday () {
      let _this = this
      this.$vux.datetime.show({
        cancelText: '取消',
        confirmText: '确定',
        format: 'YYYY-MM-DD',
        value: _this.params.birthday,
        onConfirm (val) {
          console.log(val)
          _this.params.birthday = val
        }
      })
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    setAddress () {
      console.log(this.$vux)
      this.$vux.XAddress.show({
        title: '地区',
        list: this.addressData,
        value: this.address
      })
    }
  }
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
