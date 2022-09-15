<template>
  <the-page-header></the-page-header>
  <div class="container mt-16 m-auto pt-6 pb-6">
    <RouterView />
  </div>
</template>

<script lang="ts" setup>
import { RouterView, useRouter } from "vue-router";
import ThePageHeader from "./components/ThePageHeader.vue";
import { useAuthStore } from "./stores/auth-store";
import { storeToRefs } from "pinia";
import { watch } from "vue";

const authStore = useAuthStore();
const router = useRouter();
const { isUserAuthenticated } = storeToRefs(authStore);

watch(isUserAuthenticated, (value) => {
  if (!value) {
    router.push({
      name: "auth"
    });
  }
});

</script>

<style scoped>
.main {
  margin-top: 65px;
}
</style>
