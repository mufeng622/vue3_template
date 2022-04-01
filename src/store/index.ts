import { defineStore } from 'pinia'
import test from '../serive/test/test'

interface stateType {
  testName: string,
  testData: any[]
}

export const testStore = defineStore({
  id: 'test',
  state: (): stateType => ({
    testName: 'pinia状态管理',
    testData: []
  }),
  getters: {
    testGetter: (state) => state.testName.length,
    testDataLen: (state) => state.testData.length
  },
  actions: {
    testAction() {
      test.testList({
        traitName: "",
        status: "",
      }).then((data) => {
        if (data.code == 200) {
          this.testData = data.data
        } else {
          this.testData = ['接口失败了1', '接口失败了2']
        }
      }, (err) => {
        this.testData = ['请求失败了1', '请求失败了2', '请求失败了3']
        console.log('http error: ', err, this.testData)
      })
    }
  }
})


