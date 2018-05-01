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
            <img v-if="params.avatar" :src="params.avatar" alt="">
            <img v-else src="../../../assets/avatar.jpg" alt="">
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
          <a href="javascript:;" @click="sexPopup = true">
            <div>
              性别<p class="userinfo-value">{{ params.sex }}</p>
            </div>
          </a>
        </li>
        <mt-popup v-model="sexPopup" position="bottom">
          <mt-picker :slots="sexData" @change="setSex"
          :visible-item-count="5" :show-toolbar="false" valueKey="label"></mt-picker>
          <!--<ul>-->
            <!--<li><a href="">男</a></li>-->
            <!--<li><a href="">女</a></li>-->
          <!--</ul>-->
        </mt-popup>
        <li>
          <!--<a href="javascript:;" @click="setAddress">-->
            <!--<div>-->
              <!--地区<p class="userinfo-value">{{ params.county }} {{ params.province }} {{ params.city }}</p>-->
            <!--</div>-->
          <!--</a>-->
          <!--<group>-->
            <x-address title="地区" raw-value v-model="address" :list="addressData" placeholder="请选择地址" @on-shadow-change="onShadowChange" style="font-size: 15px;"></x-address>
            <!--<x-address v-model="value" :list="addressData" @on-shadow-change="onShadowChange" placeholder="请选择地址" :show.sync="showAddress"></x-address>-->
            <!--<cell title="上面value值" :value="value"></cell>-->
          <!--</group>-->
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
      <x-button type="primary">保存</x-button>
      <x-button @click.native="$router.back()">不保存修改</x-button>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { MessageBox } from 'mint-ui'
import { Group, XAddress, ChinaAddressV4Data, XButton, Cell, Value2nameFilter as value2name } from 'vux'
export default {
  name: 'userinfo',
  components: {
    // Popup,
    // Picker,
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
        avatar: '',
        nickname: '',
        birthday: '',
        sex: '',
        city: '',
        province: '',
        county: '',
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
      this.params.county = this.userinfo.county
      this.params.describe = this.userinfo.describe
      this.address = []
      this.address.push(this.userinfo.province)
      this.address.push(this.userinfo.city)
      this.address.push(this.userinfo.county)
    }
  },
  mounted () {
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
        value: _this.params.birthday,
        onConfirm (val) {
          console.log(val)
          _this.params.birthday = val
        }
      })
    },
    // setAddress () {
    //   console.log(this.$vux)
    //   this.$vux.XAddress.show({
    //     title: '地区',
    //     list: this.addressData,
    //     value: this.address
    //   })
    // },
    onShadowChange (ids, names) {
      console.log(ids, names)
      this.nowAddressName = names
    },
    getName (value) {
      return value2name(value, ChinaAddressV4Data)
    },
    setText (type, text) {
      // const _this = this
      // console.log(this)
      // this.$vux.confirm.prompt('123', {
      //   title: 'Title',
      //   showInput: true,
      //   onShow () {
      //     console.log('promt show')
      //     _this.$vux.confirm.setInputValue('社么？')
      //   },
      //   onHide () {
      //     console.log('prompt hide')
      //   },
      //   onCancel () {
      //     console.log('prompt cancel')
      //   },
      //   onConfirm (msg) {
      //     alert(msg)
      //   }
      // })
      MessageBox.prompt(type, {
        inputValue: text
      }).then(({ value, action }) => {
        if (type === '昵称') {
          this.params.nickname = value
        } else if (type === '个性签名') {
          this.params.describe = value
        }
        // console.log(value)
        // console.log(action)
      })
    },
    setSex (picker, values) {
      // console.log(picker)
      console.log(values[0])
      // if (values[0] > values[1]) {
      // picker.setSlotValue(1, values[0])
      this.params.sex = values[0]
      // }
    }
  }
}
</script>

<style lang="stylus">
  .wa-userinfo
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
