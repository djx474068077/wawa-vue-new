<template>
  <div id="footer">
    <tabbar>
      <tabbar-item show-dot @click.native="linkTo ('practice')">
        <img v-if="menuStatus === 'practice'" style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/practice-on.png">
        <img v-else style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/practice-off.png">
        <span slot="label">训练</span>
      </tabbar-item>
      <tabbar-item selected @click.native="linkTo ('fight')">
        <img v-if="menuStatus === 'fight'" style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/fight-on.png">
        <img v-else style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/fight-off.png">
        <span slot="label">对战</span>
      </tabbar-item>
      <tabbar-item badge="2" @click.native="linkTo ('user')">
        <img v-if="menuStatus === 'user'" style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/user-on.png">
        <img v-else style="width: 24px;height: 24px;" slot="icon" src="../../assets/menu/user-off.png">
        <span slot="label">我的</span>
      </tabbar-item>
    </tabbar>
  </div>
</template>

<script>
import { Tabbar, TabbarItem } from 'vux'
export default {
  name: 'vue-footer',
  data () {
    return {
      menuStatus: 'fight'
    }
  },
  components: {
    Tabbar,
    TabbarItem
  },
  methods: {
    linkTo (link) {
      this.menuStatus = link
      this.$router.push('/main/' + link)
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
