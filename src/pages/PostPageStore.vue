<template>
  <div>
    <h1>Posts page</h1>
    <my-input
      :model-value="search"
      @update:model-value="setSearch"
      placeholder="Search..."
    ></my-input>
    <div class="app__btns">
      <my-button @click="showDialog">Create Post</my-button>
      <my-select
        :model-value="selectedSort"
        @update:model-value="setSelectedSort"
        :options="sortOptions"
      ></my-select>
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
    <div v-intersection="loadMorePosts" class="observer"></div>
    <!-- <div ref="observer" class="observer"></div> -->
  </div>
</template>
<script>
import PostList from "@/components/PostList.vue";
import PostForm from "@/components/PostForm.vue";
import { mapState, mapGetters, mapActions, mapMutations } from "vuex";

export default {
  components: {
    PostList,
    PostForm,
  },
  data() {
    return {
      is_visible: false,
    };
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      loading: (state) => state.post.loading,
      selectedSort: (state) => state.post.selectedSort,
      sortOptions: (state) => state.post.sortOptions,
      search: (state) => state.post.search,
      page: (state) => state.post.page,
      limit: (state) => state.post.limit,
      totalPages: (state) => state.post.totalPages,
    }),
    ...mapGetters({
      sortedPosts: "post/sortedPosts",
      sortedAndSearchedPosts: "post/sortedAndSearchedPosts",
    }),
  },
  methods: {
    ...mapMutations({
      setPage: "post/setPage",
      setSearch: "post/setSearch",
      setSelectedSort: "post/setSelectedSort",
    }),
    ...mapActions({
      loadMorePosts: "post/loadMorePosts",
      fetchPosts: "post/fetchPosts",
    }),
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
    changePage(pageNumber) {
      this.page = pageNumber;
    },
    mounted() {
      this.fetchPosts();
    },
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
