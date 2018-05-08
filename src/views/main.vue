<template>
  <div id="main">
    <VueHeader class="vueheader"></VueHeader>
    <router-view/>
    <VueFooter class="vuefooter"></VueFooter>
  </div>
</template>

<script>
import VueHeader from '@/components/Header/Header'
import VueFooter from '@/components/Footer/Footer'
export default {
  name: 'vue-main',
  components: {
    VueHeader, VueFooter
  },
  created () {
    let _this = this
    setTimeout(function () {
      _this.$store.commit('refreshUser', _this)
    }, 200)
  },
  mounted () {
    // this.$http.get('/oauth/wx_login').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    let _this = this
    setTimeout(function () {
      if (_this.$route.path === '/') {
        _this.$router.push('/fight')
      }
    }, 200)
  }
}
</script>

<style lang="stylus">
  #main
    padding-bottom: 50px
    height: 100%
</style>
