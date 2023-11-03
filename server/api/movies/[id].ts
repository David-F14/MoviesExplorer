export default defineEventHandler(async (event) => {
    const {TMDB_API_KEY} = useRuntimeConfig();
    const movieId = event?.context?.params?.id;

    try {
        return await $fetch(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${TMDB_API_KEY}`, {params: {
            append_to_response: 'credits'
        }});
    } catch (error){
        console.error(error);
        return null;
    }
  })