const user = {
  state: {
    userinfo: ''
  },
  mutations: {
    changeUserStatus (state, status) {
      if (state.userinfo.status) {
        state.userinfo.status = status
      }
    },
    refreshUser (state) {
      console.log('refreshUser')
      if (localStorage.userinfo) {
        state.userinfo = JSON.parse(localStorage.userinfo)
      }
      // vm.$http.get('/api/admin/admin/self').then(
      //   res => {
      //     if (res.data.status === 10000) {
      //       localStorage.userinfo = res.data.data
      //       state.userinfo = res.data.data
      //     } else {
      //       state.userinfo = {}
      //       localStorage.userinfo = {}
      //     }
      //   }
      // ).catch(err => {
      //   console.log(err)
      // })
    },
    login (state, userinfo) {
      // console.log(userinfo)
      state.userinfo = userinfo
      localStorage.setItem('userinfo', JSON.stringify(userinfo))
      // this.refreshUser(state, this)
    },
    logout (state, vm) {
      console.log('logout')
      state.userinfo = ''
      localStorage.removeItem('userinfo')
      vm.$router.push('/user')
      vm.$vux.toast.show({
        width: '60%',
        time: 1000,
        type: 'success',
        text: '退出成功'
      })
    }
  }
}
export default user
