import axios from 'axios'
import Qs from 'qs'
// import router from '@/router'
// import { Message } from 'element-ui'
// import { getToken } from '@/utils/auth'

// 创建axios实例
const service = axios.create({
  timeout: 5000, // 请求超时时间
  transformRequest: [data => (
    Qs.stringify(data)
  )],
  autoMsg: true
})

// request拦截器
// service.interceptors.request.use(config => {
//   // Do something before request is sent
//   const token = getToken()
//   if (token) {
//     config.headers['X-Token'] = token // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
//   }
//   return config
// }, error => {
//   // Do something with request error
//   console.log(error) // for debug
//   Promise.reject(error)
// })

// respone拦截器
// service.interceptors.response.use(
//   response => {
//     const res = response.data
//     // if (res.code === 100) {
//     //   MessageBox.confirm('你已被登出，可以取消继续留在该页面，或者重新登录', '确定登出', {
//     //     confirmButtonText: '重新登录',
//     //     cancelButtonText: '取消',
//     //     type: 'warning'
//     //   }).then(() => {
//     //     router.push({ name: 'login' })
//     //   })
//     //   return Promise.reject('error')
//     // }
//     // 判断错误
//     let errMsg = ''
//     if (res.code === 400) {
//       const key = Object.keys(res.data)[0]
//       errMsg = key && res.data[key][0] || '参数错误'
//     } else if (res.code !== 200) {
//       errMsg = res.msg || '数据错误'
//     }
//     // 错误提示
//     if (errMsg && response.config.autoMsg) {
//       Message({
//         showClose: true,
//         message: errMsg,
//         type: 'error'
//       })
//     }
//     return response.data
//   },
//   error => {
//     Message({
//       showClose: true,
//       message: '数据错误',
//       type: 'error'
//     })
//     return Promise.reject(error)
//   }
// )

export default service
