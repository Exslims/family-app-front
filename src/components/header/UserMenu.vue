<template>
  <n-dropdown
    :options="options"
    placement="bottom-end"
    size="medium"
    trigger="hover"
    @select="handleSelect">
    <n-avatar class="bg-blue-200">
      {{ userLabel }}
    </n-avatar>
  </n-dropdown>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import { useAuthStore } from "../../stores/auth-store";

const authStore = useAuthStore();

const userLabel = computed(() => {
  return authStore.userName ? authStore.userName[0] : "?";
});

const options = computed(() => {
  return !authStore.isUserAuthenticated ? [
    {
      label: "Login as Exslims",
      key: "login"
    }
  ] : [
    {
      label: "Logout",
      key: "logout"
    }
  ];
});

const handleSelect = (key: string) => {
  switch (key) {
    case "login": {
      authStore.login();
      break;
    }
    case "logout": {
      authStore.logout();
      break;
    }
  }
};
</script>
