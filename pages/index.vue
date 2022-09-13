<template>
  <div class="flex-1 flex-col">
    Главная
    {{ data }}
    {{ error }}
  </div>
</template>

<script setup>
import { definePageMeta } from "#imports";
import axios from "axios";
import { ref, watch } from "vue";
import { useAxios } from "@vueuse/integrations/useAxios";

definePageMeta({
  layout: "page"
});

const instance = axios.create({
  baseURL: '/api',
})

const {error, data } = useAxios('http://localhost:3001/wallets', instance);
watch(error, (newValue) => {
  console.log(newValue);
})
</script>
