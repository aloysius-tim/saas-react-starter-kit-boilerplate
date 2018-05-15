import { axios, setHttpToken } from '@/plugins/axios'
import localforage from 'localforage'
import { isEmpty } from 'lodash'

export const setToken = ({ commit }, token) => {
  return localforage.setItem('auth/token', token).then(() => {
    commit('SET_TOKEN', token)
    setHttpToken(token)
    return Promise.resolve(token)
  }).catch(err => {
    commit('SET_TOKEN', null)
    setHttpToken(null)
    return Promise.reject(err)
  })
}

export const setRefreshToken = ({ commit }, refreshToken) => {
  return localforage.setItem('auth/refreshToken', refreshToken).then(() => {
    commit('SET_REFRESH_TOKEN', refreshToken)
    return Promise.resolve(refreshToken)
  }).catch(err => {
    commit('SET_REFRESH_TOKEN', null)
    return Promise.reject(err)
  })
}

export const getLocalToken = ({ commit }) => {
  return localforage.getItem('auth/token').then(token => {
    commit('SET_TOKEN', token)
    setHttpToken(token)
    if (!isEmpty(token)) {
      return Promise.resolve(token)
    } else {
      return Promise.reject(token)
    }
  }).catch(err => {
    commit('SET_TOKEN', null)
    setHttpToken(null)
    return Promise.reject(err)
  })
}

export const clearToken = ({ dispatch }) => {
  // here is the place to invalidate refreshToken
  dispatch('setRefreshToken', null)
  return dispatch('setToken', null)
}

export const authorise = ({ dispatch }, user) => {
  return axios.post('/auth/authorise', {email: user.email, password: user.password}).then(res => {
    console.log(res.data)
    dispatch('setRefreshToken', res.data.refreshToken)
    return dispatch('setToken', res.data.token)
  }).catch(err => {
    console.log(err)
    return dispatch('clearToken')
  })
}

export const initAuth = ({ dispatch }) => {
  return dispatch('getLocalToken')
}
export const signup = ({ dispatch }, user) => {
  return axios.post('/auth/signup', {email: user.email, password: user.password}).then(res => {
    console.log(res.data)
    dispatch('setRefreshToken', res.data.refreshToken)
    return dispatch('setToken', res.data.token)
  }).catch(err => {
    console.log(err)
    return dispatch('clearToken')
  })
}
