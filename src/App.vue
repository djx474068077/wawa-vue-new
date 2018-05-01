<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <!--<loading v-model="isLoading"></loading>-->
  </div>
</template>

<script>
// import { Loading } from 'vux'
// import { mapState } from 'vuex'
export default {
  name: 'App'
  // components: {
  //   Loading
  // },
  // computed: {
  //   ...mapState({
  //     isLoading: state => state.vux.isLoading
  //   })
  // }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0px;
  height: 100%;
  padding: 0px;
  background-color: rgb(243, 243, 243);
}
</style>
