<template>
  <p>测试用户页面</p>
  <strong>用户名：{{ user.name }}</strong>
  <br />
  <strong>年龄：{{ user.age }}</strong>
  <br />
  <strong>跳转参数：{{ froms }}</strong>

  <HelloWorld :msg="'我是父组件传给子组件参数'" />
  <br />
  <button style="margin-top: 20px" @click="goHome">回首页</button>
</template>

<script setup lang='ts'>
import HelloWorld from "../components/HelloWorld.vue";
import { ref, reactive } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const route = useRoute();

let froms = ref(route.params.from);
let user = reactive({
  name: "lilei",
  age: 20,
});

const goHome = () => {
  router.push("/");
};
</script>
