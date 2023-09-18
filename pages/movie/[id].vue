<script setup>
import MovieDetail from '../../components/MovieDetail.vue';
definePageMeta({
    layout:'custom'
});

const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300"; 

const route = useRoute();

const {data : movie, error} = await useFetch(`/api/movies/${route.params.id}`);
console.log('movie', movie);

</script>

<template>
    <div>
        <MovieDetail             
            :title="movie.title"
            :date="movie.release_date"
            :poster="TMDB_BASE_IMAGE_URL + movie.poster_path"
            :revenue="movie.revenue"
            :overview="movie.overview"
        />
    </div>
</template>

<style lang="css" scoped></style>
