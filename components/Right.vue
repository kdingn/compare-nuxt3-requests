<script setup lang="ts">
import { ref } from "vue";

var inputUrl = ref("");
const data = ref<any>("");

function setUrl() {
  inputUrl.value = "https://ai-data-base.com/archives/64001";
}

function updateContent() {
  $fetch(inputUrl.value).then((res) => {
    data.value = res;
  });
}
</script>

<template>
  <div class="right-content">
    <div>client</div>
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
.right-input {
  width: 30vw;
}
</style>
