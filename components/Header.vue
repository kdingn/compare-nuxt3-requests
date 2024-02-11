<script setup lang="ts">
import SvgIcon from "@jamescoyle/vue-icon";
import { mdiGithub } from "@mdi/js";
</script>

<template>
  <div class="header">
    <div>
      <h1 class="header-title">Nuxt3 request compare...</h1>
    </div>
    <a href="https://github.com/kdingn">
      <svg-icon type="mdi" :path="mdiGithub" class="button-icon"></svg-icon>
    </a>
  </div>
  <hr class="hr" size="1" />
</template>

<style scoped>
.header {
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}
.header-title {
  margin: 0 auto;
  margin-left: 0.3rem;
}
.button-icon {
  margin-top: 0.1rem;
  margin-right: 0.1rem;
  color: rgba(200, 198, 191);
  zoom: 1.5;
}
.hr {
  margin: 0 auto;
}
</style>
