<template>
  Auth View
  <n-button v-if="!isUserAuthenticated" :type="'primary'" @click="authStore.login()">
    Login
  </n-button>
</template>

<script lang="ts" setup>
import { useAuthStore } from "../../stores/auth-store";
import { storeToRefs } from "pinia";
import { watch } from "vue";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const router = useRouter();
const { isUserAuthenticated } = storeToRefs(authStore);

watch(isUserAuthenticated, (value) => {
  if (value) {
    router.push({
      name: "dashboard"
    });
  }
});

</script>
