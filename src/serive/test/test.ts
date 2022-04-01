
import http from '../http'
import api from './api'
import * as T from './types'

const test: T.TestPost = {
  testList: (params) => {
    return http.post(api.test, params)
  }
}

export default test