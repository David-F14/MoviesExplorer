<script setup>
const searchInput = ref("");
defineProps(["searchError"]);

</script>

<template>
    <section class="search-section bg-gray-800">
        <div class="container mx-auto md:px-40 px-5">
            <div class="flex">
                <input
                    class="border border-red-400 py-2 px-4 w-full rounded-l-full focus:outline-none focus:ring-2 focus:ring-red-400"
                    type="text"
                    placeholder="Search..."
                    v-model.lazy="searchInput"
                    @keyup.enter="$emit('searchElement', searchInput)" />
                <button
                    ref="searchButton"
                    class="bg-red-500 hover:bg-red-700 text-white py-2 px-4 rounded-r-full"
                    type="submit"
                    @click="$emit('searchElement', searchInput)">
                    Search
                </button>
            </div>
            <!-- <span v-if="searchError" class="text-red-700 px-4 py-3" role="alert"> This field is required </span> -->
        </div>
    </section>
</template>

<style scoped>
.search-section {
    padding-top: 1rem;
    padding-bottom: 0.5rem;
}
</style>
