<template>
  <div>
    <h1>Posts page</h1>
    <my-input v-model="search" placeholder="Search..."></my-input>
    <div class="app__btns">
      <my-button @click="showDialog">Create Post</my-button>
      <my-select v-model="selectedSort" :options="sortOptions"></my-select>
    </div>
    <my-dialog v-model:show="is_visible">
      <post-form @create="createPost"></post-form>
    </my-dialog>
    <post-list
      v-if="!loading"
      :posts="sortedAndSearchedPosts"
      @remove="removePost"
    ></post-list>
    <div v-else class="loading">Loading...</div>
    <!-- <div v-intersection="loadMorePosts" class="observer"></div> -->
  </div>
</template>
<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import { usePosts } from "@/hooks/usePosts";
import useSortedPosts from "@/hooks/useSortedPosts";
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      is_visible: false,
      sortOptions: [
        { value: "title", name: "By title" },
        { value: "body", name: "By content" },
      ],
    };
  },
  methods: {
    createPost(post) {
      this.posts.push(post);
      this.is_visible = false;
    },
    removePost(post) {
      this.posts = this.posts.filter((p) => p.id !== post.id);
    },
    showDialog() {
      this.is_visible = true;
    },
  },
  setup(props) {
    const { posts, loading, totalPages } = usePosts(10);
    const { sortedPosts, selectedSort } = useSortedPosts(posts);
    const { search, sortedAndSearchedPosts } =
      useSortedAndSearchedPosts(sortedPosts);
    return {
      posts,
      loading,
      totalPages,
      sortedPosts,
      selectedSort,
      search,
      sortedAndSearchedPosts,
    };
  },
};
</script>
<style>
.app__btns {
  display: flex;
  justify-content: space-between;
  margin: 15px 0;
}
.page__wrapper {
  display: flex;
  margin-top: 15px;
}
.page {
  border: 1px solid rgb(140, 139, 139);
  padding: 10px;
  cursor: pointer;
}
.current-page {
  border: 3px solid teal;
}
/* .observer {
  height: 30px;
  background-color: greenyellow;
} */
</style>
