import { handleClosePostModal } from "./handleClosePostModal";
import { handleOpenPostModal } from "./handleOpenPostModal";
import { handleSubmitPost } from "./handleSubmitPost";

const postForm = document.getElementById("post-form");
const postModal = document.getElementById("post-modal");
const errorMessages = document.getElementById("errorMessages");

export function updatePostModalDisplay(display) {
  postModal.style.display = display;
}

export function resetPostForm() {
  postForm.reset();
}

export function hideErrorMessage() {
  errorMessages.style.display = "none";
  errorMessages.innerHTML = "";
}

function handlePostModal() {
  handleOpenPostModal();
  handleClosePostModal();
  handleSubmitPost();
}

export default handlePostModal();
