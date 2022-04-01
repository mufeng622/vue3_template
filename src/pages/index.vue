<template>
  <strong> 测试首页数据：{{ indexDate.key }}-{{ indexDate.val }} </strong>
  <br />
  <strong>名字：{{ indexName }}</strong>

  <h4 style="border-top: 1px solid #188eee; padding-top: 20px">
    状态管理工具，采用pinia
  </h4>
  <p>pinia-state：{{ testStores.testName }}</p>
  <p>pinia-getter：{{ testStores.testGetter }}</p>
  <p>pinia-action： {{ testStores.testDataLen }}</p>
  <button @click="changeStore">修改store</button>
  <button style="margin: 0 20px" @click="changeAction">pinia-aciton</button>
  <button @click="goUser">跳转到用户页</button>
</template>

<script lang="ts" setup>
import { ref, reactive, onMounted } from "vue";
import { useRouter } from "vue-router";
import test from "../serive/test/test";
import { testStore } from "../store/index";

const router = useRouter();
let indexName = ref("首页Name");
let indexDate = reactive({
  key: "测试首页key",
  val: "测试首页value",
});
let indexList = reactive([]);
let testStores = testStore();

function goUser() {
  router.push({
    name: "User",
    params: { from: "from_index" },
  });
}
const getList = () => {
  test
    .testList({
      traitName: "",
      status: "",
    })
    .then((res) => {
      console.log(res);
      indexList = res.data;
    });
};
const changeStore = () => {
  testStores.$patch({
    testName: "通过 $patch 修改state里数据",
  });
};
const changeAction = () => {
  testStores.testAction();
};
onMounted(() => {
  getList();
});
</script>


