<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { usePostsStore } from "./store/store";
import PostHeader from "./components/PostHeader.vue";
import PostList from "./components/PostList.vue";

const { nextPage, previousPage } = usePostsStore();

const postsStore = usePostsStore();

const searchTerm = ref("");

const updateSearchTerm = () => {
  postsStore.setSearchTerm(searchTerm.value);
};

const fetchPosts = () => {
  postsStore.fetchPosts();
};

onMounted(() => {
  fetchPosts();
});

const closeModal = () => {
  postsStore.clearSelectedPost();
};
</script>

<template>
  <PostHeader />
  <div class="container max-w-screen-lg mx-auto px-6">
    <input
      v-model="searchTerm"
      @input="updateSearchTerm"
      class="block mx-auto mb-4 p-2 border border-sky-300 rounded w-full md:w-1/2 lg:w-1/3"
      placeholder="Buscar por título..."
    />
    <PostList :posts="postsStore.filteredPosts" />
    <!-- Usa posts filtrados aquí -->

    <div class="mt-4 flex justify-center">
      <button @click="previousPage" :disabled="postsStore.currentPage === 1">
        Anterior
      </button>
      <span class="mx-2">{{ postsStore.currentPage }}</span>
      <button @click="nextPage">Siguiente</button>
    </div>

    <div
      v-if="postsStore.selectedPost"
      class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
    >
      <div class="bg-black p-8 rounded">
        <h3>{{ postsStore.selectedPost.title }}</h3>
        <p>{{ postsStore.selectedPost.body }}</p>
        <button @click="closeModal">Cerrar</button>
      </div>
    </div>
  </div>
</template>
