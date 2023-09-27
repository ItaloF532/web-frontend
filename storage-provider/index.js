class StorageProvider {
  _storage = sessionStorage;

  save(key, data) {
    this._storage.setItem(key, JSON.stringify(data));
  }

  delete(key) {
    this._storage.removeItem(key);
  }
  
  recover(key) {
    return this._storage.getItem(key);
  }
}

export default StorageProvider;