import {
  resetPostForm,
  hideErrorMessage,
  updatePostModalDisplay,
} from "./handlePostModal";

export function handleClosePostModal() {
  const postModal = document.getElementById("post-modal");
  const closePostModalBtn = document.getElementById("close-post-modal");

  closePostModalBtn.addEventListener("click", () => {
    updatePostModalDisplay("none");
    resetPostForm();
    hideErrorMessage();
  });

  window.addEventListener("click", (e) => {
    if (e.target === postModal) {
      updatePostModalDisplay("none");
      resetPostForm();
      hideErrorMessage();
    }
  });
}
