<script setup lang="ts">
import { ref } from "vue";
import { onMounted } from "vue";
import { usePostsStore } from "./store/store";
import PostHeader from "./components/PostHeader.vue";
import PostList from "./components/PostList.vue";
import PostModal from "./components/PostModal.vue";
import PostPaginator from "./components/PostsPaginator.vue";

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
</script>

<template>
  <PostHeader />
  <div class="container max-w-screen-lg mx-auto px-6">
    <input v-model="searchTerm" @input="updateSearchTerm"
      class="block mx-auto mb-4 p-2 border border-sky-300 rounded w-full md:w-1/2 lg:w-1/3"
      placeholder=" 🔎 Buscar por título..." />
    <PostList :posts="postsStore.filteredPosts" />
    <PostPaginator />
    <PostModal />
  </div>
</template>
