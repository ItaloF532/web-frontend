// function handleSearch() {
//   console.log('handle on search');
//   let newPostList = [];
//   let generatedHTML = "";
//   postList.innerHTML = null;

import Post from "../../posts";
import { renderAllPosts } from "./handleListPostsInBody";
import { hideErrorMessage } from "./handlePostModal";

//   if (search?.trim != "") {
//     newPostList = postController.searchPost(search);

//     newPostList.array.forEach((post, index) => {
//       generatedHTML += `
//         <div id="post-${index}" class="post">
//           <h2> ${post?.title ?? "Error on get title"} </h2>
//           <span> ${post?.date ?? "Error o get date"} </span>
//           <p> ${post?.desc ?? "Error on get description"} </p>
//         </div>
//       `;
//     });
//   }
// }
const searchForm = document.getElementById("search-form");
const searchModal = document.getElementById("search-modal");
const postController = Post.getInstance();
const searchDateInput = document.getElementById("search-date");
const searchTitleInput = document.getElementById("search-title");
const searchErrorMessage = document.getElementById("searchErrorMessage");

export function updateSearchModalDisplay(display) {
  searchModal.style.display = display;
}

export function resetSearchForm() {
  searchForm.reset();
}

export function hideSearchErrorMessage() {
  searchErrorMessage.style.display = 'none';
  searchErrorMessage.innerHTML = "";
}

export function handleOpenSearchModal() {
  const searchPostModalBtn = document.getElementById("open-search-modal");

  searchPostModalBtn.addEventListener("click", () => {
    updateSearchModalDisplay("flex");
    hideSearchErrorMessage();
  });
}

function onPostSearch() {
  searchForm.addEventListener("submit", (e) => {
    const date = searchDateInput.value;
    const title = searchTitleInput.value;

    e.preventDefault();
    hideSearchErrorMessage();

    const posts = postController.searchPost(title, date);

    if (typeof posts === "string") {
      searchErrorMessage.style.display = "block";
      const errorElement = document.createElement("p");
      errorElement.textContent = posts;
      searchErrorMessage.appendChild(errorElement);
    } else {
      updateSearchModalDisplay("none");
      renderAllPosts(posts ?? []);
      resetSearchForm();
    }
  });
}

function handlePostSearch() {
  onPostSearch();
  handleOpenSearchModal();
}

export default handlePostSearch();
