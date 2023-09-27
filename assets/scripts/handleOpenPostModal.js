import {
  hideErrorMessage,
  updatePostModalDisplay,
} from "./handlePostModal";

export function handleOpenPostModal() {
  const openPostModalBtn = document.getElementById("open-post-modal");

  openPostModalBtn.addEventListener("click", () => {
    updatePostModalDisplay("flex");
    hideErrorMessage();
  });
}
