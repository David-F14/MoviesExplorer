<script setup>
    defineProps(["id", "title", "date", "poster", "type"]);
</script>

<template>
    <div class="bg-black rounded-lg shadow-md overflow-hidden m-4 px-2">
        <div class="p-1 py-4">
            <h3 v-if="title" class="font-semibold text-lg mb-2 text-center text-white">{{ title }}</h3>
            <div class="overflow-hidden mb-4">
                <img v-if="poster" class="h-400 w-300 object-cover" 
                :src="poster" 
                alt="Placeholder Image" /> 
            </div>
            <p class="text-gray-500 text-sm mb-2 px-2">Release Date: {{ date }}</p>
            <div class="mt-4 p-2 text-right">
                <NuxtLink :to="`${type}/${id}`" class="bg-red-500 hover:bg-red-700 text-white font-medium py-2 px-4 rounded"
                    >See more</NuxtLink
                >
            </div>
        </div>
    </div>
</template>

<style scoped>
.h-400 {
    height: 400px;
}
.w-300 {
    width: 300px;
}
</style>
