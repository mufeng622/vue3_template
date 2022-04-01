<script lang="ts">
import { ref } from "vue";

export default {
  name: "HelloWorld",
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  setup() {
    const count = ref(0);

    const countAdd = () => {
      count.value++;
    };
    return {
      count,
      countAdd,
    };
  },
};
</script>

<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="countAdd">
    点击修改当前组件内数值: {{ count }}
  </button>
</template>

<style lang="scss" scoped>
.a_link {
  color: $main_color;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
