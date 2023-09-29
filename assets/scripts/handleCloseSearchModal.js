import {
  hideSearchErrorMessage,
  resetSearchForm,
  updateSearchModalDisplay,
} from "./handlePostSearch";

export function handleCloseSearchModal() {
  const searchModal = document.getElementById("search-modal");
  const closeSearchModalBtn = document.getElementById("close-search-modal");

  closeSearchModalBtn.addEventListener("click", () => {
    updateSearchModalDisplay("none");
    resetSearchForm();
    hideSearchErrorMessage();
  });

  window.addEventListener("click", (e) => {
    if (e.target === searchModal) {
      updateSearchModalDisplay("none");
      resetSearchForm();
      hideSearchErrorMessage();
    }
  });
}

export default handleCloseSearchModal();
