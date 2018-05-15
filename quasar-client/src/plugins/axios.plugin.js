import { axios, setHttpToken } from './axios'

export default ({ Vue }) => {
  Vue.prototype.$setHttpToken = setHttpToken
  Vue.prototype.$axios = axios
}
