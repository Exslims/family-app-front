<template>
  <div class="flex flex-col flex-1 min-h-screen container mx-auto">
    <TheHeader>
      <Navigation #navbar></Navigation>
    </TheHeader>
    <div class="mt-65px">
      <slot/>
    </div>
  </div>
</template>
<script>
import TheHeader from "../components/TheHeader";
import Navigation from "../components/page/Navigation";
export default {
  components: { Navigation, TheHeader }
};
</script>
