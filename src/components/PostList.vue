<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
    <div
      v-for="post in posts"
      class="border border-sky-300 rounded p-3 flex flex-col justify-between h-72 transform transition-transform duration-200 hover:-translate-y-2"
    >
      <PostItems :posts="post" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { Post } from "../models/posts.models"
import PostItems from "./PostItems.vue"

interface Props {
  posts: Post[]
}

defineProps<Props>()
</script>
