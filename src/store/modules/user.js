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
    refreshUser (state, vm) {
      // console.log('refreshUser')
      if (localStorage.userinfo) {
        state.userinfo = JSON.parse(localStorage.userinfo)
        vm.$http.get('/users/self', {params: {username: state.userinfo.username}}).then(response => {
          let res = response.data
          if (res.status === 10000) {
            state.userinfo = res.data
            localStorage.setItem('userinfo', JSON.stringify(res.data))
          }
        }).catch(err => {
          console.log(err)
          vm.$vux.toast.show({
            width: '60%',
            time: 1000,
            type: 'warn',
            text: '通讯错误，请重试'
          })
        })
      } else {
        vm.$vux.toast.show({
          width: '60%',
          time: 1000,
          type: 'warn',
          text: '请重新登录'
        })
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
