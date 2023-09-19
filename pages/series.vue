<script setup>

const series = ref([]);

const searchError = ref(false);
const searchSeries = async (searchInput) => {
    searchError.value = searchInput === "";
    if (!searchError.value){        
        const {data, error} = await useFetch(`/api/series/search?searchInput=${searchInput}`);        
        series.value = data.value;
    } else {
        // à gérer avec le store
        const {data, error} = await useFetch("/api/series");
        series.value = data.value;
    }
};


const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300"; 
const {data, error} = await useFetch("/api/series");
series.value = data.value;

</script>

<template>
    <div>
        <SearchBar @search-elemnt="searchSeries" :searchError="searchError" />
        <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-gray-800">
            <div v-for="serie in series.results">
                <Card
                    :id="serie.id"
                    :title="serie.title"
                    :date="serie.first_air_date"
                    :poster="TMDB_BASE_IMAGE_URL + serie.poster_path"
                    :type="'serie'"
                />
            </div>
        </div>
    </div>
</template>
