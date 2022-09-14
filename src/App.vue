<script lang="ts" setup>
import { RouterView } from "vue-router";
import ThePageHeader from "./components/ThePageHeader.vue";</script>

<template>
  <the-page-header></the-page-header>
  <div class="main">
    <n-button type="primary">
      Primary
    </n-button>
    <RouterView />
  </div>
</template>

<style scoped>
.main {
  margin-top: 65px;
}
</style>
