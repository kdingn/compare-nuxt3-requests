<script setup lang="ts">
import { ref } from "vue";

var inputUrl = ref("");
const data = ref<any>("");

function setUrl() {
  inputUrl.value = "https://github.com/kdingn";
}

function updateContent() {
  $fetch(inputUrl.value).then((res) => {
    data.value = res;
  });
}
</script>

<template>
  <div class="right-content">
    <h2 class="right-title">client</h2>
    <div>
      <input type="form" class="right-input" v-model="inputUrl" />
      <button @click="updateContent">request</button>
      <button @click="setUrl">set url</button>
    </div>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
.right-content {
  width: 49vw;
}
.right-title {
  margin: 0 auto;
}
.right-input {
  width: 30vw;
}
</style>
