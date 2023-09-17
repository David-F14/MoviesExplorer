<script setup>
import MovieDetail from '../../components/MovieDetail.vue';
definePageMeta({
    layout:'custom'
});

const movieid = ref(123);
const title = ref("batman");
const date = ref("20-01-2023");
const poster = ref("https://image.tmdb.org/t/p/w600_and_h900_bestv2/74xTEgt7R36Fpooo50r9T25onhq.jpg");
const revenue = ref(156156);
const overview = ref ("testsssdsdsdsd");
</script>

<template>
    <div>
        <MovieDetail 
            :movieid="movieid"
            :title="title"
            :date="date"
            :poster="poster"
            :revenue="revenue"
            :overview="overview"
        />
    </div>
</template>

<style lang="css" scoped></style>
