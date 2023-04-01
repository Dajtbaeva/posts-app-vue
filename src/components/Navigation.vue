<template>
  <div class="nav">
    <div @click="$router.push('/')" style="cursor: pointer">Posts App</div>
    <div class="nav__btns">
      <my-button
        style="margin-left: 20px; cursor: pointer"
        @click="$router.push('/posts')"
        >Posts</my-button
      >
      <my-button
        style="margin-left: 20px; cursor: pointer"
        @click="$router.push('/store')"
        >Store</my-button
      >
      <my-button
        style="margin-left: 20px; cursor: pointer"
        @click="$router.push('/composition')"
        >Composition</my-button
      >
    </div>
  </div>
</template>
<script></script>
<style scoped>
.nav {
  height: 50px;
  background-color: lightgray;
  box-shadow: 2px 2px 4px gray;
  display: flex;
  align-items: center;
  padding: 0 15px;
}
.nav__btns {
  margin-left: auto;
}
</style>
