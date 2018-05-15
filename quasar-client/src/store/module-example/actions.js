import { axios } from '../../plugins/axios'

export const someAction = ({ commit }) => {
  return axios.get('').then(res => {
    console.log(res.data)
  })
}
