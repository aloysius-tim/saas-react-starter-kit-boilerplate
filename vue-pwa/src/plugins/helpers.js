import store from '@/store'
import router from '@/router'
import localforage from 'localforage'

export const redirectIntended = () => {
  localforage.getItem('intended').then(toRoute => {
    if (!toRoute) {
      router.push({ name: 'home' })
      return
    }
    router.push(toRoute)
  })
}
export const getLocale = () => {
  let locale = localStorage.getItem('locale')
  locale = JSON.parse(locale)
  if (!locale) {
    localStorage.setItem('locale', '"en"')
    return 'en'
  }
  return locale
}

export const paginateArray = (array, pageSize, pageNumber) => {
  --pageNumber // because pages logically start with 1, but technically with 0
  return array.slice(pageNumber * pageSize, (pageNumber + 1) * pageSize)
}

export const apiNotify = obj => {
  let msg = 'api call finished.'
  if (obj.response) {
    if (obj.response.data.message) {
      msg = obj.response.data.message
    } else if (obj.response.data.error) {
      msg = obj.response.data.error
    }
    store.dispatch('root/apiAlert', { code: obj.response.status, message: msg })
  } else if (obj.data && obj.data.message) {
    msg = obj.data.message
    store.dispatch('root/apiAlert', { code: obj.status, message: msg })
  }
}
