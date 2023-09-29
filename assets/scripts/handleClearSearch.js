import Post from "../../posts/index.js";
import { renderAllPosts } from "./handleListPostsInBody.js";

const postController = Post.getInstance();
const clearSearchBtn = document.getElementById("clear-search");

function handleShowClearButton() {
  postController.subscribe("searched", (params) => {
    const { title, date } = params;
    if (title || date) {
      clearSearchBtn.style.display = "flex";
    }
  });
}

function handleClearButton() {
  clearSearchBtn.addEventListener("click", (_) => {
    renderAllPosts();
    clearSearchBtn.style.display = "none";
  });
}

function handleClearSearch() {
  handleShowClearButton();
  handleClearButton();
}

export default handleClearSearch;
