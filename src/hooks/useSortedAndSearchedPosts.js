import { ref, computed } from "vue";

export default function useSortedPosts(sortedPosts) {
  const search = ref("");
  const sortedAndSearchedPosts = computed(() => {
    return sortedPosts.value.filter((post) =>
      post.title.toLowerCase().includes(search.value.toLowerCase())
    );
  });

  return {
    search,
    sortedAndSearchedPosts,
  };
}
