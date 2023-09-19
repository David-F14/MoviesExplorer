<script setup>
import MovieDetail from '../../components/MovieDetail.vue';
definePageMeta({
    layout:'custom'
});

const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300"; 

const route = useRoute();

// Movie Detail
const {data : movie, error} = await useFetch(`/api/movies/${route.params.id}`);

// Trailer
const {data : video} = await useFetch(`/api/movies/trailer/${route.params.id}`);
const allvideo = toRaw(video.value.results);
const trailer = computed(() => {
    let trailer = [];
    for (let i = 0; i < allvideo.length; i++){
        if (allvideo[i].type === "Trailer"){
            trailer.push(allvideo[i]);
        }
    }
    return trailer[0].key;
})


</script>

<template>
    <div>
        <MovieDetail             
            :title="movie.title"
            :date="movie.release_date"
            :poster="TMDB_BASE_IMAGE_URL + movie.poster_path"
            :voteAvg="movie.vote_average"
            :voteCount="movie.vote_count"
            :overview="movie.overview"
            :trailer="trailer"
            :genres="movie.genres"
        />
    </div>
</template>

<style lang="css" scoped></style>
