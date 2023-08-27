<script setup lang="ts">
import { usePostsStore } from "../store/store";
const { nextPage, previousPage } = usePostsStore();
const postsStore = usePostsStore();
</script>

<template>
    <div class="mt-4 mb-8 flex justify-center items-center">
        <button @click="previousPage" :disabled="postsStore.currentPage === 1"
            class="border border-sky-700 bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 sm:px-6 sm:py-3">
            Anterior
        </button>
        <span class="mx-2 sm:mx-4 text-lg sm:text-xl bg-gray-800 text-white rounded-md px-3 py-2 sm:px-4 sm:py-3">
            {{ postsStore.currentPage }}
        </span>
        <button @click="nextPage"
            class="border border-sky-700 bg-gray-800 text-white rounded-md px-4 py-2 hover:bg-gray-700 sm:px-6 sm:py-3">
            Siguiente
        </button>
    </div>
</template>
