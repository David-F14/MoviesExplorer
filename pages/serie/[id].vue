<script setup>
import SerieDetail from '../../components/SerieDetail.vue';
definePageMeta({
    layout:'custom'
});

const TMDB_BASE_IMAGE_URL = "https://image.tmdb.org/t/p/w300"; 

const route = useRoute();
const {data : serie, error} = await useFetch(`/api/movies/${route.params.id}`);

</script>

<template>
    <div>
        <SerieDetail
            :createdBy="serie.created_by"
            :name="serie.original_title"
            :firstDate="serie.release_date"
            :nbEpisodes="serie.number_of_episodes"
            :nbSeasons="serie.number_of_seasons"
            :poster="TMDB_BASE_IMAGE_URL + serie.poster_path"
            :voteAvg="serie.vote_average"
            :voteCount="serie.vote_count"
            :overview="serie.overview"
            :genres="serie.genres"
        />
    </div>
</template>

<style lang="css" scoped></style>
