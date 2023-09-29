import { POSTS_KEY } from "../constants";
import StorageProvider from "../storage-provider";

class Post {
  instance;
  searchedTitle = "";
  searchedDate = "";
  _events = {};
  _storage = new StorageProvider();

  static getInstance() {
    if (!this.instance) this.instance = new Post();
    return this.instance;
  }

  _validateCreatePost(title, desc) {
    if (title.trim() === "") return "Title is required!";
    if (title.length < 3) return "Title must have 3 or more characters.";
    if (desc.trim() === "") return "Description is required!";
    if (desc.length < 5) {
      return "Description must have 5 or more characters.";
    }

    return null;
  }

  getPosts() {
    const postsJson = this._storage.recover(POSTS_KEY);
    const posts = JSON.parse(postsJson);
    if (typeof posts === "object") return posts;
    return JSON.parse(posts ?? "[]") ?? [];
  }

  _savePost(title, desc) {
    const posts = this.getPosts() ?? [];

    const newPost = {
      index: posts.length - 1,
      title,
      desc,
      date: new Date().toLocaleDateString("en-US"),
    };

    posts.push(newPost);

    this._storage.save(POSTS_KEY, JSON.stringify(posts));
  }

  createPost(title, desc) {
    const error = this._validateCreatePost(title, desc);
    if (error) return error;

    this._savePost(title, desc);
    this.publish("created-post");
  }

  deletePost(index) {
    const posts = this.getPosts();
    posts.splice(index, 1);
    this._storage.save(POSTS_KEY, posts);
    this.publish("deleted-post", index);
  }

  searchPost(title, date) {
    this.searchedDate = date;
    this.searchedTitle = title;

    return this.getPosts().filter((post) => {
      if (date) {
        return (
          post.title === title && post.date === date.toLocaleDateString("en-US")
        );
      }

      return post.title === title;
    });
  }

  subscribe(event, callback) {
    if (!this._events[event]) this._events[event] = [];
    this._events[event].push(callback);
  }

  publish(event, data) {
    const shouldPublish = this._events?.[event];
    if (shouldPublish) {
      this._events[event].forEach((callback) => {
        callback(data);
      });
    }
  }
}

export default Post;
