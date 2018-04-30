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
    this.$store.commit('refreshUser')
  },
  mounted () {
    // this.$http.get('/oauth/wx_login').then(res => {
    //   console.log(res)
    // }).catch(err => {
    //   console.log(err)
    // })
    if (this.$route.path === '/') {
      this.$router.push('/fight')
    }
  }
}
</script>

<style lang="stylus">
  #main
    padding-bottom: 50px
    height: 100%
</style>
