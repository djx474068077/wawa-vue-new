<template>
  <div class="wa-login">
    <div class="login-box">
      <h1 class="login-title">wawa</h1>
      <div>
        <input type="text" placeholder=" 用户名/ID ">
      </div>
      <div>
        <input type="password" placeholder=" 密码 ">
      </div>
      <p style="text-align: left">
        <Checkbox style="font-size: 13px" v-model="is_agree">我已阅读并同意<a href="#">服务条款</a></Checkbox>
      </p>
      <button v-if="is_agree" class="can-login">登 陆</button>
      <button v-else disabled class="no-login">登 陆</button>
      <p>
        <a href="javascript:;" @click="$router.push('/register')">新用户注册</a>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data () {
    return {
      is_agree: false,
      params: {

      }
    }
  }
}
</script>

<style lang="stylus">
.wa-login
  height: 100vh
  width: 100%
  background: url("../assets/login-bg.jpg") no-repeat 0 0
  background-size: 100% 100%
  .login-box
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
      background: rgba(16, 174, 255, .8)
      color: #fff
    .can-login
      background: rgba(16, 174, 255, .8)
      color: #fff
    .no-login
      background: rgb(247, 247, 247)
      color: #bbb
    p
      text-align right
      margin-top: 14px
      line-height 15px
      font-size 15px
</style>
