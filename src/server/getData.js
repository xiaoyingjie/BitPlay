import service from '@/utils/fetch'

// let firstUrl = 'test.abc.com/'
// post请求
// export const postA = (option) => service.post('', option)

// get请求
// export const getA = (option) => service.get('', { params: option, autoMsg: false })

export const BaiA = (option) => service.get(`/api/qwer/eeqw`, { params: option, autoMsg: false })
