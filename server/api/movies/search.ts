export default defineEventHandler(async (event) => {
    const { TMDB_API_KEY } = useRuntimeConfig();
    const { searchInput } = getQuery(event);
    try {
        return await $fetch(`https://api.themoviedb.org/3/search/movie?api_key=${TMDB_API_KEY}&query=${searchInput}&page=1&include_adult=false;language=en-US`);
    } catch (error) {
        console.error(error);
        return null;
    }
});
