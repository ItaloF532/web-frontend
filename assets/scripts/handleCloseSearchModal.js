import { resetSearchForm, updateSearchModalDisplay } from "./handlePostSearch";

export function handleCloseSearchModal() {
  const searchModal = document.getElementById("search-modal");
  const closeSearchModalBtn = document.getElementById("close-search-modal");

  closeSearchModalBtn.addEventListener("click", () => {
    updateSearchModalDisplay("none");
    resetSearchForm();
    // hideErrorMessage();
  });

  window.addEventListener("click", (e) => {
    if (e.target === searchModal) {
      updateSearchModalDisplay("none");
      resetSearchForm();
      // hideErrorMessage();
    }
  });
}

export default handleCloseSearchModal();
