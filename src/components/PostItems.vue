<script setup lang="ts">
import { Post } from "../models/posts.models";
import { usePostsStore } from "../store/store";

interface Props {
  posts: Post;
}
const props = defineProps<Props>();

const getFirstLine = (text: string): string => {
  const firstLine = text.split("\n")[0];
  return firstLine;
};

const postsStore = usePostsStore();

const showModal = () => {
  postsStore.setSelectedPost(props.posts);
};
</script>

<template>
  <h2 class="text-2xl sm:text-lg font-bold mb-4">{{ posts.title }}</h2>
  <p class="text-base sm:text-lg text-gray-500 leading-relaxed mb-4">
    {{ getFirstLine(posts.body) }}...
  </p>
  <button class="border border-sky-700 bg-gray-800 text-white rounded p-3 hover:bg-gray-700 mt-auto" @click="showModal">
    Mostrar detalles
  </button>
</template>
