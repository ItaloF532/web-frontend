import toggleMenu from "./assets/scripts/toggleMenu.js";
import handlePostModal from "./assets/scripts/handlePostModal.js";
import handlePostSearch from "./assets/scripts/handlePostSearch.js";
import handleDeletePost from "./assets/scripts/handleDeletePost.js";
import handleClearSearch from "./assets/scripts/handleClearSearch.js";
import handleCloseSearchModal from "./assets/scripts/handleCloseSearchModal.js";
import handleListPostsInBody from "./assets/scripts/handleListPostsInBody.js";

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
