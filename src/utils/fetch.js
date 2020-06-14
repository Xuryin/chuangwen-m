import axios from 'axios'

/*
class Fetch {
  constructor({urlPrefix, headers, fit}) {
  }


}
*/

const Fetch = {}

Fetch.create = function ({fit, ...rest}) {
  const axiosInstance = axios.create({
    // baseURL: baseURL && baseURL.get(),
    ...rest,
  })

  const req = axiosInstance.request

  // restful: 是否使用restful风格
  axiosInstance.request = function ({url, restful, ...options}) {
    if(restful) {
      const restData = options.data || options.params
      for (let param in restData) {
        if (restData.hasOwnProperty(param) && param.indexOf(':') === -1) {
          url = url.replace(new RegExp('\\/:' + param), '/' + restData[param])
          delete restData[param]
        }
      }
    }

    options.url = url

    return req(options)
  }

  return axiosInstance
}

export default Fetch
