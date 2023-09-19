<template>
  <div class="bg-auto bg-gray-800">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>


<style>
.bg-auto {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; 
  height: 100%;
  z-index: -1;
}
</style>