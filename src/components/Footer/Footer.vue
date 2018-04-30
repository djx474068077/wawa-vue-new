<template>
  <div id="footer">
    <tabbar>
      <tabbar-item :selected="nowPath === '/practice'" @click.native="linkTo ('practice')">
        <img v-if="nowPath === '/practice'" style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/practice-on.png">
        <img v-else style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/practice-off.png">
        <span slot="label">训练</span>
      </tabbar-item>
      <tabbar-item :selected="nowPath === '/fight'" @click.native="linkTo ('fight')">
        <img v-if="nowPath === '/fight'" style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/fight-on.png">
        <img v-else style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/fight-off.png">
        <span slot="label">对战</span>
      </tabbar-item>
      <tabbar-item :selected="nowPath === '/user'" :show-dot="showDot" @click.native="linkTo ('user')">
        <img v-if="nowPath === '/user'" style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/user-on.png">
        <img v-else style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/user-off.png">
        <span slot="label">我的</span>
      </tabbar-item>
      <!--<tabbar-item v-else show-dot @click.native="linkTo ('user')">-->
        <!--<img v-if="menuStatus === 'user'" style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/user-on.png">-->
        <!--<img v-else style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/user-off.png">-->
        <!--<span slot="label">我的</span>-->
      <!--</tabbar-item>-->
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'vue-footer',
  data () {
    return {
    }
  },
  computed: {
    userinfo: function () {
      return this.$store.state.user.userinfo
    },
    nowPath: function () {
      console.log(this.$route.path)
      return this.$route.path
    },
    showDot: function () {
      if (this.userinfo.username && this.userinfo.avatar && this.userinfo.sex && this.userinfo.age && this.userinfo.nickname && this.userinfo.city) {
        return false
      } else {
        return true
      }
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  mounted () {
  },
  methods: {
    linkTo (link) {
      // this.menuStatus = link
      this.$router.push('/' + link)
    }
  }
}
</script>

<style lang="stylus">
  #footer
    position: fixed
    bottom: 0px
    width: 100%
    height: 50px
</style>
