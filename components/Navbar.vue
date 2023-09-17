<script setup></script>

<template>
  <div>
    <nav class="bg-gray-800">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="mt-4 sm:ml-6 sm:flex sm:items-center">
            <NuxtLink
              to="/"
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:bg-red-500"
              >Films</NuxtLink
            >
            <NuxtLink
              to="/login"
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:bg-red-500"
              >Genre</NuxtLink
            >

          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped></style>