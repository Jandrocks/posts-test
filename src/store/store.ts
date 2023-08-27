import { defineStore } from "pinia";
import { Post, Posts } from "../models/posts.models";
import axiosPost from "../utils/axios";

export const usePostsStore = defineStore("posts", {
  state: () => ({
    posts: [] as Posts,
    selectedPost: null as Post | null,
    searchTerm: "",
    currentPage: 1,
    pageSize: 10,
  }),

  getters: {
    filteredPosts(state) {
      const searchResults = state.searchTerm
        ? state.posts.filter((post) =>
            post.title.toLowerCase().includes(state.searchTerm.toLowerCase())
          )
        : state.posts;

      const startIndex = (state.currentPage - 1) * state.pageSize;
      return searchResults.slice(startIndex, startIndex + state.pageSize);
    },
  },

  actions: {
    async fetchPosts() {
      try {
        const { data } = await axiosPost.get("/posts");
        this.posts = data;
      } catch (error) {
        console.log(error);
      }
    },
    setSelectedPost(post: Post) {
      this.selectedPost = post;
    },
    clearSelectedPost() {
      this.selectedPost = null;
    },
    setSearchTerm(term: string) {
      // Nueva función de acción
      this.searchTerm = term;
    },

    nextPage() {
      // Incrementa la página actual
      this.currentPage++;

      // Opcional: Si quieres que no exceda el total de páginas
      const totalPages = Math.ceil(this.posts.length / this.pageSize);
      if (this.currentPage > totalPages) {
        this.currentPage = totalPages;
      }
    },
    previousPage() {
      this.currentPage = Math.max(1, this.currentPage - 1);

      if (this.currentPage < 1) {
        this.currentPage = 1;
      }
    },
  },
});
