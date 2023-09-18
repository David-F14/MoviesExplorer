<script setup>
defineProps(["title", "date", "poster", "voteAverage", "overview", "trailer"]);
</script>

<template>
  <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">    
    <div class="bg-white rounded-lg shadow-md overflow-hidden">
      <img
        class="h-400 w-full object-cover"
        :src="poster"
        alt="Placeholder Image"
      />
    </div>
    
    <div class="sm:col-span-2 mx-6">
      <h1 class="font-bold text-2xl mb-5">{{ title }}</h1>
      <h3 class="font-semibold text-lg mb-5">Release Date: {{ date }}</h3>
      <p class="text-gray-500 text-md mb-8">
        {{ overview }}
      </p>

      <p class="text-gray-500 text-md">Vote : {{ voteAverage }} / 10</p>

      <div class="mt-6">
        <NuxtLink
          :to="`https://www.youtube.com/watch?v=${trailer}`"
          target="_blank"
          class="bg-red-500 hover:bg-red-500 text-white font-medium py-2 px-4 rounded"
        >
          Watch Trailer
        </NuxtLink>
      </div>
    </div>
  </div>
</template>