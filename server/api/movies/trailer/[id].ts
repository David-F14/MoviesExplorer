export default defineEventHandler(async (event) => {
    const {TMDB_API_KEY} = useRuntimeConfig();
    const movieId = event?.context?.params?.id;

    try {        
        return await $fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${TMDB_API_KEY}&language=en-US`);        
    } catch (error){
        console.error(error);
        return null;
    }
  })