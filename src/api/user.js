import http from '../utils/http'
import { sleep } from '../utils'

const mockData = {
  user: null
}

export const login = async (username, password) => {
  // return http.post('/login', {
  //   username,
  //   password
  // })
  await sleep(1000)
  mockData.user = {
    id: Math.random().toString().substr(2, 4),
    username: username,
    nickname: Math.random().toString(36),
    avatar: 'https://avatars2.githubusercontent.com/u/11366654?s=60&v=4'
  }

  return { data: mockData.user }
}

export const getLoginInfo = () => {
  // return http.get('/login/info')
  // 模拟
  return new Promise((resolve) => {
    // resolve(null)
    setTimeout(() => {
      resolve(mockData.user)
    }, 1000)
  })
}

export const getUserList = () => {
  return http.get('/api/users')
}
