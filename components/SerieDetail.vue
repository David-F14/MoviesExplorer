<script setup>
const props = defineProps([
    "createdBy",
    "firstDate",
    "poster",
    "voteAvg",
    "voteCount",
    "overview",
    "name",
    "genres",
    "nbEpisodes",
    "nbSeasons",
]);

const genresAsString = props.genres?.map((genre) => genre.name).join(", ");
</script>

<template>
    <div class="bg-black p-2 pb-10">
        <div class="container mx-auto mt-5">
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                <!-- En-tête prenant toute la largeur -->
                <div class="col-span-full">
                    <h2 class="title text-4xl text-center text-white font-semibold mb-4">{{ name }}</h2>
                </div>
            </div>

            <div class="grid sm:grid-cols-3 gap-7 justify-items-center m-10">
                <div class="bg-white rounded-lg shadow-md overflow-hidden">
                    <img class="h-400 w-full object-cover" :src="poster" alt="Placeholder Image" />
                </div>

                <div class="sm:col-span-2 mx-6">
                    <h3 class="font-semibold text-lg text-gray-400 mb-5">{{ firstDate }}</h3>
                    <p class="text-gray-400 text-lg py-3">{{ genresAsString }}</p>
                    <p class="text-gray-400 text-md py-3">
                        {{ overview }}
                    </p>

                    <p class="text-gray-400 text-md py-3">Note : {{ voteAvg }} / 10 (Total vote : {{ voteCount }})</p>
                    <p class="text-gray-400 text-md py-3">Numbers of Seasons : {{ nbSeasons }} & Numbers of Episodes {{ nbEpisodes }}</p>
                    <!-- <p class="text-gray-400 text-md py-3">Created By : {{ createdBy?.name }}</p> -->
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.title {
    display: inline-block;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    border-top: 1px solid rgb(239 68 68);
    border-bottom: 1px solid rgb(239 68 68);
}
</style>
