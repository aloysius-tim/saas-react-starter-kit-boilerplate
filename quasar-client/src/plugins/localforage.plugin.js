import localforage from 'localforage'

localforage.config({
  driver: localforage.LOCALSTORAGE,
  storeName: 'kickapp'
})

export default ({ Vue }) => {
  Vue.prototype.$localforage = localforage
}
