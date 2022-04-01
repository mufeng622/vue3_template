export interface TestParam {
  traitName: string
  status: string
}
export interface TestPost {
  testList: (params: TestParam) => Promise<any>
}



