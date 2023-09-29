import toggleMenu from "./toggleMenu.js";
import handlePostModal from "./handlePostModal.js";
import handlePostSearch from "./handlePostSearch.js";
import handleDeletePost from "./handleDeletePost.js";
import handleClearSearch from "./handleClearSearch.js";
import handleCloseSearchModal from "./handleCloseSearchModal.js";
import handleListPostsInBody from "./handleListPostsInBody.js";

function handleImports() {
  toggleMenu();
  handlePostModal();
  handlePostSearch();
  handleDeletePost();
  handleClearSearch();
  handleCloseSearchModal();
  handleListPostsInBody();
}

export default handleImports();
