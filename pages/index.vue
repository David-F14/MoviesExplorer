<script setup>
import axios from 'axios';

const searchError = ref(false);
const searchMovie = (searchInput) => {
    console.log("Search Text:", searchInput);
    searchError.value = searchInput === "";
    if (!searchError.value){
        // search movies
    }    
};

// const {TMDB_BASE_IMAGE_URL} = useRuntimeConfig(); // problème de refresh avec le hotReload
const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300"; 
const {data : movies, error} = await useFetch("/api/movies");

</script>

<template>
    <div>
        <SearchBar @search-movie="searchMovie" :searchError="searchError" />
        <div class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-gray-800">
            <div v-for="movie in movies.results">
                <MovieCard
                    :movieid="movie.id"
                    :title="movie.title"
                    :date="movie.release_date"
                    :poster="TMDB_BASE_IMAGE_URL + movie.poster_path"
                />
            </div>
        </div>
    </div>
</template>
