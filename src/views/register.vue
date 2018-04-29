<template>
  <div class="wa-register">
    <div class="register-box">
      <h1 class="register-title">wawa</h1>
      <div>
        <input type="text" v-model="params.userName" placeholder=" 用户名必须由6-16位字母和数字组成 ">
      </div>
      <div>
        <input type="password" v-model="params.password" placeholder=" 密码 ">
      </div>
      <div>
        <input type="password" v-model="repassword" placeholder=" 确认密码 ">
      </div>
      <p style="text-align: left">
        <Checkbox style="font-size: 13px" v-model="is_agree">我已阅读并同意<a href="#">服务条款</a></Checkbox>
      </p>
      <button v-if="is_agree" class="can-register" @click="registe">注 册</button>
      <button v-else disabled class="no-register">注 册</button>
      <p>
        已有账号<a href="javascript:;" @click="$router.push('/login')">前往登陆</a>
      </p>
    </div>
  </div>
</template>

<script>
import qs from 'qs'
export default {
  name: 'register',
  data () {
    return {
      is_agree: false,
      params: {
        userName: '',
        password: ''
      },
      repassword: ''
    }
  },
  methods: {
    registe () {
      let reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,16}$/
      if (this.params.userName === '' || this.params.password === '' || this.repassword === '') {
        console.log('输入的内容不能为空')
      } else if (!reg.test(this.params.userName)) {
        // 用户名格式不正确
        console.log('用户名格式不正确')
      } else if (this.params.password !== this.repassword) {
        // 两次输入的密码不一致
        console.log('两次输入的密码不一致')
      } else {
        // 发送请求
        this.$http.post('/users/register', qs.stringify(this.params)).then(response => {
          let res = response.data
          if (res.status === 10000) {
            console.log('注册成功')
            this.$vux.toast.show({
              width: '60%',
              time: 1000,
              type: 'success',
              text: '注册成功',
              position: 'bottom'
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
              text: res.msg
            })
          }
        }).catch(err => {
          console.log(err)
        })
      }
    }
  }
}
</script>

<style lang="stylus">
  .wa-register
    height: 100vh
    width: 100%
    background: url("../assets/login-bg.jpg") no-repeat 0 0
    background-size: 100% 100%
    .register-box
      width: 100%
      height: 50%
      box-sizing: border-box
      padding: 25% 20px
      h1
        text-align left
        margin-bottom: 40px
      &>div
        width: 100%
        height: 50px
        box-sizing: border-box
        border-bottom: 1px solid rgba(0, 0, 0, .2)
        padding: 6px 3px
        input
          width: 100%
          height: 38px
          line-height 38px
          font-size: 17px
          border none
          outline: none
          color: #000
          background: transparent
      button
        width: 100%
        height: 40px
        margin: 10px 0
        border: none
        outline: none
        border-radius 4px
        font-size: 17px
      .can-register
        background: rgba(16, 174, 255, .8)
        color: #fff
      .no-register
        background: rgb(247, 247, 247)
        color: #bbb
      p
        text-align right
        margin-top: 14px
        line-height 15px
        font-size 15px
</style>
