<template>
  <div class="post">
    <div>
      <div><strong>Name: </strong>{{ capitalized(post.title) }}</div>
      <div><strong>About: </strong>{{ capitalized(post.body) }}</div>
      <div>Id: {{ post.id }}</div>
    </div>
    <div class="post__btns">
      <my-button @click="$router.push(`/posts/${post.id}`)">Details</my-button>
      <my-button @click="$emit('remove', post)">Delete</my-button>
    </div>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    post: {
      type: Object,
      required: true,
    },
  },
  methods: {
    capitalized(name) {
      const capitalizedFirst = name[0].toUpperCase();
      const rest = name.slice(1);
      return capitalizedFirst + rest;
    },
  },
};
</script>
<style scoped>
.post {
  padding: 15px;
  border: 3px solid teal;
  margin-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.post__btns {
  display: flex;
}
</style>
