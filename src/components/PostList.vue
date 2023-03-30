<template>
  <div v-if="posts.length > 0" class="posts">
    <h3>Post list</h3>
    <transition-group name="post-list">
      <post
        v-for="post in posts"
        :post="post"
        key="post.id"
        @remove="$emit('remove', post)"
      ></post>
    </transition-group>
  </div>
  <h2 v-else style="color: red">Post list is empty</h2>
</template>
<script>
import Post from "@/components/Post.vue";
export default {
  components: { Post },
  props: {
    posts: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
.post-list-item {
  display: inline-block;
  margin-right: 10px;
}
.post-list-enter-active,
.post-list-leave-active {
  /* transition: all 1s ease; */
  transition: all 0.4s ease;
}
.post-list-enter-from,
.post-list-leave-to {
  opacity: 0;
  /* transform: translateY(30px); */
  transform: translateX(130px);
}
.post-list-move {
  transition: transform 0.4s ease;
}
</style>
