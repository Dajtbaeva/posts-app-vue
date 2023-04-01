import { createRouter, createWebHashHistory } from "vue-router";
import Main from "@/pages/Main";
import PostPage from "@/pages/PostPage";
import PostItemPage from "@/pages/PostItemPage";
import PostPageStore from "@/pages/PostPageStore";
import PostPageCompositionApi from "@/pages/PostPageCompositionApi";

const routes = [
  { path: "/", component: Main },
  { path: "/posts", component: PostPage },
  { path: "/posts/:id", component: PostItemPage },
  { path: "/store", component: PostPageStore },
  { path: "/composition", component: PostPageCompositionApi },
];

export const router = createRouter({
  routes,
  history: createWebHashHistory(),
});
// export default router;
