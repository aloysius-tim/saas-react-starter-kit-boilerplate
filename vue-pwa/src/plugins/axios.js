import _axios from 'axios'
import localforage from 'localforage'
import { isEmpty } from 'lodash'
import store from '../store'
import { getLocale, apiNotify } from './helpers'
import router from '@/router'

export const axios = _axios.create({
  baseURL: 'https://shop.khare.co.in/api', // process.env.API_URL,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'Token'
  },
  params: {
    lang: getLocale()
  }
})
// set auth token if there is a token in localstorage
axios.interceptors.request.use(function (config) {
  return localforage.getItem('auth/token').then((authtoken) => {
    // perhaps here is the place where we can ask api if the token is valid or not
    // sync token, it valid set it or remove it otherwise
    config.headers.common['Authorization'] = 'Bearer ' + authtoken
    return config
  }).catch(() => {
    return config
  })
}, (error) => {
  console.log(error)
  return Promise.reject(error)
})

axios.interceptors.response.use(res => {
  return new Promise((resolve, reject) => {
    apiNotify(res)
    resolve(res)
  })
}, err => {
  return new Promise((resolve, reject) => {
    let res = err.response
    if (res.status === 401 || res.status === 403) {
      store.dispatch('auth/clearAuth').then(() => {
        router.push({ name: 'login' })
      })
    }
    apiNotify(err)
    reject(err)
  })
})

// set token after login success or remove if expired
export const setHttpToken = (token) => {
  console.log(token)
  axios.interceptors.request.use((config) => {
    if (isEmpty(token)) {
      config.headers.common['Authorization'] = null
    } else {
      config.headers.common['Authorization'] = 'Bearer ' + token
    }
    return config
  }, (error) => {
    return error
  })
}
