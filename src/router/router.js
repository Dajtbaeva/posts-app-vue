import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import PostItemPage from "@/pages/PostItemPage";

const routes = [
  { path: "/", component: Main },
  { path: "/posts", component: PostPage },
  { path: "/posts/:id", component: PostItemPage },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
// export default router;
