<template>
  <div
    v-if="postsStore.selectedPost"
    class="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
  >
    <div class="bg-black p-8 rounded m-4 max-w-full lg:max-w-xl">
      <h3 class="text-2xl sm:text-lg font-bold mb-4">
        {{ postsStore.selectedPost.title }}
      </h3>
      <p class="mb-4">{{ postsStore.selectedPost.body }}</p>
      <div class="text-center sm:text-right">
        <button
          @click="closeModal"
          class="border border-sky-700 bg-gray-800 text-white rounded px-4 py-2 hover:bg-gray-700 mt-auto"
        >
          Cerrar
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { usePostsStore } from "../store/store"
const postsStore = usePostsStore()

const closeModal = () => {
  postsStore.clearSelectedPost()
}
</script>
