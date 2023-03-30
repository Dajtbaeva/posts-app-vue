<template>
  <form @submit.prevent>
    <h4>Add post</h4>
    <my-input type="text" v-model="post.title" v-focus placeholder="Enter title" />
    <my-input type="text" v-model="post.body" placeholder="Enter content" />
    <my-button
      style="align-self: flex-end; margin-top: 15px"
      @click="createPost"
      >Add</my-button
    >
  </form>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      post: {
        title: "",
        body: "",
      },
    };
  },
  methods: {
    createPost() {
      this.post.id = Date.now();
      this.$emit("create", this.post);
      this.post = {
        title: "",
        body: "",
      };
    },
  },
};
</script>
<style scoped>
form {
  display: flex;
  flex-direction: column;
}
</style>
