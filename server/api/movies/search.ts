export default defineEventHandler(async (event) => {
    const {TMDB_API_KEY} = useRuntimeConfig();
    const inputSearch = event?.context?.params?.inputSearch;

    try {
        return await $fetch(`https://api.themoviedb.org/3/movie/${inputSearch}?api_key=${TMDB_API_KEY}`);
    } catch (error){
        console.error(error);
        return null;
    }
  })