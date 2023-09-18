export default defineEventHandler(async () => {
    const {TMDB_API_KEY} = useRuntimeConfig();
    try {
        return await $fetch(`https://api.themoviedb.org/3/movie/now_playing?api_key=${TMDB_API_KEY}`);                
    } catch (error){
        console.error(error);
        return null;
    }
  })