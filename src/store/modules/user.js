const user = {
  state: {
    userinfo: {}
  },
  mutations: {
    changeUserStatus (state, status) {
      if (state.userinfo.status) {
        state.userinfo.status = status
      }
    },
    refreshUser (state) {
      state.userinfo = JSON.parse(localStorage.userinfo)
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
      state.userinfo = {}
      localStorage.removeItem('userinfo')
      localStorage.clear()
      vm.$router.push('/user')
    }
  }
}
export default user
