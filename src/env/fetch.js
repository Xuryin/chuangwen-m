import fetch from '@/utils/fetch'

const fetchInstance = fetch.create({
  baseURL: '/api/v2',
  method: 'POST',
  // rest: true,
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
    'env': 'dev',
  },
  // 目前还没有做鉴权，下面的设置为`false`，和服务端的*相对应
  // 如果设为`true`，需要服务端设置响应头`Access-Control-Allow-Origin`为具体的白名单
  withCredentials: false,
  responseType: 'json',
  transformResponse: [function (response) {
    console.log(response)
    if (response) {
      if ((response.code && response.code === 403) || response.status === 403) {
        const errorMsg = response.message || response.errorMsg || '登录超时，请重新登录'
        if (!document.getElementById('login_timeout')) {
        }
        throw new Error(errorMsg)
      }
      return response
    }
    return {
      success: false,
      content: {},
      error: {
        message: '网络异常，请刷新页面重试',
        code: '',
      },
    }
  }],
})

// 统一的返回处理
fetchInstance.interceptors.response.use(function (response) {
  return response.data
}, function (error) {
  return Promise.reject(error)
})

export default fetchInstance
