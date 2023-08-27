<template>
  <PostHeader />
  <div class="container max-w-screen-lg mx-auto px-6">
    <SearchInput />
    <PostList :posts="postsStore.filteredPosts" />
    <PostPaginator />
    <PostModal />
  </div>
</template>

<script setup lang="ts">
import { onMounted } from "vue";
import { usePostsStore } from "./store/store";
import PostHeader from "./components/PostHeader.vue";
import PostList from "./components/PostList.vue";
import PostModal from "./components/PostModal.vue";
import PostPaginator from "./components/PostsPaginator.vue";
import SearchInput from "./components/PostSearchInput.vue";

const postsStore = usePostsStore();

const fetchPosts = () => {
  postsStore.fetchPosts();
};
onMounted(() => {
  fetchPosts();
});
</script>


