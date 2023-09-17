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

// fetch movies
const runtimeConfig = useRuntimeConfig();

const {data:movies, error} = await axios.get('https://api.themoviedb.org/3/movie/now_playing', {
        params: {
          api_key: runtimeConfig.app.TMDB_API_KEY,
          language: 'fr-FR', // Langue des données (vous pouvez la modifier)
        }
      });
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
                    :poster="runtimeConfig.app.TMDB_BASE_IMAGE_URL + movie.poster_path"
                />
            </div>
        </div>
    </div>
</template>
