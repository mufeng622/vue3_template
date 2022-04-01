import cookie from 'vue-cookie'
import axios from 'axios'
import Nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import qs from 'qs'

console.log(process.env.NODE_ENV, import.meta.env.VITE_WEB_PROXY)
// baseUrl根据是否是开发环境并且开启代理来区分
axios.defaults.baseURL = process.env.NODE_ENV === 'development' && import.meta.env.VITE_WEB_PROXY === 'true' ? '/' : import.meta.env.VITE_WEB_HTTP_URL
axios.defaults.timeout = 10000

// 请求拦截
axios.interceptors.request.use((config: any) => {
  config.headers['Content-type'] = config.contentType ? config.contentType : 'application/json;charset=UTF-8'
  config.headers['token'] = (cookie as any).get('token')
  return config
}, (err) => {
  return Promise.reject(err)
})

// 响应拦截
axios.interceptors.response.use((response) => {
  if (response.data.code === 100) {
    //需要登录
  }
  return response
}, (err) => {
  return Promise.reject(err)
})

// 响应数据接口类型
interface ResType<T> {
  code: string | number,
  data?: T,
  msg?: string,
  err?: string
}

// 网络请求方法接口类型
interface Http {
  get<T>(url: string, params?: any, isLoading?: boolean): Promise<ResType<T>>
  post<T>(url: string, params?: any, isLoading?: boolean, contentType?: string): Promise<ResType<T>>
  upload<T>(url: string, params: any, isLoading?: boolean): Promise<ResType<T>>
  download<T>(url: string, params?: any, isLoading?: boolean): Promise<ResType<T>>
}

const http: Http = {
  // get请求
  get(url, params, isLoading = true) {
    return new Promise((resolve, reject) => {
      isLoading && Nprogress.start()
      axios.get(url, { params }).then((res) => {
        isLoading && Nprogress.done()
        resolve(res.data)
      }).catch((err) => {
        isLoading && Nprogress.done()
        reject(err)
      })
    })
  },
  // post请求
  post(url, params, isLoading = true, contentType = 'json') {
    return new Promise((resolve, reject) => {
      isLoading && Nprogress.start()
      let param = contentType === 'form' ? params : contentType === 'json' ? JSON.stringify(params) : qs.stringify(params)
      axios.post(url, param).then((res) => {
        isLoading && Nprogress.done()
        resolve(res.data)
      }).catch((err) => {
        isLoading && Nprogress.done()
        reject(err)
      })
    })
  },
  // 文件上传，post请求
  upload(url, params, isLoading = true) {
    return new Promise((resolve, reject) => {
      isLoading && Nprogress.start()
      axios.post(url, params, {
        headers: {
          "Content-type": 'multipart/form-data; charset=utf-8; boundary=--'
        }
      }).then((res) => {
        isLoading && Nprogress.done()
        resolve(res.data)
      }).catch((err) => {
        isLoading && Nprogress.done()
        reject(err)
      })
    })
  },
  // 文件下载，get请求
  download(url, params, isLoading = true) {
    return new Promise((resolve, reject) => {
      isLoading && Nprogress.start()
      axios.get(url, {
        params,
        responseType: 'blob'
      }).then((res) => {
        isLoading && Nprogress.done()
        resolve(res.data)
      }).catch((err) => {
        isLoading && Nprogress.done()
        reject(err)
      })
    })
  }
}

export default http

