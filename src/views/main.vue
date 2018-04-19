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
  mounted () {
    this.$http.get('/api/oauth/wx_login').then(res => {
      console.log(res)
    }).catch(err => {
      console.log(err)
    })
    this.$router.push('/fight')
  }
}
</script>

<style lang="stylus">
  #main
    padding-bottom: 50px
    height: 100%
</style>
