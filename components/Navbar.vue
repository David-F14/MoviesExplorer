<script>
export default {
    data() {
        return {
            isOpen: false,
        };
    },
    methods: {},
};
</script>

<template>
    <div>
        <nav class="bg-gray-800">
            <div class="nav-links mx-auto">
                <div class="flex justify-between h-16">
                    <div class="flex space-x-12 items-center">
                        <NuxtLink to="/" class="text-white hover:text-red-500"> Movies </NuxtLink>
                        <NuxtLink to="/series" class="text-white hover:text-red-500"> Series </NuxtLink>

                        <div class="relative ml-4">
                            <button @click="isOpen = !isOpen" class="text-white hover:text-red-500 focus:outline-none">
                                Genres
                                <svg
                                    class="w-4 h-4 inline-block ml-1"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div
                                v-if="isOpen"
                                @click.away="isOpen = false"
                                class="absolute mt-2 w-40 bg-white border border-gray-300 rounded-lg shadow-lg">
                                <ul class="py-2">
                                    <li>
                                        <NuxtLink to="/genre/action" class="block px-4 py-2 hover:bg-gray-200"> Action </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink to="/genre/aventure" class="block px-4 py-2 hover:bg-gray-200"> Aventure </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <NuxtLink to="/acteurs" class="text-white hover:text-red-500"> Actors </NuxtLink>
                    </div>
                    
                    <div class="flex items-center space-x-2">                        
                        <span class="text-white"
                            >FR<svg
                                class="w-4 h-4 inline-block ml-1"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                            </svg>
                        </span>
                    </div>
                </div>
            </div>
        </nav>
    </div>
</template>

<style scoped>
.nav-links {
  max-width: 93rem;
}

</style>
