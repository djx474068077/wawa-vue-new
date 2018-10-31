// 判断是开发模式还是本地模式
const isPro = Object.is(process.env.NODE_ENV, 'production')

module.exports = {
  baseUrl: isPro ? 'http://wawaapi.dongff.xyz/api/' : 'api/'
}
