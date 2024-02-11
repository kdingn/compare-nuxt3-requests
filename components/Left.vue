<script setup lang="ts">
import { ref } from "vue";

var inputUrl = ref("");
const data = ref<any>("");

function setUrl() {
  inputUrl.value = "https://ai-data-base.com/archives/64001";
}

function updateContent() {
  $fetch("/api/getFromUrl", {
    method: "POST",
    body: { url: inputUrl.value },
  }).then((res) => {
    data.value = res;
  });
}
</script>

<template>
  <div class="left-content">
    <div>/api</div>
    <div>
      <input type="form" class="left-input" v-model="inputUrl" />
      <button @click="updateContent">request</button>
      <button @click="setUrl">set url</button>
    </div>
    <div>{{ data }}</div>
  </div>
</template>

<style scoped>
.left-content {
  width: 49vw;
}
.left-input {
  width: 30vw;
}
</style>
