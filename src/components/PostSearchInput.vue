<template>
    <input v-model="searchTerm" @input="updateSearchTerm"
        class="block mx-auto mb-4 p-2 border border-sky-300 rounded w-full md:w-1/2 lg:w-1/3"
        placeholder=" 🔎 Buscar por título..." />
</template>
  
<script setup lang="ts">
import { ref } from "vue";
import { usePostsStore } from "../store/store";

const postsStore = usePostsStore();
const searchTerm = ref("");

const updateSearchTerm = () => {
    postsStore.setSearchTerm(searchTerm.value);
};
</script>