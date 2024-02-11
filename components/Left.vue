<script setup lang="ts">
import { ref } from "vue";
const res = ref({ data: "not yet" });
// useFetch("/api/getBoaredapi");
</script>

<template>
  <div class="left-content">
    <div>/api</div>
    <div>{{ res }}</div>
    <div>aaaa</div>
  </div>
</template>

<style scoped>
.left-content {
  width: 49vw;
}
</style>
