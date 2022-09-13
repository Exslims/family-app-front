<template>
  <div class="header">
    <div class="flex items-center	container mx-auto">
      <div class="text-lg mr-12">Family App</div>
      <slot name="navbar"></slot>
      <slot name="default"></slot>
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<style scoped>
.header {
  display: flex;
  box-shadow: 0 0 40px 0 rgb(82 63 105 / 10%);
  height: 65px;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  background-color: #fff;
  padding: 0 ;
}
</style>
